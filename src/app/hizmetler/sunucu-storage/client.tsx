'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Server, CheckCircle2, ArrowRight, Cpu, Database, HardDrive, Settings, BarChart3, Zap, Clock, Lock } from 'lucide-react'

const schemaData = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Kurumsal Sunucu ve Storage Sistemleri Kurulum ve Yönetimi',
  provider: { '@type': 'Organization', name: 'Yitser Teknoloji', url: 'https://yitser.com' },
  description: 'Rack sunucu, SAN, NAS ve hiperkonverjans altyapısı kurulum, entegrasyon ve lifecycle yönetimi.',
  areaServed: 'Turkey', serviceType: 'IT Infrastructure',
}

const features = [
  { icon: Cpu,       title: 'Rack ve Blade Sunucu Sistemleri',    desc: 'Kurumunuzun iş yükü profiline göre boyutlandırılmış fiziksel sunucu altyapısı; kurulum, rack entegrasyonu, BIOS/firmware optimizasyonu ve yük testleri dahil.' },
  { icon: Database,  title: 'SAN / NAS Depolama Çözümleri',       desc: 'Fiber Channel ve iSCSI tabanlı SAN, NFS/SMB protokollü NAS sistemlerinde kapasite planlaması, kurulum, LUN tasarımı ve performans optimizasyonu.' },
  { icon: HardDrive, title: 'Hiperkonverjans (HCI) Altyapısı',    desc: 'Compute, storage ve networking\'i tek platformda birleştiren HCI çözümleriyle veri merkezi modernizasyonu, ölçeklenebilir büyüme ve yönetim kolaylığı.' },
  { icon: BarChart3, title: 'Kapasite Planlama ve Optimizasyon',  desc: 'Mevcut altyapı kullanım analizi, darboğaz tespiti, büyüme projeksiyonu ve iş yükü bazlı kapasite yol haritası ile gereksiz harcamaları önleme.' },
  { icon: Settings,  title: 'Firmware ve Lifecycle Yönetimi',     desc: 'Donanım firmware güncellemeleri, güvenlik yamaları, garanti takibi, bakım anlaşmaları ve end-of-life planlama ile kesintisiz operasyon.' },
  { icon: Zap,       title: 'Sanallaştırma Entegrasyonu',         desc: 'Fiziksel sunucular üzerinde hypervisor kurulumu, sanal makine konsolidasyonu, live migration ve yüksek erişilebilirlik (HA) yapılandırması.' },
]

const capabilities = [
  'Rack Sunucu Kurulum ve Entegrasyon', 'Blade Sunucu Sistemleri ve Chassis',
  'Hiperkonverjans HCI Platform Kurulumu', 'Fiber Channel SAN Altyapısı',
  'IP SAN (iSCSI) Çözümleri', 'NAS Depolama Sistemleri Kurulumu',
  'Depolama Ağı (SAN Fabric) Tasarımı', 'Sunucu Sanallaştırma Entegrasyonu',
  'Performans Benchmark ve Raporlama', 'Donanım Bakım Anlaşmaları',
  'Garanti ve Servis Süreç Yönetimi', 'Marka Bağımsız Donanım Tedariki',
]

const faqs = [
  { q: 'HCI (Hiperkonverjans) mi, geleneksel 3-tier mimari mi tercih edilmeli?', a: 'HCI; kurulum hızı, yönetim kolaylığı ve küçük veri merkezleri için idealdir. Geleneksel 3-tier mimari, büyük ölçekli ve granüler ölçekleme gerektiren ortamlarda avantajlıdır. Fizibilite sürecimizde her iki senaryoyu maliyet-fayda analizi ile karşılaştırıyoruz.' },
  { q: 'Mevcut sunucu sistemimizi genişletmek mümkün mü?', a: 'Evet. Mevcut altyapınızın marka ve modeline göre mevcut sistem içi genişletme, farklı marka entegrasyonu veya hibrit yaklaşım seçeneklerini karşılaştırmalı olarak sunuyoruz.' },
  { q: 'Garanti ve servis sürecini siz mi yönetiyorsunuz?', a: 'Evet. Tedarik ettiğimiz tüm donanımlar için garanti başvurusu, arıza takibi, parça değişimi ve sahaya servis koordinasyonunu üstleniyoruz. Garanti dışı arızalar için de bakım anlaşması seçeneklerimiz mevcuttur.' },
  { q: 'Sunucu kurulumu sırasında üretim kesintisi yaşanır mı?', a: 'Planlı projelerde kesinti minimuma indirilir; genellikle bakım pencereleri (maintenance window) belirlenerek iş saatleri dışında yapılır. Kritik sistemler için sıfır kesintili geçiş senaryoları da tasarlıyoruz.' },
]

