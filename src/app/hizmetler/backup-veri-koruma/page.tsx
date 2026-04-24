import type { Metadata } from 'next'
import Client from './client'

export const metadata: Metadata = {
  title: 'Kurumsal Backup ve Veri Koruma | Felaket Kurtarma | Yitser Teknoloji',
  description: 'Kapsamlı kurumsal veri yedekleme, felaket kurtarma (DR) planlaması ve iş sürekliliği çözümleri. RTO/RPO hedef analizi, KVKK uyumlu arşivleme. Marka bağımsız backup sistemleri.',
  keywords: ['kurumsal veri yedekleme', 'felaket kurtarma DR', 'backup çözümleri', 'iş sürekliliği', 'RTO RPO planlama', 'KVKK veri arşivleme', 'yedekleme sistemleri Türkiye', 'veri koruma hizmetleri'],
  openGraph: {
    title: 'Backup & Veri Koruma | Felaket Kurtarma Planlaması | Yitser Teknoloji',
    description: 'Kurumsal veri yedekleme, DR planlaması ve iş sürekliliği. KVKK uyumlu veri arşivleme ve RTO/RPO optimizasyonu.',
    url: 'https://yitser.com/hizmetler/backup-veri-koruma',
    images: [{ url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=630&fit=crop', width: 1200, height: 630, alt: 'Veri yedekleme ve depolama sistemleri' }],
  },
  alternates: { canonical: 'https://yitser.com/hizmetler/backup-veri-koruma' },
}

export default function Page() { return <Client /> }
