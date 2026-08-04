import { regionData } from "../../../data/regions";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    region: string;
    district: string;
  }>;
}

// 구 단위 SEO 메타 태그 생성
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const { region, district } = resolvedParams;

  const regionInfo = regionData[region];
  const districtName = regionInfo?.districts[district]?.name || "상세 지역";
  const regionName = regionInfo?.name || "수도권";

  const title = `수도권건마사랑 - ${regionName} ${districtName} 마사지 홈타이 추천 제휴업체`;
  const description = `${regionName} ${districtName} 전지역 25분 내 신속 방문! 24시 연중무휴 후불제 안심 마사지 및 홈케어 제휴업체 실시간 안내.`;

  return { title, description };
}

// 💡 메인 페이지와 동일한 제휴 업체 리스트 데이터
const mockPartners = [
  {
    id: 1,
    name: "스카이 24시 홈타이",
    category: "태국 / 아로마 / 홈케어",
    rating: "5.0",
    reviews: 128,
    description: "전신 타이 마사지 & 아로마 힐링 코스 전문",
    price: "70,000원~",
    phone: "0507-1280-3126",
    badge: "실시간 예약가능",
  },
  {
    id: 2,
    name: "프리미엄 딥티슈 홈케어",
    category: "스웨디시 / 감성테라피",
    rating: "4.9",
    reviews: 94,
    description: "최고급 오일과 맞춤형 수기 테라피 프라이빗 케어",
    price: "80,000원~",
    phone: "0507-1280-3126",
    badge: "인기 제휴점",
  },
];

export default async function DistrictPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { region, district } = resolvedParams;

  const regionInfo = regionData[region];
  const districtObj = regionInfo?.districts[district];
  const districtName = districtObj?.name || district; // 데이터에 없으면 주소창 영단어 그대로 출력 방어
  const dongs = districtObj?.dongs || [];

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen flex flex-col font-sans">
      
      {/* 상단 헤더 */}
      <header className="sticky top-0 z-50 bg-[#050505]/85 backdrop-blur-xl border-b border-amber-500/20 px-4 py-3.5">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="로고" className="w-10 h-10 rounded-xl object-cover border border-amber-500/40" />
            <span className="text-xl font-black text-amber-400">수도권건마사랑</span>
          </Link>
          <Link href="/" className="text-xs px-4 py-2 rounded-xl bg-amber-500 text-black font-extrabold">
            🏠 메인으로
          </Link>
        </div>
      </header>

      {/* 본문 영역 */}
      <main className="max-w-4xl mx-auto px-4 py-12 w-full flex-1">
        
        {/* 상단 지역 안내 배너 */}
        <div className="mb-10 text-center bg-neutral-900 border border-amber-500/30 rounded-3xl p-8 shadow-lg">
          <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold px-3 py-1 rounded-full">
            📍 실시간 맞춤 매칭 존
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-white mt-3 mb-2">
            <span className="text-amber-400">{districtName}</span> 전지역 제휴 마사지 안내
          </h1>
          <p className="text-xs md:text-sm text-gray-300">
            {districtName} 전지역 25분 내 신속 방문! 24시 연중무휴 후불제 안심 홈케어 서비스입니다.
          </p>
        </div>

        {/* 세부 동 바로가기 버튼들 */}
        {dongs.length > 0 && (
          <div className="mb-12 bg-[#121215] border border-amber-500/30 p-6 rounded-3xl">
            <h2 className="text-xs font-black text-amber-400 mb-3 uppercase tracking-wider">✨ {districtName} 세부 동 선택</h2>
            <div className="flex flex-wrap gap-2">
              {dongs.map((dong, idx) => (
                <span 
                  key={idx} 
                  className="bg-black/60 text-gray-200 text-xs font-bold px-3.5 py-2 rounded-xl border border-amber-500/20 shadow-inner"
                >
                  {dong}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 🌟 메인 스타일과 똑같은 제휴 업체 카드 리스트 */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg md:text-xl font-extrabold text-white flex items-center gap-2">
              🔥 <span className="text-amber-400">{districtName}</span> 단독 제휴 업체 리스트
            </h2>
            <span className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full font-bold">
              실시간 배정 대기중
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockPartners.map((partner) => (
              <div 
                key={partner.id} 
                className="bg-gradient-to-b from-[#161619] to-[#0d0d0f] border border-amber-500/30 rounded-3xl p-6 shadow-xl flex flex-col justify-between hover:border-amber-500/60 transition-all"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-bold px-3 py-1 rounded-full">
                      {partner.badge}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
                      <span>⭐ {partner.rating}</span>
                      <span className="text-gray-500">({partner.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-white mb-1">{partner.name}</h3>
                  <p className="text-xs text-amber-400 font-medium mb-2">{partner.category}</p>
                  <p className="text-xs text-gray-300 mb-4">{partner.description} ({districtName} 인근 신속 방문)</p>
                  <p className="text-sm font-extrabold text-white mb-6">코스 요금: <span className="text-amber-400">{partner.price}</span></p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/10">
                  <a 
                    href={`tel:${partner.phone}`} 
                    className="flex items-center justify-center gap-1 bg-amber-500 hover:bg-amber-400 text-black font-extrabold py-3 rounded-xl text-xs transition shadow-md"
                  >
                    📞 전화예약
                  </a>
                  <a 
                    href={`sms:${partner.phone}?body=${districtName}%20${partner.name}%20보고%20연락드렸습니다.`} 
                    className="flex items-center justify-center gap-1 bg-neutral-800 hover:bg-neutral-700 text-white font-extrabold py-3 rounded-xl text-xs border border-white/10 transition"
                  >
                    💬 문자문의
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      {/* 푸터 */}
      <footer className="bg-[#030303] border-t border-white/10 py-10 text-center text-gray-500 text-xs mt-auto">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <p className="text-gray-400 font-bold">수도권건마사랑은 건전하고 안전한 제휴 마사지 정보 플랫폼입니다.</p>
          <p className="text-[11px] text-gray-600">COPYRIGHT &copy; 수도권건마사랑 ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}