import type { Metadata } from 'next'
import Client from './client'

export const metadata: Metadata = {
  title: 'Kurumsal Sunucu ve Storage Sistemleri | HCI, SAN, NAS Kurulum | Yitser Teknoloji',
  description: 'Rack sunucu, blade sistem, SAN ve NAS depolama çözümleri. Hiperkonverjans (HCI) altyapısı, sanallaştırma entegrasyonu ve lifecycle yönetimi. Marka bağımsız sunucu kurulum ve destek.',
  keywords: ['sunucu kurulum', 'storage sistemleri', 'SAN kurulum', 'NAS çözümleri', 'hiperkonverjans HCI', 'rack sunucu', 'blade sunucu', 'veri merkezi sunucu', 'sunucu yönetimi Türkiye'],
  openGraph: {
    title: 'Sunucu & Storage Sistemleri Kurulum | Yitser Teknoloji',
    description: 'Rack sunucu, SAN, NAS ve HCI çözümleri. Marka bağımsız sunucu altyapısı kurulum ve lifecycle yönetimi.',
    url: 'https://yitser.com/hizmetler/sunucu-storage',
    images: [{ url: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1200&h=630&fit=crop', width: 1200, height: 630, alt: 'Veri merkezi sunucu ve storage sistemleri' }],
  },
  alternates: { canonical: 'https://yitser.com/hizmetler/sunucu-storage' },
}

export default function Page() { return <Client /> }
