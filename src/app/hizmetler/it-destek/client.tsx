'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Headphones, CheckCircle2, ArrowRight, LifeBuoy, Monitor, Activity, Users, Settings, FileText, Zap, Clock, Lock } from 'lucide-react'

const schemaData = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Kurumsal IT Destek ve Yönetilen BT Hizmetleri',
  provider: { '@type': 'Organization', name: 'Yitser Teknoloji', url: 'https://yitser.com' },
  description: 'L1/L2/L3 helpdesk, 7/24 NOC izleme, saha teknik destek ve yönetilen BT hizmetleri. SLA güvenceli kurumsal IT operasyonları.',
  areaServed: 'Turkey', serviceType: 'Managed IT Services',
}

const features = [
  { icon: LifeBuoy, title: 'L1 / L2 / L3 Helpdesk Hizmetleri', desc: 'Telefon, e-posta ve ticketing sistemi üzerinden çok seviyeli teknik destek; kullanıcı sorunlarından altyapı arızalarına kadar SLA güvenceli çözüm süreci.' },
  { icon: Monitor,  title: '7/24 NOC — Altyapı İzleme',       desc: 'Sunucu, ağ, güvenlik ve uygulama katmanlarında proaktif izleme, anlık alarm yönetimi ve sorunu siz fark etmeden çözme kapasitesi.' },
  { icon: Activity, title: 'Yönetilen IT Hizmetleri (MSP)',    desc: 'Altyapınızın tamamını yönetilen servis modeliyle devralan ekibimiz; patch yönetimi, kapasite takibi ve performans raporlaması dahil.' },
  { icon: Users,    title: 'Saha Teknik Destek',               desc: 'İstanbul ve Türkiye genelinde yerinde teknik servis, donanım kurulum, bakım ve arıza müdahalesi. Anlaşmalı kurumlar için öncelikli SLA.' },
  { icon: Settings, title: 'IT Varlık Yönetimi (ITAM)',        desc: 'Donanım ve yazılım envanterinin merkezi takibi, lisans uyumluluk yönetimi, garanti ve bakım anlaşmaları ile yaşam döngüsü planlaması.' },
  { icon: FileText, title: 'IT Süreç ve Raporlama',            desc: 'ITIL temelli süreç tasarımı, periyodik altyapı sağlık raporları, SLA performans dashboard\'u ve yönetim özet raporları.' },
]

const capabilities = [
  'L1 / L2 / L3 Helpdesk Desteği', 'Uzaktan Masaüstü ve Erişim Desteği',
  'Saha Teknik Servis (İstanbul ve TR)', '7/24 NOC Altyapı İzleme',
  'Yönetilen IT Hizmetleri (MSP)', 'Patch ve Güncelleme Yönetimi',
  'IT Varlık ve Envanter Yönetimi', 'Lisans Uyumluluk Takibi',
  'SLA Tabanlı Hizmet Anlaşmaları', 'Servis Masası (ITSM) Yazılımı',
  'Periyodik Altyapı Sağlık Raporları', 'ITIL Süreç Danışmanlığı',
]

const stats = [
  { value: '%94',   label: 'İlk temas çözüm oranı (FCR)', note: 'L1 helpdesk ortalaması' },
  { value: '<2 sa', label: 'Kritik bilet yanıt süresi',   note: 'SLA güvenceli' },
  { value: '7/24',  label: 'NOC izleme ve destek',        note: '365 gün kesintisiz' },
]

