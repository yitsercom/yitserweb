'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Cloud, CheckCircle2, ArrowRight, Layers, GitBranch, TrendingUp, RefreshCw, Lock, Zap, Clock } from 'lucide-react'

const schemaData = { '@context': 'https://schema.org', '@type': 'Service', name: 'Hibrit Bulut ve Sanallaştırma Çözümleri', provider: { '@type': 'Organization', name: 'Yitser Teknoloji', url: 'https://yitser.com' }, description: 'Hibrit bulut stratejisi, cloud migration, VMware sanallaştırma ve çoklu bulut yönetimi.', areaServed: 'Turkey', serviceType: 'Cloud Services' }

const features = [
  { icon: Layers,     title: 'Hibrit Bulut Mimarisi Tasarımı',  desc: 'On-premise altyapı ile public/private cloud platformlarını sorunsuz entegre eden, veri egemenliğini ve uyumluluğu koruyan hibrit mimari tasarımı ve implementasyonu.' },
  { icon: GitBranch,  title: 'Çoklu Bulut (Multi-Cloud) Yönetimi', desc: 'AWS, Azure, Google Cloud ve yerli bulut platformları arasında iş yükü optimizasyonu, maliyet kontrolü, merkezi politika ve güvenlik yönetimi.' },
  { icon: TrendingUp, title: 'Bulut Geçişi (Cloud Migration)',   desc: 'Mevcut altyapının buluta taşınması için strateji belirleme, lift-and-shift, refactoring, re-platforming ve re-architecting seçenekleriyle risk minimizasyonu.' },
  { icon: RefreshCw,  title: 'Yönetilen Bulut Servisleri (MSP)', desc: '7/24 bulut altyapısı izleme, otomatik ölçekleme yönetimi, maliyet optimizasyonu (FinOps) ve performans raporlaması ile operasyonel yükü azaltın.' },
  { icon: Lock,       title: 'Bulut Güvenliği (CSPM/CNAPP)',    desc: 'Cloud Security Posture Management, IAM politika denetimi, veri şifreleme, güvenlik açığı tarama ve uyumluluk raporlaması ile güvenli bulut ortamı.' },
  { icon: Zap,        title: 'Container ve Kubernetes Platformu', desc: 'Docker konteyner altyapısı, Kubernetes cluster kurulumu (EKS/AKS/GKE/on-prem), Helm chart yönetimi, CI/CD entegrasyonu ve uygulama modernizasyonu.' },
]

const capabilities = [
  'VMware vSphere / Hyper-V Sanallaştırma', 'Hibrit Bulut Strateji Danışmanlığı',
  'Cloud Migration Planlama ve Uygulama', 'AWS / Azure / Google Cloud Entegrasyonu',
  'Container ve Kubernetes Kurulumu', 'FinOps — Bulut Maliyet Optimizasyonu',
  'Yönetilen Bulut Servisleri (MSP)', 'Bulut Güvenliği CSPM / CNAPP',
  'DR (Felaket Kurtarma) Bulut Çözümleri', 'Cloud Native Uygulama Danışmanlığı',
  'Marka Bağımsız Platform Seçimi', 'Eğitim ve Yetkinlik Transferi',
]

const faqs = [
  { q: 'Hangi workload\'lar buluta, hangileri on-premise kalmalıdır?', a: 'Bu karar; veri egemenliği gereksinimleri, KVKK kısıtlamaları, gecikme hassasiyeti, lisans maliyetleri ve ölçekleme ihtiyacına göre şekillenir. Fizibilite sürecimizde her iş yükünü ayrı değerlendiriyor, hibrit mimari önerimizi maliyet-fayda analizi ile destekliyoruz.' },
  { q: 'Buluta geçiş üretim sistemlerini etkiler mi?', a: 'Doğru planlanan geçiş projesinde minimum veya sıfır kesinti hedeflenir. Blue-green deployment, shadow migration ve aşamalı geçiş teknikleriyle üretim sürekliliği sağlanır.' },
  { q: 'Bulut maliyetlerimizi nasıl optimize edebiliriz?', a: 'FinOps yaklaşımımızla; reserved instance satın alma optimizasyonu, kullanılmayan kaynak temizliği, otomatik ölçekleme yapılandırması ve tag-based maliyet raporlaması ile bulut harcamalarınızı %20–40 azaltabiliyoruz.' },
  { q: 'VMware sanallaştırmadan buluta geçiş nasıl yapılır?', a: 'VMware ortamınızı değerlendiriyor, iş yüklerini analiz ediyor ve aşamalı geçiş planı hazırlıyoruz. Lift-and-shift ile hızlı geçiş veya yeniden mimari tasarım seçeneklerini karşılaştırmalı sunuyoruz.' },
]

