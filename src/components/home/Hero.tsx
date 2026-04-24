'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react'

const solutions = [
  { id: 1,  label: 'SD-WAN',          color: '#0D72FF', angle: 0,   size: 'lg', href: '/hizmetler/ag-altyapisi' },
  { id: 2,  label: 'Zero Trust',      color: '#00FF87', angle: 30,  size: 'md', href: '/hizmetler/siber-guvenlik' },
  { id: 3,  label: 'SOC / SIEM',      color: '#FF6B8A', angle: 60,  size: 'sm', href: '/hizmetler/siber-guvenlik' },
  { id: 4,  label: 'HCI',             color: '#57A8FF', angle: 90,  size: 'md', href: '/hizmetler/sunucu-storage' },
  { id: 5,  label: 'Cloud Migration', color: '#39FFB0', angle: 120, size: 'lg', href: '/hizmetler/cloud-sanallastirma' },
  { id: 6,  label: 'Backup / DR',     color: '#FFB347', angle: 150, size: 'sm', href: '/hizmetler/backup-veri-koruma' },
  { id: 7,  label: 'Cat6A / Fiber',   color: '#BF7FFF', angle: 180, size: 'md', href: '/hizmetler/yapisal-kablolama' },
  { id: 8,  label: 'IP Kamera',       color: '#FF9F7F', angle: 210, size: 'sm', href: '/hizmetler/kamera-guvenlik' },
  { id: 9,  label: 'Wi-Fi 6/6E',      color: '#0D72FF', angle: 240, size: 'md', href: '/hizmetler/ag-altyapisi' },
  { id: 10, label: 'Pentest',         color: '#00FF87', angle: 270, size: 'sm', href: '/hizmetler/siber-guvenlik' },
  { id: 11, label: 'NOC 7/24',        color: '#57A8FF', angle: 300, size: 'lg', href: '/hizmetler/it-destek' },
  { id: 12, label: 'VMware',          color: '#39FFB0', angle: 330, size: 'md', href: '/hizmetler/cloud-sanallastirma' },
]

const stats = [
  { value: '500+', label: 'Proje' },
  { value: '50+',  label: 'Müşteri' },
  { value: '7/24', label: 'NOC' },
]

function toRad(deg: number) { return (deg * Math.PI) / 180 }

const OUTER_R = 155
const INNER_R = 95
const CX = 200
const CY = 200

