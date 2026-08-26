import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // 🎯 메타데이터 기본 URL 지정
  metadataBase: new URL("https://carekok.massagemong-kr.workers.dev"),
  title: "케어콕 - 서울 경기 24시 스웨디시 홈타이 출장마사지 제휴 할인 정보",
  description: "서울 및 경기도 전지역 25분 내 신속 방문 출장마사지! 24시 연중무휴 후불제 안심 홈타이, 스웨디시 제휴업체 정보 안내.",
  openGraph: {
    title: "케어콕 - 서울 경기 24시 스웨디시 홈타이 출장마사지 제휴 할인 정보",
    description: "서울 및 경기도 전지역 25분 내 신속 방문 출장마사지! 24시 연중무휴 후불제 안심 홈타이, 스웨디시 제휴업체 정보 안내.",
    siteName: "케어콕",
    type: "website",
    url: "https://carekok.massagemong-kr.workers.dev",
    images: ["/logo.png"],
  },
  // 🎯 네이버 & 구글 서치콘솔 소유확인 메타태그
  verification: {
    google: "TRWbRSp_AYL6BBP-D4EsznfA2y_Q9FFIElpeFxzmils",
    other: {
      "naver-site-verification": "aabcbe4b652f5584e808c2c48814a7f6d0ef63fe",
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