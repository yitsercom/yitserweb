'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Shield, CheckCircle2, ArrowRight, Eye, Lock, AlertTriangle, FileCheck, Search, Users, Zap, Clock } from 'lucide-react'

const schemaData = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Kurumsal Siber Güvenlik Danışmanlığı ve SOC Hizmetleri',
  provider: { '@type': 'Organization', name: 'Yitser Teknoloji', url: 'https://yitser.com' },
  description: 'SOC kurulum ve yönetimi, penetrasyon testi, SIEM entegrasyonu, ISO 27001 ve KVKK uyumluluk danışmanlığı.',
  areaServed: 'Turkey', serviceType: 'Cybersecurity',
}

const features = [
  { icon: Eye,           title: 'SOC ve 7/24 Tehdit İzleme',        desc: 'SIEM tabanlı güvenlik operasyon merkezi kurulumu ve yönetimi, proaktif tehdit avı (threat hunting), davranışsal anomali tespiti ve gerçek zamanlı olay müdahalesi (IR).' },
  { icon: Lock,          title: 'Sıfır Güven (Zero Trust) Mimarisi', desc: 'ZTNA, kimlik tabanlı erişim yönetimi (IAM/PAM), çok faktörlü kimlik doğrulama (MFA), mikro segmentasyon ve sürekli doğrulama ilkesiyle modern savunma modeli.' },
  { icon: Search,        title: 'Sızma Testi ve Zafiyet Analizi',    desc: 'Ağ, web uygulaması, mobil uygulama ve sosyal mühendislik testleriyle güvenlik açıklarını saldırganlardan önce keşfedin. OWASP Top 10 ve CVE bazlı kapsamlı analiz.' },
  { icon: FileCheck,     title: 'ISO 27001 ve KVKK Danışmanlığı',    desc: 'Bilgi güvenliği yönetim sistemi (BGYS) kurulumu, boşluk analizi, risk değerlendirmesi, belgelendirme hazırlığı ve KVKK teknik uyumluluk hizmetleri.' },
  { icon: AlertTriangle, title: 'Olay Müdahale ve Adli Analiz',      desc: 'Siber saldırı sonrası hızlı içerme ve eradikasyon, dijital adli analiz, kök neden tespiti, kanıt zinciri yönetimi ve kapsamlı olay raporu.' },
  { icon: Users,         title: 'Güvenlik Farkındalık Eğitimleri',   desc: 'Phishing simülasyonu, çalışan güvenlik bilinci eğitimi, sosyal mühendislik farkındalık programları ve CISO danışmanlığı.' },
]

const capabilities = [
  'Güvenlik Mimarisi Tasarımı ve Danışmanlığı',
  'SIEM Platformu Kurulum ve Yönetimi',
  'SOC as a Service (Yönetilen SOC / MDR)',
  'Penetrasyon Testi (Blackbox / Whitebox / Greybox)',
  'Red Team / Blue Team / Purple Team Tatbikatları',
  'Uç Nokta Güvenliği EDR / XDR Entegrasyonu',
  'E-posta Güvenliği ve Anti-Phishing',
  'Kimlik ve Erişim Yönetimi IAM / PAM',
  'DLP (Veri Sızıntısı Önleme) Çözümleri',
  'Zafiyet Yönetimi ve Patch Danışmanlığı',
  'ISO 27001 Belgelendirme Hazırlığı',
  'KVKK Teknik Tedbirler Uyumluluk Hizmetleri',
]

const stats = [
  { value: '15 dk', label: 'Ortalama tehdit tespit süresi', note: 'SOC destekli' },
  { value: '%87',   label: 'Saldırılar phishing ile başlar', note: 'Farkındalık kritik' },
  { value: '₺4.5M', label: 'Ort. veri ihlali maliyeti TR', note: 'IBM 2024 Raporu' },
]

const faqs = [
  { q: 'Penetrasyon testi (pentest) ne kadar sıklıkla yapılmalıdır?', a: 'Kurumsal ağ için yılda en az bir kez kapsamlı pentest önerilir. Web uygulamaları ve kritik sistemler için 6 ayda bir değerlendirme idealdir. Önemli değişiklikler (yeni uygulama, büyük güncelleme) sonrasında da test yapılmalıdır.' },
  { q: 'SOC hizmetini iç kaynaklarla kurmak mı, dışarıdan almak mı avantajlı?', a: 'İç SOC kurulum maliyeti yüksektir; 7/24 uzman ekip, lisanslar ve altyapı gerektirir. Yönetilen SOC (MDR) hizmeti daha hızlı devreye alınabilir, maliyet efektiftir ve Yitser\'in deneyimli ekibinden yararlanmanızı sağlar.' },
  { q: 'KVKK için hangi teknik tedbirler zorunludur?', a: 'Erişim log yönetimi, şifreleme, güçlü kimlik doğrulama, güvenli veri imha, ağ güvenlik önlemleri ve düzenli güvenlik testleri zorunlu teknik tedbirler arasındadır. Kurumunuza özel uyumluluk yol haritası çıkarıyoruz.' },
  { q: 'Siber güvenlik hizmeti almak için şirketimin büyük olması gerekiyor mu?', a: 'Hayır. Siber saldırılar ölçek gözetmez; aksine KOBİ\'ler daha sık hedef alınır. Kurumunuzun büyüklüğüne ve risk profiline uygun, ölçeklenebilir güvenlik paketleri sunuyoruz.' },
  { q: 'ISO 27001 belgesi almak zorunlu mu?', a: 'Yasal zorunluluk olmamakla birlikte; büyük kurumsal müşteriler, bankalar ve kamu sektörüyle çalışan firmalar için fiilen zorunlu hale gelmiştir. Aynı zamanda KVKK uyumluluk göstergesi olarak da kabul görmektedir.' },
]

