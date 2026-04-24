import type { Metadata } from 'next'
import HakkimizdaClient from './client'

export const metadata: Metadata = {
  title: 'Hakkımızda — Yitser Bilgi Teknolojileri ve Danışmanlık',
  description: '20+ yıllık kurumsal BT deneyimi. Marka bağımsız yaklaşımla ağ, siber güvenlik, cloud ve altyapı projelerinde güvenilir teknoloji ortağınız. 50+ kurumsal müşteri, 500+ proje.',
  keywords: ['Yitser Teknoloji hakkında', 'kurumsal BT danışmanlık şirketi', 'IT altyapı firması İstanbul', 'marka bağımsız IT danışmanlık'],
  alternates: { canonical: 'https://yitser.com/hakkimizda' },
  openGraph: {
    title: 'Hakkımızda | Yitser Teknoloji',
    description: 'Marka bağımsız kurumsal BT altyapısı uzmanı. 500+ proje, 50+ kurumsal müşteri.',
    url: 'https://yitser.com/hakkimizda',
    images: [{ url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=630&fit=crop', width: 1200, height: 630, alt: 'Yitser Teknoloji ekibi' }],
  },
}

export default function Page() { return <HakkimizdaClient /> }
