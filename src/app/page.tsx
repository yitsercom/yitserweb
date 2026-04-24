import type { Metadata } from 'next'
import HeroSection from '@/components/home/Hero'
import ServicesSection from '@/components/home/Services'
import WhyUsSection from '@/components/home/WhyUs'
import StatsSection from '@/components/home/Stats'
import GlobalVisionSection from '@/components/home/GlobalVision'
import CtaSection from '@/components/home/Cta'

export const metadata: Metadata = {
  title: 'Yitser Teknoloji — Kurumsal BT Altyapısı ve Danışmanlık Hizmetleri | İstanbul',
  description: 'Ağ altyapısı, siber güvenlik, sunucu sistemleri, cloud ve yapısal kablolama hizmetlerinde marka bağımsız, uçtan uca kurumsal BT çözümleri. 500+ tamamlanan proje, 7/24 NOC desteği. İstanbul ve Türkiye geneli.',
  keywords: [
    'kurumsal BT danışmanlık', 'ağ altyapısı kurulum', 'siber güvenlik hizmetleri',
    'sunucu storage çözümleri', 'cloud migration', 'yapısal kablolama',
    'IT destek İstanbul', 'NOC hizmetleri', 'veri merkezi çözümleri',
    'marka bağımsız IT', 'BT altyapı firması Türkiye',
  ],
  openGraph: {
    title: 'Yitser Teknoloji — Kurumsal BT Altyapısı ve Danışmanlık',
    description: 'Ağ, siber güvenlik, cloud, sunucu ve yapısal kablolama hizmetlerinde marka bağımsız uçtan uca BT çözümleri. 500+ proje, 7/24 NOC.',
    url: 'https://yitser.com',
    type: 'website',
    images: [{
      url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop',
      width: 1200, height: 630,
      alt: 'Yitser Teknoloji — Kurumsal BT Altyapısı',
    }],
  },
  alternates: { canonical: 'https://yitser.com' },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Yitser Bilgi Teknolojileri ve Danışmanlık',
      url: 'https://yitser.com',
      logo: 'https://yitser.com/logo.png',
      description: 'Kurumsal BT altyapısı tasarım, kurulum ve yönetim hizmetleri.',
      address: { '@type': 'PostalAddress', addressLocality: 'İstanbul', addressCountry: 'TR' },
      contactPoint: { '@type': 'ContactPoint', telephone: '+90-850-304-2268', contactType: 'customer service', availableLanguage: 'Turkish' },
      sameAs: ['https://linkedin.com/company/yitser', 'https://twitter.com/yitser'],
    }),
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyUsSection />
      <GlobalVisionSection />
      <CtaSection />
    </>
  )
}
