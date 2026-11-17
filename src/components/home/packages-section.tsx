"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";

const packages = [
  {
    name: "The Estate Essential",
    subtitle: "สำหรับทาวน์โฮมและบ้านเดี่ยวขนาดเริ่มต้น",
    price: "39,900",
    description: "จุดเริ่มต้นที่สมบูรณ์แบบสำหรับการสัมผัสประสบการณ์ Smart Home ที่ครอบคลุมฟังก์ชันหลักของบ้าน",
    features: [
      "ระบบควบคุมไฟส่องสว่าง Smart Lighting 5 จุด",
      "กล้องวงจรปิด AI ความละเอียดคมชัด 2 ตัว",
      "Smart Digital Door Lock สแกนลายนิ้วมือและรหัส 1 ชุด",
      "Smart Switch กระจกนิรภัยระดับพรีเมียม 3 จุด",
      "ควบคุมสั่งการผ่านแอปพลิเคชันมือถือ 24 ชม.",
      "ติดตั้งฟรีโดยทีมช่างมาตรฐาน พร้อมรับประกัน 1 ปี",
    ],
    href: "/packages/basic",
    popular: false,
    cta: "เลือกแพ็คเกจเริ่มต้น",
  },
  {
    name: "The Manor Signature",
    subtitle: "สำหรับบ้านเดี่ยวขนาดกลางและครอบครัวยุคใหม่",
    price: "79,900",
    description: "แพ็คเกจยอดนิยมสูงสุด ยกระดับความสะดวกสบายและความปลอดภัยรอบทิศทาง พร้อมระบบอัตโนมัติ",
    features: [
      "ระบบควบคุมไฟ Smart Lighting ทั่วบริเวณหลัก 10 จุด",
      "กล้องวงจรปิด AI CCTV 4K ตรวจจับคนและรถ 4 ตัว",
      "Smart Door Lock ระบบจดจำใบหน้าและลายนิ้วมือ 2 ชุด",
      "Smart Switch ดีไซน์มินิมอลลักชัวรี 6 จุด",
      "Motion & Light Ambient Sensors 2 จุด",
      "โมดูลควบคุมเครื่องปรับอากาศอัจฉริยะ 2 เครื่อง",
      "ระบบเชื่อมต่อ Smart Speaker สั่งงานด้วยเสียง",
      "ติดตั้งฟรี เดินท่อร้อยสายประณีต รับประกัน 2 ปี",
    ],
    href: "/packages/standard",
    popular: true,
    cta: "เลือกแพ็คเกจยอดนิยม",
  },
  {
    name: "The Sovereign Bespoke",
    subtitle: "สำหรับคฤหาสน์และบ้านเดี่ยวขนาดใหญ่ (Super Luxury)",
    price: "149,900",
    description: "โซลูชันบ้านอัจฉริยะเต็มระบบ ครอบคลุมแสง สี เสียง อุณหภูมิ และความปลอดภัยระดับสูงสุด",
    features: [
      "ระบบควบคุมไฟแสงสว่างอัจฉริยะทั้งหลังแบบไม่จำกัดจุด",
      "ระบบกล้องวงจรปิด AI CCTV 4K Color Night Vision 8 จุด",
      "Smart Digital Door Locks ครบทุกจุดเข้าออกหลัก",
      "สวิตช์ระบบสัมผัสและแผงควบคุมผนัง Smart Wall Panels",
      "Motion & Environmental Sensors ครอบคลุมทั้งบ้าน",
      "ระบบควบคุมแอร์และระบบระบายอากาศอัจฉริยะทั้งหลัง",
      "ระบบเสียง Multi-Room Audio ฝังฝ้าเพดานอย่างกลมกลืน",
      "ระบบควบคุมม่านและมู่ลี่ไฟฟ้าอัตโนมัติตามเวลา",
      "Priority On-Site Support 24/7 รับประกันสูงสุด 3 ปี",
    ],
    href: "/packages/premium",
    popular: false,
    cta: "เลือกแพ็คเกจพรีเมียม",
  },
];

export function PackagesSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-emerald-700 uppercase mb-3">
            Transparent Investment
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-zinc-950 tracking-tight mb-4">
            แพ็คเกจติดตั้ง <span className="font-medium">มาตรฐานสากล</span>
          </h2>
          <p className="text-base md:text-lg text-zinc-600 font-light leading-relaxed">
            ราคารวมอุปกรณ์มาตรฐานระดับพรีเมียม ค่าแรงช่างวิศวกร การเซ็ตอัประบบ และการรับประกันอย่างเป็นทางการ ไร้ค่าใช้จ่ายแอบแฝง
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {packages.map((pkg) => (
            <div 
              key={pkg.name} 
              className={`relative flex flex-col justify-between rounded-3xl p-8 md:p-10 transition-all duration-300 bg-white ${
                pkg.popular 
                  ? "border-2 border-emerald-600 shadow-2xl shadow-emerald-950/10 ring-4 ring-emerald-500/10 lg:-translate-y-2" 
                  : "border border-zinc-200/80 hover:border-zinc-300 hover:shadow-xl"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-medium tracking-widest uppercase shadow-md">
                    <Sparkles className="w-3 h-3 text-emerald-200" />
                    <span>Most Popular Choice</span>
                  </span>
                </div>
              )}

              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-light text-zinc-950 mb-1">{pkg.name}</h3>
                  <p className="text-xs text-zinc-500 font-light">{pkg.subtitle}</p>
                </div>

                <div className="mb-6 pb-6 border-b border-zinc-100">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-light text-zinc-950">฿{pkg.price}</span>
                    <span className="text-xs text-zinc-500 ml-2 font-light">สุทธิรวมติดตั้ง</span>
                  </div>
                  <p className="text-xs text-zinc-600 font-light mt-3 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <p className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">
                    สิ่งที่จะได้รับในแพ็คเกจ:
                  </p>
                  <ul className="space-y-3.5">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-zinc-700 font-light leading-snug">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mr-2.5 mt-0.5 shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <Button 
                  asChild 
                  className={`w-full py-6 rounded-full text-xs font-medium tracking-wide shadow-sm transition-all ${
                    pkg.popular 
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-md" 
                      : "bg-zinc-900 hover:bg-zinc-800 text-white"
                  }`}
                >
                  <Link href={pkg.href}>
                    {pkg.cta}
                    <ArrowRight className="ml-2 w-3.5 h-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Callout */}
        <div className="mt-16 text-center">
          <p className="text-sm text-zinc-500 font-light mb-3">
            ต้องการแพ็คเกจที่ปรับแต่งตามขนาดพื้นที่หรือสถาปัตยกรรมเฉพาะของคุณ?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" className="rounded-full border-zinc-300 hover:bg-zinc-50 px-6 text-xs">
              <Link href="/packages/compare">ดูตารางเปรียบเทียบทุกแพ็คเกจ</Link>
            </Button>
            <Button asChild variant="ghost" className="rounded-full text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50/50 text-xs">
              <Link href="/calculator">ทดลองคำนวณราคาตามขนาดบ้าน →</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PackagesSection;
