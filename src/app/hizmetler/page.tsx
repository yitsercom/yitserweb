import type { Metadata } from 'next'
import HizmetlerClient from './hizmetler-client'

export const metadata: Metadata = {
  title: 'Kurumsal BT Hizmetleri — Ağ, Siber Güvenlik, Cloud, Sunucu | Yitser Teknoloji',
  description: 'Ağ altyapısı, siber güvenlik, sunucu storage, cloud migration, backup, yapısal kablolama, kamera sistemleri ve IT destek hizmetleri. Marka bağımsız kurumsal BT çözümleri. İstanbul ve Türkiye geneli.',
  keywords: ['kurumsal BT hizmetleri', 'ağ altyapısı', 'siber güvenlik hizmetleri', 'cloud migration', 'IT destek', 'yapısal kablolama', 'sunucu storage', 'backup çözümleri', 'kamera sistemleri'],
  alternates: { canonical: 'https://yitser.com/hizmetler' },
  openGraph: {
    title: 'Kurumsal BT Hizmetleri | Yitser Teknoloji',
    description: 'Ağ, siber güvenlik, cloud, sunucu ve IT destek hizmetlerinde marka bağımsız uçtan uca çözümler.',
    url: 'https://yitser.com/hizmetler',
    images: [{ url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop', width: 1200, height: 630, alt: 'Kurumsal BT hizmetleri' }],
  },
}

export default function Page() { return <HizmetlerClient /> }
