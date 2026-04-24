import Link from 'next/link'
import { MapPin, Phone, Mail, Linkedin, Twitter, ArrowUpRight, Globe } from 'lucide-react'

function YitserLogo() {
  return (
    <div className="flex items-center gap-3">
      <svg width="36" height="36" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="7" fill="#0D1117"/>
        <rect width="32" height="32" rx="7" fill="none" stroke="#00FF87" strokeWidth="1.2"/>
        <defs>
          <linearGradient id="ftlg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00FF87"/>
            <stop offset="100%" stopColor="#0D72FF"/>
          </linearGradient>
        </defs>
        <circle cx="16" cy="16" r="3.5" fill="url(#ftlg)"/>
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
    </div>
  )
}

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
const company = [
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Hizmetler',  href: '/hizmetler' },
  { label: 'Çözümler',   href: '/cozumler' },
  { label: 'Blog',       href: '/blog' },
  { label: 'İletişim',   href: '/iletisim' },
]

export default function Footer() {
  return (
    <footer className="bg-canvas border-t border-border">
      {/* CTA Band */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-3xl text-ink-primary mb-2">Projenizi birlikte planlayalım.</h2>
            <p className="text-lg max-w-xl text-ink-muted">Marka bağımsız, ihtiyaca özel yaklaşımımızla altyapınızı geleceğe taşıyoruz.</p>
          </div>
          <Link href="/iletisim"
            className="flex-shrink-0 flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-black text-lg hover:scale-105 transition-all duration-300"
            style={{ background: '#00FF87', boxShadow: '0 0 30px rgba(0,255,135,0.35)' }}>
            Teknoloji Mimarlarımızla Görüşün <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6"><YitserLogo /></div>
            <p className="text-sm leading-relaxed mb-6 text-ink-subtle">
              Kurumsal BT altyapısında uçtan uca çözümler. Marka bağımsız yaklaşımla güvenilir teknoloji ortağınız.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+908503042268" className="flex items-center gap-2.5 text-ink-muted hover:text-accent transition-colors">
                <Phone size={14} className="text-accent/60 flex-shrink-0" /> 0850 304 22 68
              </a>
              <a href="mailto:info@yitser.com" className="flex items-center gap-2.5 text-ink-muted hover:text-accent transition-colors">
                <Mail size={14} className="text-accent/60 flex-shrink-0" /> info@yitser.com
              </a>
              <span className="flex items-start gap-2.5 text-ink-muted">
                <MapPin size={14} className="text-accent/60 flex-shrink-0 mt-0.5" /> İstanbul, Türkiye
              </span>
            </div>
            <div className="flex items-center gap-3 mt-6">
              {[
                { href: 'https://linkedin.com', Icon: Linkedin },
                { href: 'https://twitter.com',  Icon: Twitter },
                { href: 'https://yitser.com',   Icon: Globe },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center border border-border text-ink-subtle hover:border-accent/40 hover:text-accent transition-all"
                  style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-sm tracking-widest uppercase mb-5 text-ink-primary">Hizmetler</h3>
            <ul className="space-y-3">
              {services.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm flex items-center gap-1.5 text-ink-subtle hover:text-accent transition-colors group">
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-sm tracking-widest uppercase mb-5 text-ink-primary">Şirket</h3>
            <ul className="space-y-3">
              {company.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm flex items-center gap-1.5 text-ink-subtle hover:text-accent transition-colors group">
                    <span className="w-1 h-1 rounded-full bg-accent/40 group-hover:bg-accent transition-colors flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-semibold text-sm tracking-widest uppercase mb-5 text-ink-primary">Teknoloji Bülteni</h3>
            <p className="text-sm mb-5 leading-relaxed text-ink-subtle">Siber güvenlik trendleri ve altyapı ipuçlarını haftalık alın.</p>
            <div className="space-y-3">
              <input type="email" placeholder="e-posta adresiniz"
                className="w-full px-4 py-3 rounded-xl text-sm bg-surface border border-border text-ink-primary placeholder:text-ink-subtle focus:outline-none focus:border-accent transition-all" />
              <button className="w-full py-3 rounded-xl text-sm font-bold text-black transition-all hover:scale-105"
                style={{ background: '#00FF87' }}>
                Abone Ol
              </button>
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-[11px] uppercase tracking-wider mb-3 text-ink-subtle">Standartlar</p>
              <div className="flex flex-wrap gap-2">
                {['ISO 27001', 'KVKK Uyumlu', 'TSE Onaylı', '7/24 NOC'].map((badge) => (
                  <span key={badge} className="px-2.5 py-1 rounded-md text-[10px] font-medium border border-border text-ink-subtle"
                    style={{ background: 'rgba(255,255,255,0.02)' }}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-subtle">
          <span>© {new Date().getFullYear()} Yitser Bilgi Teknolojileri ve Danışmanlık. Tüm hakları saklıdır.</span>
          <span className="flex items-center gap-1"><Globe size={11} /> yitser.com</span>
        </div>
      </div>
    </footer>
  )
}
