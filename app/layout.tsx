import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "수도권건마사랑 - 서울 경기 24시 스웨디시 홈타이 출장마사지 제휴 할인 정보",
  description: "서울 및 경기도 전지역 25분 내 신속 방문 출장마사지! 24시 연중무휴 후불제 안심 홈타이, 스웨디시 제휴업체 정보 안내.",
  openGraph: {
    title: "수도권건마사랑 - 서울 경기 24시 스웨디시 홈타이 출장마사지 제휴 할인 정보",
    description: "서울 및 경기도 전지역 25분 내 신속 방문 출장마사지! 24시 연중무휴 후불제 안심 홈타이, 스웨디시 제휴업체 정보 안내.",
    siteName: "수도권건마사랑",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}