'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Building2, Heart, Factory, ShoppingBag, Globe2, Shield } from 'lucide-react'

const sectors = [
  {
    icon: Building2, title: 'Finans ve Bankacılık', accent: '#0D72FF',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=360&fit=crop&q=80',
    imgAlt: 'Finans sektörü kurumsal bina',
    desc: 'Yüksek erişilebilirlik, düşük gecikme ve sıkı uyumluluk gereksinimleri olan bankacılık ve fintech altyapıları için özel tasarım.',
    items: ['BDDK uyumlu altyapı', 'PCI-DSS ağ segmentasyonu', 'DR site çözümleri', 'BEC/SWIFT güvenliği'],
  },
  {
    icon: Heart, title: 'Sağlık Sektörü', accent: '#FF6B8A',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=360&fit=crop&q=80',
    imgAlt: 'Sağlık sektörü hastane IT altyapısı',
    desc: 'Tıbbi cihaz entegrasyonu, HIPAA-benzeri veri gizlilik gereksinimleri ve kesintisiz klinik operasyon için güvenilir BT altyapısı.',
    items: ['Klinik ağ segmentasyonu', 'PACS/HIS entegrasyonu', 'Medikal IoT güvenliği', 'Yüksek erişilebilirlik'],
  },
  {
    icon: Factory, title: 'Üretim ve Sanayi', accent: '#FFB347',
    img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=360&fit=crop&q=80',
    imgAlt: 'Üretim tesisi endüstriyel ağ altyapısı',
    desc: 'OT/IT ağ entegrasyonu, SCADA altyapısı ve endüstriyel güvenlik gereksinimlerine uygun sağlam teknoloji mimarisi.',
    items: ['OT/IT ağ entegrasyonu', 'SCADA güvenliği', 'Endüstriyel Wi-Fi', 'ICS siber güvenliği'],
  },
  {
    icon: ShoppingBag, title: 'Perakende ve Zincir Mağaza', accent: '#BF7FFF',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=360&fit=crop&q=80',
    imgAlt: 'Perakende zincir mağaza BT altyapısı',
    desc: 'Çok şubeli perakende operasyonları için merkezi yönetimli SD-WAN, güvenli ödeme altyapısı ve kasa sistemleri ağı.',
    items: ['SD-WAN çok lokasyon', 'POS ağ güvenliği', 'Misafir Wi-Fi', 'Merkezi NOC izleme'],
  },
  {
    icon: Globe2, title: 'Kamu ve Belediyeler', accent: '#39FFB0',
    img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=360&fit=crop&q=80',
    imgAlt: 'Kamu kurumu akıllı şehir altyapısı',
    desc: 'Kamu kurumlarının dijital dönüşüm gereksinimlerine uygun, siber güvenlik ve erişilebilirlik standartlarını karşılayan BT altyapıları.',
    items: ['Kamu bulut stratejisi', 'E-devlet entegrasyonu', 'Güvenli iletişim ağı', 'ISO 27001 uyumluluk'],
  },
  {
    icon: Shield, title: 'Kurumsal Holding ve Holdingler', accent: '#00FF87',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=360&fit=crop&q=80',
    imgAlt: 'Kurumsal holding ofisi IT altyapısı',
    desc: 'Çok şirketli yapılarda merkezi BT yönetişimi, konsolide altyapı ve iştirakleri kapsayan bütünleşik güvenlik mimarisi.',
    items: ['Konsolide ağ mimarisi', 'Merkezi NOC', 'Çok saha güvenlik', 'Unified endpoint mgmt'],
  },
]

export default function CozumlerClient() {
  return (
    <div style={{ background: '#080C14', color: '#F0F4FF' }}>

      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #080C14 0%, #001030 100%)' }}>
        <div className="absolute inset-0 bg-grid-slate bg-grid-60" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <nav className="flex items-center gap-1 text-xs mb-5" style={{ color: '#3D4A66' }}>
            <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
            <span className="mx-1">›</span><span style={{ color: '#6B7A99' }}>Çözümler</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full border"
              style={{ color: '#00FF87', borderColor: 'rgba(0,255,135,0.25)', background: 'rgba(0,255,135,0.06)' }}>
              Sektöre Özel Çözümler
            </span>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight mb-5 leading-[1.08]">
              Sektörünüze Özel{' '}
              <span style={{ background: 'linear-gradient(135deg, #00FF87 0%, #0D72FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                BT Çözümleri
              </span>
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#A8B4CC' }}>
              Her sektörün kendine özgü yasal gereksinimleri, operasyonel kısıtları ve güvenlik ihtiyaçları vardır.
              Marka bağımsız danışmanlık anlayışımızla sektörünüze özel teknoloji mimarisi tasarlıyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {sectors.map(({ icon: Icon, title, accent, img, imgAlt, desc, items }, i) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }}
              className="grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-border"
              style={{ background: '#0D1117' }}>
              <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`} style={{ minHeight: 280 }}>
                <Image src={img} alt={imgAlt} fill className="object-cover"
                  style={{ filter: 'brightness(0.68) saturate(1.1)' }} />
                <div className="absolute inset-0"
                  style={{ background: `linear-gradient(135deg, ${accent}20 0%, transparent 60%)` }} />
              </div>
              <div className={`p-8 lg:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: accent + '14', color: accent }}>
                    <Icon size={20} />
                  </span>
                  <h2 className="font-display font-bold text-2xl" style={{ color: '#F0F4FF' }}>{title}</h2>
                </div>
                <p className="leading-relaxed mb-5" style={{ color: '#A8B4CC' }}>{desc}</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm" style={{ color: '#A8B4CC' }}>
                      <CheckCircle2 size={13} style={{ color: accent, flexShrink: 0 }} />{item}
                    </div>
                  ))}
                </div>
                <Link href="/iletisim"
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                  style={{ color: '#00FF87' }}>
                  Bu Sektör İçin Çözüm İste <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20" style={{ background: '#0D1117' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-bold text-3xl mb-4" style={{ color: '#F0F4FF' }}>Sektörünüze Özel Yol Haritası Hazırlayalım</h2>
          <p className="mb-8 text-lg" style={{ color: '#A8B4CC' }}>Teknoloji mimarlarımız, sektörünüzün gereksinimlerini anlayarak kurumunuza özel fizibilite analizi hazırlar.</p>
          <Link href="/iletisim"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-black hover:scale-105 transition-all"
            style={{ background: '#00FF87', boxShadow: '0 0 30px rgba(0,255,135,0.35)' }}>
            Ücretsiz Sektör Analizi Al <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
