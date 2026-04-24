import type { Metadata } from 'next'
import IletisimClient from './iletisim-client'

export const metadata: Metadata = {
  title: 'İletişim — Yitser Teknoloji | Ücretsiz BT Fizibilite Görüşmesi',
  description: 'Kurumsal BT altyapısı projeniz için ücretsiz fizibilite görüşmesi. Ağ, siber güvenlik, cloud ve IT destek hizmetlerinde marka bağımsız danışmanlık. İstanbul ve Türkiye geneli.',
  keywords: ['Yitser iletişim', 'kurumsal IT danışmanlık randevu', 'BT altyapı fizibilite', 'IT teklif alma'],
  alternates: { canonical: 'https://yitser.com/iletisim' },
  openGraph: {
    title: 'İletişim | Yitser Teknoloji',
    description: 'Ücretsiz fizibilite görüşmesi için iletişime geçin. 48 saat içinde dönüş garantisi.',
    url: 'https://yitser.com/iletisim',
  },
}

export default function Page() { return <IletisimClient /> }
