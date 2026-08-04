import { regionData } from "../../data/regions";

interface PageProps {
  params: Promise<{
    region: string;
    district: string;
  }>;
}

// 각 지역 페이지별 동적 SEO 메타 태그 생성
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const { region, district } = resolvedParams;

  const regionInfo = regionData[region];
  const districtName = regionInfo?.districts[district]?.name || "상세 지역";
  const regionName = regionInfo?.name || "수도권";

  const title = `수도권건마사랑 - ${regionName} ${districtName} 마사지 홈타이 추천`;
  const description = `${regionName} ${districtName} 전지역 25분 내 신속 방문! 24시 연중무휴 후불제 안심 마사지 및 홈케어 제휴업체 실시간 안내.`;
  const keywords = `${districtName}마사지, ${districtName}홈타이, ${regionName}마사지, 후불제마사지, 수도권건마사랑`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

// 지역별 상세 페이지 화면 컴포넌트
export default async function DistrictPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { region, district } = resolvedParams;

  const regionInfo = regionData[region];
  const districtObj = regionInfo?.districts[district];
  const districtName = districtObj?.name || "알 수 없는 지역";
  const dongs = districtObj?.dongs || [];

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      
      {/* 상단 네온 헤더 */}
      <header className="sticky top-0 z-50 bg-[#050505]/85 backdrop-blur-xl border-b border-amber-500/20 px-4 py-3.5 shadow-[0_4px_20px_rgba(245,158,11,0.1)]">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="수도권건마사랑 로고" 
              className="w-10 h-10 rounded-xl object-cover border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.4)] group-hover:scale-105 transition-transform" 
            />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                수도권건마사랑
              </span>
              <span className="text-[10px] text-gray-400 tracking-tighter">SEOUL & GYEONGGI PREMIUM</span>
            </div>
          </a>
          
          <a href="/" className="text-xs px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-extrabold shadow-lg hover:brightness-110 transition-all">
            🏠 메인으로 가기
          </a>
        </div>
      </header>

      {/* 본문 영역 */}
      <main className="max-w-4xl mx-auto px-4 py-12 w-full flex-1 text-center">
        
        {/* 상단 배너 */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-amber-500/30 shadow-[0_0_40px_rgba(245,158,11,0.15)] relative h-56 md:h-72 flex items-center justify-center p-6">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80" 
              alt="지역 맞춤 힐링 배너" 
              className="w-full h-full object-cover filter brightness-[0.35] scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          </div>
          
          <div className="relative z-10 space-y-3">
            <span className="inline-block px-4 py-1 rounded-full bg-amber-500 text-black font-extrabold text-xs tracking-widest shadow-lg">
              📍 {regionInfo?.name || "수도권"} 실시간 맞춤 매칭
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight drop-shadow-lg">
              <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">{districtName}</span> 제휴 마사지 안내
            </h1>
            <p className="text-gray-200 text-xs md:text-sm font-medium max-w-lg mx-auto drop-shadow">
              {districtName} 전지역 25분 내 신속 방문! 24시 연중무휴 후불제 안심 케어 서비스입니다.
            </p>
          </div>
        </div>

        {/* 세부 동 정보 카드 */}
        <div className="bg-gradient-to-b from-[#18181b] to-[#0f0f11] border-2 border-amber-500/40 p-7 rounded-3xl max-w-2xl mx-auto mb-10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none"></div>

          <h2 className="text-xs text-amber-400 font-black uppercase tracking-wider mb-4 flex items-center gap-2">
            <span>✨</span> {districtName} 세부 동 및 서비스 가능 지역
          </h2>
          
          <div className="flex flex-wrap gap-2.5">
            {dongs.length > 0 ? (
              dongs.map((dong, idx) => (
                <span key={idx} className="bg-black/70 text-gray-200 text-xs font-bold px-3.5 py-2 rounded-xl border border-amber-500/20 shadow-inner">
                  {dong}
                </span>
              ))
            ) : (
              <p className="text-xs text-gray-400">해당 지역의 상세 동 정보가 준비중입니다. 전체 지역 상담 가능합니다.</p>
            )}
          </div>
        </div>

        {/* 즉시 예약 문의 카드 */}
        <div className="bg-gradient-to-b from-[#141416] to-[#0d0d0f] border border-amber-500/30 rounded-3xl p-8 text-center max-w-2xl mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <p className="text-sm md:text-base text-gray-200 mb-6 font-medium">
            현재 <strong className="text-amber-400">{districtName}</strong> 전지역에서 베테랑 관리사 대기 중! 지금 바로 편하게 문의하세요.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="tel:0507-1280-3126" 
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-black py-4 rounded-2xl text-sm transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] transform active:scale-95"
            >
              <span>📞</span> {districtName} 전화 예약하기
            </a>
            <a 
              href="sms:0507-1280-3126?body=수도권건마사랑%20보고%20연락드렸습니다.%20예약%20문의드립니다." 
              className="flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-black py-4 rounded-2xl text-sm border border-white/10 transition-all hover:border-amber-500/40 transform active:scale-95 shadow-md"
            >
              <span>💬</span> 간편 문자 상담하기
            </a>
          </div>
        </div>

      </main>

      {/* 하단 푸터 */}
      <footer className="bg-[#030303] border-t border-white/10 py-10 text-center text-gray-500 text-xs mt-auto">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <p className="text-gray-400 font-bold">수도권건마사랑은 건전하고 안전한 제휴 마사지 정보 플랫폼입니다.</p>
          <p className="text-[11px] text-gray-600">COPYRIGHT &copy; 수도권건마사랑 ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}