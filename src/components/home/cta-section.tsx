"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-zinc-950 text-white">
      {/* Ambient Radial Mesh & Glowing Halos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-600/20 via-teal-500/10 to-transparent rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-medium tracking-widest uppercase mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Private Consultation & Site Survey</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
            พร้อมเปลี่ยนบ้านของคุณสู่
            <span className="block mt-2 font-normal bg-gradient-to-r from-emerald-300 via-teal-200 to-white bg-clip-text text-transparent">
              คฤหาสน์อัจฉริยะที่สมบูรณ์แบบแล้วหรือยัง?
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            ทีมนักออกแบบและวิศวกร Smart Home ของเราพร้อมเข้าสำรวจหน้างาน ให้คำปรึกษา และวางผังระบบเฉพาะสำหรับบ้านของคุณโดยไม่มีค่าใช้จ่าย
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="rounded-full bg-white text-zinc-950 hover:bg-zinc-100 px-8 py-6 text-sm font-medium tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/contact" className="flex items-center gap-2">
                <span>นัดหมายสำรวจหน้างานฟรี</span>
                <ArrowRight className="w-4 h-4 text-emerald-600" />
              </Link>
            </Button>

            <a 
              href="tel:021234567" 
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white text-sm font-medium tracking-wide transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>โทรปรึกษาด่วน 02-123-4567</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-emerald-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-white">อุปกรณ์แท้ 100%</p>
                <p className="text-[11px] text-zinc-500 font-light">รับประกันศูนย์ไทยสูงสุด 5 ปี</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-emerald-400 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-white">งานติดตั้งประณีต</p>
                <p className="text-[11px] text-zinc-500 font-light">ช่างผู้ชำนาญการด้านสถาปัตยกรรม</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-emerald-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-medium text-white">On-Site Support</p>
                <p className="text-[11px] text-zinc-500 font-light">ทีมงานดูแลถึงที่พักตลอดอายุสัญญา</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
