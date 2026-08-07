import "./globals.css"; // 👈 CSS 임포트
import type { Metadata } from "next";
import Image from "next/image"; // 👈 1. Image 컴포넌트 불러오기

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
      <body>
        {/* 📍 상단 배너 영역 */}
        <header className="w-full flex justify-center bg-gray-100 py-2">
          <div className="relative w-full max-w-[1200px] h-[150px]"> {/* 원하는 높이(h-[150px])나 크기로 조절하세요 */}
            <Image
              src="/my-banner.png" // public/my-banner.png 파일 경로
              alt="수도권건마사랑 배너"
              fill
              className="object-contain" // 이미지가 구겨지지 않게 비율을 유지합니다
              priority
            />
          </div>
        </header>

        {/* 메인 콘텐츠 영역 */}
        <main>{children}</main>
      </body>
    </html>
  );
}