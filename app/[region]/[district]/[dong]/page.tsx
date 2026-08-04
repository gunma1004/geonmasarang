import { regionData } from "../../../../data/regions";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    region: string;
    district: string;
    dong: string;
  }>;
}

// 동 단위 SEO
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const { region, district, dong } = resolvedParams;
  const decodedDong = decodeURIComponent(dong);

  const regionInfo = regionData[region];
  const districtName = regionInfo?.districts[district]?.name || "상세 지역";

  const title = `수도권건마사랑 - ${districtName} ${decodedDong} 마사지 홈타이 추천 제휴업체`;
  const description = `${districtName} ${decodedDong} 전지역 25분 내 신속 방문! 24시 연중무휴 후불제 안심 마사지 제휴업체 안내.`;

  return { title, description };
}

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

export default async function DongPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { region, district, dong } = resolvedParams;
  const decodedDong = decodeURIComponent(dong);

  const regionInfo = regionData[region];
  const districtName = regionInfo?.districts[district]?.name || "알 수 없는 지역";

  return (
    <div className="bg-[#050505] text-gray-100 min-h-screen flex flex-col font-sans">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-[#050505]/85 backdrop-blur-xl border-b border-amber-500/20 px-4 py-3.5">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="로고" className="w-10 h-10 rounded-xl object-cover border border-amber-500/40" />
            <span className="text-xl font-black text-amber-400">수도권건마사랑</span>
          </Link>
          <Link href={`/${region}/${district}`} className="text-xs px-4 py-2 rounded-xl bg-neutral-800 text-amber-400 font-extrabold border border-amber-500/30">
            ← {districtName} 전체 목록으로
          </Link>
        </div>
      </header>

      {/* 본문 */}
      <main className="max-w-4xl mx-auto px-4 py-12 w-full flex-1">
        <div className="mb-10 text-center bg-neutral-900 border border-amber-500/30 rounded-3xl p-8">
          <h1 className="text-3xl font-black text-white mb-3">
            <span className="text-amber-400">{districtName} {decodedDong}</span> 제휴 마사지 안내
          </h1>
          <p className="text-sm text-gray-300">{districtName} {decodedDong} 인근 대기 중인 기사님 신속 방문 서비스</p>
        </div>

        {/* 제휴 업체 리스트 출력 */}
        <h2 className="text-lg font-extrabold text-white mb-6">🔥 {decodedDong} 맞춤 제휴 업체 리스트</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {mockPartners.map((partner) => (
            <div key={partner.id} className="bg-[#121215] border border-amber-500/30 rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <span className="bg-amber-500/20 text-amber-300 text-[11px] font-bold px-3 py-1 rounded-full">{partner.badge}</span>
                <h3 className="text-lg font-black text-white mt-3 mb-1">{partner.name}</h3>
                <p className="text-xs text-amber-400 mb-2">{partner.category}</p>
                <p className="text-xs text-gray-300 mb-4">{decodedDong} 전용 신속 방문 코스 운영 중</p>
                <p className="text-sm font-extrabold text-white mb-6">요금: <span className="text-amber-400">{partner.price}</span></p>
              </div>
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/10">
                <a href={`tel:${partner.phone}`} className="bg-amber-500 text-black font-extrabold py-3 rounded-xl text-xs text-center">📞 전화예약</a>
                <a href={`sms:${partner.phone}`} className="bg-neutral-800 text-white font-extrabold py-3 rounded-xl text-xs text-center border border-white/10">💬 문자문의</a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}