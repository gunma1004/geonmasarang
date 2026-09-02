import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // 🎯 메타데이터 기본 URL 지정
  metadataBase: new URL("https://geonmasarang.netlify.app"),
  // 🎯 제목: 33자 (40자 이내 통과)
  title: "서울 경기 인천 출장 힐링 마사지 제휴 안내 - 건마사랑",
  // 🎯 설명문: 65자 (80자 이내 통과)
  description: "서울, 경기, 인천 신속 방문 출장 힐링 마사지 및 출장 홈타이 마사지 제휴 정보 안내.",
  openGraph: {
    title: "서울 경기 인천 출장 힐링 마사지 제휴 안내 - 건마사랑",
    description: "서울, 경기, 인천 신속 방문 출장 힐링 마사지 및 출장 홈타이 마사지 제휴 정보 안내.",
    siteName: "건마사랑",
    type: "website",
    url: "https://geonmasarang.netlify.app",
    images: ["/logo.png"],
  },
  // 🎯 네이버 & 구글 서치콘솔 소유확인 메타태그
  verification: {
    google: "TRWbRSp_AYL6BBP-D4EsznfA2y_Q9FFIElpeFxzmils",
    other: {
      "naver-site-verification": "1c3cd9245e9281a38e527e96b27951e2b55344e2",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}