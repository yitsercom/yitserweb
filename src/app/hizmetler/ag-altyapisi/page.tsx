import type { Metadata } from 'next'
import AgAltyapiClient from './client'

export const metadata: Metadata = {
  title: 'Kurumsal Ağ Altyapısı Kurulumu | Network Tasarım ve Yönetimi | Yitser Teknoloji',
  description: 'Kurumsal ağ altyapısı kurulum, tasarım ve yönetim hizmetleri. SD-WAN, Wi-Fi 6/6E, kampüs ağı, veri merkezi ağı. Marka bağımsız yaklaşımla uçtan uca network altyapısı. İstanbul ve Türkiye geneli.',
  keywords: ['kurumsal ağ altyapısı', 'network kurulum', 'SD-WAN çözümleri', 'Wi-Fi 6 kurulum', 'kampüs ağı tasarımı', 'veri merkezi ağı', 'network yönetimi', 'ağ altyapısı İstanbul'],
  openGraph: {
    title: 'Kurumsal Ağ & Network Altyapısı Hizmetleri | Yitser Teknoloji',
    description: 'Kesintisiz iletişim için yüksek performanslı kurumsal ağ altyapısı. SD-WAN, Wi-Fi 6, kampüs ve WAN çözümleri.',
    url: 'https://yitser.com/hizmetler/ag-altyapisi',
    images: [{ url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop', width: 1200, height: 630, alt: 'Kurumsal ağ altyapısı network sistemleri' }],
  },
  alternates: { canonical: 'https://yitser.com/hizmetler/ag-altyapisi' },
}

export default function AgAltyapiPage() { return <AgAltyapiClient /> }
