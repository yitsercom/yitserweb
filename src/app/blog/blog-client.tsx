'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar, Search, BookOpen } from 'lucide-react'
import { blogPosts } from './posts'

const categories = [
  { id: 'ag-network',           title: 'Ağ & Network',          color: '#0D72FF', icon: '🌐' },
  { id: 'siber-guvenlik',       title: 'Siber Güvenlik',         color: '#00FF87', icon: '🛡️' },
  { id: 'sunucu-storage',       title: 'Sunucu & Storage',       color: '#A8B4CC', icon: '🖥️' },
  { id: 'cloud-sanallastirma',  title: 'Cloud & Sanallaştırma',  color: '#57A8FF', icon: '☁️' },
  { id: 'microsoft-lisanslama', title: 'Microsoft & Lisanslama', color: '#FFB347', icon: '🪟' },
]

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
}

function getCat(id: string) { return categories.find(c => c.id === id) }

export default function BlogClient() {
  const [activeCat, setActiveCat] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = blogPosts.filter(p => {
    const catMatch = activeCat === 'all' || p.category === activeCat
    const q = search.toLowerCase()
    return catMatch && (!q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q))
  })

  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <div style={{ background: '#080C14', color: '#F0F4FF', minHeight: '100vh' }}>

      {/* HERO */}
      <section className="relative pt-28 pb-16 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #080C14 0%, #00112A 100%)' }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0,255,135,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,135,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <nav className="flex items-center gap-1 text-xs mb-8" style={{ color: '#3D4A66' }}>
            <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
            <span className="mx-1">›</span><span style={{ color: '#6B7A99' }}>Blog</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-5 px-3 py-1.5 rounded-full border"
              style={{ color: '#00FF87', borderColor: 'rgba(0,255,135,0.25)', background: 'rgba(0,255,135,0.06)' }}>
              <BookOpen size={11} /> Teknoloji Blogu
            </span>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight mb-5 leading-[1.06]">
              Uzman Görüşleri,{' '}
              <span style={{ background: 'linear-gradient(135deg, #00FF87 0%, #0D72FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Teknik Rehberler
              </span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: '#A8B4CC' }}>
              FortiGate, Cisco, VMware, Azure ve daha fazlası — gerçek komutlar, gerçek senaryolar, mühendis bakış açısıyla.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FİLTRE */}
      <div className="sticky top-[64px] z-30 border-b border-border backdrop-blur-xl"
        style={{ background: 'rgba(8,12,20,0.92)' }}>
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="relative mr-1">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#6B7A99' }} />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Ara..."
                className="pl-8 pr-4 py-2 rounded-xl text-sm border border-border focus:outline-none focus:border-accent transition-all w-36"
                style={{ background: 'rgba(255,255,255,0.04)', color: '#F0F4FF' }} />
            </div>
            <button onClick={() => setActiveCat('all')}
              className="px-4 py-1.5 rounded-xl text-sm font-semibold transition-all"
              style={{ background: activeCat === 'all' ? '#00FF87' : 'rgba(255,255,255,0.04)', color: activeCat === 'all' ? '#000' : '#A8B4CC', border: `1px solid ${activeCat === 'all' ? '#00FF87' : '#1A2540'}` }}>
              Tümü ({blogPosts.length})
            </button>
            {categories.map(cat => (
              <button key={cat.id} onClick={() => setActiveCat(cat.id)}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-sm font-semibold transition-all"
                style={{ background: activeCat === cat.id ? cat.color : 'rgba(255,255,255,0.04)', color: activeCat === cat.id ? '#000' : '#A8B4CC', border: `1px solid ${activeCat === cat.id ? cat.color : '#1A2540'}` }}>
                <span className="text-xs">{cat.icon}</span>{cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* YAZI LİSTESİ */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-28">
              <span className="text-5xl mb-5 block">📭</span>
              <p className="text-lg mb-4" style={{ color: '#6B7A99' }}>{search ? `"${search}" için sonuç yok` : 'Bu kategoride yazı yok'}</p>
              <button onClick={() => { setActiveCat('all'); setSearch('') }} className="text-sm underline" style={{ color: '#00FF87' }}>Tümünü göster</button>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div key={activeCat + search} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

                {/* FEATURED */}
                {featured && (
                  <motion.div className="mb-12" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
                    <Link href={`/blog/${featured.slug}`}
                      className="group grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-border hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                      style={{ background: '#0D1117' }}>
                      <div className="relative overflow-hidden" style={{ minHeight: 340 }}>
                        <Image src={featured.image} alt={featured.title} fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          style={{ filter: 'brightness(0.72)' }} />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 60%, rgba(13,17,23,0.85) 100%)' }} />
                        <span className="absolute top-5 left-5 px-3 py-1 rounded-full text-xs font-bold" style={{ background: '#00FF87', color: '#000' }}>⭐ Öne Çıkan</span>
                        {getCat(featured.category) && (
                          <span className="absolute top-5 left-32 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md"
                            style={{ background: 'rgba(8,12,20,0.75)', color: getCat(featured.category)!.color, borderColor: getCat(featured.category)!.color + '40' }}>
                            {getCat(featured.category)!.icon} {getCat(featured.category)!.title}
                          </span>
                        )}
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 text-xs mb-4" style={{ color: '#6B7A99' }}>
                          <span className="flex items-center gap-1"><Calendar size={11} />{formatDate(featured.date)}</span>
                          <span className="flex items-center gap-1"><Clock size={11} />{featured.readTime} dk okuma</span>
                        </div>
                        <h2 className="font-display font-bold text-2xl lg:text-3xl leading-tight mb-4 group-hover:text-accent transition-colors" style={{ color: '#F0F4FF' }}>{featured.title}</h2>
                        <p className="leading-relaxed mb-6" style={{ color: '#A8B4CC' }}>{featured.excerpt}</p>
                        <span className="inline-flex items-center gap-2 text-sm font-bold group-hover:gap-4 transition-all" style={{ color: '#00FF87' }}>
                          Devamını Oku <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                )}

                {/* GRID */}
                {rest.length > 0 && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {rest.map((post, i) => {
                      const cat = getCat(post.category)
                      const color = cat?.color || '#00FF87'
                      return (
                        <motion.article key={post.slug} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                          <Link href={`/blog/${post.slug}`}
                            className="group flex flex-col h-full rounded-3xl overflow-hidden border border-border hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                            style={{ background: '#0D1117' }}>
                            <div className="relative overflow-hidden" style={{ height: 210 }}>
                              <Image src={post.image} alt={post.title} fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                style={{ filter: 'brightness(0.72)' }} />
                              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(13,17,23,0.92) 100%)' }} />
                              {cat && (
                                <span className="absolute top-4 left-4 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border backdrop-blur-md"
                                  style={{ background: 'rgba(8,12,20,0.8)', color, borderColor: color + '40' }}>
                                  {cat.icon} {cat.title}
                                </span>
                              )}
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                              <div className="flex items-center gap-3 text-xs mb-3" style={{ color: '#6B7A99' }}>
                                <span className="flex items-center gap-1"><Calendar size={10} />{formatDate(post.date)}</span>
                                <span className="flex items-center gap-1"><Clock size={10} />{post.readTime} dk</span>
                              </div>
                              <h2 className="font-display font-bold text-[16px] leading-snug mb-3 group-hover:text-accent transition-colors flex-1" style={{ color: '#F0F4FF' }}>{post.title}</h2>
                              <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: '#6B7A99' }}>{post.excerpt}</p>
                              <span className="inline-flex items-center gap-1.5 text-xs font-bold mt-auto group-hover:gap-3 transition-all" style={{ color }}>
                                Devamını Oku <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                              </span>
                            </div>
                          </Link>
                        </motion.article>
                      )
                    })}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* BÜLTEN */}
      <section className="py-16 border-t border-border" style={{ background: '#0D1117' }}>
        <div className="max-w-lg mx-auto px-6 text-center">
          <span className="text-2xl mb-3 block">📬</span>
          <h2 className="font-display font-bold text-2xl mb-2" style={{ color: '#F0F4FF' }}>Teknoloji Bültenine Abone Olun</h2>
          <p className="text-sm mb-6" style={{ color: '#A8B4CC' }}>Yeni teknik makaleler ve siber güvenlik uyarıları haftalık e-posta ile gelsin.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="e-posta adresiniz"
              className="flex-1 px-4 py-3 rounded-xl text-sm border border-border focus:outline-none focus:border-accent transition-all"
              style={{ background: '#080C14', color: '#F0F4FF' }} />
            <button className="px-5 py-3 rounded-xl font-bold text-black text-sm hover:scale-105 transition-all"
              style={{ background: '#00FF87' }}>Abone Ol</button>
          </div>
        </div>
      </section>
    </div>
  )
}
