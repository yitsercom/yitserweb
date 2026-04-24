'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Camera, CheckCircle2, ArrowRight, Eye, Lock, Monitor, Radio, Zap, Clock } from 'lucide-react'

const schemaData = { '@context': 'https://schema.org', '@type': 'Service', name: 'IP Kamera ve Fiziksel Güvenlik Sistemleri', provider: { '@type': 'Organization', name: 'Yitser Teknoloji', url: 'https://yitser.com' }, description: 'IP güvenlik kamera sistemleri, erişim kontrolü, NVR/DVR kurulum ve entegre fiziksel güvenlik çözümleri.', areaServed: 'Turkey', serviceType: 'Physical Security' }

const features = [
  { icon: Eye,     title: 'IP Kamera Sistemleri ve VMS',        desc: 'Megapiksel ve 4K çözünürlüklü IP kameralar, PTZ kameralar, termal görüntüleme, fisheye ve geniş açı kameralar; merkezi VMS (Video Management Software) entegrasyonu.' },
  { icon: Lock,    title: 'Erişim Kontrol ve Kimlik Doğrulama', desc: 'Kartlı, PIN\'li, biyometrik parmak izi/yüz tanıma ve mobil kimlik doğrulama tabanlı kapı erişim sistemleri; turnike, bariyer ve otopark yönetimi.' },
  { icon: Monitor, title: 'Merkezi İzleme ve Kontrol Odası',   desc: 'Çok monitörlü kontrol odası tasarımı, video duvarı, 7/24 uzak izleme platformu ve olay yönetim sistemi ile kapsamlı güvenlik operasyonu.' },
  { icon: Radio,   title: 'Entegre Güvenlik ve Alarm',         desc: 'Yangın algılama sistemleri, hırsız alarm, perimeter güvenlik, kamera ve erişim kontrolünün tek platform üzerinde entegrasyonu ile bütüncül fiziksel güvenlik.' },
  { icon: Eye,     title: 'Analitik ve Yapay Zeka Entegrasyonu', desc: 'Video analitik: harekete duyarlı alarm, kalabalık yoğunluğu tespiti, plaka tanıma (LPR/ANPR), yüz tanıma ve davranışsal analiz modülleri.' },
  { icon: Monitor, title: 'Bulut Tabanlı Uzak İzleme',          desc: 'Mobil uygulama ile her yerden 7/24 kamera görüntüsüne erişim, bulut kayıt ve anlık olay bildirimleri.' },
]

const capabilities = [
  'IP Kamera Kurulum (Fixed, PTZ, Fisheye)', 'NVR / DVR Kayıt Sistemleri',
  'Video Yönetim Yazılımı (VMS)', 'Kamera Analitik Modülleri',
  'Erişim Kontrol Sistemleri', 'Biyometrik Kimlik Doğrulama',
  'Turnike ve Bariyer Sistemleri', 'Interkom ve Görüntülü Kapı Sistemleri',
  'Plaka Tanıma (LPR/ANPR)', 'Yangın ve Alarm Entegrasyonu',
  'Video Duvarı ve İzleme Odası', 'Marka Bağımsız Sistem Tasarımı',
]

const faqs = [
  { q: 'Kaç kamerayla başlamalıyım ve sonradan genişletebilir miyim?', a: 'Kamera sayısı, alanın büyüklüğüne ve kritikliğine göre belirlenir. Site survey sürecimizde optimal kamera konumlarını tespit ediyoruz. Tüm sistemlerimiz modüler tasarlanmakta olup sonradan kolayca genişletilebilir.' },
  { q: 'IP kamera sistemi ile analog sistem arasındaki fark nedir?', a: 'IP kameralar çok daha yüksek çözünürlük (4K/8K), gelişmiş analitik özellikler, kolay ağ entegrasyonu ve uzak erişim imkânı sunar. Analog sistemler ise daha düşük başlangıç maliyetiyle sınırlı özellik sağlar. Kurumsal projelerde IP sistemler standart hale gelmiştir.' },
  { q: 'Kamera görüntüleri ne kadar süre saklanabilir?', a: 'Saklama süresi; kamera çözünürlüğüne, FPS ayarına, sıkıştırma standardına (H.265 önerilen) ve NVR kapasitesine göre değişir. Genellikle 30–90 günlük saklama hedeflenir. KVKK kapsamında kişisel veri içeren görüntüler için saklama süresi politika yönetimi yapıyoruz.' },
  { q: 'KVKK kapsamında güvenlik kameraları nasıl değerlendirilir?', a: 'KVKK\'ya göre kamera görüntüleri kişisel veri sayılır. Kamera konumlarının çalışanlara ve ziyaretçilere bildirilmesi, görüntülerin belirli süreyi aşmadan imha edilmesi ve erişim yetkilerinin kısıtlanması zorunludur. Uyumluluk rehberi sunuyoruz.' },
]

