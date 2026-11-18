"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Oasel Dusk Mode Contrast Card */}
        <div className="relative rounded-4xl p-8 sm:p-12 md:p-16 overflow-hidden bg-[#1b150f] text-[#f7efe1] border border-[#ffeccd]/15 shadow-2xl">
          {/* Ambient Diffused Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-gradient-to-b from-[#c8f94a]/15 via-transparent to-transparent rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#c8f94a] text-[10px] font-bold tracking-widest uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRIVATE CONSULTATION // BESPOKE AUDIT</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-5 leading-tight">
              พร้อมเปลี่ยนบ้านของคุณสู่
              <span className="block mt-1 font-normal text-[#e7dbc6]">
                คฤหาสน์อัจฉริยะมาตรฐานสถาปัตยกรรมแล้วหรือยัง?
              </span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#cdbea6] font-normal leading-relaxed mb-8 max-w-xl">
              ทีมนักออกแบบและวิศวกร Smart Home ของเราพร้อมเข้าสำรวจหน้างาน ให้คำปรึกษา และวางผังระบบเฉพาะสำหรับบ้านของคุณโดยไม่มีค่าใช้จ่าย
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#c8f94a] text-[#121c00] hover:bg-[#bcf236] px-8 py-6 text-sm font-bold tracking-wide shadow-lg shadow-[#c8f94a]/25 transition-all"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <span>นัดหมายสำรวจหน้างานฟรี</span>
                  <ArrowRight className="w-4 h-4 text-[#121c00]" />
                </Link>
              </Button>

              <a
                href="tel:021234567"
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold tracking-wide transition-all"
              >
                <Phone className="w-4 h-4 text-[#c8f94a]" />
                <span>โทรปรึกษาด่วน 02-123-4567</span>
              </a>
            </div>

            {/* Bottom 3 Trust Tiles in Dusk mode */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-[#c8f94a] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">อุปกรณ์แท้ 100%</p>
                  <p className="text-[11px] text-[#cdbea6]">รับประกันศูนย์ไทย 5 ปี</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-[#c8f94a] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">งานติดตั้งประณีต</p>
                  <p className="text-[11px] text-[#cdbea6]">ช่างสถาปัตยกรรมเฉพาะทาง</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-[#c8f94a] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">On-Site Support</p>
                  <p className="text-[11px] text-[#cdbea6]">ดูแลถึงที่พักตลอดสัญญา</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
