"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Cpu, CheckCircle2 } from "lucide-react";

const ecosystems = [
  { name: "Matter Certified", tag: "Universal Protocol" },
  { name: "Apple HomeKit", tag: "Seamless Siri & iOS" },
  { name: "Google Home", tag: "Intelligent Assistant" },
  { name: "KNX System", tag: "Architectural Grade" },
  { name: "Zigbee 3.0", tag: "Ultra-Low Latency" },
  { name: "Lutron Ready", tag: "Luxury Lighting" },
];

export function HeroSection() {
  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-36 overflow-hidden bg-white">
      {/* Background Architectural Mesh & Subtle Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-[0.14] mix-blend-multiply"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2400&q=80')",
          }}
        />
        {/* Soft radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-emerald-100/40 via-teal-50/20 to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      <div className="container relative z-10">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/[0.04] border border-zinc-900/[0.08] text-zinc-800 text-xs font-medium tracking-widest uppercase mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Architectural Smart Living</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-zinc-950 mb-6 leading-[1.12]">
            สุนทรียภาพแห่งการอยู่อาศัย
            <span className="block mt-2 font-normal bg-gradient-to-r from-zinc-900 via-emerald-900 to-teal-800 bg-clip-text text-transparent">
              ด้วยระบบบ้านอัจฉริยะระดับลักชัวรี
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-light mb-10">
            ออกแบบและติดตั้งระบบ Smart Home สำหรับคฤหาสน์และที่อยู่อาศัยระดับพรีเมียม เชื่อมโยงแสงสว่าง ความปลอดภัย อุณหภูมิ และความบันเทิงสู่การควบคุมอันสมบูรณ์แบบ
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="rounded-full bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-6 text-sm font-medium tracking-wide shadow-lg shadow-zinc-950/10 hover:shadow-xl transition-all duration-300">
              <Link href="/packages" className="flex items-center gap-2">
                <span>สำรวจแพ็คเกจระดับลักชัวรี</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-zinc-300 hover:bg-zinc-100/80 px-8 py-6 text-sm font-medium tracking-wide text-zinc-800">
              <Link href="/contact">นัดหมายสำรวจหน้างานฟรี</Link>
            </Button>
          </div>

          {/* Feature Badges */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-y-3 gap-x-8 text-xs text-zinc-600 font-light">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>ทีมวิศวกรผู้เชี่ยวชาญเฉพาะทาง</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>งานเดินสายเรียบร้อยระดับ Architectural Grade</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>รับประกันสินค้าและ On-Site Service สูงสุด 5 ปี</span>
            </div>
          </div>
        </div>

        {/* Video Showcase Frame */}
        <div className="relative mx-auto max-w-5xl">
          <div className="relative rounded-2xl md:rounded-3xl p-2 md:p-3 bg-gradient-to-b from-zinc-200/80 via-zinc-200/40 to-transparent border border-zinc-200/60 shadow-2xl shadow-zinc-950/10 backdrop-blur-sm">
            <div className="aspect-video rounded-xl md:rounded-2xl overflow-hidden bg-zinc-950 relative">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dftKArsWaCs?autoplay=0&rel=0&modestbranding=1" 
                title="Neighbor Houses Smart Living Presentation" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Supported Standards / Compatibility Section */}
        <div className="mt-20 md:mt-28">
          <p className="text-center text-xs uppercase tracking-[0.25em] text-zinc-600 font-semibold mb-8">
            Global Ecosystem & Protocol Compatibility
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {ecosystems.map((eco, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl border border-zinc-200/70 bg-white/70 hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all duration-300 text-center flex flex-col justify-center items-center group"
              >
                <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-700 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors mb-2">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="text-xs font-medium text-zinc-900 block leading-tight">{eco.name}</span>
                <span className="text-[10px] text-zinc-500 block mt-0.5 font-light">{eco.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