export default function Client() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div style={{ background: '#080C14', color: '#F0F4FF' }}>
        <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #080C14 0%, #0F0018 100%)' }}>
          <div className="absolute inset-0 bg-grid-slate bg-grid-60 opacity-100" />
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <nav className="flex items-center gap-1 text-xs mb-5" style={{ color: '#3D4A66' }}>
                  <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link><span className="mx-1">›</span>
                  <Link href="/hizmetler" className="hover:text-accent transition-colors">Hizmetler</Link><span className="mx-1">›</span>
                  <span style={{ color: '#6B7A99' }}>Kamera &amp; Güvenlik</span>
                </nav>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(191,127,255,0.1)' }}><Camera size={20} style={{ color: '#BF7FFF' }} /></span>
                  <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#00FF87' }}>Kamera &amp; Güvenlik Sistemleri</span>
                </div>
                <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight mb-5 leading-[1.08]">
                  Fiziksel Güvenliği Dijitalle Buluşturan{' '}
                  <span style={{ background: 'linear-gradient(135deg, #BF7FFF 0%, #0D72FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Entegre Güvenlik</span>{' '}
                  Sistemleri
                </h1>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#A8B4CC' }}>
                  IP kamera sistemlerinden biyometrik erişim kontrolüne, video analitiğinden merkezi izleme odasına — <strong style={{ color: '#F0F4FF' }}>marka bağımsız, ihtiyaca özel</strong> fiziksel güvenlik çözümleri.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/iletisim" className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-black hover:scale-105 transition-all" style={{ background: '#00FF87', boxShadow: '0 0 25px rgba(0,255,135,0.4)' }}>
                    Güvenlik Sistemi Tasarlayalım <ArrowRight size={16} />
                  </Link>
                  <Link href="/iletisim" className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold border border-border hover:border-accent/40 transition-all" style={{ background: 'rgba(255,255,255,0.04)', color: '#F0F4FF' }}>
                    Site Survey Talep Et
                  </Link>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative rounded-3xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=550&fit=crop&q=85" alt="IP güvenlik kamera sistemi — kurumsal izleme altyapısı" width={800} height={550} className="w-full object-cover rounded-3xl" style={{ filter: 'brightness(0.7) saturate(1.1)' }} priority />
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(191,127,255,0.15) 0%, transparent 60%)' }} />
                <div className="absolute bottom-0 inset-x-0 rounded-b-3xl p-5" style={{ background: 'linear-gradient(to top, rgba(8,12,20,0.95) 0%, transparent 100%)' }}>
                  <p className="text-sm font-semibold" style={{ color: '#00FF87' }}>✓ 4K/8K IP Kamera • Video Analitik • KVKK Uyumlu</p>
                  <p className="text-xs mt-1" style={{ color: '#A8B4CC' }}>Marka bağımsız sistem tasarımı ve entegrasyonu</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: '#0D1117' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4" style={{ color: '#F0F4FF' }}>
                Kapsamlı Fiziksel Güvenlik <span style={{ color: '#00FF87' }}>Hizmet Alanlarımız</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-2xl border border-border hover:-translate-y-1 transition-all" style={{ background: '#080C14' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(191,127,255,0.08)' }}><Icon size={20} style={{ color: '#BF7FFF' }} /></div>
                  <h3 className="font-display font-bold text-[15px] mb-2" style={{ color: '#F0F4FF' }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7A99' }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-canvas">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-display font-bold text-3xl mb-8" style={{ color: '#F0F4FF' }}>Hizmet Kapsamımız</h2>
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
                  <Image src="https://images.unsplash.com/photo-1589935447067-5531094415d1?w=700&h=380&fit=crop&q=85" alt="Güvenlik kontrol odası — merkezi izleme sistemi" width={700} height={380} className="w-full object-cover rounded-3xl" style={{ filter: 'brightness(0.7)' }} />
                  <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(191,127,255,0.12) 0%, transparent 60%)' }} />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-bold" style={{ color: '#00FF87' }}>Video Analitik ile Akıllı Güvenlik</p>
                    <p className="text-xs mt-1" style={{ color: '#A8B4CC' }}>Yüz tanıma, plaka tanıma ve davranışsal analiz dahil</p>
                  </div>
                </div>
                <div className="rounded-2xl p-6 border" style={{ background: 'rgba(0,255,135,0.04)', borderColor: 'rgba(0,255,135,0.2)' }}>
                  <Lock size={20} style={{ color: '#00FF87', marginBottom: 10 }} />
                  <h3 className="font-display font-bold text-[16px] mb-2" style={{ color: '#F0F4FF' }}>Marka Bağımsız Sistem Tasarımı</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#A8B4CC' }}>
                    Güvenlik sistemlerinde belirli bir üreticiye bağlı kalmadan, ihtiyacınıza en uygun kamera, NVR, erişim kontrolü ve yazılım ürünlerinde <strong style={{ color: '#00FF87' }}>uçtan uca destek, projelendirme ve satış hizmeti</strong> sunuyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: '#0D1117' }}>
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-3 text-center" style={{ color: '#F0F4FF' }}>Sık Sorulan Sorular</h2>
            <div className="space-y-3 mt-10">
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

        <section className="py-20" style={{ background: 'linear-gradient(135deg, #080010 0%, #0F0018 50%, #080010 100%)' }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <Zap size={32} style={{ color: '#00FF87', margin: '0 auto 16px' }} />
            <h2 className="font-display font-bold text-3xl mb-4" style={{ color: '#F0F4FF' }}>Güvenlik Sisteminizi Tasarlayalım</h2>
            <p className="mb-8 text-lg" style={{ color: '#A8B4CC' }}>Ücretsiz site survey ile alanınızı analiz ediyor, ihtiyaca özel kamera dizilimi planı ve teklif sunuyoruz.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-black hover:scale-105 transition-all" style={{ background: '#00FF87', boxShadow: '0 0 30px rgba(0,255,135,0.4)' }}>
                Ücretsiz Site Survey <ArrowRight size={16} />
              </Link>
              <a href="tel:+908503042268" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold border border-border hover:border-accent/40 transition-all" style={{ background: 'rgba(255,255,255,0.04)', color: '#F0F4FF' }}>
                <Clock size={16} /> Hemen Arayın
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
