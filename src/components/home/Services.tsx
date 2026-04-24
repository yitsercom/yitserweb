'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Network, Shield, Server, Cloud, HardDrive, Cable, Camera, Headphones, ArrowRight } from 'lucide-react'

const services = [
  { icon: Network,    title: 'Ağ & Network Altyapısı',  desc: 'Kampüs, veri merkezi ve WAN projelerinde yüksek erişilebilirlik odaklı tasarım.',              href: '/hizmetler/ag-altyapisi',        accent: '#0D72FF' },
  { icon: Shield,     title: 'Siber Güvenlik',           desc: 'Saldırı yüzeyi analizi, SIEM ve SOC hizmetleriyle güvenlik mimarinizi pekiştirin.',            href: '/hizmetler/siber-guvenlik',      accent: '#00FF87' },
  { icon: Server,     title: 'Sunucu & Storage',         desc: 'Fiziksel ve sanallaştırılmış sunucu altyapılarında kurulum, entegrasyon ve lifecycle.',         href: '/hizmetler/sunucu-storage',      accent: '#A8B4CC' },
  { icon: Cloud,      title: 'Cloud & Sanallaştırma',   desc: 'Hibrit ve çoklu bulut mimarilerinde strateji, geçiş ve yönetilen hizmetler.',                   href: '/hizmetler/cloud-sanallastirma', accent: '#57A8FF' },
  { icon: HardDrive,  title: 'Backup & Veri Koruma',    desc: 'Kademeli yedekleme, felaketten kurtarma planlaması ve RTO/RPO hedeflerinize uygun mimari.',      href: '/hizmetler/backup-veri-koruma',  accent: '#39FFB0' },
  { icon: Cable,      title: 'Yapısal Kablolama',        desc: 'Kategori 6A/7 standartlarında pasif altyapı, veri merkezi kablolama ve etiketleme.',            href: '/hizmetler/yapisal-kablolama',   accent: '#FFB347' },
  { icon: Camera,     title: 'Kamera & Güvenlik',        desc: 'IP tabanlı entegre güvenlik sistemleri, erişim kontrolü ve merkezi izleme altyapıları.',         href: '/hizmetler/kamera-guvenlik',     accent: '#BF7FFF' },
  { icon: Headphones, title: 'IT Destek Hizmetleri',    desc: 'Helpdesk, saha desteği ve yönetilen hizmetler ile kurumsal BT operasyonlarınız güvende.',       href: '/hizmetler/it-destek',           accent: '#FF6B8A' },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="hizmetler" className="py-24 bg-canvas">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Hizmet Portföyü
          </span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-ink-primary tracking-tight mb-5">
            Kurumsal BT İçin{' '}
            <span className="neon-text">Uçtan Uca</span> Çözümler
          </h2>
          <p className="text-ink-secondary text-lg leading-relaxed">
            Marka bağımsız yaklaşımımızla her ölçekteki kurumun teknoloji altyapısını planlıyor, kuruyoruz ve yönetiyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ icon: Icon, title, desc, href, accent }, i) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.4, 0, 0.2, 1] }}
            >
              <Link
                href={href}
                className="group flex flex-col h-full p-6 rounded-2xl border border-border hover:-translate-y-1 hover:border-white/20 transition-all duration-300"
                style={{ background: '#0D1117' }}
              >
                <span
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: accent + '14', color: accent }}
                >
                  <Icon size={20} />
                </span>
                <h3 className="font-display font-bold text-ink-primary text-[15px] leading-snug mb-2.5">
                  {title}
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed flex-1 mb-4">{desc}</p>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-ink-muted group-hover:text-accent transition-colors duration-200">
                  Detayları İncele
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-ink-secondary font-medium text-sm hover:border-accent/50 hover:text-accent transition-all duration-200"
          >
            Tüm Hizmet Paketlerini Görüntüle <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
