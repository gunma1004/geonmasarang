// 📍 app/[region]/[district]/[dong]/page.tsx

import { regionData } from "../../../data/regions";
import Link from "next/link";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    region: string;
    district: string;
    dong: string;
  }>;
}

// 🟢 1. 서버에서 실행되어 네이버 로봇에 OG 태그를 넘겨주는 함수
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { region, district, dong } = resolvedParams;
  const decodedDong = decodeURIComponent(dong);

  const regionInfo = regionData[region];
  const districtName = regionInfo?.districts[district]?.name || district;
  const regionName = regionInfo?.name || "수도권";

  // 🎯 [수정된 부분] 키워드를 맨 앞으로, 사이트명을 맨 뒤(- 수도권건마사랑)로 배치
  const title = `${districtName} ${decodedDong} 출장마사지 홈타이 추천 제휴업체 - 수도권건마사랑`;
  const description = `${regionName} ${districtName} ${decodedDong} 전지역 25분 내 신속 방문 출장마사지! 24시 연중무휴 후불제 안심 홈타이 제휴업체 안내.`;

  return {
    title,
    description,
    openGraph: {
      title, // OG 제목도 동일하게 들어갑니다.
      description,
      type: "website",
      siteName: "수도권건마사랑",
      images: [
        {
          url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// 🟢 2. 실제 화면을 그려주는 메인 컴포넌트
export default async function DongPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { region, district, dong } = resolvedParams;
  const decodedDong = decodeURIComponent(dong);

  const regionInfo = regionData[region];
  const districtName = regionInfo?.districts[district]?.name || district;

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-[#050505]/85 backdrop-blur-xl border-b border-amber-500/20 px-4 py-3.5 shadow-[0_4px_20px_rgba(245,158,11,0.1)]">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="로고" className="w-10 h-10 rounded-xl object-cover border border-amber-500/40" />
            <span className="text-xl font-black text-amber-400">수도권건마사랑</span>
          </Link>
          <Link href={`/${region}/${district}`} className="text-xs px-4 py-2 rounded-xl bg-neutral-800 text-amber-400 font-extrabold border border-amber-500/30">
            ← {districtName} 전체 목록으로
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
        {/* 본문 레이아웃 UI 들어가면 됩니다 */}
      </main>
    </div>
  );
}