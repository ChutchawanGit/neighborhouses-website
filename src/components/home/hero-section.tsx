"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Cpu, CheckCircle2, Sliders, Play } from "lucide-react";

const kpiTiles = [
  {
    label: "ESTATE PROJECTS",
    thaiLabel: "โครงการคฤหาสน์ที่ติดตั้ง",
    value: "500+",
    bg: "bg-[#f3df86]/70 border-[#e6c64e]/50 text-[#3a2806]",
  },
  {
    label: "MESH PROTOCOL UPTIME",
    thaiLabel: "เสถียรภาพเครือข่ายอัจฉริยะ",
    value: "99.98%",
    bg: "bg-[#bfe9b4]/70 border-[#97d887]/60 text-[#12380a]",
  },
  {
    label: "SYSTEM LATENCY",
    thaiLabel: "ความเร็วการตอบสนองคำสั่ง",
    value: "< 12ms",
    bg: "bg-[#fffbf3]/90 border-[#3c280f]/10 text-[#2a2014]",
  },
  {
    label: "BESPOKE WARRANTY",
    thaiLabel: "รับประกันอุปกรณ์และ On-Site",
    value: "5 YEARS",
    bg: "bg-[#ecd2b0]/70 border-[#dba870]/50 text-[#3d2407]",
  },
];

const ecosystems = [
  { name: "Matter Certified", tag: "Universal Protocol", active: true },
  { name: "Apple HomeKit", tag: "Siri & iOS Native", active: false },
  { name: "Google Home", tag: "AI Voice Assistant", active: false },
  { name: "KNX System", tag: "Architectural Standard", active: false },
  { name: "Zigbee 3.0", tag: "Zero-Latency Mesh", active: false },
  { name: "Lutron Ready", tag: "Luxury Lighting", active: false },
];

export function HeroSection() {
  return (
    <section className="relative pt-8 pb-20 md:pt-14 md:pb-28 overflow-hidden">
      {/* Ambient Blurred Architectural Villa Backdrop with Smooth Fade Gradient */}
      <div className="absolute inset-x-0 top-0 h-[920px] pointer-events-none z-0 overflow-hidden select-none">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center scale-105"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop')",
            filter: "blur(8px)",
            opacity: "0.32"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4ede2]/40 via-[#f4ede2]/80 to-[#f4ede2]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#f4ede2] to-transparent" />
      </div>

      <div className="container relative z-10">
        {/* Main Dossier Header Card */}
        <div className="oasel-glass rounded-3xl p-6 sm:p-10 md:p-14 mb-8 border border-[#3c280f]/10">
          <div className="max-w-4xl">
            {/* Oasel Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2a2014] text-[#fbf5e9] text-[11px] font-semibold tracking-widest uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#c8f94a] animate-pulse" />
              <span>DOSSIER 01 // ARCHITECTURAL SMART HOME</span>
            </div>

            {/* Oasel Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#2a2014] leading-[1.08] mb-6">
              สุนทรียภาพแห่งการอยู่อาศัย
              <span className="block mt-1 font-normal text-[#6e5f50]">
                ด้วยระบบบ้านอัจฉริยะมาตรฐานสถาปัตยกรรม
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#554636] font-normal leading-relaxed max-w-2xl mb-8">
              ออกแบบและติดตั้งระบบ Smart Home ครบวงจรสำหรับคฤหาสน์และที่อยู่อาศัยระดับ Luxury ผสานแสงสว่าง ความปลอดภัย อุณหภูมิ และบรรยากาศ สู่การควบคุมอันราบรื่นและไร้รอยต่อ
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[#2a2014] text-[#fbf5e9] hover:bg-[#44362a] px-8 py-6 text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all"
              >
                <Link href="/packages" className="flex items-center gap-2">
                  <span>สำรวจแพ็คเกจติดตั้ง</span>
                  <ArrowRight className="w-4 h-4 text-[#c8f94a]" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full bg-white/70 hover:bg-white border-[#3c280f]/15 text-[#2a2014] px-7 py-6 text-sm font-semibold tracking-wide shadow-sm"
              >
                <Link href="/calculator">ทดลองคำนวณราคาหน้างาน</Link>
              </Button>

              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#6e5f50] font-medium pl-2">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>รับประกันสูงสุด 5 ปีเต็ม</span>
              </span>
            </div>
          </div>
        </div>

        {/* 4 Oasel KPI Tiles Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpiTiles.map((tile, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-3xl border transition-all duration-200 hover:-translate-y-0.5 shadow-sm ${tile.bg}`}
            >
              <span className="text-[10px] font-bold tracking-widest uppercase block mb-1 opacity-80">
                {tile.label}
              </span>
              <span className="text-2xl sm:text-3xl font-semibold tracking-tight block tabular-nums">
                {tile.value}
              </span>
              <span className="text-xs font-normal block mt-1 opacity-90">
                {tile.thaiLabel}
              </span>
            </div>
          ))}
        </div>

        {/* Video & Ecosystem Showcase Container */}
        <div className="oasel-glass rounded-3xl p-4 sm:p-6 border border-[#3c280f]/10 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-2 py-2 mb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#6e5f50] block">
                VIDEO PRESENTATION
              </span>
              <h3 className="text-lg font-semibold text-[#2a2014]">
                สัมผัสการทำงานของระบบ Neighbor Houses
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c8f94a]" />
              <span className="text-xs font-medium text-[#44362a]">4K Ultra-Definition Preview</span>
            </div>
          </div>

          {/* Aspect Video Frame */}
          <div className="aspect-video rounded-2xl overflow-hidden bg-[#1b150f] border border-[#3c280f]/10 shadow-inner">
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

        {/* Ecosystem Chips Row */}
        <div className="oasel-glass-card rounded-3xl p-5 border border-[#3c280f]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#6e5f50] block">
              ECOSYSTEM COMPATIBILITY
            </span>
            <span className="text-xs font-semibold text-[#2a2014]">
              รองรับทุกมาตรฐานสากลชั้นนำ
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {ecosystems.map((eco, idx) => (
              <div
                key={idx}
                className={`px-3 py-1.5 rounded-full text-xs transition-all duration-200 border ${
                  eco.active
                    ? "bg-[#c8f94a] text-[#1a2404] font-semibold border-[#c8f94a] shadow-sm"
                    : "bg-white/60 hover:bg-white text-[#44362a] border-[#3c280f]/10"
                }`}
              >
                <span>{eco.name}</span>
                <span className="text-[10px] opacity-70 ml-1.5">({eco.tag})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
