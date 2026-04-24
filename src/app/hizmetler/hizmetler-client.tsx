'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Network, Shield, Server, Cloud, HardDrive, Cable, Camera, Headphones, ArrowRight, CheckCircle2 } from 'lucide-react'

const services = [
  {
    icon: Network, title: 'Ağ & Network Altyapısı', href: '/hizmetler/ag-altyapisi',
    accent: '#0D72FF',
    desc: 'Kampüs ağı, SD-WAN, Wi-Fi 6/6E ve veri merkezi ağı. Yüksek erişilebilirlik odaklı kurumsal network mimarisi tasarımı, kurulumu ve 7/24 yönetilen hizmetler.',
    tags: ['SD-WAN', 'Wi-Fi 6/6E', 'Spine-Leaf', 'NOC'],
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=360&fit=crop&q=80',
    imgAlt: 'Kurumsal ağ altyapısı switch sistemleri',
  },
  {
    icon: Shield, title: 'Siber Güvenlik', href: '/hizmetler/siber-guvenlik',
    accent: '#00FF87',
    desc: 'SOC kurulumu ve yönetimi, penetrasyon testi, SIEM entegrasyonu, Zero Trust mimarisi, ISO 27001 ve KVKK uyumluluk danışmanlığı.',
    tags: ['SOC/MDR', 'Pentest', 'Zero Trust', 'ISO 27001'],
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=360&fit=crop&q=80',
    imgAlt: 'Siber güvenlik SOC merkezi tehdit izleme',
  },
  {
    icon: Server, title: 'Sunucu & Storage Sistemleri', href: '/hizmetler/sunucu-storage',
    accent: '#A8B4CC',
    desc: 'Rack sunucu, blade sistem, SAN/NAS depolama ve hiperkonverjans (HCI) altyapısı. Marka bağımsız kurulum, lifecycle yönetimi ve destek.',
    tags: ['HCI', 'SAN/NAS', 'Rack Sunucu', 'Blade'],
    img: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&h=360&fit=crop&q=80',
    imgAlt: 'Veri merkezi sunucu ve storage sistemleri',
  },
  {
    icon: Cloud, title: 'Cloud & Sanallaştırma', href: '/hizmetler/cloud-sanallastirma',
    accent: '#57A8FF',
    desc: 'Hibrit bulut stratejisi, cloud migration, VMware sanallaştırma, Kubernetes ve çoklu bulut yönetimi. AWS, Azure, GCP bağımsız danışmanlık.',
    tags: ['Hibrit Bulut', 'Cloud Migration', 'Kubernetes', 'VMware'],
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=360&fit=crop&q=80',
    imgAlt: 'Hibrit bulut ve sanallaştırma altyapısı',
  },
  {
    icon: HardDrive, title: 'Backup & Veri Koruma', href: '/hizmetler/backup-veri-koruma',
    accent: '#39FFB0',
    desc: 'Kurumsal veri yedekleme, felaket kurtarma (DR) planlaması, iş sürekliliği ve KVKK uyumlu arşivleme. RTO/RPO hedef analizi.',
    tags: ['DR Planlaması', 'RTO/RPO', 'KVKK Uyumlu', '3-2-1-1-0'],
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=360&fit=crop&q=80',
    imgAlt: 'Kurumsal veri yedekleme sistemleri',
  },
  {
    icon: Cable, title: 'Yapısal Kablolama', href: '/hizmetler/yapisal-kablolama',
    accent: '#FFB347',
    desc: 'Cat6A/Cat7 yapısal kablolama, fiber optik altyapı, veri merkezi kablolama. Fluke Networks sertifikalı test, ANSI/TIA-568 standartları.',
    tags: ['Cat6A/Cat7', 'Fiber Optik', 'Fluke Test', 'TIA-568'],
    img: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&h=360&fit=crop&q=80',
    imgAlt: 'Yapısal kablolama patch panel sistemi',
  },
  {
    icon: Camera, title: 'Kamera & Güvenlik Sistemleri', href: '/hizmetler/kamera-guvenlik',
    accent: '#BF7FFF',
    desc: 'IP kamera sistemleri, biyometrik erişim kontrolü, video yönetim yazılımı (VMS), video analitik ve entegre fiziksel güvenlik çözümleri.',
    tags: ['IP Kamera', 'Biyometrik', 'VMS', 'Video Analitik'],
    img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=360&fit=crop&q=80',
    imgAlt: 'IP güvenlik kamera ve erişim kontrol sistemi',
  },
  {
    icon: Headphones, title: 'IT Destek Hizmetleri', href: '/hizmetler/it-destek',
    accent: '#FF6B8A',
    desc: 'SLA güvenceli L1/L2/L3 helpdesk, 7/24 NOC izleme, saha teknik destek, IT varlık yönetimi ve yönetilen BT hizmetleri (MSP).',
    tags: ['Helpdesk', '7/24 NOC', 'MSP', 'ITIL'],
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=360&fit=crop&q=80',
    imgAlt: 'IT destek helpdesk teknik servis ekibi',
  },
]

