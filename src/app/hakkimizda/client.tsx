'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Target, Eye, Globe2, Users, Award, ArrowRight, CheckCircle2, Shield, Zap } from 'lucide-react'

const values = [
  { icon: Target, title: 'Misyonumuz', accent: '#00FF87', desc: 'Kurumların teknoloji altyapısını; marka bağımsız, ihtiyaca özel ve sürdürülebilir çözümlerle güçlendirmek. Her projede en uygun teknolojiyi, en verimli mimaride hayata geçirmek.' },
  { icon: Eye,    title: 'Vizyonumuz', accent: '#0D72FF', desc: 'Türkiye ve global pazarda, kurumsal BT altyapısının tasarımından yönetimine kadar her aşamada tercih edilen, güvenilir teknoloji ortağı olmak.' },
  { icon: Globe2, title: 'Global Duruş', accent: '#A8B4CC', desc: 'Yurt içi köklü deneyimimiz ve uluslararası proje referanslarımızla, sınır ötesi teknoloji projelerinde de güvenle yanınızdayız.' },
]

const stats = [
  { value: '500+', label: 'Tamamlanan Proje' },
  { value: '50+',  label: 'Kurumsal Müşteri' },
  { value: '20+',  label: 'Yıllık Deneyim' },
  { value: '7/24', label: 'NOC Desteği' },
]

const team = [
  { name: 'Yönetim & Strateji',     count: '5+',  desc: 'Kıdemli Yönetici' },
  { name: 'Mühendislik & Mimari',   count: '20+', desc: 'Sertifikalı Mühendis' },
  { name: 'Proje & Operasyon',      count: '10+', desc: 'Proje Yöneticisi' },
  { name: 'Destek & NOC',           count: '15+', desc: '7/24 Destek Uzmanı' },
]

const certs = ['Cisco CCNP / CCIE', 'Fortinet NSE', 'Microsoft Azure', 'VMware VCP', 'ISO 27001 Lead', 'ITIL v4', 'PMP Sertifikası', 'Fluke Networks']

