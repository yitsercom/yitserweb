'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HardDrive, CheckCircle2, ArrowRight, Archive, RotateCcw, Clock, ShieldCheck, Lock, Zap, Database } from 'lucide-react'

const schemaData = { '@context': 'https://schema.org', '@type': 'Service', name: 'Kurumsal Backup ve Veri Koruma Hizmetleri', provider: { '@type': 'Organization', name: 'Yitser Teknoloji', url: 'https://yitser.com' }, description: 'Kapsamlı veri yedekleme, felaket kurtarma planlaması ve iş sürekliliği çözümleri.', areaServed: 'Turkey', serviceType: 'Data Protection' }

const features = [
  { icon: Archive,     title: 'Kurumsal Yedekleme Sistemleri',    desc: 'Disk, bant ve bulut tabanlı hibrit yedekleme stratejileri; artımlı, diferansiyel ve tam yedekleme politikaları; deduplication ve şifreleme ile güvenli veri koruma.' },
  { icon: RotateCcw,   title: 'Felaket Kurtarma (DR) Planlaması', desc: 'RTO (Recovery Time Objective) ve RPO (Recovery Point Objective) hedeflerinize uygun DR site tasarımı, failover/failback prosedürleri ve düzenli tatbikat desteği.' },
  { icon: Clock,       title: 'İş Sürekliliği Planlaması (BCP)',  desc: 'İş sürekliliği politikaları, kritik süreç envanteri, kriz yönetimi prosedürleri ve çalışan rollerinin tanımlanması ile kesintisizlik güvencesi.' },
  { icon: ShieldCheck, title: 'KVKK Uyumlu Arşivleme',           desc: 'KVKK ve sektörel mevzuata uygun saklama süreleri, kişisel veri güvenli imha prosedürleri, erişim log yönetimi ve denetim raporları.' },
  { icon: Database,    title: 'Veritabanı ve Uygulama Yedekleme', desc: 'Oracle, MSSQL, MySQL, PostgreSQL veritabanı consistent yedekleme; ERP, CRM ve kritik uygulama verisi koruması için uygulama farkındalıklı ajanlar.' },
  { icon: Lock,        title: 'Yedek Bütünlük Testi ve Doğrulama', desc: 'Otomatik yedek doğrulama (verification), sandbox ortamında geri yükleme testi, SLA raporlaması ve yedekleme başarı oranı izleme.' },
]

const capabilities = [
  'Disk Tabanlı Yedekleme (D2D/D2D2T)', 'Bulut Yedekleme Entegrasyonu',
  'Felaket Kurtarma DR Site Tasarımı', 'RTO/RPO Hedef Analizi ve Optimizasyon',
  'Veri Arşivleme ve Yaşam Döngüsü Yönetimi', 'Yedekleme Politikası ve Retention Tasarımı',
  'Otomatik Yedek Test ve Doğrulama', 'KVKK Uyumlu Veri Saklama ve İmha',
  'Veritabanı Yedekleme (Oracle, MSSQL)', 'Sanallaştırma Ortamı Yedekleme',
  'Marka Bağımsız Yedekleme Yazılımı', '7/24 Yedekleme İzleme ve Alarm',
]

const faqs = [
  { q: '3-2-1 yedekleme kuralı nedir ve uygulanmalı mıdır?', a: '3-2-1 kuralı: En az 3 kopya, 2 farklı ortam, 1 tesis dışı depolama. Günümüzde bu kural 3-2-1-1-0 olarak gelişmiştir; ek olarak 1 değiştirilemez (immutable) kopya ve 0 hata ile doğrulanmış yedek hedeflenmektedir. Kurumsal veri koruma için bu standartı esas alıyoruz.' },
  { q: 'RTO ve RPO hedeflerimi nasıl belirlemeliyim?', a: 'RTO (sistemi ne kadar sürede ayağa kaldırmalıyım) ve RPO (ne kadar veri kaybını tolere edebilirim) hedefleri; iş süreci kritikliği, yasal zorunluluklar ve maliyet dengesiyle belirlenir. Ücretsiz iş etki analizi (BIA) sürecimizde bu değerleri sizinle birlikte belirliyoruz.' },
  { q: 'Yedeklerimizin çalışıp çalışmadığını nasıl test edebiliriz?', a: 'Yedek doğrulaması (backup verification) ve geri yükleme testleri düzenli yapılmalıdır. Otomatik doğrulama mekanizmaları ve periyodik DR tatbikatlarıyla yedeklerin gerçekte çalışır olduğunu garanti ediyoruz.' },
  { q: 'KVKK kapsamında veri yedekleme ve imha süreçleri nasıl yönetilmelidir?', a: 'KVKK gereksinimlerine göre; kişisel verilerin belirli saklama sürelerini aşmaması, süre dolumunda güvenli imha edilmesi ve bu süreçlerin loglanması zorunludur. Yedekleme politikalarınızı KVKK uyumlu olarak tasarlıyoruz.' },
]