export default function SiberGuvenlikClient() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div style={{ background: '#080C14', color: '#F0F4FF' }}>

        {/* HERO */}
        <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #080C14 0%, #0A0018 100%)' }}>
          <div className="absolute inset-0 bg-grid-slate bg-grid-60 opacity-100" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(0,255,135,0.08) 0%, transparent 70%)' }} />
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <nav className="flex items-center gap-1 text-xs mb-5" style={{ color: '#3D4A66' }}>
                  <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
                  <span className="mx-1">›</span>
                  <Link href="/hizmetler" className="hover:text-accent transition-colors">Hizmetler</Link>
                  <span className="mx-1">›</span>
                  <span style={{ color: '#6B7A99' }}>Siber Güvenlik</span>
                </nav>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,255,135,0.1)' }}>
                    <Shield size={20} style={{ color: '#00FF87' }} />
                  </span>
                  <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#00FF87' }}>Siber Güvenlik</span>
                </div>
                <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight mb-5 leading-[1.08]">
                  Dijital Varlıklarınızı Koruyan{' '}
                  <span style={{ background: 'linear-gradient(135deg, #00FF87 0%, #0D72FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Çok Katmanlı
                  </span>{' '}
                  Siber Güvenlik Mimarisi
                </h1>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#A8B4CC' }}>
                  Tehdit istihbaratından uyumluluk yönetimine, SOC'tan penetrasyon testine — <strong style={{ color: '#F0F4FF' }}>marka bağımsız, proaktif siber güvenlik</strong> yaklaşımıyla kurumunuzu her noktadan koruyoruz.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/iletisim" className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-black hover:scale-105 transition-all" style={{ background: '#00FF87', boxShadow: '0 0 25px rgba(0,255,135,0.4)' }}>
                    Ücretsiz Güvenlik Değerlendirmesi <ArrowRight size={16} />
                  </Link>
                  <Link href="/iletisim" className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold border border-border hover:border-accent/40 transition-all" style={{ background: 'rgba(255,255,255,0.04)', color: '#F0F4FF' }}>
                    Pentest Teklifi İste
                  </Link>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative rounded-3xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=550&fit=crop&q=85" alt="Siber güvenlik SOC merkezi — tehdit izleme ekranları" width={800} height={550} className="w-full object-cover rounded-3xl" style={{ filter: 'brightness(0.7) saturate(1.2)' }} priority />
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(0,255,135,0.15) 0%, transparent 60%)' }} />
                <div className="absolute bottom-0 inset-x-0 rounded-b-3xl p-5" style={{ background: 'linear-gradient(to top, rgba(8,12,20,0.95) 0%, transparent 100%)' }}>
                  <p className="text-sm font-semibold" style={{ color: '#00FF87' }}>✓ 7/24 SOC Hizmetleri — Ortalama Tespit: &lt;15 dk</p>
                  <p className="text-xs mt-1" style={{ color: '#A8B4CC' }}>ISO 27001 uyumlu süreçler ve KVKK teknik tedbirler</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-10" style={{ background: '#0D1117' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-3 gap-px rounded-2xl overflow-hidden" style={{ background: '#1A2540' }}>
              {stats.map(({ value, label, note }) => (
                <div key={value} className="px-8 py-8 text-center" style={{ background: '#080C14' }}>
                  <span className="font-display font-bold text-3xl block mb-1" style={{ color: '#00FF87' }}>{value}</span>
                  <p className="text-sm mb-1" style={{ color: '#A8B4CC' }}>{label}</p>
                  <p className="text-xs" style={{ color: '#3D4A66' }}>{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEDEN KRİTİK */}
        <section className="py-20 bg-canvas">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-display font-bold text-3xl lg:text-4xl mb-5 leading-tight" style={{ color: '#F0F4FF' }}>
                  Siber Tehditler Büyüyor — <span style={{ color: '#00FF87' }}>Hazırlıklı mısınız?</span>
                </h2>
                <p className="text-lg leading-relaxed mb-4" style={{ color: '#A8B4CC' }}>
                  Türkiye'deki siber saldırı sayısı her yıl ortalama <strong style={{ color: '#F0F4FF' }}>%65 artmaktadır</strong>. Fidye yazılımı, phishing ve tedarik zinciri saldırıları; KOBİ'lerden büyük kuruluşlara kadar tüm segmentleri hedef almaktadır.
                </p>
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#A8B4CC' }}>
                  IBM'in 2024 raporuna göre Türkiye'de ortalama veri ihlali maliyeti <strong style={{ color: '#F0F4FF' }}>₺4.5 milyona</strong> ulaşmıştır. Buna yasal yaptırımlar, itibar kaybı ve operasyonel kesinti dahil değildir.
                </p>
                <div className="space-y-3">
                  {['Proaktif tehdit tespiti ile reaktif yaklaşımdan önce önlem', 'ISO 27001 ve KVKK uyumluluk ile yasal güvence', 'Çalışan farkındalığı ile en zayıf halkanın güçlendirilmesi', 'Olay müdahale planı ile minimum hasar ve hızlı toparlanma'].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm" style={{ color: '#A8B4CC' }}>
                      <CheckCircle2 size={15} style={{ color: '#00FF87', flexShrink: 0 }} />{item}
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&h=480&fit=crop&q=85" alt="Siber güvenlik zafiyet analizi ve penetrasyon testi" width={700} height={480} className="w-full object-cover rounded-3xl" style={{ filter: 'brightness(0.75) saturate(1.2)' }} />
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(0,255,135,0.08) 0%, transparent 60%)' }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ÖZELLİKLER */}
        <section className="py-20" style={{ background: '#0D1117' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4" style={{ color: '#F0F4FF' }}>
                Kapsamlı Siber Güvenlik <span style={{ color: '#00FF87' }}>Hizmet Alanlarımız</span>
              </h2>
              <p className="text-lg" style={{ color: '#A8B4CC' }}>Saldırı yüzeyinizi minimize eden, savunma derinliği oluşturan bütünleşik güvenlik yaklaşımı.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-2xl border border-border hover:-translate-y-1 transition-all" style={{ background: '#080C14' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(0,255,135,0.08)' }}>
                    <Icon size={20} style={{ color: '#00FF87' }} />
                  </div>
                  <h3 className="font-display font-bold text-[15px] mb-2" style={{ color: '#F0F4FF' }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6B7A99' }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* KAPSAM + GÖRSEL */}
        <section className="py-20 bg-canvas">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-display font-bold text-3xl mb-2" style={{ color: '#F0F4FF' }}>Hizmet Kapsamımız</h2>
                <p className="text-sm mb-8" style={{ color: '#6B7A99' }}>Siber güvenliğin her katmanında uçtan uca hizmet sunuyoruz.</p>
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
                  <Image src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=700&h=380&fit=crop&q=85" alt="Güvenlik duvarı ve ağ güvenlik izleme sistemi" width={700} height={380} className="w-full object-cover rounded-3xl" style={{ filter: 'brightness(0.72)' }} />
                  <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(0,255,135,0.1) 0%, transparent 60%)' }} />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-bold" style={{ color: '#00FF87' }}>Tehdit İstihbaratı Tabanlı Koruma</p>
                    <p className="text-xs mt-1" style={{ color: '#A8B4CC' }}>Gerçek zamanlı tehdit besleme ve makine öğrenimi destekli anomali tespiti</p>
                  </div>
                </div>
                <div className="rounded-2xl p-6 border" style={{ background: 'rgba(0,255,135,0.04)', borderColor: 'rgba(0,255,135,0.2)' }}>
                  <Lock size={20} style={{ color: '#00FF87', marginBottom: 10 }} />
                  <h3 className="font-display font-bold text-[16px] mb-2" style={{ color: '#F0F4FF' }}>Marka Bağımsız Güvenlik Yaklaşımı</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#A8B4CC' }}>
                    Siber güvenlik çözümlerinde belirli bir üreticinin satış kanalı değil, <strong style={{ color: '#00FF87' }}>sizin çıkarınızı önde tutan bağımsız danışmanınızız</strong>. Her güvenlik katmanı için en etkin çözümü tarafsız olarak değerlendiriyor, temin ediyor ve uyguluyoruz.
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
            <p className="text-center text-sm mb-10" style={{ color: '#6B7A99' }}>Kurumsal siber güvenlik hakkında en çok merak edilen konular</p>
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
        <section className="py-20" style={{ background: 'linear-gradient(135deg, #000818 0%, #0A001A 50%, #000818 100%)' }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <Zap size={32} style={{ color: '#00FF87', margin: '0 auto 16px' }} />
            <h2 className="font-display font-bold text-3xl mb-4" style={{ color: '#F0F4FF' }}>Kurumunuzu Siber Tehditlere Karşı Koruyun</h2>
            <p className="mb-8 text-lg" style={{ color: '#A8B4CC' }}>Ücretsiz güvenlik değerlendirmemizle mevcut açıklarınızı tespit edin, öncelikli aksiyon planını ve ROI hesabını alın.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-black hover:scale-105 transition-all" style={{ background: '#00FF87', boxShadow: '0 0 30px rgba(0,255,135,0.4)' }}>
                Ücretsiz Güvenlik Analizi <ArrowRight size={16} />
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
