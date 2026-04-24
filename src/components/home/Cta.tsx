'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Calendar, Phone } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="py-24 bg-canvas">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-widest uppercase mb-5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
            Projenizi Konuşalım
          </span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-ink-primary tracking-tight leading-tight mb-6">
            Teknoloji Mimarinizi{' '}
            <span className="neon-text">Birlikte Tasarlayalım</span>
          </h2>
          <p className="text-ink-secondary text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Ücretsiz fizibilite görüşmemizde mevcut altyapınızı değerlendiriyor, ihtiyaçlarınıza özel bir yol haritası sunuyoruz. İlk adım size özel, taahhütsüz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/iletisim" className="group flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-accent text-black font-bold text-[16px] hover:scale-105 transition-all duration-300"
              style={{boxShadow:'0 0 35px rgba(0,255,135,0.4)'}}>
              <Calendar size={17} />
              Ücretsiz Fizibilite Al
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+908503042268" className="group flex items-center gap-2.5 px-8 py-4 rounded-2xl border border-border text-ink-primary font-semibold text-[16px] hover:border-accent/50 hover:text-accent transition-all duration-300"
              style={{background:'#0D1117'}}>
              <Phone size={17} />
              Hemen Arayın
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
