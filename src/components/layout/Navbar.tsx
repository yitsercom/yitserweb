'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

const services = [
  { label: 'Ağ & Network Altyapısı',  href: '/hizmetler/ag-altyapisi' },
  { label: 'Siber Güvenlik',           href: '/hizmetler/siber-guvenlik' },
  { label: 'Sunucu & Storage',         href: '/hizmetler/sunucu-storage' },
  { label: 'Cloud & Sanallaştırma',    href: '/hizmetler/cloud-sanallastirma' },
  { label: 'Backup & Veri Koruma',     href: '/hizmetler/backup-veri-koruma' },
  { label: 'Yapısal Kablolama',        href: '/hizmetler/yapisal-kablolama' },
  { label: 'Kamera & Güvenlik',        href: '/hizmetler/kamera-guvenlik' },
  { label: 'IT Destek Hizmetleri',     href: '/hizmetler/it-destek' },
]

function YitserLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <svg width="36" height="36" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="7" fill="#0D1117"/>
        <rect width="32" height="32" rx="7" fill="none" stroke="#00FF87" strokeWidth="1.2"/>
        <defs>
          <linearGradient id="navlg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00FF87"/>
            <stop offset="100%" stopColor="#0D72FF"/>
          </linearGradient>
        </defs>
        <circle cx="16" cy="16" r="3.5" fill="url(#navlg)"/>
        <circle cx="6" cy="6" r="2.2" fill="#00FF87" opacity="0.9"/>
        <circle cx="26" cy="6" r="2.2" fill="#0D72FF" opacity="0.9"/>
        <circle cx="6" cy="26" r="2.2" fill="#0D72FF" opacity="0.55"/>
        <circle cx="26" cy="26" r="2.2" fill="#00FF87" opacity="0.55"/>
        <circle cx="28" cy="16" r="1.8" fill="#00FF87"/>
        <line x1="8" y1="8" x2="12.5" y2="12.5" stroke="#00FF87" strokeWidth="1" opacity="0.55"/>
        <line x1="24" y1="8" x2="19.5" y2="12.5" stroke="#0D72FF" strokeWidth="1" opacity="0.55"/>
        <line x1="26.2" y1="16" x2="19.5" y2="16" stroke="#00FF87" strokeWidth="1" opacity="0.7"/>
        <circle cx="16" cy="16" r="7" fill="none" stroke="#00FF87" strokeWidth="0.5" opacity="0.18"/>
      </svg>
      <div>
        <span className="font-display font-bold text-xl block leading-none" style={{ color: '#F0F4FF' }}>Yitser</span>
        <span className="text-[9px] tracking-[4px] uppercase" style={{ color: '#6B7A99' }}>Teknoloji</span>
      </div>
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(8,12,20,0.95)' : 'rgba(8,12,20,0.7)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid #1A2540' : '1px solid transparent',
      }}>

      {/* Top bar */}
      <div className="border-b hidden lg:block" style={{ borderColor: '#1A2540' }}>
        <div className="max-w-7xl mx-auto px-6 py-1.5 flex items-center justify-between text-xs" style={{ color: '#6B7A99' }}>
          <span>Yitser Bilgi Teknolojileri ve Danışmanlık — Global Teknoloji Çözümleri</span>
          <a href="tel:+908503042268" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Phone size={11} /><span>0850 304 22 68</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <YitserLogo />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors"
              style={{ color: '#A8B4CC' }}>
              Hizmetler <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="rounded-2xl border border-border p-3 w-64 shadow-2xl"
                style={{ background: '#0D1117' }}>
                {services.map(({ label, href }) => (
                  <Link key={href} href={href}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm hover:bg-white/5 hover:text-accent transition-all"
                    style={{ color: '#A8B4CC' }}>
                    <span className="w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {[
            { label: 'Hakkımızda', href: '/hakkimizda' },
            { label: 'Çözümler',   href: '/cozumler' },
            { label: 'Blog',       href: '/blog' },
            { label: 'İletişim',   href: '/iletisim' },
          ].map(({ label, href }) => (
            <Link key={href} href={href}
              className="text-sm font-medium hover:text-accent transition-colors"
              style={{ color: '#A8B4CC' }}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/iletisim"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-black text-sm hover:scale-105 transition-all"
            style={{ background: '#00FF87', boxShadow: '0 0 20px rgba(0,255,135,0.3)' }}>
            Ücretsiz Fizibilite Al →
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: '#F0F4FF' }}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-border" style={{ background: '#0D1117' }}>
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
            <button onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-sm font-medium"
              style={{ color: '#A8B4CC' }}>
              Hizmetler <ChevronDown size={14} className={servicesOpen ? 'rotate-180' : ''} />
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-1">
                {services.map(({ label, href }) => (
                  <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                    className="block px-3 py-2 rounded-xl text-sm" style={{ color: '#6B7A99' }}>
                    {label}
                  </Link>
                ))}
              </div>
            )}
            {[
              { label: 'Hakkımızda', href: '/hakkimizda' },
              { label: 'Çözümler',   href: '/cozumler' },
              { label: 'Blog',       href: '/blog' },
              { label: 'İletişim',   href: '/iletisim' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-sm font-medium" style={{ color: '#A8B4CC' }}>
                {label}
              </Link>
            ))}
            <div className="pt-2">
              <Link href="/iletisim"
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-black text-sm"
                style={{ background: '#00FF87' }}>
                Ücretsiz Fizibilite Al →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
