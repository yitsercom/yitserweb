import { MetadataRoute } from 'next'

const BASE = 'https://yitser.com'

const blogSlugs = [
  'fortigate-ha-ayarlari',
  'zero-trust-mimarisi',
  'sd-wan-wan-modernizasyonu',
  'hci-veri-merkezi-modernizasyonu',
  'azure-hybrid-cloud-stratejisi',
  'kvkk-uyumlu-veri-yedekleme',
  'microsoft-365-lisans-optimizasyonu',
  'cat6a-cat7-kablolama-rehberi',
  'windows-server-2025-yenilikler',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/hizmetler`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE}/hizmetler/ag-altyapisi`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/hizmetler/siber-guvenlik`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/hizmetler/sunucu-storage`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/hizmetler/cloud-sanallastirma`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/hizmetler/backup-veri-koruma`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/hizmetler/yapisal-kablolama`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/hizmetler/kamera-guvenlik`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/hizmetler/it-destek`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/hakkimizda`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/cozumler`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/iletisim`, lastModified: now, changeFrequency: 'yearly', priority: 0.85 },
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
  ]

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map(slug => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...staticPages, ...blogPages]
}