export default function HakkimizdaClient() {
  return (
    <div style={{ background: '#080C14', color: '#F0F4FF' }}>

      {/* HERO */}
      <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #080C14 0%, #001030 100%)' }}>
        <div className="absolute inset-0 bg-grid-slate bg-grid-60" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <nav className="flex items-center gap-1 text-xs mb-5" style={{ color: '#3D4A66' }}>
                <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
                <span className="mx-1">›</span><span style={{ color: '#6B7A99' }}>Hakkımızda</span>
              </nav>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full border"
                style={{ color: '#00FF87', borderColor: 'rgba(0,255,135,0.25)', background: 'rgba(0,255,135,0.06)' }}>
                Yitser Teknoloji
              </span>
              <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight mb-5 leading-[1.08]">
                Güvenilir Teknoloji{' '}
                <span style={{ background: 'linear-gradient(135deg, #00FF87 0%, #0D72FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Ortağınız
                </span>
              </h1>
              <p className="text-xl leading-relaxed mb-6" style={{ color: '#A8B4CC' }}>
                Yitser Bilgi Teknolojileri ve Danışmanlık; kurumsal BT altyapısı tasarımı, kurulumu ve yönetiminde
                <strong style={{ color: '#F0F4FF' }}> marka bağımsız, uçtan uca hizmet</strong> sunan bağımsız bir teknoloji danışmanlık firmasıdır.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#A8B4CC' }}>
                Ağ altyapısından siber güvenliğe, cloud dönüşümünden yapısal kablolama ve güvenlik sistemlerine kadar geniş hizmet portföyümüzle, kurumunuzun teknoloji yatırımlarını doğru kararlarla yönetmenize destek oluyoruz.
              </p>
              <Link href="/iletisim"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-black hover:scale-105 transition-all"
                style={{ background: '#00FF87', boxShadow: '0 0 25px rgba(0,255,135,0.4)' }}>
                Ekibimizle Tanışın <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden" style={{ minHeight: 400 }}>
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=560&fit=crop&q=85"
                alt="Yitser Teknoloji mühendislik ekibi — kurumsal BT altyapısı projesi"
                width={800} height={560}
                className="w-full object-cover rounded-3xl"
                style={{ filter: 'brightness(0.72) saturate(1.05)' }}
                priority
              />
              <div className="absolute inset-0 rounded-3xl"
                style={{ background: 'linear-gradient(135deg, rgba(0,255,135,0.1) 0%, transparent 60%)' }} />
              <div className="absolute bottom-0 inset-x-0 rounded-b-3xl p-5"
                style={{ background: 'linear-gradient(to top, rgba(8,12,20,0.95) 0%, transparent 100%)' }}>
                <p className="text-sm font-semibold" style={{ color: '#00FF87' }}>✓ 20+ Yıllık Kurumsal BT Deneyimi</p>
                <p className="text-xs mt-1" style={{ color: '#A8B4CC' }}>Marka bağımsız, bağımsız teknoloji danışmanlığı</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14" style={{ background: '#0D1117' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden" style={{ background: '#1A2540' }}>
            {stats.map(({ value, label }) => (
              <div key={value} className="px-8 py-8 text-center" style={{ background: '#080C14' }}>
                <span className="font-display font-bold text-4xl block mb-1" style={{ color: '#00FF87' }}>{value}</span>
                <p className="text-sm" style={{ color: '#A8B4CC' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MİSYON / VİZYON */}
      <section className="py-20 bg-canvas">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4" style={{ color: '#F0F4FF' }}>
              Değerlerimiz ve <span style={{ color: '#00FF87' }}>Yaklaşımımız</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc, accent }) => (
              <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="p-8 rounded-2xl border border-border" style={{ background: '#0D1117' }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: accent + '14' }}>
                  <Icon size={22} style={{ color: accent }} />
                </div>
                <h3 className="font-display font-bold text-xl mb-3" style={{ color: '#F0F4FF' }}>{title}</h3>
                <p className="leading-relaxed" style={{ color: '#A8B4CC' }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MARKA BAĞIMSIZ YAKLAŞIM */}
      <section className="py-20" style={{ background: '#0D1117' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display font-bold text-3xl lg:text-4xl mb-5 leading-tight" style={{ color: '#F0F4FF' }}>
                Marka Bağımsız Yaklaşım <span style={{ color: '#00FF87' }}>Fark Yaratır</span>
              </h2>
              <p className="text-lg leading-relaxed mb-5" style={{ color: '#A8B4CC' }}>
                Sektördeki birçok IT firmasının aksine, belirli bir üreticinin satış kanalı veya yetkili iş ortağı konumunda değiliz. Bu bağımsızlık; kurumunuz için en doğru, en performanslı ve en maliyet etkin çözümü tarafsız gözle değerlendirmemizi sağlar.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#A8B4CC' }}>
                Cisco, Juniper, Aruba, Fortinet, HP, Dell, VMware, Microsoft ve daha pek çok ürün ailesinde kurulum, entegrasyon ve destek yetkinliğimizle; her projeyi ihtiyaca özel tasarlıyoruz.
              </p>
              <div className="space-y-3">
                {[
                  'Üretici baskısı olmadan tarafsız ürün değerlendirmesi',
                  'Her bütçeye uygun, optimize maliyet yapısı',
                  'Uzun vadeli teknoloji bağımsızlığı ve esneklik',
                  'Çoklu marka entegrasyonunda uçtan uca uzmanlık',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm" style={{ color: '#A8B4CC' }}>
                    <CheckCircle2 size={15} style={{ color: '#00FF87', flexShrink: 0 }} />{item}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="space-y-5">
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&h=400&fit=crop&q=85"
                  alt="Kurumsal IT altyapı tasarım toplantısı"
                  width={700} height={400}
                  className="w-full object-cover rounded-3xl"
                  style={{ filter: 'brightness(0.72)' }}
                />
                <div className="absolute inset-0 rounded-3xl"
                  style={{ background: 'linear-gradient(135deg, rgba(0,255,135,0.08) 0%, transparent 60%)' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EKİP */}
      <section className="py-20 bg-canvas">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=480&fit=crop&q=85"
                alt="Yitser Teknoloji mühendis ekibi teknik çalışma"
                width={700} height={480}
                className="w-full object-cover rounded-3xl"
                style={{ filter: 'brightness(0.75)' }}
              />
              <div className="absolute inset-0 rounded-3xl"
                style={{ background: 'linear-gradient(135deg, rgba(13,114,255,0.1) 0%, transparent 60%)' }} />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-display font-bold text-3xl lg:text-4xl mb-5 leading-tight" style={{ color: '#F0F4FF' }}>
                Uzman <span style={{ color: '#00FF87' }}>Mühendis Ekibi</span>
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#A8B4CC' }}>
                50+ kişilik ekibimiz; sertifikalı ağ mühendisleri, siber güvenlik uzmanları, cloud mimarları ve proje yöneticilerinden oluşmaktadır.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {team.map(({ name, count, desc }) => (
                  <div key={name} className="p-5 rounded-2xl border border-border" style={{ background: '#0D1117' }}>
                    <p className="font-display font-bold text-2xl mb-0.5" style={{ color: '#00FF87' }}>{count}</p>
                    <p className="text-xs font-semibold mb-1" style={{ color: '#F0F4FF' }}>{name}</p>
                    <p className="text-xs" style={{ color: '#6B7A99' }}>{desc}</p>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#6B7A99' }}>Sertifikasyonlar</p>
                <div className="flex flex-wrap gap-2">
                  {certs.map((cert) => (
                    <span key={cert} className="px-3 py-1.5 rounded-lg text-xs border border-border font-medium"
                      style={{ background: 'rgba(255,255,255,0.03)', color: '#A8B4CC' }}>
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #000C20 0%, #001840 50%, #000C20 100%)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Shield size={32} style={{ color: '#00FF87', margin: '0 auto 16px' }} />
          <h2 className="font-display font-bold text-3xl mb-4" style={{ color: '#F0F4FF' }}>Teknoloji Mimarlarımızla Görüşün</h2>
          <p className="mb-8 text-lg" style={{ color: '#A8B4CC' }}>Kurumunuzun BT altyapısını değerlendirmek ve ihtiyaca özel yol haritası oluşturmak için ücretsiz görüşme talep edin.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iletisim"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-black hover:scale-105 transition-all"
              style={{ background: '#00FF87', boxShadow: '0 0 30px rgba(0,255,135,0.4)' }}>
              İletişime Geçin <ArrowRight size={16} />
            </Link>
            <Link href="/hizmetler"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold border border-border hover:border-accent/40 transition-all"
              style={{ background: 'rgba(255,255,255,0.04)', color: '#F0F4FF' }}>
              Hizmetlerimizi İnceleyin
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
