'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Cable, CheckCircle2, ArrowRight, Layers, Award, Ruler, Zap, Clock, Lock } from 'lucide-react'

const schemaData = { '@context': 'https://schema.org', '@type': 'Service', name: 'Yapısal Kablolama ve Pasif Ağ Altyapısı', provider: { '@type': 'Organization', name: 'Yitser Teknoloji', url: 'https://yitser.com' }, description: 'Cat6A/Cat7 yapısal kablolama, fiber optik altyapı kurulumu ve Fluke sertifikalı test hizmetleri.', areaServed: 'Turkey', serviceType: 'IT Infrastructure' }

const features = [
  { icon: Layers, title: 'Cat6A / Cat7 Yapısal Kablolama',  desc: 'ANSI/TIA-568 ve ISO/IEC 11801 standartlarında Kategori 6A ve 7 UTP/FTP kablo altyapısı döşeme, sonlandırma, patch panel kurulumu ve etiketleme.' },
  { icon: Award,  title: 'Fluke Networks Sertifikalı Test',  desc: 'Her hat için Fluke DSX-8000 veya DTX CableAnalyzer ile çift yönlü sertifikasyon testi, sonuçların dijital rapor olarak teslimi ve garanti belgesi.' },
  { icon: Ruler,  title: 'Fiber Optik Altyapı Kurulumu',   desc: 'Tek modlu (OS2) ve çok modlu (OM3/OM4/OM5) fiber optik kablo döşeme, füzyon kaynak ekleme, OTDR ile ölçüm ve sertifikasyon.' },
  { icon: Zap,    title: 'Veri Merkezi Kablolama',          desc: 'Yapılandırılmış MPO/MTP trunk kablolama, top-of-rack ve end-of-row switch konsolide edilmesi, renk kodlu düzeni ve kablo yönetim panelleri.' },
  { icon: Layers, title: 'Patch Panel ve Raf Organizasyonu', desc: 'Anlamlı etiketleme, renk kodlaması, kablo yönetim kanalları ve tüm raf içi organizasyon ile verimli, bakımı kolay altyapı.' },
  { icon: Award,  title: 'Mevcut Altyapı Revizyonu',        desc: 'Kaotik kablolama ortamlarının standardizasyonu, dokümantasyon, kategori yükseltme ve enerji verimliliği iyileştirmeleri.' },
]

const capabilities = [
  'Cat6A UTP/FTP Kablolama', 'Cat7 / Cat7A Kablolama',
  'Tek Modlu (OS2) Fiber Optik', 'Çok Modlu (OM3/OM4/OM5) Fiber',
  'Füzyon Kaynak ve OTDR Ölçümü', 'MPO/MTP Trunk Kablolama',
  'Patch Panel ve Raf Kurulumu', 'Kablo Etiketleme ve Dokümantasyon',
  'Fluke Sertifikalı Performans Testi', 'ANSI/TIA-568 Standart Uyumu',
  'Topraklama ve Parafudr Tesisatı', 'As-Built Çizim ve Proje Belgelendirme',
]

const faqs = [
  { q: 'Cat6A mı, Cat7 mi tercih edilmeli?', a: 'Cat6A, 10 Gbps\'e kadar 100 metre destekler ve kurumsal standart olarak yaygın kullanılır. Cat7, daha iyi gürültü yalıtımı ve yüksek frekans desteği sunar. Veri merkezi ve endüstriyel ortamlar için Cat7 tercih edilebilir. Kurulumunuzu birlikte değerlendiriyor, en uygun kategoriyi öneriyoruz.' },
  { q: 'Kablolama kurulumu sırasında ofis çalışmaları aksıyor mu?', a: 'Doğru planlama ile kesinti minimuma indirilir. Genellikle gece veya hafta sonu çalışmaları tercih edilir; ancak küçük alanlar için iş saatleri içinde de kurulum yapılabilir. Her proje başında ayrıntılı iş planı sunuyoruz.' },
  { q: 'Sertifikasyon testinin önemi nedir?', a: 'Sertifikasyon testi; her hattın standartlara uygunluğunu doğrular, garanti sürecinde ispat belgesi olarak kullanılır ve gelecekteki sorunlarda tespipi kolaylaştırır. Tüm kurulumlarımız Fluke Networks sertifikalı ekipmanla test edilir.' },
  { q: 'Eski kablolama altyapısını yenilemek yerine yükseltmek mümkün mü?', a: 'Evet. Mevcut altyapının kategorisine göre patch panel ve modül değişimi ile kısmi yükseltme yapılabilir. Tam yenileme ile kısmi yükseltme maliyetlerini karşılaştırmalı olarak sunuyoruz.' },
]

