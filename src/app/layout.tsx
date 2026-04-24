import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const syne  = Syne({ subsets: ['latin'], variable: '--font-display', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-body',    display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://yitser.com'),
  title: {
    default: 'Yitser Teknoloji — Kurumsal BT Altyapısı ve Danışmanlık',
    template: '%s | Yitser Teknoloji',
  },
  description: 'Ağ altyapısı, siber güvenlik, sunucu sistemleri ve cloud çözümlerinde marka bağımsız uçtan uca kurumsal BT hizmetleri.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  robots: { index: true, follow: true },
  openGraph: { type: 'website', locale: 'tr_TR', siteName: 'Yitser Teknoloji' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${syne.variable} ${inter.variable}`}>
      <body className="antialiased bg-canvas text-ink-primary">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
