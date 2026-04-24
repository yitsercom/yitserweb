'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight, Phone } from 'lucide-react'
import { blogPosts } from '../posts'
import type { BlogPost } from '../types'
import { getContent } from '../content/index'

const CATEGORY_MAP: Record<string, { title: string; color: string; icon: string }> = {
  'ag-network':           { title: 'Ağ & Network',          color: '#0D72FF', icon: '🌐' },
  'siber-guvenlik':       { title: 'Siber Güvenlik',         color: '#00FF87', icon: '🛡️' },
  'sunucu-storage':       { title: 'Sunucu & Storage',       color: '#A8B4CC', icon: '🖥️' },
  'cloud-sanallastirma':  { title: 'Cloud & Sanallaştırma',  color: '#57A8FF', icon: '☁️' },
  'microsoft-lisanslama': { title: 'Microsoft & Lisanslama', color: '#FFB347', icon: '🪟' },
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
}

// Basit markdown renderer
function renderMarkdown(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0
  let key = 0

  while (i < lines.length) {
    const line = lines[i]

    // Code block
    if (line.startsWith('```')) {
      const lang = line.slice(3).trim()
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      elements.push(
        <div key={key++} className="my-6 rounded-2xl overflow-hidden border border-border">
          {lang && (
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border" style={{ background: '#0D1117' }}>
              <span className="text-xs font-mono" style={{ color: '#6B7A99' }}>{lang}</span>
              <span className="text-xs px-2 py-0.5 rounded font-semibold" style={{ background: 'rgba(0,255,135,0.1)', color: '#00FF87' }}>{lang}</span>
            </div>
          )}
          <pre className="p-5 overflow-x-auto text-sm leading-relaxed" style={{ background: '#0A0E1A', color: '#A8B4CC', fontFamily: '"Fira Code", "Cascadia Code", monospace' }}>
            <code>{codeLines.join('\n')}</code>
          </pre>
        </div>
      )
      i++
      continue
    }

    // H2
    if (line.startsWith('## ')) {
      elements.push(<h2 key={key++} className="font-display font-bold text-2xl mt-12 mb-4" style={{ color: '#F0F4FF' }}>{line.slice(3)}</h2>)
      i++; continue
    }

    // H3
    if (line.startsWith('### ')) {
      elements.push(<h3 key={key++} className="font-display font-bold text-xl mt-8 mb-3" style={{ color: '#F0F4FF' }}>{line.slice(4)}</h3>)
      i++; continue
    }

    // Horizontal rule
    if (line.startsWith('---')) {
      elements.push(<hr key={key++} className="my-8 border-border" />)
      i++; continue
    }

    // Table
    if (line.startsWith('|')) {
      const tableLines: string[] = []
      while (i < lines.length && lines[i].startsWith('|')) {
        tableLines.push(lines[i])
        i++
      }
      const rows = tableLines.filter(l => !l.match(/^\|[\s\-|]+\|$/))
      elements.push(
        <div key={key++} className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <tbody>
              {rows.map((row, ri) => {
                const cells = row.split('|').filter((_, ci) => ci > 0 && ci < row.split('|').length - 1)
                const isHeader = ri === 0
                return (
                  <tr key={ri} style={{ background: isHeader ? 'rgba(0,255,135,0.06)' : ri % 2 === 0 ? '#0D1117' : '#080C14' }}>
                    {cells.map((cell, ci) => {
                      const Tag = isHeader ? 'th' : 'td'
                      return (
                        <Tag key={ci} className="px-4 py-2.5 border border-border text-left" style={{ color: isHeader ? '#00FF87' : '#A8B4CC', fontWeight: isHeader ? '600' : '400' }}>
                          {cell.trim()}
                        </Tag>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )
      continue
    }

    // Blockquote
    if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={key++} className="my-5 pl-5 border-l-2 italic py-2" style={{ borderColor: '#00FF87', color: '#A8B4CC' }}>
          {line.slice(2)}
        </blockquote>
      )
      i++; continue
    }

    // Unordered list
    if (line.startsWith('- ') || line.startsWith('* ')) {
      const listItems: string[] = []
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
        listItems.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={key++} className="my-4 space-y-1.5 pl-4">
          {listItems.map((item, li) => (
            <li key={li} className="flex items-start gap-2.5 text-sm" style={{ color: '#A8B4CC' }}>
              <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#00FF87' }} />
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong style="color:#F0F4FF">$1</strong>').replace(/`(.*?)`/g, '<code style="background:rgba(0,255,135,0.1);color:#00FF87;padding:1px 5px;border-radius:4px;font-size:0.85em">$1</code>') }} />
            </li>
          ))}
        </ul>
      )
      continue
    }

    // Empty line
    if (line.trim() === '') { i++; continue }

    // Paragraph
    if (line.trim()) {
      const html = line
        .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#F0F4FF">$1</strong>')
        .replace(/`(.*?)`/g, '<code style="background:rgba(0,255,135,0.08);color:#00FF87;padding:2px 6px;border-radius:4px;font-size:0.88em;font-family:monospace">$1</code>')
      elements.push(<p key={key++} className="leading-relaxed my-3.5 text-base" style={{ color: '#A8B4CC' }} dangerouslySetInnerHTML={{ __html: html }} />)
    }
    i++
  }

  return elements
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const cat = CATEGORY_MAP[post.category]
  const related = blogPosts.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 3)

  return (
    <div style={{ background: '#080C14', color: '#F0F4FF' }}>

      {/* KAPAK HERO */}
      <section className="relative overflow-hidden" style={{ minHeight: 500 }}>
        <Image src={post.image} alt={post.title} fill className="object-cover" style={{ filter: 'brightness(0.4)' }} priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(8,12,20,0.3) 0%, rgba(8,12,20,0.85) 70%, rgba(8,12,20,1) 100%)' }} />

        <div className="relative max-w-4xl mx-auto px-6 pt-28 pb-16">
          <nav className="flex items-center gap-1 text-xs mb-6" style={{ color: '#6B7A99' }}>
            <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
            <span className="mx-1">›</span>
            <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
            {cat && <><span className="mx-1">›</span><span style={{ color: cat.color }}>{cat.title}</span></>}
          </nav>

          {cat && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-5 border"
              style={{ color: cat.color, borderColor: cat.color + '40', background: cat.color + '12' }}>
              {cat.icon} {cat.title}
            </span>
          )}

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-4xl lg:text-5xl tracking-tight mb-5 leading-[1.1]"
            style={{ color: '#F0F4FF' }}>
            {post.title}
          </motion.h1>

          <p className="text-lg leading-relaxed mb-6 max-w-2xl" style={{ color: '#A8B4CC' }}>{post.excerpt}</p>

          <div className="flex flex-wrap items-center gap-5 text-sm" style={{ color: '#6B7A99' }}>
            <span className="flex items-center gap-1.5 font-semibold" style={{ color: '#A8B4CC' }}>Yitser Teknoloji</span>
            <span className="flex items-center gap-1.5"><Calendar size={13} />{formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5"><Clock size={13} />{post.readTime} dk okuma</span>
          </div>
        </div>
      </section>

      {/* MAKALE İÇERİĞİ */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm mb-10 hover:text-accent transition-colors" style={{ color: '#6B7A99' }}>
          <ArrowLeft size={14} /> Blog'a Dön
        </Link>

        <div>{renderMarkdown(getContent(post.slug))}</div>

        {/* Etiketler */}
        {post.keywords.length > 0 && (
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center gap-2 flex-wrap">
              <Tag size={14} style={{ color: '#6B7A99' }} />
              {post.keywords.map(kw => (
                <span key={kw} className="px-3 py-1 rounded-lg text-xs border border-border" style={{ background: 'rgba(255,255,255,0.03)', color: '#A8B4CC' }}>{kw}</span>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 p-8 rounded-3xl border" style={{ background: 'rgba(0,255,135,0.04)', borderColor: 'rgba(0,255,135,0.2)' }}>
          <h3 className="font-display font-bold text-xl mb-3" style={{ color: '#F0F4FF' }}>Bu konuda destek almak ister misiniz?</h3>
          <p className="text-sm mb-5" style={{ color: '#A8B4CC' }}>
            Teknoloji mimarlarımız mevcut altyapınızı ücretsiz değerlendiriyor ve size özel çözüm sunuyor.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/iletisim" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-black text-sm hover:scale-105 transition-all" style={{ background: '#00FF87' }}>
              Ücretsiz Fizibilite Al <ArrowRight size={14} />
            </Link>
            <a href="tel:+908503042268" className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold text-sm border border-border hover:border-accent/40 transition-all" style={{ color: '#F0F4FF' }}>
              <Phone size={14} /> 0850 304 22 68
            </a>
          </div>
        </div>
      </article>

      {/* İLGİLİ YAZILAR */}
      {related.length > 0 && (
        <section className="py-16 border-t border-border" style={{ background: '#0D1117' }}>
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display font-bold text-2xl mb-8" style={{ color: '#F0F4FF' }}>İlgili Yazılar</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map(p => {
                const c = CATEGORY_MAP[p.category]
                return (
                  <Link key={p.slug} href={`/blog/${p.slug}`}
                    className="group rounded-2xl overflow-hidden border border-border hover:border-white/20 transition-all hover:-translate-y-1"
                    style={{ background: '#080C14' }}>
                    <div className="relative overflow-hidden" style={{ height: 160 }}>
                      <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" style={{ filter: 'brightness(0.7)' }} />
                    </div>
                    <div className="p-5">
                      {c && <span className="text-xs font-bold" style={{ color: c.color }}>{c.icon} {c.title}</span>}
                      <h3 className="font-display font-bold text-sm mt-2 mb-1 leading-snug group-hover:text-accent transition-colors" style={{ color: '#F0F4FF' }}>{p.title}</h3>
                      <p className="text-xs" style={{ color: '#6B7A99' }}>{formatDate(p.date)}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
