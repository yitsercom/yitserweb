import type { Metadata } from 'next'
import ItDestekClient from './client'

export const metadata: Metadata = {
  title: 'Kurumsal IT Destek ve Yönetilen BT Hizmetleri | Helpdesk | NOC | Yitser Teknoloji',
  description: 'SLA güvenceli L1/L2/L3 helpdesk, 7/24 NOC altyapı izleme, saha teknik destek ve yönetilen BT hizmetleri. Kurumsal IT operasyonlarınızı güvence altına alıyoruz. İstanbul ve Türkiye geneli.',
  keywords: ['kurumsal IT destek', 'helpdesk hizmetleri', 'yönetilen BT hizmetleri', 'NOC izleme', 'managed IT services', 'MSP Türkiye', 'IT outsourcing', 'saha teknik destek', 'IT varlık yönetimi', 'ITSM'],
  openGraph: {
    title: 'Kurumsal IT Destek & Yönetilen BT Hizmetleri | Yitser Teknoloji',
    description: 'SLA güvenceli helpdesk, 7/24 NOC ve yönetilen BT hizmetleri. Kurumsal IT operasyonlarınızı devralıyoruz.',
    url: 'https://yitser.com/hizmetler/it-destek',
    images: [{ url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=630&fit=crop', width: 1200, height: 630, alt: 'IT destek ve teknik servis ekibi' }],
  },
  alternates: { canonical: 'https://yitser.com/hizmetler/it-destek' },
}

export default function Page() { return <ItDestekClient /> }