export default function HeroSection() {
  const [active, setActive] = useState<number | null>(null)
  const [rotation, setRotation] = useState(0)
  const [paused, setPaused] = useState(false)
  const rafRef = useRef<number>()
  const lastRef = useRef<number>(0)

  useEffect(() => {
    const animate = (ts: number) => {
      if (!paused) {
        const delta = ts - lastRef.current
        setRotation(r => (r + delta * 0.018) % 360)
      }
      lastRef.current = ts
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [paused])

  const activeSol = solutions.find(s => s.id === active)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#050912' }}>

      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 20% 40%, rgba(0,40,120,0.35) 0%, transparent 60%)',
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 60% 50% at 80% 60%, rgba(0,80,40,0.2) 0%, transparent 60%)',
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,255,135,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,135,0.025) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />
      </div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(0,255,135,0.4) 30%, rgba(13,114,255,0.4) 70%, transparent 100%)' }} />

      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 relative w-full">
        <div className="grid lg:grid-cols-[1fr_440px] gap-16 items-center">

          {/* SOL */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}>

            {/* Üst badge */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold tracking-widest uppercase"
                style={{ color: '#00FF87', borderColor: 'rgba(0,255,135,0.2)', background: 'rgba(0,255,135,0.05)' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#00FF87' }} />
                Marka Bağımsız BT Danışmanlığı
              </div>
            </div>

            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#F0F4FF', marginBottom: '1.5rem' }}>
              Kurumsal BT<br/>
              Altyapınızı{' '}
              <span style={{
                background: 'linear-gradient(135deg, #00FF87 0%, #0D72FF 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                Rekabet<br/>Avantajına
              </span>{' '}
              Dönüştürün
            </h1>

            <p className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color: '#8A96B0' }}>
              Ağdan siber güvenliğe, cloud'dan yapısal kablolamaya —
              <strong style={{ color: '#D0D8F0' }}> belirli bir markaya bağlı kalmadan</strong>,
              kurumunuza özel çözümü tasarlıyor ve hayata geçiriyoruz.
            </p>

            {/* Özellikler */}
            <div className="space-y-2.5 mb-10">
              {[
                '500+ tamamlanan kurumsal proje, Türkiye geneli',
                'Her marka, her platform — marka bağımsız uzmanlık',
                '7/24 NOC izleme ile %99.99 uptime hedefi',
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-sm" style={{ color: '#8A96B0' }}>
                  <CheckCircle2 size={14} style={{ color: '#00FF87', flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>

            {/* Aktif çözüm tooltip */}
            <div style={{ minHeight: 56, marginBottom: '2rem' }}>
              <AnimatePresence mode="wait">
                {activeSol && (
                  <motion.div key={activeSol.id}
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-4 px-5 py-3 rounded-2xl border"
                    style={{ background: activeSol.color + '0A', borderColor: activeSol.color + '30' }}>
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0 animate-pulse" style={{ background: activeSol.color }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold" style={{ color: activeSol.color }}>{activeSol.label}</p>
                      <p className="text-xs" style={{ color: '#8A96B0' }}>Kurumsal çözüm — detaylar için tıklayın</p>
                    </div>
                    <Link href={activeSol.href}
                      className="flex items-center gap-1 text-xs font-bold flex-shrink-0 hover:gap-2 transition-all"
                      style={{ color: activeSol.color }}>
                      İncele <ChevronRight size={12} />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/iletisim"
                className="group relative flex items-center gap-2 px-7 py-4 rounded-2xl font-bold text-black overflow-hidden"
                style={{ background: '#00FF87' }}>
                <span className="relative z-10 flex items-center gap-2">
                  Ücretsiz BT Fizibilite Al
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'linear-gradient(135deg, #00FF87 0%, #00CC6A 100%)' }} />
              </Link>
              <Link href="/hizmetler"
                className="flex items-center gap-2 px-7 py-4 rounded-2xl font-semibold border transition-all hover:border-white/20"
                style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#D0D8F0', background: 'rgba(255,255,255,0.04)' }}>
                Hizmetleri Keşfet
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8">
              {stats.map(({ value, label }, i) => (
                <div key={label}>
                  {i > 0 && <div className="h-8 w-px absolute" style={{ background: 'rgba(255,255,255,0.08)' }} />}
                  <p className="font-display font-bold text-2xl" style={{ color: '#F0F4FF' }}>{value}</p>
                  <p className="text-xs" style={{ color: '#6B7A99' }}>{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SAĞ — Orbital çözüm yelpazesi */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex items-center justify-center"
            style={{ width: 400, height: 400 }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => { setPaused(false); setActive(null) }}>

            {/* Arka glow */}
            <div className="absolute inset-0 rounded-full pointer-events-none" style={{
              background: 'radial-gradient(ellipse, rgba(0,255,135,0.06) 0%, transparent 70%)',
            }} />

            <svg width={400} height={400} viewBox="0 0 400 400" style={{ position: 'absolute', top: 0, left: 0 }}>
              <defs>
                <radialGradient id="orb-grad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(0,255,135,0.15)" />
                  <stop offset="100%" stopColor="rgba(0,255,135,0)" />
                </radialGradient>
                {solutions.map(sol => (
                  <radialGradient key={sol.id} id={`node-grad-${sol.id}`} cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={sol.color} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={sol.color} stopOpacity="0.1" />
                  </radialGradient>
                ))}
              </defs>

              {/* Dış orbital ring */}
              <circle cx={CX} cy={CY} r={OUTER_R} fill="none"
                stroke="rgba(255,255,255,0.04)" strokeWidth="1"
                strokeDasharray="4 8" />

              {/* İç orbital ring */}
              <circle cx={CX} cy={CY} r={INNER_R} fill="none"
                stroke="rgba(0,255,135,0.06)" strokeWidth="1" />

              {/* En iç ring */}
              <circle cx={CX} cy={CY} r={55} fill="none"
                stroke="rgba(13,114,255,0.06)" strokeWidth="1" />

              {/* Çözüm nodeları */}
              {solutions.map(sol => {
                const angle = toRad(sol.angle + rotation)
                const nx = CX + OUTER_R * Math.cos(angle)
                const ny = CY + OUTER_R * Math.sin(angle)
                const ix = CX + INNER_R * 0.65 * Math.cos(angle)
                const iy = CY + INNER_R * 0.65 * Math.sin(angle)
                const isActive = active === sol.id
                const r = sol.size === 'lg' ? 10 : sol.size === 'md' ? 7 : 5

                // Label position
                const labelDist = OUTER_R + 28
                const lx = CX + labelDist * Math.cos(angle)
                const ly = CY + labelDist * Math.sin(angle)
                const anchor = lx < CX - 5 ? 'end' : lx > CX + 5 ? 'start' : 'middle'

                return (
                  <g key={sol.id} style={{ cursor: 'pointer' }}
                    onMouseEnter={() => setActive(sol.id)}
                    onMouseLeave={() => setActive(null)}>

                    {/* Connecting line - center to node */}
                    <line x1={ix} y1={iy} x2={nx} y2={ny}
                      stroke={isActive ? sol.color : sol.color + '18'}
                      strokeWidth={isActive ? 1.5 : 0.8}
                      style={{ transition: 'stroke 0.2s, stroke-width 0.2s' }} />

                    {/* Outer glow when active */}
                    {isActive && (
                      <circle cx={nx} cy={ny} r={r + 10}
                        fill={`url(#node-grad-${sol.id})`}
                        opacity={0.5} />
                    )}

                    {/* Node circle */}
                    <circle cx={nx} cy={ny} r={isActive ? r + 3 : r}
                      fill={isActive ? sol.color : '#0D1421'}
                      stroke={sol.color}
                      strokeWidth={isActive ? 0 : 1}
                      opacity={isActive ? 1 : 0.85}
                      style={{ transition: 'r 0.2s, fill 0.2s' }} />

                    {/* Inner dot */}
                    <circle cx={nx} cy={ny} r={isActive ? 0 : r * 0.4}
                      fill={sol.color}
                      opacity={0.9}
                      style={{ transition: 'r 0.2s' }} />

                    {/* Label */}
                    <text x={lx} y={ly + 4}
                      fontSize={isActive ? '9.5' : '8'}
                      fontWeight={isActive ? '700' : '500'}
                      fill={isActive ? sol.color : 'rgba(160,170,200,0.7)'}
                      textAnchor={anchor}
                      style={{ fontFamily: 'Inter, sans-serif', transition: 'fill 0.2s, font-size 0.2s', pointerEvents: 'none' }}>
                      {sol.label}
                    </text>
                  </g>
                )
              })}
            </svg>

            {/* Merkez logo kartı */}
            <div className="relative z-10 flex flex-col items-center justify-center rounded-full"
              style={{
                width: 112, height: 112,
                background: 'linear-gradient(135deg, #0D1421 0%, #060D1F 100%)',
                border: '1px solid rgba(0,255,135,0.2)',
                boxShadow: '0 0 60px rgba(0,255,135,0.08), 0 0 120px rgba(13,114,255,0.05)',
              }}>

              {/* Logo SVG */}
              <svg width="40" height="40" viewBox="0 0 32 32">
                <defs>
                  <linearGradient id="clg2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00FF87" />
                    <stop offset="100%" stopColor="#0D72FF" />
                  </linearGradient>
                </defs>
                <rect width="32" height="32" rx="7" fill="rgba(0,255,135,0.06)" />
                <circle cx="16" cy="16" r="4" fill="url(#clg2)" />
                <circle cx="6" cy="6" r="2.2" fill="#00FF87" opacity="0.9" />
                <circle cx="26" cy="6" r="2.2" fill="#0D72FF" opacity="0.9" />
                <circle cx="6" cy="26" r="2.2" fill="#0D72FF" opacity="0.5" />
                <circle cx="26" cy="26" r="2.2" fill="#00FF87" opacity="0.5" />
                <circle cx="28" cy="16" r="1.8" fill="#00FF87" />
                <line x1="8" y1="8" x2="12" y2="12" stroke="#00FF87" strokeWidth="1" opacity="0.5" />
                <line x1="24" y1="8" x2="20" y2="12" stroke="#0D72FF" strokeWidth="1" opacity="0.5" />
                <line x1="26" y1="16" x2="20" y2="16" stroke="#00FF87" strokeWidth="1" opacity="0.7" />
                <circle cx="16" cy="16" r="8" fill="none" stroke="#00FF87" strokeWidth="0.4" opacity="0.2" />
              </svg>

              <p className="font-display font-bold text-xs mt-1.5" style={{ color: '#E8F0FF', letterSpacing: '-0.02em' }}>Yitser</p>
              <p style={{ fontSize: 6.5, letterSpacing: '0.25em', color: 'rgba(160,170,200,0.6)', textTransform: 'uppercase' }}>Teknoloji</p>
            </div>

            {/* Alt badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full border text-xs"
              style={{
                background: 'rgba(5,9,18,0.9)',
                borderColor: 'rgba(0,255,135,0.15)',
                backdropFilter: 'blur(12px)',
                color: '#8A96B0',
              }}>
              <span className="font-bold" style={{ color: '#00FF87' }}>12 Çözüm</span>
              <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
              <span>Tek Marka Bağımsız Ortak</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Alt fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #050912)' }} />
    </section>
  )
}
