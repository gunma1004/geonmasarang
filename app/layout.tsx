import type { Metadata } from "next";
import "./globals.css";

// ⬇️ 여기에 메타 태그 인증 정보를 추가합니다.
export const metadata: Metadata = {
  title: "수도권건마사랑 - 서울 경기 24시 스웨디시 홈타이 출장마사지 제휴 할인 정보",
  description: "서울·경기 전지역 25분 내 신속 방문 출장마사지 및 홈타이 제휴업체 실시간 안내",
  verification: {
    google: "TCu3tK7Qc_120-isV31Dkmt4FXwgCjqGfI2PUkF3lA4",
    other: {
      "naver-site-verification": "fdba1e09333adec72e19fc16a6b0625d9aca5a2d",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}