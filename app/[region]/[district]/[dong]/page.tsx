import { regionData } from "../../../data/regions";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    region: string;
    district: string;
    dong: string;
  }>;
}

// 각 동별 맞춤 SEO 메타 태그
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const { region, district, dong } = resolvedParams;
  const decodedDong = decodeURIComponent(dong);

  const regionInfo = regionData[region];
  const districtName = regionInfo?.districts[district]?.name || "상세 지역";
  const regionName = regionInfo?.name || "수도권";

  const title = `수도권건마사랑 - ${districtName} ${decodedDong} 마사지 홈타이 추천 제휴업체`;
  const description = `${regionName} ${districtName} ${decodedDong} 전지역 25분 내 신속 방문! 24시 연중무휴 후불제 안심 마사지 제휴업체 안내.`;

  return { title, description };
}

const shops = [
  {
    id: 1,
    name: "🔥 [긴급] 24시 프리미엄 홈케어",
    location: "서울·경기 전지역 (실시간 신속 방문)",
    desc: "⭐ 만족도 1위! 지친 일상을 깨우는 정성 가득한 테라피 & 릴렉싱 프로그램",
    phone: "0507-1280-3126",
    badge: "실시간 인기폭발",
    badgeColor: "bg-red-500 text-white animate-pulse",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    courses: [
      { name: "릴렉스 건식 케어 (60분)", price: "60,000원", best: false },
      { name: "프리미엄 스웨디시 (60분)", price: "140,000원", best: true },
    ]
  },
  {
    id: 2,
    name: "✨ 달달한 100% 한국인 전문 케어",
    location: "서울·경기 전지역",
    desc: "🏆 품격 있는 힐링을 선사하는 프라이빗 방문 테라피 서비스",
    phone: "0507-1280-3172",
    badge: "만족도 최우수",
    badgeColor: "bg-amber-500 text-black",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    courses: [
      { name: "맞춤형 바디 케어 (60분)", price: "90,000원", best: false },
      { name: "스페셜 아로마 힐링 (60분)", price: "140,000원", best: true },
    ]
  },
  {
    id: 3,
    name: "💎 명품 프리미엄 테라피",
    location: "서울·경기 전지역",
    desc: "⚡ 칼배송보다 빠른 방문! 철저한 위생 관리와 럭셔리 케어",
    phone: "0507-1280-3128",
    badge: "24시 상시할인",
    badgeColor: "bg-purple-600 text-white",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=800&q=80",
    courses: [
      { name: "타이/아로마 코스 (60분)", price: "60,000원", best: false },
      { name: "한국 스웨디시케어 (60분)", price: "140,000원", best: true },
    ]
  },
  {
    id: 4,
    name: "🌟 베테랑 힐링 홈케어",
    location: "서울·경기 전지역",
    desc: "💯 전문 힐러들의 맞춤형 피로 회복 프로그램 진행 중",
    phone: "0507-1280-3327",
    badge: "신규 제휴할인",
    badgeColor: "bg-blue-600 text-white",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    courses: [
      { name: "스탠다드 타이코스 (60분)", price: "60,000원", best: false },
      { name: "VIP 스웨디시 (90분)", price: "140,000원", best: true },
    ]
  },
  {
    id: 5,
    name: "👑 시그니처 방문 케어",
    location: "서울·경기 전지역",
    desc: "🚀 후불제 안심 이용! 수도권 전지역 평균 25분 내 칼같이 도착",
    phone: "0507-1280-3170",
    badge: "재방문율 99%",
    badgeColor: "bg-emerald-500 text-black",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80",
    courses: [
      { name: "릴렉스 타이 코스 (60분)", price: "60,000원", best: false },
      { name: "시그니처 스웨디시 (60분)", price: "140,000원", best: true },
    ]
  }
];

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
        
        {/* 동 맞춤 배너 */}
        <section className="text-center my-2">
          <div className="mb-8 overflow-hidden rounded-3xl border border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.15)] relative h-60 md:h-80 flex items-center justify-center p-6">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80" alt="배너" className="w-full h-full object-cover filter brightness-[0.35]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            </div>
            
            <div className="relative z-10 space-y-3">
              <span className="inline-block px-4 py-1 rounded-full bg-amber-500 text-black font-extrabold text-xs">
                📍 {districtName} {decodedDong} 실시간 맞춤 매칭
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                <span className="text-amber-400">{decodedDong}</span> 25분 내 신속 방문 케어
              </h1>
              <p className="text-gray-200 text-xs md:text-sm font-medium max-w-lg mx-auto">
                {districtName} {decodedDong} 인근 대기 중인 제휴 기사님 신속 방문 서비스입니다.
              </p>
            </div>
          </div>
        </section>

        {/* 제휴 업체 카드 리스트 */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-black text-white mb-4">
            🔥 <span className="text-amber-400">{districtName} {decodedDong}</span> 맞춤 추천 제휴업체
          </h2>

          {shops.map((shop) => (
            <article key={shop.id} className="bg-gradient-to-b from-[#141416] to-[#0d0d0f] border border-amber-500/25 rounded-3xl overflow-hidden shadow-xl">
              <div className="relative h-48 w-full overflow-hidden">
                <img src={shop.image} alt={shop.name} className="w-full h-full object-cover filter brightness-90" />
                <div className="absolute top-4 left-4">
                  <span className={`text-[11px] font-black px-3 py-1 rounded-full ${shop.badgeColor}`}>{shop.badge}</span>
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs text-amber-400 font-bold bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20 inline-block mb-2">
                  📍 {decodedDong} 인근 대기 및 신속 방문
                </span>
                <h3 className="text-xl font-black text-white mb-2">{shop.name}</h3>
                <p className="text-xs text-gray-300 mb-4 bg-black/40 p-3 rounded-xl">{shop.desc}</p>
                
                <div className="grid grid-cols-2 gap-3.5">
                  <a href={`tel:${shop.phone}`} className="flex items-center justify-center gap-2 bg-amber-500 text-black font-black py-4 rounded-2xl text-xs">
                    📞 전화예약
                  </a>
                  <a href={`sms:${shop.phone}?body=${encodeURIComponent(`${decodedDong} ${shop.name} 문의`)}`} className="flex items-center justify-center gap-2 bg-neutral-900 text-white font-black py-4 rounded-2xl text-xs border border-white/10">
                    💬 문자상담
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>

      </main>
    </div>
  );
}