const faqs = [
  { q: 'IT destek hizmetini içeriden mi, dışarıdan mı almak daha avantajlı?', a: 'İç IT departmanı kurulum ve işletme maliyeti yüksektir; uzman yetkinlik ve 7/24 kapsama sağlamak güçtür. Dışarıdan alınan yönetilen IT hizmetleri (MSP); daha düşük maliyet, daha geniş uzmanlık havuzu ve SLA güvencesi sunar. Hibrit modeller de mümkündür.' },
  { q: 'SLA nedir ve hangi süreleri kapsıyor?', a: 'SLA (Service Level Agreement), hizmet kalitesini ve müdahale sürelerini güvence altına alan sözleşmedir. Tipik olarak P1 (kritik) için <1 saat, P2 (yüksek) için <4 saat, P3 (normal) için <8 saat müdahale hedefi belirlenir. Kurumunuza özel SLA kurguluyoruz.' },
  { q: 'Türkiye genelinde saha desteği sunabiliyor musunuz?', a: 'Evet. İstanbul\'da doğrudan saha ekibimizin yanı sıra Türkiye genelinde anlaşmalı servis ağımız aracılığıyla yerinde teknik destek hizmeti sunuyoruz. Yurt içi saha kapsamını proje başında birlikte planlıyoruz.' },
  { q: 'Mevcut IT altyapımı yönetilen servise geçirmek ne kadar sürer?', a: 'Altyapı büyüklüğüne bağlı olarak tipik bir onboarding süreci 2–6 hafta arasında tamamlanır. Bu süreçte mevcut sistemler belgelenir, izleme araçları kurulur ve destek süreçleri tanımlanır. Geçiş süresince üretim kesintisi yaşanmaz.' },
  { q: 'IT destek ticketlarını nasıl takip edebiliriz?', a: 'ITSM platformumuz üzerinden açılan her bilete gerçek zamanlı erişim sağlanır. Haftalık ve aylık SLA raporları, çözüm süreleri, tekrar eden sorunlar ve trend analizleri düzenli olarak iletilir.' },
]

