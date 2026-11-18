"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, ShieldCheck } from "lucide-react";

const packages = [
  {
    tier: "TIER 01",
    name: "The Estate Essential",
    subtitle: "สำหรับทาวน์โฮมและบ้านเดี่ยวขนาดเริ่มต้น",
    price: "39,900",
    description: "จุดเริ่มต้นที่สมบูรณ์แบบสำหรับการสัมผัสประสบการณ์ Smart Home ที่ครอบคลุมฟังก์ชันหลักของบ้าน",
    features: [
      "ระบบควบคุมไฟส่องสว่าง Smart Lighting 5 จุด",
      "กล้องวงจรปิด AI ความละเอียดคมชัด 2 ตัว",
      "Smart Digital Door Lock สแกนลายนิ้วมือ 1 ชุด",
      "Smart Switch กระจกนิรภัยระดับพรีเมียม 3 จุด",
      "ควบคุมสั่งการผ่านแอปพลิเคชันมือถือ 24 ชม.",
      "ติดตั้งฟรีโดยทีมช่างมาตรฐาน พร้อมรับประกัน 1 ปี",
    ],
    href: "/packages/basic",
    popular: false,
    cta: "เลือกแพ็คเกจเริ่มต้น",
  },
  {
    tier: "TIER 02 // RECOMMENDED",
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
    tier: "TIER 03",
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
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Section Header Card */}
        <div className="oasel-glass rounded-3xl p-6 sm:p-10 mb-8 border border-[#3c280f]/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8dcce] text-[#44362a] text-[10px] font-bold tracking-widest uppercase mb-3">
                <Sparkles className="w-3 h-3 text-[#c8f94a]" />
                <span>DOSSIER 03 // PRICING TIERS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#2a2014] leading-tight">
                แพ็คเกจติดตั้ง <span className="font-normal text-[#6e5f50]">มาตรฐานสากล</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#6e5f50] font-normal max-w-md leading-relaxed">
              ราคารวมอุปกรณ์มาตรฐานระดับพรีเมียม ค่าแรงช่างวิศวกร การเซ็ตอัประบบ และการรับประกันอย่างเป็นทางการ ไร้ค่าใช้จ่ายแอบแฝง
            </p>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col justify-between rounded-3xl p-8 sm:p-9 transition-all duration-300 ${
                pkg.popular
                  ? "bg-[#fffdf7] border-2 border-[#2a2014] shadow-2xl ring-4 ring-[#c8f94a]/30 lg:-translate-y-2"
                  : "oasel-glass-card border border-[#3c280f]/12 hover:shadow-xl hover:-translate-y-0.5"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#c8f94a] text-[#1a2404] text-[10px] font-extrabold tracking-widest uppercase shadow-md border border-[#bbf335]">
                    <Sparkles className="w-3 h-3 text-[#1a2404]" />
                    <span>MOST POPULAR CHOICE</span>
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#6e5f50]">
                    {pkg.tier}
                  </span>
                  {pkg.popular && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  )}
                </div>

                <h3 className="text-2xl font-semibold text-[#2a2014] mb-1">
                  {pkg.name}
                </h3>
                <p className="text-xs text-[#6e5f50] font-normal mb-6">
                  {pkg.subtitle}
                </p>

                {/* Pricing Number */}
                <div className="mb-6 pb-6 border-b border-[#3c280f]/10">
                  <div className="flex items-baseline">
                    <span className="text-4xl sm:text-5xl font-semibold text-[#2a2014] tracking-tight tabular-nums">
                      ฿{pkg.price}
                    </span>
                    <span className="text-xs text-[#6e5f50] font-medium ml-2">
                      สุทธิรวมติดตั้ง
                    </span>
                  </div>
                  <p className="text-xs text-[#554636] font-normal mt-3 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <span className="text-[10px] font-bold text-[#2a2014] uppercase tracking-wider block mb-4">
                    SPECIFICATIONS INCLUDED:
                  </span>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs sm:text-sm text-[#44362a] font-normal leading-snug">
                        <div className="w-4 h-4 rounded-full bg-[#2a2014] text-[#c8f94a] flex items-center justify-center mr-2.5 mt-0.5 shrink-0 shadow-xs">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
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
                  className={`w-full py-6 rounded-full text-xs font-semibold tracking-wide transition-all shadow-sm ${
                    pkg.popular
                      ? "bg-[#c8f94a] text-[#1a2404] hover:bg-[#bbf335] shadow-md hover:shadow-lg font-bold"
                      : "bg-[#2a2014] text-[#fbf5e9] hover:bg-[#44362a]"
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
        <div className="mt-8 oasel-glass-card rounded-3xl p-6 border border-[#3c280f]/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-bold text-[#2a2014] block">
              ต้องการแพ็คเกจที่ปรับแต่งตามขนาดพื้นที่เฉพาะ?
            </span>
            <span className="text-xs text-[#6e5f50] font-normal block mt-0.5">
              ทีมวิศวกรพร้อมเข้าสำรวจและออกแบบพิมพ์เขียวระบบให้ตรงกับแปลนบ้านจริง
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button asChild variant="outline" className="rounded-full border-[#3c280f]/15 bg-white/70 hover:bg-white text-xs font-semibold">
              <Link href="/packages/compare">ตารางเปรียบเทียบทุกแพ็คเกจ</Link>
            </Button>
            <Button asChild className="rounded-full bg-[#2a2014] text-[#fbf5e9] hover:bg-[#44362a] text-xs font-semibold">
              <Link href="/calculator">ทดลองคำนวณราคา →</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PackagesSection;
