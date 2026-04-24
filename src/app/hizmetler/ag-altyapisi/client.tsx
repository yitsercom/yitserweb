'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Network, CheckCircle2, ArrowRight, Wifi, Router, Shield, BarChart3, Server, Globe2, Lock, Zap, Clock } from 'lucide-react'

const schemaData = {
  '@context': 'https://schema.org', '@type': 'Service',
  name: 'Kurumsal Ağ Altyapısı Kurulum ve Yönetimi',
  provider: { '@type': 'Organization', name: 'Yitser Teknoloji', url: 'https://yitser.com' },
  description: 'Kurumsal kampüs ağı, SD-WAN, Wi-Fi 6/6E ve veri merkezi ağ altyapısı tasarım, kurulum ve yönetim.',
  areaServed: 'Turkey', serviceType: 'IT Infrastructure',
}

const features = [
  { icon: Wifi,      title: 'Wi-Fi 6 / 6E Kurumsal Kablosuz Ağ', desc: 'Yoğun kullanıcı ortamları ve konferans salonları için heatmap tabanlı RF planlama, Wi-Fi 6/6E erişim noktası kurulumu, kanal optimizasyonu, roaming ve QoS yapılandırması.' },
  { icon: Router,    title: 'SD-WAN ve Geniş Alan Ağı',           desc: 'Çok lokasyonlu kuruluşlar için SD-WAN tabanlı WAN optimizasyonu, MPLS/İnternet hibrit bağlantı, uygulama bazlı yönlendirme ve merkezi orkestrasyon.' },
  { icon: Shield,    title: 'Güvenlik Odaklı Ağ Segmentasyonu',   desc: 'VLAN tasarımı, mikro segmentasyon, 802.1X tabanlı NAC, misafir ağı izolasyonu ve Zero Trust Network Access (ZTNA) entegrasyonu.' },
  { icon: BarChart3, title: '7/24 Ağ İzleme ve NOC',              desc: 'SNMP, NetFlow ve syslog tabanlı izleme, anlık alarm yönetimi, kapasite raporlaması ve SLA garantili müdahale süreleriyle kesintisiz ağ operasyonu.' },
  { icon: Server,    title: 'Veri Merkezi Ağ Mimarisi',           desc: 'Spine-leaf topoloji, 25G/100G backbone, EVPN-VXLAN overlay, yüksek erişilebilirlik tasarımı ve east-west trafik optimizasyonu.' },
  { icon: Globe2,    title: 'Çok Lokasyonlu WAN Yönetimi',        desc: 'Tüm Türkiye ve uluslararası şubeleri kapsayan merkezi yönetimli WAN; failover, bant genişliği optimizasyonu ve şifreli site-to-site VPN.' },
]

const capabilities = [
  'Kampüs Ağı Tasarım ve Kurulumu', 'SD-WAN Strateji ve Geçiş Hizmetleri',
  'Wi-Fi 6 / 6E Kurumsal Planlama', 'Veri Merkezi Spine-Leaf Mimarisi',
  'Ağ Güvenlik Entegrasyonu (FW, IPS, NAC)', 'MPLS / Metro Ethernet Entegrasyonu',
  'BGP, OSPF, EIGRP Yönlendirme Tasarımı', 'IPv6 Planlama ve Geçiş Danışmanlığı',
  'Ağ Otomasyonu (Ansible, Python, REST API)', 'Performans Testi ve Kapasite Optimizasyonu',
  'Marka Bağımsız Donanım Tedariki ve Kurulum', '7/24 NOC ve Proaktif Ağ İzleme',
]

const stats = [
  { value: '%99.99', label: 'Hedef uptime', note: 'SLA güvenceli' },
  { value: '<15 dk', label: 'İlk müdahale süresi', note: 'NOC desteğiyle' },
  { value: '500+',   label: 'Tamamlanan ağ projesi', note: 'Türkiye geneli' },
]

const faqs = [
  { q: 'Kurumsal ağ altyapısı kurulumu ne kadar sürer?', a: 'Orta ölçekli kampüs ağı projeleri genellikle 4–8 hafta içinde tamamlanır. Veri merkezi ağ projeleri 8–16 haftayı bulabilir. Her proje öncesinde detaylı Gantt bazlı proje planı sunuyoruz.' },
  { q: 'Mevcut ağ altyapısını yenilemek mi, genişletmek mi daha avantajlıdır?', a: 'Bu karar; altyapının yaşına, mevcut kapasite durumuna ve büyüme hedeflerinize göre şekillenir. Ücretsiz fizibilite sürecimizde bağımsız analiz yaparak en ekonomik yol haritasını sunuyoruz.' },
  { q: 'SD-WAN geçişi mevcut MPLS hattımı etkiler mi?', a: 'SD-WAN geçişi aşamalı yapılır. MPLS hattınız geçiş süresince aktif kalır; paralel çalışma sağlandıktan sonra kesintisiz geçiş tamamlanır.' },
  { q: 'Hangi ağ markaları ile çalışıyorsunuz?', a: 'Marka bağımsız yaklaşımımız gereği Cisco, Juniper, Aruba, Fortinet, Palo Alto, MikroTik ve tüm önde gelen markalarda satış, kurulum ve destek yetkinliğimiz mevcuttur.' },
  { q: 'Ağ altyapısı projesinde hangi belgeler teslim edilir?', a: 'As-built ağ diyagramları, IP adres planı (IPAM), yapılandırma dosyaları, Fluke test raporları, kablo listesi ve operasyon kılavuzu teslim edilir.' },
]

