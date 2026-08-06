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

// 🟢 1. 서버 메타데이터 생성 (SEO)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { region, district, dong } = resolvedParams;
  const decodedDong = decodeURIComponent(dong);

  const regionInfo = regionData[region];
  const districtName = regionInfo?.districts[district]?.name || district;
  const regionName = regionInfo?.name || "수도권";

  const title = `${districtName} ${decodedDong} 출장마사지 홈타이 추천 제휴업체 - 수도권건마사랑`;
  const description = `${regionName} ${districtName} ${decodedDong} 전지역 25분 내 신속 방문 출장마사지! 24시 연중무휴 후불제 안심 홈타이 제휴업체 안내.`;

  return {
    title,
    description,
    openGraph: {
      title,
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

// 🟢 2. 실제 화면 컴포넌트
export default async function DongPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { region, district, dong } = resolvedParams;
  const decodedDong = decodeURIComponent(dong);

  const regionInfo = regionData[region];
  const districtName = regionInfo?.districts[district]?.name || district;
  const regionName = regionInfo?.name || "수도권";

  // 💡 실제 프로젝트의 DB나 데이터 소스에서 동별 업체 목록을 불러오는 로직을 연결하시면 됩니다.
  // 예시: const shops = await getShopsByDong(region, district, decodedDong);
  const shops: any[] = []; // 임시 빈 배열

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

      {/* 본문 영역 */}
      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
        {/* 상단 타이틀 섹션 */}
        <div className="mb-8 border-b border-neutral-800 pb-6">
          <span className="text-amber-500 font-bold text-sm tracking-wide">
            {regionName} &gt; {districtName}
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
            {districtName} <span className="text-amber-400">{decodedDong}</span> 마사지/홈타이
          </h1>
          <p className="text-neutral-400 text-sm mt-2">
            {districtName} {decodedDong} 엄선된 제휴업체 정보 및 이용 안내입니다.
          </p>
        </div>

        {/* 업체 리스트 영역 */}
        {shops.length > 0 ? (
          <div className="grid gap-4">
            {/* 업체 카드가 들어갈 자리 */}
          </div>
        ) : (
          /* 업체가 없을 때 표시할 예외 처리 UI */
          <div className="text-center py-16 bg-neutral-900/50 rounded-2xl border border-neutral-800">
            <p className="text-neutral-400 text-lg font-medium">
              현재 <span className="text-amber-400">{decodedDong}</span>에 등록된 제휴업체가 없습니다.
            </p>
            <p className="text-neutral-500 text-sm mt-1">
              인근 지역의 제휴업체를 확인해 주세요!
            </p>
            <Link
              href={`/${region}/${district}`}
              className="inline-block mt-6 px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold rounded-xl transition-colors text-sm"
            >
              {districtName} 전체 목록 보기
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}