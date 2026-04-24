'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '500+', label: 'Tamamlanan Proje',     desc: 'Kurumsal ölçekte' },
  { value: '98%',  label: 'Müşteri Memnuniyeti', desc: 'Yıllık ortalama' },
  { value: '7/24', label: 'Teknik Destek',        desc: 'Kesintisiz erişim' },
  { value: '15+',  label: 'Yıl Deneyim',          desc: 'IT altyapısında' },
]

export default function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section ref={ref} className="py-16 border-y border-border" style={{background:'linear-gradient(135deg, #080C14 0%, #0F1923 50%, #080C14 100%)'}}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden" style={{background:'#1A2540'}}>
          {stats.map(({ value, label, desc }, i) => (
            <motion.div key={label} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="px-8 py-10 flex flex-col gap-1.5 hover:bg-white/3 transition-colors duration-300 cursor-default"
              style={{background:'#080C14'}}>
              <span className="font-display font-bold text-4xl lg:text-5xl tracking-tight" style={{color:'#00FF87', textShadow:'0 0 20px rgba(0,255,135,0.4)'}}>{value}</span>
              <span className="font-semibold text-ink-primary text-sm leading-snug">{label}</span>
              <span className="text-ink-subtle text-xs">{desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
