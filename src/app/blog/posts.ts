import type { BlogPost } from './types'

export const blogPosts: BlogPost[] = [
  {
    slug: 'fortigate-ha-ayarlari',
    title: 'FortiGate HA Ayarları: Active-Passive ve Active-Active Kurulum Rehberi',
    excerpt: 'FortiGate cihazlarda Active-Passive ve Active-Active HA konfigürasyonu, failover süreleri ve session synchronization ayarları.',
    category: 'ag-network',
    date: '2025-04-10',
    readTime: 12,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&q=85',
    keywords: ['FortiGate HA', 'High Availability', 'Active Passive', 'FortiOS', 'firewall kümeleme'],
  },
  {
    slug: 'zero-trust-mimarisi',
    title: 'Zero Trust Mimarisi: Kurumsal Ağlarda Sıfır Güven Modeli ve Uygulama Rehberi',
    excerpt: '"Güveni doğrula, sonra bağlan" ilkesiyle çalışan Zero Trust, saldırı yüzeyini dramatik biçimde daraltan modern güvenlik mimarisinin temel taşıdır.',
    category: 'siber-guvenlik',
    date: '2025-03-28',
    readTime: 14,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop&q=85',
    keywords: ['Zero Trust', 'ZTNA', 'sıfır güven mimari', 'siber güvenlik', 'IAM'],
  },
  {
    slug: 'sd-wan-wan-modernizasyonu',
    title: 'SD-WAN ile WAN Modernizasyonu: MPLS\'ten Yazılım Tanımlı Ağa Geçiş Rehberi',
    excerpt: 'Geleneksel MPLS yapılarının yerini almakta olan SD-WAN; merkezi yönetim ve uygulama bazlı yönlendirme ile kurumsal WAN altyapısını yeniden tanımlıyor.',
    category: 'ag-network',
    date: '2025-03-10',
    readTime: 13,
    image: 'https://images.unsplash.com/photo-1545987796-200677ee1011?w=1200&h=600&fit=crop&q=85',
    keywords: ['SD-WAN', 'MPLS', 'WAN optimizasyon', 'FortiGate SD-WAN', 'Cisco SD-WAN'],
  },
  {
    slug: 'hci-veri-merkezi-modernizasyonu',
    title: 'HCI ile Veri Merkezi Modernizasyonu: Hiperkonverjans Altyapısı Kurulum Rehberi',
    excerpt: 'Compute, storage ve networki tek platformda birleştiren hiperkonverjans altyapısı, yönetim karmaşıklığını azaltırken ölçeklenebilirliği artırıyor.',
    category: 'sunucu-storage',
    date: '2025-03-01',
    readTime: 11,
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1200&h=600&fit=crop&q=85',
    keywords: ['HCI', 'hiperkonverjans', 'VMware vSAN', 'Nutanix', 'veri merkezi modernizasyon'],
  },
  {
    slug: 'azure-hybrid-cloud-stratejisi',
    title: 'Azure Hibrit Bulut Stratejisi: On-Premise Altyapıyı Azure ile Entegre Etme',
    excerpt: 'Azure Arc ile on-premise sistemleri buluta bağlama, ExpressRoute yapılandırması ve hibrit kimlik yönetimi için Azure AD Connect kurulumu.',
    category: 'cloud-sanallastirma',
    date: '2025-02-20',
    readTime: 13,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&q=85',
    keywords: ['Azure hibrit bulut', 'Azure Arc', 'ExpressRoute', 'Azure AD Connect', 'cloud migration'],
  },
  {
    slug: 'kvkk-uyumlu-veri-yedekleme',
    title: 'KVKK Uyumlu Veri Yedekleme: Teknik Gereksinimler ve 3-2-1-1-0 Standardı',
    excerpt: 'KVKK kapsamında kişisel veri içeren yedeklemeler için zorunlu teknik önlemler, saklama süreleri ve güvenli imha prosedürleri.',
    category: 'siber-guvenlik',
    date: '2025-02-10',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop&q=85',
    keywords: ['KVKK yedekleme', 'veri koruma', 'backup güvenlik', '3-2-1 kuralı', 'veri imha'],
  },
  {
    slug: 'microsoft-365-lisans-optimizasyonu',
    title: 'Microsoft 365 Lisans Optimizasyonu: Gereksiz Harcamaları Önlemek için Rehber',
    excerpt: 'Kurumsal Microsoft 365 lisanslarında doğru plan seçimi, kullanılmayan lisansların tespiti ve maliyet optimizasyonu stratejileri.',
    category: 'microsoft-lisanslama',
    date: '2025-02-05',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=1200&h=600&fit=crop&q=85',
    keywords: ['Microsoft 365 lisans', 'M365 optimizasyon', 'kurumsal lisanslama', 'Microsoft CSP'],
  },
  {
    slug: 'cat6a-cat7-kablolama-rehberi',
    title: 'Cat6A mı Cat7 mi? Yapısal Kablolama Seçim ve Kurulum Rehberi 2025',
    excerpt: '10G ve üzeri ağlar için doğru kablo kategorisini seçmek; uzun vadeli kapasite planlaması, maliyet ve standart uyumluluğu açısından kritik bir karardır.',
    category: 'ag-network',
    date: '2025-01-20',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1200&h=600&fit=crop&q=85',
    keywords: ['Cat6A kablolama', 'Cat7', 'yapısal kablolama', 'TIA-568', 'Fluke test'],
  },
  {
    slug: 'windows-server-2025-yenilikler',
    title: 'Windows Server 2025 Yenilikleri: Kurumsal Geçiş Planlaması ve Öne Çıkan Özellikler',
    excerpt: 'Windows Server 2025 ile gelen hotpatch desteği, SMB sıkıştırma, gelişmiş Active Directory özellikleri ve lisanslama değişikliklerinin detaylı analizi.',
    category: 'microsoft-lisanslama',
    date: '2025-01-10',
    readTime: 11,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&h=600&fit=crop&q=85',
    keywords: ['Windows Server 2025', 'hotpatch', 'Active Directory 2025', 'SMB sıkıştırma'],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return blogPosts.map(p => p.slug)
}
