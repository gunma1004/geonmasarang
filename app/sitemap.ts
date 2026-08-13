import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sg-therapylab.shop'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // 서울 지역
    { url: `${baseUrl}/seoul/gangnam`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/seoul/seocho`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/seoul/mapo`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/seoul/songpa`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/seoul/yongsan`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/seoul/jongno`, lastModified: new Date(), priority: 0.8 },
    // 경기 지역
    { url: `${baseUrl}/seongnam_bundang`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/suwon_yeongtong`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/goyang_ilsandong`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/yongin_suji`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/anyang_dongan`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/hanam`, lastModified: new Date(), priority: 0.8 },
  ]
}