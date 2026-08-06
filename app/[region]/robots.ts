// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://sudokwon-massage.shop/sitemap.xml', // 본인 실제 도메인 주소로 수정
  };
}