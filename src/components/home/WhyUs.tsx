'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Puzzle, Globe2, ShieldCheck, Wrench, BarChart3, Clock } from 'lucide-react'

const reasons = [
  { icon: Puzzle,      title: 'Marka Bağımsız Yaklaşım',   desc: 'Herhangi bir tedarikçiye bağlı kalmadan, kurumunuzun ihtiyacına en uygun donanım ve yazılımı tarafsız bakış açısıyla seçiyor, temin ediyor ve entegre ediyoruz.', iconColor: '#00FF87' },
  { icon: Globe2,      title: 'Global Proje Kapasitesi',   desc: 'Yurt içi ve uluslararası projelerde çok lokasyonlu altyapı tasarımı ve koordinasyonu konusunda deneyimli proje yönetimi ekibimizle yanınızdayız.', iconColor: '#0D72FF' },
  { icon: ShieldCheck, title: 'Güvenlik Öncelikli Mimari', desc: 'Her tasarımda sıfır güven mimarisi prensiplerini esas alarak güvenliği bir özellik olarak değil, temel bir tasarım ilkesi olarak ele alıyoruz.', iconColor: '#00FF87' },
  { icon: Wrench,      title: 'Uçtan Uca Hizmet Modeli',  desc: 'Fizibilite ve tasarımdan kuruluma, eğitimden yönetilen servise kadar tek elden çözüm sunarak proje riskini ve işletme yükünü minimuma indiriyoruz.', iconColor: '#57A8FF' },
  { icon: BarChart3,   title: 'Ölçeklenebilir Tasarım',   desc: 'Bugünkü ihtiyaçlarınıza yanıt veren, yarınki büyümenizi öngören modüler tasarım metodolojisiyle uzun vadeli teknoloji yatırımını güvence altına alıyoruz.', iconColor: '#39FFB0' },
  { icon: Clock,       title: '7/24 Proaktif Destek',      desc: 'İzleme ve uyarı sistemleriyle desteklenen NOC hizmetimiz, sorunları müşterilerimiz fark etmeden tespit edip çözüme kavuşturmayı hedefler.', iconColor: '#FFB347' },
]

export default function WhyUsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24" style={{ background: '#0D1117' }}>
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              Neden Yitser?
            </span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-ink-primary tracking-tight leading-tight">
              Teknoloji Ortağı Seçmek,{' '}
              <span className="neon-text">Kritik Bir Karar</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-ink-secondary text-lg leading-relaxed lg:pt-16"
          >
            Yıllar içinde edindiğimiz kurumsal proje deneyimi ve sektör bilgisini, güncel
            teknoloji trendleriyle harmanlayarak müşterilerimize gerçek değer katıyoruz.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(({ icon: Icon, title, desc, iconColor }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-7 border border-border hover:-translate-y-1 hover:border-white/10 transition-all duration-300 group cursor-default"
              style={{ background: '#080C14' }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: iconColor + '14', color: iconColor }}
              >
                <Icon size={22} />
              </div>
              <h3 className="font-display font-bold text-ink-primary text-[16px] mb-3">{title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