export default function ItDestekClient() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div style={{ background: '#080C14', color: '#F0F4FF' }}>

        {/* HERO */}
        <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #080C14 0%, #1A000A 100%)' }}>
          <div className="absolute inset-0 bg-grid-slate bg-grid-60 opacity-100" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(255,107,138,0.08) 0%, transparent 70%)' }} />
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <nav className="flex items-center gap-1 text-xs mb-5" style={{ color: '#3D4A66' }} aria-label="breadcrumb">
                  <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
                  <span className="mx-1">›</span>
                  <Link href="/hizmetler" className="hover:text-accent transition-colors">Hizmetler</Link>
                  <span className="mx-1">›</span>
                  <span style={{ color: '#6B7A99' }}>IT Destek Hizmetleri</span>
                </nav>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,107,138,0.1)' }}>
                    <Headphones size={20} style={{ color: '#FF6B8A' }} />
                  </span>
                  <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#00FF87' }}>IT Destek Hizmetleri</span>
                </div>
                <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight mb-5 leading-[1.08]">
                  Kurumsal BT Operasyonlarınızı{' '}
                  <span style={{ background: 'linear-gradient(135deg, #FF6B8A 0%, #0D72FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    SLA Güvenceli
                  </span>{' '}
                  Ekibimize Bırakın
                </h1>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#A8B4CC' }}>
                  L1/L2/L3 helpdesk'ten 7/24 NOC izlemeye, saha teknik destekten yönetilen IT hizmetlerine —
                  <strong style={{ color: '#F0F4FF' }}> kurumsal BT operasyonlarınız</strong> sertifikalı ekibimizin güvencesinde, iş süreçleriniz kesintisiz.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/iletisim"
                    className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-black hover:scale-105 transition-all"
                    style={{ background: '#00FF87', boxShadow: '0 0 25px rgba(0,255,135,0.4)' }}>
                    IT Destek Paketi Talep Et <ArrowRight size={16} />
                  </Link>
                  <Link href="/iletisim"
                    className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold border border-border hover:border-accent/40 transition-all"
                    style={{ background: 'rgba(255,255,255,0.04)', color: '#F0F4FF' }}>
                    Ücretsiz IT Denetimi Al
                  </Link>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=550&fit=crop&q=85"
                  alt="IT destek ekibi — kurumsal helpdesk ve teknik servis merkezi"
                  width={800} height={550}
                  className="w-full object-cover rounded-3xl"
                  style={{ filter: 'brightness(0.72) saturate(1.1)' }}
                  priority
                />
                <div className="absolute inset-0 rounded-3xl"
                  style={{ background: 'linear-gradient(135deg, rgba(255,107,138,0.15) 0%, transparent 60%)' }} />
                <div className="absolute bottom-0 inset-x-0 rounded-b-3xl p-5"
                  style={{ background: 'linear-gradient(to top, rgba(8,12,20,0.95) 0%, transparent 100%)' }}>
                  <p className="text-sm font-semibold" style={{ color: '#00FF87' }}>✓ SLA Güvenceli • 7/24 NOC • İstanbul &amp; Türkiye Geneli</p>
                  <p className="text-xs mt-1" style={{ color: '#A8B4CC' }}>ITIL temelli süreçler, düzenli performans raporlaması</p>
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
                  IT Operasyonları Neden <span style={{ color: '#00FF87' }}>Stratejik Öneme Sahiptir?</span>
                </h2>
                <p className="text-lg leading-relaxed mb-4" style={{ color: '#A8B4CC' }}>
                  Araştırmalar, çalışanların haftada ortalama <strong style={{ color: '#F0F4FF' }}>22 dakikasını</strong> IT sorunları nedeniyle verimsiz geçirdiğini göstermektedir. Yılda 250 çalışan için bu rakam yaklaşık <strong style={{ color: '#F0F4FF' }}>2.200 iş günü</strong> demektir.
                </p>
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#A8B4CC' }}>
                  Reaktif destek modeli yerine proaktif yönetilen IT hizmetleri; arıza sürelerini azaltır, çalışan verimliliğini artırır ve BT maliyetlerini öngörülebilir hale getirir.
                </p>
                <div className="space-y-3">
                  {[
                    'Proaktif izleme ile arızayı önceden önleme',
                    'SLA güvenceli müdahale süresi ve hesap verebilirlik',
                    'Çalışan verimliliğini artıran hızlı çözüm süreçleri',
                    'Öngörülebilir IT bütçesi ile maliyet kontrolü',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm" style={{ color: '#A8B4CC' }}>
                      <CheckCircle2 size={15} style={{ color: '#00FF87', flexShrink: 0 }} />{item}
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=480&fit=crop&q=85"
                  alt="Kurumsal IT destek ekibi çalışma ortamı"
                  width={700} height={480}
                  className="w-full object-cover rounded-3xl"
                  style={{ filter: 'brightness(0.72)' }}
                />
                <div className="absolute inset-0 rounded-3xl"
                  style={{ background: 'linear-gradient(135deg, rgba(0,255,135,0.06) 0%, transparent 60%)' }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ÖZELLİKLER */}
        <section className="py-20" style={{ background: '#0D1117' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4" style={{ color: '#F0F4FF' }}>
                Kapsamlı IT Destek <span style={{ color: '#00FF87' }}>Hizmet Alanlarımız</span>
              </h2>
              <p className="text-lg" style={{ color: '#A8B4CC' }}>
                Tek bir helpdesk bileti çözümünden tüm BT operasyonlarının yönetimine — kurumunuzun ihtiyacına göre ölçeklenebilir destek modeli.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-2xl border border-border hover:-translate-y-1 transition-all"
                  style={{ background: '#080C14' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(255,107,138,0.08)' }}>
                    <Icon size={20} style={{ color: '#FF6B8A' }} />
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
                <p className="text-sm mb-8" style={{ color: '#6B7A99' }}>IT desteğinin her katmanında uçtan uca hizmet sunuyoruz.</p>
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
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=700&h=380&fit=crop&q=85"
                    alt="NOC network operation center — 7/24 IT altyapı izleme"
                    width={700} height={380}
                    className="w-full object-cover rounded-3xl"
                    style={{ filter: 'brightness(0.72)' }}
                  />
                  <div className="absolute inset-0 rounded-3xl"
                    style={{ background: 'linear-gradient(135deg, rgba(255,107,138,0.1) 0%, transparent 60%)' }} />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-bold" style={{ color: '#00FF87' }}>7/24 NOC — Proaktif IT Altyapı İzleme</p>
                    <p className="text-xs mt-1" style={{ color: '#A8B4CC' }}>Sorunu siz fark etmeden tespit ediyor, çözüme kavuşturuyoruz</p>
                  </div>
                </div>
                <div className="rounded-2xl p-6 border" style={{ background: 'rgba(0,255,135,0.04)', borderColor: 'rgba(0,255,135,0.2)' }}>
                  <Lock size={20} style={{ color: '#00FF87', marginBottom: 10 }} />
                  <h3 className="font-display font-bold text-[16px] mb-2" style={{ color: '#F0F4FF' }}>Hibrit ve Esnek Destek Modelleri</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#A8B4CC' }}>
                    Tam dış kaynak (MSP), iç IT ekibinizi destekleyen ko-yönetim modeli veya proje bazlı destek —
                    <strong style={{ color: '#00FF87' }}> kurumunuzun ihtiyacına en uygun modeli birlikte belirliyor</strong>, ölçeklenebilir şekilde hayata geçiriyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HİZMET SEVİYELERİ */}
        <section className="py-20" style={{ background: '#0D1117' }}>
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-12 text-center" style={{ color: '#F0F4FF' }}>Destek Seviyelerimiz</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { tier: 'L1', title: 'Standart Destek', items: ['Telefon / E-posta helpdesk', 'Şifre sıfırlama ve kullanıcı sorunları', 'Yazıcı ve ofis ekipmanı sorunları', '08:00–18:00 çalışma saatleri'] },
                { tier: 'L2', title: 'Gelişmiş Destek', items: ['L1 kapsamı + uzak masaüstü', 'Ağ ve sistem sorunları çözümü', 'Güvenlik olay yönetimi', '7/24 kritik destek desteği'], highlighted: true },
                { tier: 'L3', title: 'MSP / NOC', items: ['L1+L2 kapsamı dahil', '7/24 proaktif NOC izleme', 'Tam altyapı yönetimi', 'Aylık raporlama ve QBR'] },
              ].map(({ tier, title, items, highlighted }) => (
                <div key={tier} className="rounded-2xl p-6 border transition-all"
                  style={{
                    background: highlighted ? 'rgba(0,255,135,0.05)' : '#080C14',
                    borderColor: highlighted ? 'rgba(0,255,135,0.3)' : '#1A2540',
                  }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-lg mb-4"
                    style={{ background: highlighted ? 'rgba(0,255,135,0.12)' : 'rgba(255,107,138,0.08)', color: highlighted ? '#00FF87' : '#FF6B8A' }}>
                    {tier}
                  </div>
                  <h3 className="font-display font-bold text-[16px] mb-4" style={{ color: '#F0F4FF' }}>{title}</h3>
                  <ul className="space-y-2.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: '#A8B4CC' }}>
                        <CheckCircle2 size={13} style={{ color: highlighted ? '#00FF87' : '#6B7A99', flexShrink: 0, marginTop: 2 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SSS */}
        <section className="py-20 bg-canvas">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-3 text-center" style={{ color: '#F0F4FF' }}>Sık Sorulan Sorular</h2>
            <p className="text-center text-sm mb-10" style={{ color: '#6B7A99' }}>Kurumsal IT destek ve yönetilen BT hizmetleri hakkında en çok merak edilen konular</p>
            <div className="space-y-3">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group rounded-2xl border border-border p-6 cursor-pointer" style={{ background: '#0D1117' }}>
                  <summary className="font-semibold text-[15px] list-none flex items-center justify-between gap-4" style={{ color: '#F0F4FF' }}>
                    {q}
                    <span className="text-accent flex-shrink-0 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: '#A8B4CC' }}>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" style={{ background: 'linear-gradient(135deg, #100008 0%, #1A000A 50%, #100008 100%)' }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <Zap size={32} style={{ color: '#00FF87', margin: '0 auto 16px' }} />
            <h2 className="font-display font-bold text-3xl mb-4" style={{ color: '#F0F4FF' }}>BT Operasyonlarınızı Güvence Altına Alın</h2>
            <p className="mb-8 text-lg" style={{ color: '#A8B4CC' }}>
              Ücretsiz IT altyapı denetimiyle mevcut durumunuzu analiz ediyor, size özel yönetilen IT hizmet paketi ve maliyet analizi sunuyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-black hover:scale-105 transition-all"
                style={{ background: '#00FF87', boxShadow: '0 0 30px rgba(0,255,135,0.4)' }}>
                Ücretsiz IT Denetimi Al <ArrowRight size={16} />
              </Link>
              <a href="tel:+908503042268"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold border border-border hover:border-accent/40 transition-all"
                style={{ background: 'rgba(255,255,255,0.04)', color: '#F0F4FF' }}>
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