export default function Client() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div style={{ background: '#080C14', color: '#F0F4FF' }}>
        <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #080C14 0%, #1A1000 100%)' }}>
          <div className="absolute inset-0 bg-grid-slate bg-grid-60 opacity-100" />
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <nav className="flex items-center gap-1 text-xs mb-5" style={{ color: '#3D4A66' }}>
                  <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link><span className="mx-1">›</span>
                  <Link href="/hizmetler" className="hover:text-accent transition-colors">Hizmetler</Link><span className="mx-1">›</span>
                  <span style={{ color: '#6B7A99' }}>Yapısal Kablolama</span>
                </nav>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,179,71,0.1)' }}><Cable size={20} style={{ color: '#FFB347' }} /></span>
                  <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#00FF87' }}>Yapısal Kablolama</span>
                </div>
                <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight mb-5 leading-[1.08]">
                  Geleceğe Hazır{' '}
                  <span style={{ background: 'linear-gradient(135deg, #FFB347 0%, #00FF87 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Yapısal Kablolama</span>{' '}
                  ve Pasif Ağ Altyapısı
                </h1>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#A8B4CC' }}>
                  Uluslararası standartlara uygun pasif altyapı tasarımı, Cat6A/Cat7 kablolama, fiber optik kurulum, Fluke sertifikalı test — <strong style={{ color: '#F0F4FF' }}>altyapınızın temeli doğru atılsın</strong>.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/iletisim" className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-black hover:scale-105 transition-all" style={{ background: '#00FF87', boxShadow: '0 0 25px rgba(0,255,135,0.4)' }}>
                    Kablolama Projesi Başlatalım <ArrowRight size={16} />
                  </Link>
                  <Link href="/iletisim" className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold border border-border hover:border-accent/40 transition-all" style={{ background: 'rgba(255,255,255,0.04)', color: '#F0F4FF' }}>
                    Site Survey Talep Et
                  </Link>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative rounded-3xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=550&fit=crop&q=85" alt="Yapısal kablolama sistemi — patch panel ve ağ kabloları" width={800} height={550} className="w-full object-cover rounded-3xl" style={{ filter: 'brightness(0.75)' }} priority />
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(255,179,71,0.12) 0%, transparent 60%)' }} />
                <div className="absolute bottom-0 inset-x-0 rounded-b-3xl p-5" style={{ background: 'linear-gradient(to top, rgba(8,12,20,0.95) 0%, transparent 100%)' }}>
                  <p className="text-sm font-semibold" style={{ color: '#00FF87' }}>✓ Fluke Networks Sertifikalı Test — ANSI/TIA-568 Uyumlu</p>
                  <p className="text-xs mt-1" style={{ color: '#A8B4CC' }}>Her hat için dijital sertifikasyon raporu teslimi</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20" style={{ background: '#0D1117' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4" style={{ color: '#F0F4FF' }}>
                Kapsamlı Yapısal Kablolama <span style={{ color: '#00FF87' }}>Hizmet Alanlarımız</span>
              </h2>
              <p className="text-lg" style={{ color: '#A8B4CC' }}>Küçük ofisten büyük veri merkezine, tek binadan çok katlı kampüse kadar her ölçekte standarta uygun kablolama.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-2xl border border-border hover:-translate-y-1 transition-all" style={{ background: '#080C14' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(255,179,71,0.08)' }}><Icon size={20} style={{ color: '#FFB347' }} /></div>
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
                <p className="text-sm mb-8" style={{ color: '#6B7A99' }}>Pasif ağ altyapısının her adımında uçtan uca hizmet sunuyoruz.</p>
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
                  <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=380&fit=crop&q=85" alt="Fiber optik kablo ve füzyon ekleme işlemi" width={700} height={380} className="w-full object-cover rounded-3xl" style={{ filter: 'brightness(0.7)' }} />
                  <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(255,179,71,0.1) 0%, transparent 60%)' }} />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-bold" style={{ color: '#00FF87' }}>Fiber Optik — OTDR ile Sertifikalı Ölçüm</p>
                    <p className="text-xs mt-1" style={{ color: '#A8B4CC' }}>Füzyon kaynak, her bağlantı noktası test edilir ve raporlanır</p>
                  </div>
                </div>
                <div className="rounded-2xl p-6 border" style={{ background: 'rgba(0,255,135,0.04)', borderColor: 'rgba(0,255,135,0.2)' }}>
                  <Lock size={20} style={{ color: '#00FF87', marginBottom: 10 }} />
                  <h3 className="font-display font-bold text-[16px] mb-2" style={{ color: '#F0F4FF' }}>Marka Bağımsız Malzeme Tedariki</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#A8B4CC' }}>
                    Kablolama malzemelerinde belirli bir üreticiye bağlı kalmadan, ihtiyacınıza en uygun ürünlerde <strong style={{ color: '#00FF87' }}>uçtan uca destek, projelendirme ve tedarik hizmeti</strong> sunuyoruz.
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

        <section className="py-20" style={{ background: 'linear-gradient(135deg, #0A0800 0%, #1A1000 50%, #0A0800 100%)' }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <Zap size={32} style={{ color: '#00FF87', margin: '0 auto 16px' }} />
            <h2 className="font-display font-bold text-3xl mb-4" style={{ color: '#F0F4FF' }}>Kablolama Projenizi Birlikte Planlayalım</h2>
            <p className="mb-8 text-lg" style={{ color: '#A8B4CC' }}>Ücretsiz site survey ile mevcut durumunuzu analiz ediyor, ANSI/TIA-568 uyumlu kablolama planı ve teklif sunuyoruz.</p>
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
