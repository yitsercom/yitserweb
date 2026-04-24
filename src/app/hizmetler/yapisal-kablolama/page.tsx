import type { Metadata } from 'next'
import Client from './client'

export const metadata: Metadata = {
  title: 'Yapısal Kablolama Sistemleri | Cat6A Cat7 Fiber Optik | Yitser Teknoloji',
  description: 'Kurumsal yapısal kablolama, Cat6A/Cat7 UTP/FTP kurulum, fiber optik altyapı ve Fluke sertifikalı test hizmetleri. ANSI/TIA-568 standartlarında pasif ağ altyapısı. Veri merkezi kablolama.',
  keywords: ['yapısal kablolama', 'Cat6A kablolama', 'Cat7 kurulum', 'fiber optik kurulum', 'veri merkezi kablolama', 'yapısal kablolama İstanbul', 'Fluke test sertifikası', 'pasif ağ altyapısı'],
  openGraph: {
    title: 'Yapısal Kablolama & Pasif Ağ Altyapısı | Yitser Teknoloji',
    description: 'Cat6A/Cat7 yapısal kablolama, fiber optik altyapı, Fluke sertifikalı test. ANSI/TIA-568 uyumlu kurulum.',
    url: 'https://yitser.com/hizmetler/yapisal-kablolama',
    images: [{ url: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1200&h=630&fit=crop', width: 1200, height: 630, alt: 'Yapısal kablolama ve patch panel sistemi' }],
  },
  alternates: { canonical: 'https://yitser.com/hizmetler/yapisal-kablolama' },
}

export default function Page() { return <Client /> }
