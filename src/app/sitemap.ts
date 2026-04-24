import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://yitser.com'
  const now = new Date()
  return [
    { url: base,                                    lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/hizmetler`,                     lastModified: now, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${base}/hizmetler/ag-altyapisi`,        lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/hizmetler/siber-guvenlik`,      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/hizmetler/sunucu-storage`,      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/hizmetler/cloud-sanallastirma`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/hizmetler/backup-veri-koruma`,  lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/hizmetler/yapisal-kablolama`,   lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/hizmetler/kamera-guvenlik`,     lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/hizmetler/it-destek`,           lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/hakkimizda`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/cozumler`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog`,                          lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/iletisim`,                      lastModified: now, changeFrequency: 'yearly',  priority: 0.8 },
  ]
}
