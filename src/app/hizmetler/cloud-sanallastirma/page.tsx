import type { Metadata } from 'next'
import Client from './client'

export const metadata: Metadata = {
  title: 'Hibrit Bulut ve Sanallaştırma Çözümleri | Cloud Migration | Yitser Teknoloji',
  description: 'Hibrit bulut stratejisi, cloud migration, VMware ve Hyper-V sanallaştırma. AWS, Azure, Google Cloud entegrasyonu. Container ve Kubernetes altyapısı. Marka bağımsız bulut danışmanlığı.',
  keywords: ['hibrit bulut çözümleri', 'cloud migration Türkiye', 'VMware kurulum', 'Hyper-V sanallaştırma', 'AWS Azure danışmanlık', 'Kubernetes kurulum', 'bulut geçişi', 'sanallaştırma hizmetleri'],
  openGraph: {
    title: 'Hibrit Bulut & Sanallaştırma | Cloud Migration | Yitser Teknoloji',
    description: 'Hibrit bulut stratejisi, VMware sanallaştırma ve cloud migration. AWS, Azure, GCP entegrasyonu.',
    url: 'https://yitser.com/hizmetler/cloud-sanallastirma',
    images: [{ url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=630&fit=crop', width: 1200, height: 630, alt: 'Hibrit bulut ve sanallaştırma altyapısı' }],
  },
  alternates: { canonical: 'https://yitser.com/hizmetler/cloud-sanallastirma' },
}

export default function Page() { return <Client /> }
