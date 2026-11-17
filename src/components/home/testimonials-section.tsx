"use client";

import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "งานติดตั้งมีความเป็นมืออาชีพสูงมาก ทีมช่างเก็บสายไฟและอุปกรณ์ได้เรียบร้อยจนแทบมองไม่เห็น การควบคุมแสงไฟตามช่วงเวลาและ Scene ช่วยเปลี่ยนบรรยากาศในบ้านได้อย่างน่าทึ่ง",
    author: "คุณสมศักดิ์ จิตรสุขใส",
    title: "เจ้าของบ้านเดี่ยวโครงการหรู จ.นนทบุรี",
    estate: "Private Villa Estate",
    rating: 5,
  },
  {
    quote: "ประทับใจระบบกล้อง AI CCTV 4K และ Smart Door Lock มาก เวลาเดินทางไปต่างประเทศสามารถตรวจเช็คความปลอดภัยของคอนโดได้อย่างมั่นใจ ไร้กังวล บริการหลังการขายรวดเร็วมากครับ",
    author: "คุณพิมพ์มาดา วิริยะพันธ์",
    title: "เจ้าของเพนท์เฮาส์ สุขุมวิท กรุงเทพฯ",
    estate: "Luxury Penthouse Resident",
    rating: 5,
  },
  {
    quote: "ระบบ Multi-Room Audio และ Automation ใช้งานง่ายอย่างไม่น่าเชื่อ แขกที่มาพักที่รีสอร์ทต่างชมว่าเทคโนโลยีทันสมัยและช่วยสร้างบรรยากาศผ่อนคลายได้อย่างลงตัว",
    author: "คุณนพรัตน์ สุขสวัสดิ์",
    title: "เจ้าของธุรกิจบูทีครีสอร์ท จ.เชียงใหม่",
    estate: "Boutique Resort Owner",
    rating: 5,
  },
  {
    quote: "การได้ควบคุมเครื่องปรับอากาศและไฟส่องสว่างทั้งบ้านผ่านคำสั่งเสียงและแอปเดียว ช่วยลดค่าไฟได้จริง และที่สำคัญคือคุณพ่อคุณแม่ใช้งานได้ง่าย ไม่ซับซ้อนเลย",
    author: "คุณวิชัย เจริญทรัพย์",
    title: "เจ้าของคฤหาสน์ จ.ปทุมธานี",
    estate: "Architectural Residence",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-emerald-700 uppercase mb-3">
            Client Perspectives
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-zinc-950 tracking-tight mb-4">
            ความไว้วางใจจาก <span className="font-medium">เจ้าของบ้านชั้นนำ</span>
          </h2>
          <p className="text-base md:text-lg text-zinc-600 font-light leading-relaxed">
            เสียงสะท้อนจากลูกค้าระดับพรีเมียมที่ได้สัมผัสมาตรฐานงานติดตั้งและบริการระดับลักชัวรีจากเรา
          </p>
        </div>

        {/* Testimonials Grid / Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="relative p-8 md:p-10 rounded-3xl border border-zinc-200/80 bg-zinc-50/40 hover:bg-white hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-950/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full bg-zinc-200/60 text-zinc-600">
                      {t.estate}
                    </span>
                  </div>

                  <p className="text-zinc-700 font-light text-sm sm:text-base leading-relaxed mb-8 italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-zinc-200/60">
                  <h4 className="font-medium text-sm text-zinc-950">{t.author}</h4>
                  <p className="text-xs text-zinc-500 font-light mt-0.5">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
