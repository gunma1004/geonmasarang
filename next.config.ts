import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React 엄격 모드 활성화 (권장)
  reactStrictMode: true,

  // Unsplash 등 외부 이미지 도메인 허용이 필요한 경우
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Netlify나 정적 호스팅 서비스에 'out' 폴더(HTML 정적 배포)로 빌드할 경우 활성화
  // output: "export",
};

export default nextConfig;