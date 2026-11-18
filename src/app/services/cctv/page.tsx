import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, ShieldCheck, Video, Eye, Bell, HardDrive, Smartphone, Sparkles, ArrowRight } from "lucide-react";
import Image from 'next/image';

export const metadata = {
  title: "ระบบกล้องวงจรปิดอัจฉริยะ AI CCTV - Neighbor Houses",
  description: "บริการออกแบบและติดตั้งระบบกล้องวงจรปิดระดับ Luxury ความละเอียด 4K HDR พร้อมระบบ AI ตรวจจับอัจฉริยะ ดูภาพสดได้ทุกที่ 24 ชม.",
};

const cctvFeatures = [
  {
    icon: Video,
    title: "ความคมชัดระดับ 4K Ultra HD & HDR",
    desc: "เซ็นเซอร์เลนส์กระจกระดับพรีเมียม ถ่ายทอดภาพสีคมชัดทั้งกลางวันและในที่แสงน้อย (Color Night Vision) เก็บทุกรายละเอียดสำคัญ"
  },
  {
    icon: Eye,
    title: "AI Human & Vehicle Recognition",
    desc: "อัลกอริทึม AI แยกแยะบุคคล สัตว์เลี้ยง และยานพาหนะได้อย่างแม่นยำ ลดการแจ้งเตือนผิดพลาดได้มากถึง 98%"
  },
  {
    icon: Bell,
    title: "Real-Time Push Notification",
    desc: "ส่งการแจ้งเตือนพร้อมคลิปสั้นตรงสู่สมาร์ทโฟนและ Apple Watch ทันทีที่มีการตรวจจับความเคลื่อนไหวบริเวณพื้นที่หวงห้าม"
  },
  {
    icon: HardDrive,
    title: "Dual Storage & Cloud Encryption",
    desc: "ระบบบันทึกภาพแบบคู่ ทั้ง NVR ระดับ Enterprise ในบ้าน และการสำรองข้อมูลขึ้น Private Cloud เข้ารหัส AES-256"
  },
  {
    icon: Smartphone,
    title: "ควบคุมและดูย้อนหลังได้ในแอปเดียว",
    desc: "แอปพลิเคชันดีไซน์เรียบหรู ค้นหาย้อนหลังด้วย Timeline และ Smart Filter ได้อย่างรวดเร็ว รองรับหลายผู้ใช้งานพร้อมกัน"
  },
  {
    icon: Sparkles,
    title: "Seamless Smart Ecosystem",
    desc: "เชื่อมโยงกับระบบไฟส่องสว่าง (Smart Lighting) และระบบเสียง เพื่อเปิดไฟสปอตไลท์หรือส่งเสียงเตือนอัตโนมัติเมื่อพบบุคคลแปลกหน้า"
  }
];

const packages = [
  {
    name: "Estate Essential 4K",
    cameras: "4 กล้อง 4K AI",
    storage: "NVR 2TB Storage",
    price: "49,000",
    description: "เหมาะสำหรับทาวน์โฮม บ้านเดี่ยวขนาดกลาง หรือพื้นที่อยู่อาศัยที่ต้องการความครอบคลุมหลัก",
    features: [
      "กล้อง 4K AI Turret/Bullet 4 จุด",
      "ระบบ AI ตรวจจับบุคคลและยานพาหนะ",
      "บันทึกภาพต่อเนื่อง 24/7 ความจุ 2TB",
      "เดินท่อร้อยสายสัญญาณแบบเรียบร้อยระดับ Luxury",
      "รับประกันงานติดตั้งและอุปกรณ์ 2 ปีเต็ม"
    ]
  },
  {
    name: "Manor Executive 4K",
    cameras: "8 กล้อง 4K AI + PTZ",
    storage: "NVR 4TB Storage",
    price: "89,000",
    popular: true,
    description: "แพ็คเกจยอดนิยมสำหรับบ้านเดี่ยวหลังใหญ่และคฤหาสน์ ครอบคลุมรอบบริเวณบ้านและจุดเข้าออก",
    features: [
      "กล้อง 4K AI 7 จุด + กล้องหมุนซูม PTZ Optical 1 จุด",
      "Color Night Vision ให้ภาพสีแม้มืดสนิท",
      "Smart Perimeter Protection วาดเส้นเขตหวงห้าม",
      "NVR พร้อมระบบสำรองไฟและตู้ Rack สวยงาม",
      "บริการตรวจเช็คระบบรายปีฟรี 2 ครั้ง"
    ]
  },
  {
    name: "Architectural Bespoke",
    cameras: "Customized Units",
    storage: "Enterprise Cloud & NVR",
    price: "ตามการประเมิน",
    description: "ออกแบบโซลูชันเฉพาะสำหรับบ้านระดับ Super Luxury พร้อมกล้องซ่อนโครงสร้างและศูนย์ควบคุมส่วนตัว",
    features: [
      "ออกแบบตำแหน่งและเลือกกล้องตามสไตล์สถาปัตยกรรม",
      "กล้องซ่อนดีไซน์มินิมอลไม่ทำลายทัศนียภาพ",
      "Private Server / Smart Home Hub Integration",
      "Dedicated On-Site Technician ภายใน 24 ชม.",
      "รับประกันอุปกรณ์และระบบสูงสุด 5 ปี"
    ]
  }
];