export default function Client() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div style={{ background: '#080C14', color: '#F0F4FF' }}>
        <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #080C14 0%, #001025 100%)' }}>
          <div className="absolute inset-0 bg-grid-slate bg-grid-60 opacity-100" />
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <nav className="flex items-center gap-1 text-xs mb-5" style={{ color: '#3D4A66' }}>
                  <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link><span className="mx-1">›</span>
                  <Link href="/hizmetler" className="hover:text-accent transition-colors">Hizmetler</Link><span className="mx-1">›</span>
                  <span style={{ color: '#6B7A99' }}>Cloud &amp; Sanallaştırma</span>
                </nav>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(87,168,255,0.1)' }}><Cloud size={20} style={{ color: '#57A8FF' }} /></span>
                  <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#00FF87' }}>Cloud &amp; Sanallaştırma</span>
                </div>
                <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight mb-5 leading-[1.08]">
                  Esnek ve Ölçeklenebilir{' '}
                  <span style={{ background: 'linear-gradient(135deg, #57A8FF 0%, #00FF87 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Hibrit Bulut</span>{' '}
                  Dönüşümü
                </h1>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#A8B4CC' }}>
                  Sanallaştırmadan bulut geçişine, çoklu bulut yönetiminden yönetilen servislere — <strong style={{ color: '#F0F4FF' }}>marka bağımsız, stratejik bulut dönüşüm ortağınız</strong>. AWS, Azure, GCP ve yerli bulut platformlarında bağımsız danışmanlık.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/iletisim" className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-black hover:scale-105 transition-all" style={{ background: '#00FF87', boxShadow: '0 0 25px rgba(0,255,135,0.4)' }}>
                    Bulut Stratejinizi Planlayalım <ArrowRight size={16} />
                  </Link>
                  <Link href="/iletisim" className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold border border-border hover:border-accent/40 transition-all" style={{ background: 'rgba(255,255,255,0.04)', color: '#F0F4FF' }}>
                    Migration Assessment Al
                  </Link>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative rounded-3xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=550&fit=crop&q=85" alt="Hibrit bulut altyapısı — veri merkezi ve bulut entegrasyonu" width={800} height={550} className="w-full object-cover rounded-3xl" style={{ filter: 'brightness(0.7) saturate(1.3) hue-rotate(15deg)' }} priority />
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(87,168,255,0.2) 0%, transparent 60%)' }} />
                <div className="absolute bottom-0 inset-x-0 rounded-b-3xl p-5" style={{ background: 'linear-gradient(to top, rgba(8,12,20,0.95) 0%, transparent 100%)' }}>
                  <p className="text-sm font-semibold" style={{ color: '#00FF87' }}>✓ AWS • Azure • GCP • Yerli Bulut Platformları</p>
                  <p className="text-xs mt-1" style={{ color: '#A8B4CC' }}>Marka bağımsız, bağımsız platform değerlendirmesi</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: '#0D1117' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4" style={{ color: '#F0F4FF' }}>
                Kapsamlı Bulut &amp; Sanallaştırma <span style={{ color: '#00FF87' }}>Hizmet Alanlarımız</span>
              </h2>
              <p className="text-lg" style={{ color: '#A8B4CC' }}>Sanallaştırmadan native cloud'a, tek uygulama geçişinden tüm veri merkezi migrasyonuna kadar her ölçekte uzmanlık.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-2xl border border-border hover:-translate-y-1 transition-all" style={{ background: '#080C14' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(87,168,255,0.1)' }}><Icon size={20} style={{ color: '#57A8FF' }} /></div>
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
                <h2 className="font-display font-bold text-3xl mb-2" style={{ color: '#F0F4FF' }}>Hizmet Kapsamımız</h2>
                <p className="text-sm mb-8" style={{ color: '#6B7A99' }}>Bulut dönüşümünün her aşamasında uçtan uca hizmet sunuyoruz.</p>
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
                  <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&h=380&fit=crop&q=85" alt="Kubernetes container orchestration ve cloud native uygulama" width={700} height={380} className="w-full object-cover rounded-3xl" style={{ filter: 'brightness(0.7) hue-rotate(20deg)' }} />
                  <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(87,168,255,0.15) 0%, transparent 60%)' }} />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-bold" style={{ color: '#00FF87' }}>FinOps ile Bulut Maliyetlerini %20–40 Azaltın</p>
                    <p className="text-xs mt-1" style={{ color: '#A8B4CC' }}>Reserved instance optimizasyonu ve otomatik ölçekleme dahil</p>
                  </div>
                </div>
                <div className="rounded-2xl p-6 border" style={{ background: 'rgba(0,255,135,0.04)', borderColor: 'rgba(0,255,135,0.2)' }}>
                  <Lock size={20} style={{ color: '#00FF87', marginBottom: 10 }} />
                  <h3 className="font-display font-bold text-[16px] mb-2" style={{ color: '#F0F4FF' }}>Marka Bağımsız Platform Seçimi</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#A8B4CC' }}>
                    Bulut platformu seçiminde hiçbir vendöre bağlı değiliz. <strong style={{ color: '#00FF87' }}>AWS, Azure, GCP veya yerli platformlar</strong> arasında kurumunuzun ihtiyacına, uyumluluk gereksinimlerine ve bütçesine en uygun olanı tarafsızca değerlendiriyor ve öneriyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: '#0D1117' }}>
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-3 text-center" style={{ color: '#F0F4FF' }}>Sık Sorulan Sorular</h2>
            <p className="text-center text-sm mb-10" style={{ color: '#6B7A99' }}>Cloud migration ve sanallaştırma hakkında en çok merak edilen konular</p>
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

        <section className="py-20" style={{ background: 'linear-gradient(135deg, #000C20 0%, #001025 50%, #000C20 100%)' }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <Zap size={32} style={{ color: '#00FF87', margin: '0 auto 16px' }} />
            <h2 className="font-display font-bold text-3xl mb-4" style={{ color: '#F0F4FF' }}>Bulut Yolculuğunuzu Bugün Başlatın</h2>
            <p className="mb-8 text-lg" style={{ color: '#A8B4CC' }}>Ücretsiz cloud readiness assessment ile mevcut altyapınızı buluta hazırlık açısından değerlendiriyor, somut yol haritası sunuyoruz.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-black hover:scale-105 transition-all" style={{ background: '#00FF87', boxShadow: '0 0 30px rgba(0,255,135,0.4)' }}>
                Ücretsiz Cloud Assessment <ArrowRight size={16} />
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
