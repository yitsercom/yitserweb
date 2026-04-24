import type { Metadata } from 'next'
import BlogClient from './blog-client'

export const metadata: Metadata = {
  title: 'Blog — Kurumsal BT ve Teknoloji Yazıları | Yitser Teknoloji',
  description: 'Ağ altyapısı, siber güvenlik, cloud ve Microsoft teknolojileri hakkında uzman görüşleri. FortiGate, Cisco, VMware, Azure ve daha fazlası.',
  alternates: { canonical: 'https://yitser.com/blog' },
}

export default function BlogPage() {
  return <BlogClient />
}