export default function AgAltyapiClient() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div style={{ background: '#080C14', color: '#F0F4FF' }}>

        {/* HERO */}
        <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #080C14 0%, #001840 100%)' }}>
          <div className="absolute inset-0 bg-grid-slate bg-grid-60 opacity-100" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse, rgba(13,114,255,0.12) 0%, transparent 70%)' }} />
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <nav className="flex items-center gap-1 text-xs mb-5" style={{ color: '#3D4A66' }} aria-label="breadcrumb">
                  <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
                  <span className="mx-1">›</span>
                  <Link href="/hizmetler" className="hover:text-accent transition-colors">Hizmetler</Link>
                  <span className="mx-1">›</span>
                  <span style={{ color: '#6B7A99' }}>Ağ &amp; Network Altyapısı</span>
                </nav>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(13,114,255,0.15)' }}>
                    <Network size={20} style={{ color: '#0D72FF' }} />
                  </span>
                  <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#00FF87' }}>Ağ &amp; Network Altyapısı</span>
                </div>
                <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight mb-5 leading-[1.08]">
                  Kesintisiz İletişim İçin{' '}
                  <span style={{ background: 'linear-gradient(135deg, #0D72FF 0%, #00FF87 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Yüksek Performanslı
                  </span>{' '}
                  Kurumsal Ağ Altyapıları
                </h1>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#A8B4CC' }}>
                  Kampüs ağından veri merkezine, SD-WAN'dan Wi-Fi 6'ya — <strong style={{ color: '#F0F4FF' }}>marka bağımsız, ihtiyaca özel</strong> ağ mimarisi tasarımı, kurulumu ve yönetilen hizmetler. Ağ altyapınızı rekabet avantajınıza dönüştürün.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/iletisim" className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-black hover:scale-105 transition-all" style={{ background: '#00FF87', boxShadow: '0 0 25px rgba(0,255,135,0.4)' }}>
                    Ücretsiz Ağ Fizibilite Al <ArrowRight size={16} />
                  </Link>
                  <Link href="/iletisim" className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold border border-border hover:border-accent/40 transition-all" style={{ background: 'rgba(255,255,255,0.04)', color: '#F0F4FF' }}>
                    Projeyi Birlikte Planlayalım
                  </Link>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative rounded-3xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=550&fit=crop&q=85" alt="Kurumsal ağ altyapısı — veri merkezi switch ve yönlendirici sistemleri" width={800} height={550} className="w-full object-cover rounded-3xl" style={{ filter: 'brightness(0.82) saturate(1.1)' }} priority />
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(13,114,255,0.2) 0%, transparent 60%)' }} />
                <div className="absolute bottom-0 inset-x-0 rounded-b-3xl p-5" style={{ background: 'linear-gradient(to top, rgba(8,12,20,0.95) 0%, transparent 100%)' }}>
                  <p className="text-sm font-semibold" style={{ color: '#00FF87' }}>✓ ISO 27001 Uyumlu Ağ Tasarımı</p>
                  <p className="text-xs mt-1" style={{ color: '#A8B4CC' }}>Kurulum sonrası Fluke Networks sertifikalı test raporu</p>
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
                  Kurumsal Ağ Altyapısı Neden <span style={{ color: '#00FF87' }}>İşletmenizin Omurgasıdır?</span>
                </h2>
                <p className="text-lg leading-relaxed mb-4" style={{ color: '#A8B4CC' }}>
                  Modern işletmelerde 1 saatlik ağ kesintisi, ortalama <strong style={{ color: '#F0F4FF' }}>₺150.000–₺1.000.000</strong> arasında doğrudan ve dolaylı kayba yol açabilir. Üretkenlik kaybı, müşteri memnuniyetsizliği ve itibar zararı bu rakama dahil değildir.
                </p>
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#A8B4CC' }}>
                  Yüksek erişilebilirlik, düşük gecikme süresi ve güvenli segmentasyon; dijital dönüşümün temel gereksinimleridir. Doğru tasarlanmış ağ altyapısı, operasyonel verimliliği artırırken siber saldırı yüzeyini de minimize eder.
                </p>
                <div className="space-y-3">
                  {['%99.99 uptime hedefi ile yüksek erişilebilirlik', 'Düşük gecikme süresi ile uygulama performansı', 'Güvenli segmentasyon ile risk minimizasyonu', 'Merkezi yönetim ile operasyonel verimlilik'].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm" style={{ color: '#A8B4CC' }}>
                      <CheckCircle2 size={15} style={{ color: '#00FF87', flexShrink: 0 }} />{item}
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1545987796-200677ee1011?w=700&h=480&fit=crop&q=85" alt="Fiber optik kablo — yüksek hızlı ağ altyapısı" width={700} height={480} className="w-full object-cover rounded-3xl" style={{ filter: 'brightness(0.78)' }} />
                <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(0,255,135,0.06) 0%, transparent 60%)' }} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ÖZELLİKLER */}
        <section className="py-20" style={{ background: '#0D1117' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="font-display font-bold text-3xl lg:text-4xl mb-4" style={{ color: '#F0F4FF' }}>
                Kapsamlı Ağ Altyapısı <span style={{ color: '#00FF87' }}>Hizmet Alanlarımız</span>
              </h2>
              <p className="text-lg" style={{ color: '#A8B4CC' }}>Küçük ofis ağından büyük kurumsal kampüse, tek şubeden global WAN mimarisine kadar her ölçekte tasarlıyor ve yönetiyoruz.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-2xl border border-border hover:-translate-y-1 transition-all" style={{ background: '#080C14' }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(13,114,255,0.12)' }}>
                    <Icon size={20} style={{ color: '#0D72FF' }} />
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
                <p className="text-sm mb-8" style={{ color: '#6B7A99' }}>Ağ altyapısının her katmanında uçtan uca hizmet sunuyoruz.</p>
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
                  <Image src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=700&h=380&fit=crop&q=85" alt="Ağ operasyon merkezi NOC — 7/24 ağ izleme" width={700} height={380} className="w-full object-cover rounded-3xl" style={{ filter: 'brightness(0.75)' }} />
                  <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(13,114,255,0.15) 0%, transparent 60%)' }} />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-bold" style={{ color: '#00FF87' }}>NOC — 7/24 Ağ Operasyon Merkezi</p>
                    <p className="text-xs mt-1" style={{ color: '#A8B4CC' }}>Proaktif izleme ile sorunu siz fark etmeden çözüyoruz</p>
                  </div>
                </div>
                <div className="rounded-2xl p-6 border" style={{ background: 'rgba(0,255,135,0.04)', borderColor: 'rgba(0,255,135,0.2)' }}>
                  <Lock size={20} style={{ color: '#00FF87', marginBottom: 10 }} />
                  <h3 className="font-display font-bold text-[16px] mb-2" style={{ color: '#F0F4FF' }}>Marka Bağımsız Yaklaşım</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#A8B4CC' }}>
                    Ağ altyapısı projelerinizde belirli bir üreticinin satış kanalı değil, <strong style={{ color: '#00FF87' }}>sizin çıkarınızı önde tutan bağımsız danışmanınızız</strong>. İhtiyacınıza en uygun donanım ve yazılımda uçtan uca destek, projelendirme ve satış hizmeti sunuyoruz. Her donanım için hem satış hem de entegrasyon ve destek kapasitemiz mevcuttur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SÜREÇ */}
        <section className="py-20" style={{ background: '#0D1117' }}>
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-12 text-center" style={{ color: '#F0F4FF' }}>Proje Sürecimiz</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Fizibilite ve Keşif', desc: 'Mevcut altyapı analizi, ihtiyaç tespiti ve kapsam belirleme. Ücretsiz danışmanlık görüşmesi.' },
                { step: '02', title: 'Tasarım ve Planlama', desc: 'Detaylı ağ mimarisi tasarımı, ekipman seçimi, proje planı ve maliyet analizi.' },
                { step: '03', title: 'Kurulum ve Entegrasyon', desc: 'Ekipman temini, fiziksel kurulum, yapılandırma ve mevcut sistemle entegrasyon.' },
                { step: '04', title: 'Test, Teslim ve Destek', desc: 'Performans testleri, belgelendirme, ekip eğitimi ve yönetilen destek hizmetleri.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="text-center">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center font-display font-bold text-xl mx-auto mb-4" style={{ background: 'rgba(0,255,135,0.08)', color: '#00FF87', border: '1px solid rgba(0,255,135,0.2)' }}>{step}</div>
                  <h3 className="font-display font-bold text-[14px] mb-2" style={{ color: '#F0F4FF' }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#6B7A99' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SSS */}
        <section className="py-20 bg-canvas">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display font-bold text-3xl mb-3 text-center" style={{ color: '#F0F4FF' }}>Sık Sorulan Sorular</h2>
            <p className="text-center text-sm mb-10" style={{ color: '#6B7A99' }}>Kurumsal ağ altyapısı hakkında en çok merak edilen konular</p>
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

        {/* CTA */}
        <section className="py-20" style={{ background: 'linear-gradient(135deg, #000C20 0%, #001840 50%, #000C20 100%)' }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <Zap size={32} style={{ color: '#00FF87', margin: '0 auto 16px' }} />
            <h2 className="font-display font-bold text-3xl mb-4" style={{ color: '#F0F4FF' }}>Ağ Altyapınızı Bir Sonraki Seviyeye Taşıyın</h2>
            <p className="mb-8 text-lg" style={{ color: '#A8B4CC' }}>Ücretsiz değerlendirmemizde mevcut durumunuzu analiz ediyor, somut iyileştirme fırsatları ve yatırım geri dönüş hesabını sunuyoruz.</p>
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
