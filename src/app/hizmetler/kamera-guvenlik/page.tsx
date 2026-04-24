import type { Metadata } from 'next'
import Client from './client'

export const metadata: Metadata = {
  title: 'Güvenlik Kamera Sistemleri | Erişim Kontrolü | IP Kamera Kurulum | Yitser Teknoloji',
  description: 'IP güvenlik kamera sistemleri, NVR/DVR kurulum, video yönetim yazılımı (VMS), biyometrik erişim kontrolü ve turnike sistemleri. Entegre fiziksel güvenlik çözümleri Türkiye geneli.',
  keywords: ['güvenlik kamera sistemleri', 'IP kamera kurulum', 'erişim kontrol sistemi', 'biyometrik erişim', 'NVR DVR kurulum', 'VMS video yönetim', 'turnike sistemi', 'kamera sistemi İstanbul'],
  openGraph: {
    title: 'IP Kamera & Erişim Kontrol Sistemleri | Yitser Teknoloji',
    description: 'IP kamera, NVR, VMS, biyometrik erişim kontrolü ve entegre fiziksel güvenlik çözümleri.',
    url: 'https://yitser.com/hizmetler/kamera-guvenlik',
    images: [{ url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=630&fit=crop', width: 1200, height: 630, alt: 'Güvenlik kamera ve erişim kontrol sistemi' }],
  },
  alternates: { canonical: 'https://yitser.com/hizmetler/kamera-guvenlik' },
}

export default function Page() { return <Client /> }
