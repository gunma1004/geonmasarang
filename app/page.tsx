// 📍 app/page.tsx (서버 컴포넌트)
import type { Metadata } from "next";
import MainClientUI from "./MainClientUI"; // 아래 2번 클라이언트 컴포넌트 불러오기

// 🟢 1. 메인 페이지 정적 SEO 메타데이터 (키워드를 앞으로 배치)
export const metadata: Metadata = {
  title: "서울 경기 24시 스웨디시 홈타이 출장마사지 추천 - 수도권 테라피랩",
  description: "서울 및 경기도 전지역 25분 내 신속 방문 출장마사지! 24시 연중무휴 후불제 안심 홈타이, 스웨디시 제휴업체 정보 안내.",
  openGraph: {
    title: "서울 경기 24시 스웨디시 홈타이 출장마사지 추천 - 수도권 테라피랩",
    description: "서울 및 경기도 전지역 25분 내 신속 방문 출장마사지! 24시 연중무휴 후불제 안심 홈타이, 스웨디시 제휴업체 정보 안내.",
    type: "website",
    siteName: "수도권 테라피랩",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "서울 경기 24시 스웨디시 홈타이 출장마사지 추천 - 수도권 테라피랩",
    description: "서울 및 경기도 전지역 25분 내 신속 방문 출장마사지! 24시 연중무휴 후불제 안심 홈타이, 스웨디시 제휴업체 정보 안내.",
  },
};

export default function MainPage() {
  return <MainClientUI />;
}