export default function CctvServicePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b border-zinc-100 bg-gradient-to-b from-zinc-50/80 to-white">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2a2014] text-[#fbf5e9] text-[11px] font-semibold tracking-widest uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#c8f94a]" />
              INTELLIGENT SURVEILLANCE SOLUTIONS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#2a2014] mb-6">
              ระบบกล้องวงจรปิด <span className="font-extrabold text-[#2a2014] underline decoration-[#c8f94a] decoration-4 underline-offset-8">AI CCTV 4K</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-light mb-10">
              ยกระดับความปลอดภัยให้กับคฤหาสน์และบ้านพักอาศัยระดับลักชัวรี ด้วยกล้องวงจรปิดความละเอียด 4K HDR ผสานระบบปัญญาประดิษฐ์ AI อัจฉริยะที่แม่นยำ พร้อมงานติดตั้งที่ประณีต เรียบร้อย ไร้สายรกตา
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-zinc-900 hover:bg-zinc-800 text-white shadow-sm px-8">
                <Link href="/contact">
                  ปรึกษาผู้เชี่ยวชาญฟรี
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-zinc-300 hover:bg-zinc-50">
                <Link href="/packages">ดูแพ็คเกจ Smart Home ทั้งหมด</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-20 md:py-28 container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-emerald-600 uppercase mb-3">Superior Features</p>
          <h2 className="text-3xl md:text-4xl font-light text-zinc-900">
            มาตรฐานความปลอดภัยระดับ <span className="font-medium">Luxury Living</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cctvFeatures.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div key={idx} className="p-8 rounded-2xl border border-zinc-200/70 bg-white hover:border-emerald-300/80 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-200/80 flex items-center justify-center text-zinc-800 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-zinc-900 mb-3">{f.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed font-light">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Package Pricing Tiers */}
      <section className="py-20 bg-zinc-50/60 border-t border-zinc-200/60">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] text-emerald-600 uppercase mb-3">Curated Packages</p>
            <h2 className="text-3xl md:text-4xl font-light text-zinc-900">
              แพ็คเกจติดตั้งกล้องวงจรปิด <span className="font-medium">AI CCTV</span>
            </h2>
            <p className="text-zinc-600 font-light mt-3">รวมอุปกรณ์มาตรฐานพรีเมียม ค่าติดตั้ง เดินท่อร้อยสาย และการเซ็ตอัประบบครบวงจร</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`relative rounded-2xl bg-white p-8 md:p-10 border transition-all duration-300 flex flex-col justify-between ${
                  pkg.popular 
                    ? "border-emerald-500 shadow-2xl shadow-emerald-500/10 ring-1 ring-emerald-500" 
                    : "border-zinc-200/80 hover:border-zinc-300 hover:shadow-lg"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-600 text-white text-xs font-medium tracking-wide shadow-sm">
                    MOST POPULAR
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-medium text-zinc-900 mb-2">{pkg.name}</h3>
                  <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-4">{pkg.cameras} • {pkg.storage}</p>
                  <p className="text-sm text-zinc-500 font-light mb-6 min-h-[40px]">{pkg.description}</p>
                  
                  <div className="mb-8 pb-6 border-b border-zinc-100">
                    <span className="text-3xl font-light text-zinc-900">฿{pkg.price}</span>
                    {pkg.price !== "ตามการประเมิน" && <span className="text-xs text-zinc-500 ml-1.5 font-light">สุทธิรวมติดตั้ง</span>}
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {pkg.features.map((item, fIdx) => (
                      <li key={fIdx} className="flex items-start text-sm text-zinc-700 font-light">
                        <Check className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild className={`w-full py-6 font-medium ${pkg.popular ? "bg-emerald-600 hover:bg-emerald-700 text-white" : "bg-zinc-900 hover:bg-zinc-800 text-white"}`}>
                  <Link href="/contact">เลือกแพ็คเกจนี้</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