export default function Client() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div style={{ background: '#080C14', color: '#F0F4FF' }}>

        {/* HERO */}
        <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #080C14 0%, #0F1923 100%)' }}>
          <div className="absolute inset-0 bg-grid-slate bg-grid-60 opacity-100" />
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <nav className="flex items-center gap-1 text-xs mb-5" style={{ color: '#3D4A66' }}>
                  <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
                  <span className="mx-1">›</span><Link href="/hizmetler" className="hover:text-accent transition-colors">Hizmetler</Link>
                  <span className="mx-1">›</span><span style={{ color: '#6B7A99' }}>Sunucu &amp; Storage</span>
                </nav>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(168,180,204,0.1)' }}>
                    <Server size={20} style={{ color: '#A8B4CC' }} />
                  </span>
                  <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#00FF87' }}>Sunucu &amp; Storage Sistemleri</span>
                </div>
                <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight mb-5 leading-[1.08]">
                  İş Yüklerinize Özel{' '}
                  <span style={{ background: 'linear-gradient(135deg, #57A8FF 0%, #00FF87 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Yüksek Performanslı
                  </span>{' '}
                  Sunucu ve Depolama Altyapıları
                </h1>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#A8B4CC' }}>
                  Fiziksel sunucudan hiperkonverjansa, SAN'dan bulut entegrasyonuna — <strong style={{ color: '#F0F4FF' }}>marka bağımsız, ihtiyaca özel</strong> sunucu ve depolama altyapısı tasarımı, tedariki, kurulumu ve lifecycle yönetimi.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/iletisim" className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-black hover:scale-105 transition-all" style={{ background: '#00FF87', boxShadow: '0 0 25px rgba(0,255,135,0.4)' }}>
                    Altyapı Değerlendirmesi Talep Et <ArrowRight size={16} />
                  </Link>
                  <Link href="/iletisim" className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold border border-border hover:border-accent/40 transition-all" style={{ background: 'rgba(255,255,255,0.04)', color: '#F0F4FF' }}>
                    Teklif Al
                  </Link>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative rounded-3xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800&h=550&fit=crop&q=85" alt="Veri merkezi sunucu rafları — rack sistemleri ve depolama ünitesi" width={800} height={550} className="w-full object-cover rounded-3xl" style={{ filter: 'brightness(0.75)' }} priority />
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(87,168,255,0.15) 0%, transparent 60%)' }} />
                <div className="absolute bottom-0 inset-x-0 rounded-b-3xl p-5" style={{ background: 'linear-gradient(to top, rgba(8,12,20,0.95) 0%, transparent 100%)' }}>
                  <p className="text-sm font-semibold" style={{ color: '#00FF87' }}>✓ Marka Bağımsız Tedarik — Kurulum — Destek</p>
                  <p className="text-xs mt-1" style={{ color: '#A8B4CC' }}>Garanti süreci ve lifecycle yönetimi dahil</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ÖZELLİKLER */}
        <section className="py-20" style={{ background: '#0D1117' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4" style={{ color: '#F0F4FF' }}>
                Kapsamlı Sunucu &amp; Depolama <span style={{ color: '#00FF87' }}>Hizmet Alanlarımız</span>
              </h2>
              <p className="text-lg" style={{ color: '#A8B4CC' }}>Tek sunucudan büyük ölçekli veri merkezine kadar her ölçekte tasarlıyor, kuruyoruz ve yönetiyoruz.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-2xl border border-border hover:-translate-y-1 transition-all" style={{ background: '#080C14' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(87,168,255,0.1)' }}>
                    <Icon size={20} style={{ color: '#57A8FF' }} />
                  </div>
                  <h3 className="font-display font-bold text-[15px] mb-2" style={{ color: '#F0F4FF' }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7A99' }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* GÖRSEL + KAPSAM */}
        <section className="py-20 bg-canvas">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-display font-bold text-3xl mb-2" style={{ color: '#F0F4FF' }}>Hizmet Kapsamımız</h2>
                <p className="text-sm mb-8" style={{ color: '#6B7A99' }}>Sunucu ve depolama altyapısının her katmanında uçtan uca hizmet sunuyoruz.</p>
                <div className="grid gap-2.5">
                  {capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-3 text-sm" style={{ color: '#A8B4CC' }}>
                      <CheckCircle2 size={14} style={{ color: '#00FF87', flexShrink: 0 }} />{cap}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-5">
                <div className="relative rounded-3xl overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1591238372234-3b1b50ead408?w=700&h=380&fit=crop&q=85" alt="Depolama sistemleri ve SAN altyapısı — kurumsal veri merkezi" width={700} height={380} className="w-full object-cover rounded-3xl" style={{ filter: 'brightness(0.72)' }} />
                  <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(87,168,255,0.12) 0%, transparent 60%)' }} />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-bold" style={{ color: '#00FF87' }}>Yüksek Erişilebilirlik Depolama Mimarisi</p>
                    <p className="text-xs mt-1" style={{ color: '#A8B4CC' }}>Redundant yapı ile %99.99 uptime hedefi</p>
                  </div>
                </div>
                <div className="rounded-2xl p-6 border" style={{ background: 'rgba(0,255,135,0.04)', borderColor: 'rgba(0,255,135,0.2)' }}>
                  <Lock size={20} style={{ color: '#00FF87', marginBottom: 10 }} />
                  <h3 className="font-display font-bold text-[16px] mb-2" style={{ color: '#F0F4FF' }}>Marka Bağımsız Yaklaşım</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#A8B4CC' }}>
                    Sunucu ve depolama sistemlerinde belirli bir üreticiye bağlı kalmadan, ihtiyacınıza en uygun donanımda <strong style={{ color: '#00FF87' }}>uçtan uca destek, projelendirme ve satış hizmeti</strong> sunuyoruz. Her donanım için hem satış hem de entegrasyon ve destek kapasitemiz mevcuttur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SSS */}
        <section className="py-20" style={{ background: '#0D1117' }}>
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-3 text-center" style={{ color: '#F0F4FF' }}>Sık Sorulan Sorular</h2>
            <p className="text-center text-sm mb-10" style={{ color: '#6B7A99' }}>Sunucu ve storage sistemleri hakkında en çok merak edilen konular</p>
            <div className="space-y-3">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group rounded-2xl border border-border p-6 cursor-pointer" style={{ background: '#080C14' }}>
                  <summary className="font-semibold text-[15px] list-none flex items-center justify-between gap-4" style={{ color: '#F0F4FF' }}>
                    {q}<span className="text-accent flex-shrink-0 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: '#A8B4CC' }}>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: 'linear-gradient(135deg, #000C20 0%, #001030 50%, #000C20 100%)' }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <Zap size={32} style={{ color: '#00FF87', margin: '0 auto 16px' }} />
            <h2 className="font-display font-bold text-3xl mb-4" style={{ color: '#F0F4FF' }}>Sunucu Altyapınızı Modernize Edin</h2>
            <p className="mb-8 text-lg" style={{ color: '#A8B4CC' }}>Ücretsiz altyapı değerlendirmemizde mevcut durumunuzu analiz ediyor, somut modernizasyon önerileri sunuyoruz.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-black hover:scale-105 transition-all" style={{ background: '#00FF87', boxShadow: '0 0 30px rgba(0,255,135,0.4)' }}>
                Ücretsiz Fizibilite Al <ArrowRight size={16} />
              </Link>
              <a href="tel:+908503042268" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold border border-border hover:border-accent/40 transition-all" style={{ background: 'rgba(255,255,255,0.04)', color: '#F0F4FF' }}>
                <Clock size={16} /> Hemen Arayın
              </a>
            </div>
            <p className="mt-6 text-xs" style={{ color: '#3D4A66' }}>Ücretsiz • Taahhütsüz • 48 saat içinde dönüş garantisi</p>
          </div>
        </section>
      </div>
    </>
  )
}