export default function HizmetlerClient() {
  return (
    <div style={{ background: '#080C14', color: '#F0F4FF', minHeight: '100vh' }}>

      {/* HERO */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #080C14 0%, #001030 100%)' }}>
        <div className="absolute inset-0 bg-grid-slate bg-grid-60 opacity-100" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(0,255,135,0.07) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <nav className="flex items-center gap-1 text-xs mb-6" style={{ color: '#3D4A66' }}>
            <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
            <span className="mx-1">›</span>
            <span style={{ color: '#6B7A99' }}>Hizmetler</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full border"
              style={{ color: '#00FF87', borderColor: 'rgba(0,255,135,0.25)', background: 'rgba(0,255,135,0.06)' }}>
              Hizmet Portföyü
            </span>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight mb-6 leading-[1.08]">
              Kurumsal BT İçin{' '}
              <span style={{ background: 'linear-gradient(135deg, #00FF87 0%, #0D72FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Uçtan Uca
              </span>{' '}
              Çözümler
            </h1>
            <p className="text-xl leading-relaxed mb-8" style={{ color: '#A8B4CC' }}>
              Ağ altyapısından siber güvenliğe, cloud dönüşümünden yapısal kablolama ve güvenlik sistemlerine —
              marka bağımsız yaklaşımımızla her ölçekteki kurumun teknoloji altyapısını planlıyor, kuruyor ve yönetiyoruz.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              {['500+ Tamamlanan Proje', 'Marka Bağımsız Yaklaşım', '7/24 NOC Desteği', 'ISO 27001 Süreçleri'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border"
                  style={{ background: 'rgba(255,255,255,0.03)', color: '#A8B4CC' }}>
                  <CheckCircle2 size={13} style={{ color: '#00FF87' }} />{badge}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* HİZMET KARTLARI — görsel + içerik */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8">
            {services.map(({ icon: Icon, title, href, accent, desc, tags, img, imgAlt }, i) => (
              <motion.div key={href}
                initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
                <Link href={href} className="group grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-border hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                  style={{ background: '#0D1117' }}>

                  {/* Görsel */}
                  <div className={`relative overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`} style={{ minHeight: 280 }}>
                    <Image src={img} alt={imgAlt} fill className="object-cover" style={{ filter: 'brightness(0.7) saturate(1.1)' }} />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${accent}22 0%, transparent 60%)` }} />
                    <div className="absolute inset-0 lg:hidden" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(13,17,23,0.95) 100%)' }} />
                  </div>

                  {/* İçerik */}
                  <div className={`p-8 lg:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: accent + '14', color: accent }}>
                        <Icon size={20} />
                      </span>
                      <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: accent }}>
                        Hizmet
                      </span>
                    </div>
                    <h2 className="font-display font-bold text-2xl lg:text-3xl mb-3 leading-tight group-hover:text-accent transition-colors" style={{ color: '#F0F4FF' }}>
                      {title}
                    </h2>
                    <p className="text-base leading-relaxed mb-6" style={{ color: '#A8B4CC' }}>{desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-lg text-xs font-medium border border-border"
                          style={{ background: accent + '0D', color: accent }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: '#00FF87' }}>
                      Detaylı Bilgi Al <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEDEN YİTSER */}
      <section className="py-20" style={{ background: '#0D1117' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-5" style={{ color: '#F0F4FF' }}>
            Neden <span style={{ color: '#00FF87' }}>Yitser Teknoloji?</span>
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ color: '#A8B4CC' }}>
            Marka bağımsız yaklaşımımız, her hizmet alanındaki yetkinliğimiz ve uçtan uca sorumluluk anlayışımızla fark yaratıyoruz.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { value: '500+', label: 'Tamamlanan Proje' },
              { value: '50+', label: 'Kurumsal Müşteri' },
              { value: '7/24', label: 'NOC Desteği' },
              { value: '%99.99', label: 'Hedef Uptime' },
            ].map(({ value, label }) => (
              <div key={label} className="p-6 rounded-2xl border border-border" style={{ background: '#080C14' }}>
                <p className="font-display font-bold text-3xl mb-1" style={{ color: '#00FF87' }}>{value}</p>
                <p className="text-sm" style={{ color: '#A8B4CC' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-canvas">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl mb-4" style={{ color: '#F0F4FF' }}>
            Projenizi Birlikte Değerlendirelim
          </h2>
          <p className="text-lg mb-8" style={{ color: '#A8B4CC' }}>
            Hangi hizmete ihtiyacınız olduğundan emin değil misiniz? Teknoloji mimarlarımız mevcut altyapınızı analiz ederek size özel yol haritası hazırlar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iletisim"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-black hover:scale-105 transition-all"
              style={{ background: '#00FF87', boxShadow: '0 0 30px rgba(0,255,135,0.35)' }}>
              Ücretsiz Fizibilite Görüşmesi <ArrowRight size={16} />
            </Link>
            <a href="tel:+908503042268"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold border border-border hover:border-accent/40 transition-all"
              style={{ background: 'rgba(255,255,255,0.04)', color: '#F0F4FF' }}>
              Hemen Arayın
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
