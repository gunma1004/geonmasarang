// app/page.tsx
import type { Metadata } from "next";
import MainClientUI from "./MainClientUI";

export const metadata: Metadata = {
  title: "서울 경기 인천 출장 힐링 마사지 및 홈케어 안내 - 건마사랑",
  description: "서울, 경기, 인천 전지역 신속 방문 출장 힐링 마사지 및 출장 홈타이 마사지! 24시 안심 홈케어 제휴 정보.",
  alternates: {
    canonical: "https://geonmasarang.netlify.app",
  },
  openGraph: {
    title: "서울 경기 인천 출장 힐링 마사지 및 홈케어 안내 - 건마사랑",
    description: "서울, 경기, 인천 전지역 신속 방문 출장 힐링 마사지 및 출장 홈타이 마사지! 24시 안심 홈케어 제휴 정보.",
    type: "website",
    siteName: "건마사랑",
    url: "https://geonmasarang.netlify.app",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "서울 경기 인천 출장 힐링 마사지 및 홈케어 안내 - 건마사랑",
    description: "서울, 경기, 인천 전지역 신속 방문 출장 힐링 마사지 및 출장 홈타이 마사지! 24시 안심 홈케어 제휴 정보.",
  },
};

export default function MainPage() {
  return <MainClientUI />;
}