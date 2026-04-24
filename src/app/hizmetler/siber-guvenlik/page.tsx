import type { Metadata } from 'next'
import SiberGuvenlikClient from './client'

export const metadata: Metadata = {
  title: 'Kurumsal Siber Güvenlik Hizmetleri | SOC, Pentest, SIEM, Zero Trust | Yitser Teknoloji',
  description: 'Kurumsal siber güvenlik danışmanlığı, SOC kurulum ve yönetimi, sızma testi (pentest), SIEM entegrasyonu, EDR/XDR, ISO 27001 ve KVKK uyumluluk. Sıfır güven mimarisiyle kurumunuzu koruyun.',
  keywords: ['siber güvenlik', 'SOC hizmetleri', 'penetrasyon testi', 'pentest İstanbul', 'SIEM entegrasyonu', 'ISO 27001 danışmanlık', 'KVKK teknik tedbirler', 'zero trust mimari', 'EDR XDR', 'siber güvenlik danışmanlığı Türkiye'],
  openGraph: {
    title: 'Kurumsal Siber Güvenlik | SOC, Pentest, Zero Trust | Yitser Teknoloji',
    description: 'SOC, pentest, SIEM ve zero trust mimarisiyle kurumsal siber güvenlik. ISO 27001 ve KVKK uyumluluk danışmanlığı.',
    url: 'https://yitser.com/hizmetler/siber-guvenlik',
    images: [{ url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=630&fit=crop', width: 1200, height: 630, alt: 'Siber güvenlik SOC merkezi' }],
  },
  alternates: { canonical: 'https://yitser.com/hizmetler/siber-guvenlik' },
}

export default function SiberGuvenlikPage() { return <SiberGuvenlikClient /> }
