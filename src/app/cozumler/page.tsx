import type { Metadata } from 'next'
import CozumlerClient from './cozumler-client'

export const metadata: Metadata = {
  title: 'Kurumsal BT Çözümleri — Sektöre Özel IT Altyapısı | Yitser Teknoloji',
  description: 'Finans, sağlık, üretim, perakende ve kamu sektörlerine özel kurumsal BT altyapısı çözümleri. Marka bağımsız yaklaşımla sektörünüze uygun teknoloji mimarisi.',
  keywords: ['kurumsal BT çözümleri', 'sektöre özel IT', 'finans IT altyapısı', 'sağlık BT çözümleri', 'üretim SCADA altyapısı'],
  alternates: { canonical: 'https://yitser.com/cozumler' },
  openGraph: {
    title: 'Kurumsal BT Çözümleri | Yitser Teknoloji',
    description: 'Sektörünüze özel kurumsal BT altyapısı çözümleri. Marka bağımsız danışmanlık.',
    url: 'https://yitser.com/cozumler',
    images: [{ url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=630&fit=crop', width: 1200, height: 630, alt: 'Kurumsal BT çözümleri' }],
  },
}

export default function Page() { return <CozumlerClient /> }
