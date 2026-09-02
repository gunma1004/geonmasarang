import { MetadataRoute } from 'next';
import { regionData } from './data/regions'; // 👈 '@/data/regions' 대신 './data/regions'로 변경

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://geonmasarang.netlify.app';

  const sitemapList: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // 서울, 경기, 인천의 모든 구·시·군 및 동 단위 URL 자동 추출
  Object.entries(regionData).forEach(([regionKey, region]) => {
    Object.entries(region.districts).forEach(([districtKey, district]) => {
      // 📍 구/시/군 단위
      sitemapList.push({
        url: `${baseUrl}/${regionKey}/${districtKey}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });

      // 📍 동 단위
      district.dongs.forEach((dong) => {
        sitemapList.push({
          url: `${baseUrl}/${regionKey}/${districtKey}/${encodeURIComponent(dong)}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.6,
        });
      });
    });
  });

  return sitemapList;
}