"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Shield, Video, Music, Sliders, Cpu } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Lightbulb,
    title: "ระบบควบคุมแสงสว่าง (Smart Lighting)",
    description: "ปรับระดับแสง สี และบรรยากาศ (Circadian Rhythm) อัตโนมัติตามช่วงเวลาของวัน สั่งงานได้ผ่านสัมผัสหรือเสียง",
    href: "/services/lighting",
    badge: "Circadian Moods"
  },
  {
    num: "02",
    icon: Video,
    title: "ระบบกล้องวงจรปิด AI CCTV 4K",
    description: "ความคมชัดระดับ 4K HDR พร้อมระบบ AI ตรวจจับบุคคลและยานพาหนะ บันทึกภาพย้อนหลังและดูสด 24 ชม.",
    href: "/services/cctv",
    badge: "AI Recognition"
  },
  {
    num: "03",
    icon: Shield,
    title: "ระบบรักษาความปลอดภัย (Smart Security)",
    description: "Digital Door Lock สแกนใบหน้าและลายนิ้วมือ เซ็นเซอร์ประตูหน้าต่าง และระบบส่งสัญญาณไซเรนแจ้งเตือนทันที",
    href: "/services/security",
    badge: "Biometric Access"
  },
  {
    num: "04",
    icon: Cpu,
    title: "ระบบบ้านอัตโนมัติ (Home Automation)",
    description: "ตั้งค่า Scene เช่น 'Good Morning' หรือ 'Cinema Mode' เพื่อเปิดม่าน ปรับอุณหภูมิ และหรี่ไฟพร้อมกันในสัมผัสเดียว",
    href: "/services/automation",
    badge: "One-Touch Scenes"
  },
  {
    num: "05",
    icon: Music,
    title: "ระบบเสียง Multi-Room Audio",
    description: "สตรีมเพลงระดับ Hi-Res Audio กระจายทั่วทุกห้องในบ้านอย่างกลมกลืน ซ่อนลำโพงในฝ้าเพดานอย่างประณีต",
    href: "/services/audio",
    badge: "Hi-Res Acoustics"
  },
  {
    num: "06",
    icon: Sliders,
    title: "ระบบควบคุมเครื่องใช้ไฟฟ้าและพลังงาน",
    description: "บริหารจัดการเครื่องปรับอากาศ ระบบระบายอากาศ ERV และตรวจวัดการใช้พลังงานไฟฟ้าแบบเรียลไทม์",
    href: "/services/appliances",
    badge: "Energy Efficiency"
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-zinc-50/60 border-t border-b border-zinc-200/60">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-emerald-700 uppercase mb-3">
            Bespoke Engineering
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-zinc-950 tracking-tight mb-4">
            บริการออกแบบและติดตั้ง <span className="font-medium">แบบองค์รวม</span>
          </h2>
          <p className="text-base md:text-lg text-zinc-600 font-light leading-relaxed">
            ผสานเทคโนโลยีอันชาญฉลาดเข้ากับสถาปัตยกรรมภายในอย่างกลมกลืน มอบประสบการณ์การอยู่อาศัยที่เหนือระดับและสะดวกสบายอย่างแท้จริง
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white p-8 md:p-9 rounded-2xl border border-zinc-200/80 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-zinc-100/80 border border-zinc-200 flex items-center justify-center text-zinc-800 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-zinc-900 transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-zinc-600 group-hover:text-emerald-700 transition-colors">
                      {service.num}
                    </span>
                  </div>

                  <span className="inline-block text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 mb-3">
                    {service.badge}
                  </span>

                  <h3 className="text-xl font-medium text-zinc-950 mb-3 group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-600 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100">
                  <Link 
                    href={service.href} 
                    className="inline-flex items-center text-xs font-medium text-zinc-900 group-hover:text-emerald-700 transition-colors"
                  >
                    <span>รายละเอียดบริการ</span>
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Button asChild size="lg" className="rounded-full bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-6 text-sm font-medium tracking-wide shadow-md hover:shadow-lg transition-all">
            <Link href="/services">สำรวจรายละเอียดบริการทั้งหมด</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