export default function Client() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div style={{ background: '#080C14', color: '#F0F4FF' }}>
        <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #080C14 0%, #001A10 100%)' }}>
          <div className="absolute inset-0 bg-grid-slate bg-grid-60 opacity-100" />
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <nav className="flex items-center gap-1 text-xs mb-5" style={{ color: '#3D4A66' }}>
                  <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link><span className="mx-1">›</span>
                  <Link href="/hizmetler" className="hover:text-accent transition-colors">Hizmetler</Link><span className="mx-1">›</span>
                  <span style={{ color: '#6B7A99' }}>Backup &amp; Veri Koruma</span>
                </nav>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(57,255,176,0.1)' }}><HardDrive size={20} style={{ color: '#39FFB0' }} /></span>
                  <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#00FF87' }}>Backup &amp; Veri Koruma</span>
                </div>
                <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight mb-5 leading-[1.08]">
                  Verilerinizi Her Senaryoda Koruyan{' '}
                  <span style={{ background: 'linear-gradient(135deg, #39FFB0 0%, #0D72FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Kapsamlı Yedekleme</span>{' '}
                  ve Felaket Kurtarma
                </h1>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#A8B4CC' }}>
                  Disk, bant ve bulut tabanlı hibrit yedeklemeden DR planlamasına, iş sürekliliğinden KVKK uyumlu arşivlemeye — <strong style={{ color: '#F0F4FF' }}>marka bağımsız, ihtiyaca özel</strong> veri koruma çözümleri.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/iletisim" className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-black hover:scale-105 transition-all" style={{ background: '#00FF87', boxShadow: '0 0 25px rgba(0,255,135,0.4)' }}>
                    Veri Koruma Stratejisi Oluşturalım <ArrowRight size={16} />
                  </Link>
                  <Link href="/iletisim" className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold border border-border hover:border-accent/40 transition-all" style={{ background: 'rgba(255,255,255,0.04)', color: '#F0F4FF' }}>
                    RTO/RPO Analizi İste
                  </Link>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative rounded-3xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=550&fit=crop&q=85" alt="Kurumsal veri yedekleme ve depolama sistemleri" width={800} height={550} className="w-full object-cover rounded-3xl" style={{ filter: 'brightness(0.75) saturate(1.1)' }} priority />
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(57,255,176,0.12) 0%, transparent 60%)' }} />
                <div className="absolute bottom-0 inset-x-0 rounded-b-3xl p-5" style={{ background: 'linear-gradient(to top, rgba(8,12,20,0.95) 0%, transparent 100%)' }}>
                  <p className="text-sm font-semibold" style={{ color: '#00FF87' }}>✓ KVKK Uyumlu • 3-2-1-1-0 Yedekleme Standardı</p>
                  <p className="text-xs mt-1" style={{ color: '#A8B4CC' }}>Otomatik doğrulama ile yedek bütünlük güvencesi</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Neden Kritik */}
        <section className="py-16" style={{ background: '#0D1117' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { value: '%60', label: 'Veri kaybı yaşayan şirketlerin 6 ay içinde kapandığı tahmin edilmektedir', note: 'Forrester Research' },
                { value: '4 saat', label: 'Ortalama kabul edilebilir kesinti süresi (RTO) — plansız sistemlerde çok daha uzun', note: 'IDC Araştırması' },
                { value: '%93', label: 'Fidye yazılımı saldırılarının yedekleri de hedef aldığı vakalar', note: 'Veeam 2024 Raporu' },
              ].map(({ value, label, note }) => (
                <div key={value} className="p-6 rounded-2xl border border-border text-center" style={{ background: '#080C14' }}>
                  <span className="font-display font-bold text-4xl block mb-2" style={{ color: '#39FFB0' }}>{value}</span>
                  <p className="text-sm mb-2" style={{ color: '#A8B4CC' }}>{label}</p>
                  <p className="text-xs font-medium" style={{ color: '#3D4A66' }}>{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-canvas">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4" style={{ color: '#F0F4FF' }}>
                Kapsamlı Veri Koruma <span style={{ color: '#00FF87' }}>Hizmet Alanlarımız</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-2xl border border-border hover:-translate-y-1 transition-all" style={{ background: '#0D1117' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(57,255,176,0.08)' }}><Icon size={20} style={{ color: '#39FFB0' }} /></div>
                  <h3 className="font-display font-bold text-[15px] mb-2" style={{ color: '#F0F4FF' }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7A99' }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: '#0D1117' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-display font-bold text-3xl mb-2" style={{ color: '#F0F4FF' }}>Hizmet Kapsamımız</h2>
                <p className="text-sm mb-8" style={{ color: '#6B7A99' }}>Veri korumanın her boyutunda uçtan uca hizmet sunuyoruz.</p>
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
                  <Image src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=700&h=380&fit=crop&q=85" alt="DR tatbikatı ve felaket kurtarma planlaması" width={700} height={380} className="w-full object-cover rounded-3xl" style={{ filter: 'brightness(0.72)' }} />
                  <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(57,255,176,0.1) 0%, transparent 60%)' }} />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-bold" style={{ color: '#00FF87' }}>Düzenli DR Tatbikatı ile Gerçek Güvence</p>
                    <p className="text-xs mt-1" style={{ color: '#A8B4CC' }}>Kağıt üstünde kalmayan, test edilmiş felaket kurtarma planı</p>
                  </div>
                </div>
                <div className="rounded-2xl p-6 border" style={{ background: 'rgba(0,255,135,0.04)', borderColor: 'rgba(0,255,135,0.2)' }}>
                  <Lock size={20} style={{ color: '#00FF87', marginBottom: 10 }} />
                  <h3 className="font-display font-bold text-[16px] mb-2" style={{ color: '#F0F4FF' }}>Marka Bağımsız Yedekleme Yaklaşımı</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#A8B4CC' }}>
                    Yedekleme çözümlerinde belirli bir üreticiye bağlı kalmadan, ihtiyacınıza en uygun yazılım ve donanımda <strong style={{ color: '#00FF87' }}>uçtan uca destek, projelendirme ve satış hizmeti</strong> sunuyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-canvas">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-3 text-center" style={{ color: '#F0F4FF' }}>Sık Sorulan Sorular</h2>
            <p className="text-center text-sm mb-10" style={{ color: '#6B7A99' }}>Veri yedekleme ve felaket kurtarma hakkında en çok merak edilen konular</p>
            <div className="space-y-3">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group rounded-2xl border border-border p-6 cursor-pointer" style={{ background: '#0D1117' }}>
                  <summary className="font-semibold text-[15px] list-none flex items-center justify-between gap-4" style={{ color: '#F0F4FF' }}>
                    {q}<span className="text-accent flex-shrink-0 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: '#A8B4CC' }}>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: 'linear-gradient(135deg, #000C20 0%, #001A10 50%, #000C20 100%)' }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <Zap size={32} style={{ color: '#00FF87', margin: '0 auto 16px' }} />
            <h2 className="font-display font-bold text-3xl mb-4" style={{ color: '#F0F4FF' }}>Verilerinizi Korumaya Hemen Başlayın</h2>
            <p className="mb-8 text-lg" style={{ color: '#A8B4CC' }}>Ücretsiz veri koruma değerlendirmemizde mevcut yedekleme altyapınızı analiz ediyor, boşlukları tespit ediyor ve somut öneri sunuyoruz.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-black hover:scale-105 transition-all" style={{ background: '#00FF87', boxShadow: '0 0 30px rgba(0,255,135,0.4)' }}>
                Ücretsiz Veri Koruma Analizi <ArrowRight size={16} />
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
