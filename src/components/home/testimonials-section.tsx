"use client";

import { Star, Sparkles } from "lucide-react";

const testimonials = [
  {
    quote: "งานติดตั้งมีความเป็นมืออาชีพสูงมาก ทีมช่างเก็บสายไฟและอุปกรณ์ได้เรียบร้อยจนแทบมองไม่เห็น การควบคุมแสงไฟตามช่วงเวลาและ Scene ช่วยเปลี่ยนบรรยากาศในบ้านได้อย่างน่าทึ่ง",
    author: "คุณสมศักดิ์ จิตรสุขใส",
    title: "เจ้าของบ้านเดี่ยวโครงการหรู จ.นนทบุรี",
    estate: "Private Villa Estate",
    rating: 5,
    tag: "VERIFIED OWNER",
  },
  {
    quote: "ประทับใจระบบกล้อง AI CCTV 4K และ Smart Door Lock มาก เวลาเดินทางไปต่างประเทศสามารถตรวจเช็คความปลอดภัยของคอนโดได้อย่างมั่นใจ ไร้กังวล บริการหลังการขายรวดเร็วมากครับ",
    author: "คุณพิมพ์มาดา วิริยะพันธ์",
    title: "เจ้าของเพนท์เฮาส์ สุขุมวิท กรุงเทพฯ",
    estate: "Luxury Penthouse",
    rating: 5,
    tag: "VERIFIED OWNER",
  },
  {
    quote: "ระบบ Multi-Room Audio และ Automation ใช้งานง่ายอย่างไม่น่าเชื่อ แขกที่มาพักที่รีสอร์ทต่างชมว่าเทคโนโลยีทันสมัยและช่วยสร้างบรรยากาศผ่อนคลายได้อย่างลงตัว",
    author: "คุณนพรัตน์ สุขสวัสดิ์",
    title: "เจ้าของธุรกิจบูทีครีสอร์ท จ.เชียงใหม่",
    estate: "Boutique Resort",
    rating: 5,
    tag: "COMMERCIAL CLIENT",
  },
  {
    quote: "การได้ควบคุมเครื่องปรับอากาศและไฟส่องสว่างทั้งบ้านผ่านคำสั่งเสียงและแอปเดียว ช่วยลดค่าไฟได้จริง และที่สำคัญคือคุณพ่อคุณแม่ใช้งานได้ง่าย ไม่ซับซ้อนเลย",
    author: "คุณวิชัย เจริญทรัพย์",
    title: "เจ้าของคฤหาสน์ จ.ปทุมธานี",
    estate: "Architectural Manor",
    rating: 5,
    tag: "VERIFIED OWNER",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Section Header Card */}
        <div className="oasel-glass rounded-3xl p-6 sm:p-10 mb-8 border border-[#3c280f]/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8dcce] text-[#44362a] text-[10px] font-bold tracking-widest uppercase mb-3">
                <Sparkles className="w-3 h-3 text-[#c8f94a]" />
                <span>DOSSIER 04 // CLIENT APPRAISAL</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#2a2014] leading-tight">
                เสียงสะท้อนจาก <span className="font-normal text-[#6e5f50]">เจ้าของบ้านชั้นนำ</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#6e5f50] font-normal max-w-md leading-relaxed">
              ความประทับใจจริงจากลูกค้าระดับพรีเมียมที่ได้สัมผัสมาตรฐานงานติดตั้งและบริการ On-Site ของเรา
            </p>
          </div>
        </div>

        {/* Testimonials 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="oasel-glass-card rounded-3xl p-8 border border-[#3c280f]/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#c8f94a] text-[#a4da1b]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#2a2014]/5 text-[#6e5f50]">
                    {t.estate}
                  </span>
                </div>

                <p className="text-[#3a2f24] font-normal text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#3c280f]/10 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-sm text-[#2a2014]">{t.author}</h4>
                  <p className="text-xs text-[#6e5f50] font-normal mt-0.5">{t.title}</p>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800">
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
