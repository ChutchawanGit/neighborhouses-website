"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Shield, Video, Music, Sliders, Cpu, Sparkles } from "lucide-react";

const services = [
  {
    num: "01",
    code: "LIGHT-CIR",
    icon: Lightbulb,
    title: "ระบบควบคุมแสงสว่าง (Smart Lighting)",
    description: "ปรับระดับแสง สี และบรรยากาศ (Circadian Rhythm) อัตโนมัติตามช่วงเวลาของวัน สั่งงานได้ผ่านสวิตช์สัมผัส แอพ หรือเสียง",
    href: "/services/lighting",
    tag: "Circadian Lighting",
    tileBg: "hover:bg-[#f3df86]/15",
  },
  {
    num: "02",
    code: "CCTV-AI",
    icon: Video,
    title: "ระบบกล้องวงจรปิด AI CCTV 4K",
    description: "ความคมชัดระดับ 4K HDR พร้อมระบบ AI ตรวจจับบุคคลและยานพาหนะ บันทึกภาพย้อนหลังความจุสูงและดูภาพสดได้ 24 ชม.",
    href: "/services/cctv",
    tag: "AI Recognition",
    tileBg: "hover:bg-[#bfe9b4]/15",
  },
  {
    num: "03",
    code: "SEC-BIOM",
    icon: Shield,
    title: "ระบบรักษาความปลอดภัย (Smart Security)",
    description: "Digital Door Lock สแกนใบหน้า 3D ลายนิ้วมือ เซ็นเซอร์ประตูหน้าต่าง และระบบส่งสัญญาณไซเรนแจ้งเตือนอัตโนมัติ",
    href: "/services/security",
    tag: "Biometric Access",
    tileBg: "hover:bg-[#ecd2b0]/15",
  },
  {
    num: "04",
    code: "AUTO-SCN",
    icon: Cpu,
    title: "ระบบบ้านอัตโนมัติ (Home Automation)",
    description: "ตั้งค่า Scene เช่น 'Good Morning' หรือ 'Cinema Mode' เพื่อเปิดม่าน ปรับอุณหภูมิ และหรี่ไฟพร้อมกันในสัมผัสเดียว",
    href: "/services/automation",
    tag: "One-Touch Scenes",
    tileBg: "hover:bg-[#f3df86]/15",
  },
  {
    num: "05",
    code: "AUD-MULTI",
    icon: Music,
    title: "ระบบเสียง Multi-Room Audio",
    description: "สตรีมเพลงระดับ Hi-Res Audio กระจายทั่วทุกห้องในบ้านอย่างกลมกลืน ซ่อนลำโพงในฝ้าเพดานอย่างประณีต ไร้สายรกตา",
    href: "/services/audio",
    tag: "Hi-Res Acoustics",
    tileBg: "hover:bg-[#bfe9b4]/15",
  },
  {
    num: "06",
    code: "CLIM-ENG",
    icon: Sliders,
    title: "ระบบเครื่องใช้ไฟฟ้าและพลังงาน",
    description: "บริหารจัดการเครื่องปรับอากาศ ระบบระบายอากาศ ERV และตรวจวัดการใช้พลังงานไฟฟ้าแบบเรียลไทม์เพื่อประหยัดไฟ",
    href: "/services/appliances",
    tag: "Energy Optimization",
    tileBg: "hover:bg-[#ecd2b0]/15",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Section Header Card */}
        <div className="oasel-glass rounded-3xl p-6 sm:p-10 mb-8 border border-[#3c280f]/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8dcce] text-[#44362a] text-[10px] font-bold tracking-widest uppercase mb-3">
                <Sparkles className="w-3 h-3 text-[#c8f94a]" />
                <span>SPECIFICATION CATALOG // SERVICES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#2a2014] leading-tight">
                บริการออกแบบและติดตั้ง <span className="font-normal text-[#6e5f50]">6 ระบบหลัก</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#6e5f50] font-normal max-w-md leading-relaxed">
              ครอบคลุมทุกมิติของการใช้ชีวิตในบ้านยุคใหม่ ด้วยวิศวกรรมการติดตั้งที่เรียบร้อย กลมกลืนกับสถาปัตยกรรมภายใน
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`oasel-glass-card rounded-3xl p-7 border border-[#3c280f]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between group ${service.tileBg}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#2a2014] text-[#c8f94a] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase font-bold text-[#6e5f50] tracking-wider px-2 py-0.5 rounded-md bg-[#2a2014]/5">
                        {service.code}
                      </span>
                      <span className="text-xs font-bold text-[#6e5f50] font-mono">
                        {service.num}
                      </span>
                    </div>
                  </div>

                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#f4ede2] text-[#44362a] border border-[#3c280f]/10 mb-3">
                    {service.tag}
                  </span>

                  <h3 className="text-xl font-semibold text-[#2a2014] mb-3 group-hover:text-emerald-950 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#554636] font-normal leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#3c280f]/10 flex items-center justify-between">
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-xs font-semibold text-[#2a2014] group-hover:text-emerald-900 transition-colors"
                  >
                    <span>ดูรายละเอียดทางเทคนิค</span>
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#2a2014]" />
                  </Link>
                  <span className="text-[10px] font-bold text-[#6e5f50] uppercase tracking-wider">
                    EXPAND
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar Action */}
        <div className="mt-8 text-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-[#2a2014] text-[#fbf5e9] hover:bg-[#44362a] px-8 py-6 text-sm font-semibold tracking-wide shadow-md"
          >
            <Link href="/services">สำรวจรายละเอียดบริการทั้งหมด 6 หมวดหมู่</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
