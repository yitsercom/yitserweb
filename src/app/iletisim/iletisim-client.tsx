'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react'

const contactInfo = [
  { icon: Phone, title: 'Telefon',   value: '0850 304 22 68',        href: 'tel:+908503042268' },
  { icon: Mail,  title: 'E-posta',   value: 'info@yitser.com',        href: 'mailto:info@yitser.com' },
  { icon: MapPin, title: 'Adres',    value: 'İstanbul, Türkiye',      href: '#' },
  { icon: Clock, title: 'Çalışma',   value: 'Pzt–Cum 09:00–18:00 | NOC 7/24', href: '#' },
]

const services = [
  'Ağ & Network Altyapısı', 'Siber Güvenlik', 'Sunucu & Storage',
  'Cloud & Sanallaştırma', 'Backup & Veri Koruma', 'Yapısal Kablolama',
  'Kamera & Güvenlik', 'IT Destek Hizmetleri', 'Genel Danışmanlık',
]

export default function IletisimClient() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div style={{ background: '#080C14', color: '#F0F4FF' }}>

      {/* HERO */}
      <section className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #080C14 0%, #001030 100%)' }}>
        <div className="absolute inset-0 bg-grid-slate bg-grid-60" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(0,255,135,0.07) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 relative">
          <nav className="flex items-center gap-1 text-xs mb-5" style={{ color: '#3D4A66' }}>
            <Link href="/" className="hover:text-accent transition-colors">Ana Sayfa</Link>
            <span className="mx-1">›</span>
            <span style={{ color: '#6B7A99' }}>İletişim</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full border"
              style={{ color: '#00FF87', borderColor: 'rgba(0,255,135,0.25)', background: 'rgba(0,255,135,0.06)' }}>
              İletişim
            </span>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight mb-5 leading-[1.08]">
              Projenizi Birlikte{' '}
              <span style={{
                background: 'linear-gradient(135deg, #00FF87 0%, #0D72FF 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                Planlayalım
              </span>
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#A8B4CC' }}>
              Kurumsal BT altyapısı projeniz için ücretsiz fizibilite görüşmesi talep edin.
              Teknoloji mimarlarımız <strong style={{ color: '#F0F4FF' }}>48 saat içinde</strong> geri dönüş sağlar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORM + BİLGİ */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Yan Panel */}
            <div className="space-y-5">
              <div className="relative rounded-3xl overflow-hidden" style={{ height: 220 }}>
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=85"
                  alt="Yitser Teknoloji ofis"
                  fill className="object-cover"
                  style={{ filter: 'brightness(0.65)' }}
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(0,255,135,0.12) 0%, transparent 60%)' }} />
                <div className="absolute bottom-4 left-4">
                  <p className="text-sm font-bold" style={{ color: '#00FF87' }}>İstanbul Ofisi</p>
                  <p className="text-xs mt-0.5" style={{ color: '#A8B4CC' }}>7/24 NOC & Saha Desteği</p>
                </div>
              </div>

              {contactInfo.map(({ icon: Icon, title, value, href }) => (
                <a key={title} href={href}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-border hover:border-accent/40 transition-all group"
                  style={{ background: '#0D1117', textDecoration: 'none' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(0,255,135,0.08)' }}>
                    <Icon size={18} style={{ color: '#00FF87' }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#6B7A99' }}>{title}</p>
                    <p className="text-sm font-medium group-hover:text-accent transition-colors" style={{ color: '#F0F4FF' }}>{value}</p>
                  </div>
                </a>
              ))}

              <div className="p-5 rounded-2xl border border-border" style={{ background: '#0D1117' }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#6B7A99' }}>Güvencelerimiz</p>
                {['48 saat içinde dönüş garantisi', 'Ücretsiz ve taahhütsüz fizibilite', 'Marka bağımsız değerlendirme', 'NDA ile gizlilik güvencesi'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs py-1.5" style={{ color: '#A8B4CC' }}>
                    <CheckCircle2 size={12} style={{ color: '#00FF87', flexShrink: 0 }} />{item}
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-border p-8 lg:p-10" style={{ background: '#0D1117' }}>

                {/* BAŞARI */}
                {status === 'success' ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16">
                    <div className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6"
                      style={{ background: 'rgba(0,255,135,0.1)' }}>
                      <CheckCircle2 size={40} style={{ color: '#00FF87' }} />
                    </div>
                    <h2 className="font-display font-bold text-2xl mb-3" style={{ color: '#F0F4FF' }}>
                      Mesajınız İletildi!
                    </h2>
                    <p className="mb-2" style={{ color: '#A8B4CC' }}>
                      Teknoloji mimarlarımız en geç <strong style={{ color: '#F0F4FF' }}>48 saat</strong> içinde sizinle iletişime geçecek.
                    </p>
                    <p className="text-sm mb-8" style={{ color: '#6B7A99' }}>
                      Onay e-postası gönderildi — spam klasörünü de kontrol edin.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a href="tel:+908503042268"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold text-black"
                        style={{ background: '#00FF87' }}>
                        <Phone size={15} /> 0850 304 22 68
                      </a>
                      <Link href="/hizmetler"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold border border-border hover:border-accent/40 transition-all"
                        style={{ color: '#F0F4FF' }}>
                        Hizmetlerimizi İncele <ArrowRight size={14} />
                      </Link>
                    </div>
                  </motion.div>

                ) : (
                  <>
                    <h2 className="font-display font-bold text-2xl mb-1" style={{ color: '#F0F4FF' }}>
                      Ücretsiz Fizibilite Formu
                    </h2>
                    <p className="text-sm mb-8" style={{ color: '#6B7A99' }}>
                      Formu doldurun, en geç 48 saat içinde dönelim.
                    </p>

                    {status === 'error' && (
                      <div className="mb-6 p-4 rounded-2xl border" style={{ background: 'rgba(255,107,138,0.08)', borderColor: 'rgba(255,107,138,0.3)' }}>
                        <p className="text-sm" style={{ color: '#FF6B8A' }}>
                          ⚠️ Bir hata oluştu. Lütfen <a href="tel:+908503042268" style={{ color: '#00FF87', textDecoration: 'underline' }}>0850 304 22 68</a> numaralı hattı arayın.
                        </p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        {[
                          { id: 'name',    label: 'Ad Soyad *',        placeholder: 'Ahmet Yılmaz',        type: 'text',  required: true },
                          { id: 'company', label: 'Şirket',             placeholder: 'Şirket Adı',           type: 'text' },
                          { id: 'email',   label: 'E-posta *',          placeholder: 'ahmet@sirket.com',     type: 'email', required: true },
                          { id: 'phone',   label: 'Telefon',             placeholder: '0850 304 22 68',       type: 'tel' },
                        ].map(({ id, label, placeholder, type, required }) => (
                          <div key={id}>
                            <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                              style={{ color: '#6B7A99' }}>{label}</label>
                            <input
                              type={type} placeholder={placeholder} required={required}
                              value={(form as Record<string, string>)[id]}
                              onChange={(e) => setForm(f => ({ ...f, [id]: e.target.value }))}
                              className="w-full px-4 py-3 rounded-xl text-sm border border-border focus:outline-none focus:border-accent transition-all"
                              style={{ background: '#080C14', color: '#F0F4FF' }}
                            />
                          </div>
                        ))}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                          style={{ color: '#6B7A99' }}>İlgilendiğiniz Hizmet</label>
                        <select
                          value={form.service}
                          onChange={(e) => setForm(f => ({ ...f, service: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl text-sm border border-border focus:outline-none focus:border-accent transition-all"
                          style={{ background: '#080C14', color: form.service ? '#F0F4FF' : '#6B7A99' }}>
                          <option value="">Hizmet seçin (opsiyonel)</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-2"
                          style={{ color: '#6B7A99' }}>Projeniz Hakkında</label>
                        <textarea
                          rows={4} placeholder="Projeniz hakkında kısaca bilgi verin..."
                          value={form.message}
                          onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl text-sm border border-border focus:outline-none focus:border-accent transition-all resize-none"
                          style={{ background: '#080C14', color: '#F0F4FF' }}
                        />
                      </div>

                      <button type="submit" disabled={status === 'loading'}
                        className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl font-bold text-black hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                        style={{ background: '#00FF87', boxShadow: '0 0 25px rgba(0,255,135,0.35)' }}>
                        {status === 'loading' ? (
                          <><Loader2 size={16} className="animate-spin" /> Gönderiliyor...</>
                        ) : (
                          <><Send size={16} /> Fizibilite Görüşmesi Talep Et</>
                        )}
                      </button>

                      <p className="text-center text-xs" style={{ color: '#3D4A66' }}>
                        Bilgileriniz üçüncü taraflarla paylaşılmaz. KVKK kapsamında korunmaktadır.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
