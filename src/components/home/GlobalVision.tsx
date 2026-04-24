'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Globe2, Building2, Layers, ArrowRight } from 'lucide-react'

const pillars = [
  { icon: Globe2,    title: 'Uluslararası Standartlar', desc: 'ISO 27001, ITIL ve NIST çerçeveleriyle global uyumluluk.' },
  { icon: Building2, title: 'Kurumsal Ölçek',           desc: "KOBİ'den holdinge, tek şubeden çok lokasyonlu yapılara." },
  { icon: Layers,    title: 'Katmanlı Mimari',           desc: 'Fiziksel altyapıdan uygulama katmanına bütünleşik tasarım.' },
]

export default function GlobalVisionSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section ref={ref} className="relative py-28 overflow-hidden" style={{background:'linear-gradient(135deg, #000818 0%, #002B6B 50%, #000818 100%)'}}>
      <div className="absolute inset-0 bg-grid-slate bg-grid-60 opacity-100 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{background:'radial-gradient(ellipse, rgba(0,255,135,0.06) 0%, transparent 70%)'}} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{background:'radial-gradient(ellipse, rgba(13,114,255,0.1) 0%, transparent 70%)'}} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">Global Vizyon</span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-ink-primary tracking-tight leading-tight mb-6">
              Yerel Uzmanlık,<br />
              <span className="neon-text">Global Standart</span>
            </h2>
            <p className="text-ink-secondary text-lg leading-relaxed mb-8 max-w-lg">
              Türkiye merkezli güçlü operasyonel altyapımız ve uluslararası proje deneyimimizle, global ölçekte teknoloji projeleri yönetme kapasitesine sahibiz.
            </p>
            <Link href="/hakkimizda" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-accent text-black font-bold text-[15px] hover:scale-105 transition-all duration-300 group"
              style={{boxShadow:'0 0 25px rgba(0,255,135,0.35)'}}>
              Vizyon ve Misyonumuzu İnceleyin
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <div className="grid gap-4">
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, x: 32 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                className="flex items-start gap-5 p-6 rounded-2xl border border-border hover:border-accent/20 transition-all duration-300 cursor-default"
                style={{background:'rgba(255,255,255,0.03)'}}>
                <span className="w-11 h-11 rounded-xl flex items-center justify-center text-accent flex-shrink-0" style={{background:'rgba(0,255,135,0.1)'}}>
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-ink-primary text-[15px] mb-1.5">{title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
