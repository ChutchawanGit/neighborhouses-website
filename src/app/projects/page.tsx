import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

export const metadata = {
  title: "ผลงานการติดตั้ง Smart Home - ติดตั้ง Smart Home",
  description: "ผลงานการติดตั้งระบบ Smart Home ครบวงจร ดูตัวอย่างผลงานที่เราภูมิใจนำเสนอ",
};

const projects = [
  {
    id: "luxury-condo-bangkok",
    title: "คอนโดหรูย่านสุขุมวิท",
    description: "ติดตั้งระบบ Smart Home ครบวงจรสำหรับคอนโดหรูย่านสุขุมวิท ด้วยระบบควบคุมแสงสว่าง ม่านอัตโนมัติ ระบบความบันเทิง และระบบรักษาความปลอดภัย",
    type: "คอนโดมิเนียม", 
    location: "สุขุมวิท, กรุงเทพฯ",
    features: ["ระบบควบคุมแสงสว่าง", "ม่านอัตโนมัติ", "ระบบเสียงและความบันเทิง", "ระบบรักษาความปลอดภัย"],
    images: [
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2670&auto=format&fit=crop",
    ],
    featured: true,
  },
  {
    id: "modern-house-phuket",
    title: "บ้านเดี่ยวสไตล์โมเดิร์น",
    description: "ติดตั้งระบบ Smart Home ทั้งหลังสำหรับบ้านเดี่ยวสไตล์โมเดิร์นในภูเก็ต ประกอบด้วยระบบควบคุมแสงสว่าง เครื่องปรับอากาศ ระบบรักษาความปลอดภัย และระบบบันเทิง",
    type: "บ้านเดี่ยว",
    location: "ภูเก็ต",
    features: ["ระบบควบคุมแสงสว่าง", "ระบบควบคุมเครื่องปรับอากาศ", "ระบบรักษาความปลอดภัย", "ระบบเสียงและความบันเทิง", "สระว่ายน้ำอัจฉริยะ"],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=2344&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2670&auto=format&fit=crop",
    ],
    featured: true,
  },
  {
    id: "townhome-chiang-mai",
    title: "ทาวน์โฮมย่านนิมมาน",
    description: "ติดตั้งระบบ Smart Home สำหรับทาวน์โฮมย่านนิมมานเหมินทร์ เชียงใหม่ เน้นระบบรักษาความปลอดภัยและประหยัดพลังงาน",
    type: "ทาวน์โฮม",
    location: "นิมมานเหมินทร์, เชียงใหม่",
    features: ["ระบบรักษาความปลอดภัย", "ระบบประหยัดพลังงาน", "ระบบควบคุมแสงสว่าง", "ระบบควบคุมเครื่องปรับอากาศ"],
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2674&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517541866997-883c57d3686f?q=80&w=2562&auto=format&fit=crop",
    ],
    featured: false,
  },
  {
    id: "vacation-home-samui",
    title: "บ้านพักตากอากาศเกาะสมุย",
    description: "ติดตั้งระบบ Smart Home สำหรับบ้านพักตากอากาศที่เกาะสมุย สามารถควบคุมบ้านได้จากระยะไกล ช่วยให้เจ้าของบ้านสามารถดูแลบ้านได้แม้ไม่ได้อยู่ประจำ",
    type: "บ้านพักตากอากาศ",
    location: "เกาะสมุย, สุราษฎร์ธานี",
    features: ["ระบบควบคุมระยะไกล", "กล้องวงจรปิด", "ระบบตรวจจับการรั่วไหลของน้ำ", "ระบบควบคุมอุณหภูมิ", "ระบบแจ้งเตือนผู้บุกรุก"],
    images: [
      "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2674&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2670&auto=format&fit=crop",
    ],
    featured: false,
  },
  {
    id: "restaurant-bangkok",
    title: "ร้านอาหารย่านทองหล่อ",
    description: "ติดตั้งระบบ Smart Commercial สำหรับร้านอาหารย่านทองหล่อ ควบคุมแสงสว่าง เครื่องปรับอากาศ ระบบเสียง และกล้องวงจรปิด ช่วยเพิ่มบรรยากาศและความปลอดภัย",
    type: "ร้านอาหาร",
    location: "ทองหล่อ, กรุงเทพฯ",
    features: ["ระบบควบคุมแสงสว่างอัตโนมัติ", "ระบบเสียงคุณภาพสูง", "ระบบรักษาความปลอดภัย", "ระบบควบคุมอุณหภูมิอัตโนมัติ"],
    images: [
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2785&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2674&auto=format&fit=crop",
    ],
    featured: false,
  },
  {
    id: "office-silom",
    title: "ออฟฟิศย่านสีลม",
    description: "ติดตั้งระบบ Smart Office สำหรับออฟฟิศย่านสีลม เพื่อเพิ่มประสิทธิภาพการทำงานและประหยัดพลังงาน",
    type: "สำนักงาน",
    location: "สีลม, กรุงเทพฯ",
    features: ["ระบบควบคุมการเข้าออก", "ระบบจองห้องประชุม", "ระบบควบคุมแสงสว่างอัตโนมัติ", "ระบบประหยัดพลังงาน", "ระบบรักษาความปลอดภัย"],
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2669&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2670&auto=format&fit=crop",
    ],
    featured: false,
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-4">
          ผลงานการติดตั้ง Smart Home
        </h1>
        <p className="text-xl text-muted-foreground">
          ดูตัวอย่างผลงานการติดตั้งระบบ Smart Home ที่เราภูมิใจนำเสนอ
        </p>
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c8f94a]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2a2014]">โปรเจกต์แนะนำ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-3xl border border-[#3c280f]/15 bg-[#140f0b] shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    width={2670}
                    height={2000}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  {/* High-Contrast Gradient Scrim for 100% Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/15" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white z-10">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="inline-block bg-[#c8f94a] text-[#1a2404] font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                      {project.type}
                    </span>
                    <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                      {project.location}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white drop-shadow-md leading-tight group-hover:text-[#c8f94a] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#e5dbcc] text-sm sm:text-base mb-4 line-clamp-2 leading-relaxed drop-shadow-sm font-normal">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="inline-block bg-black/40 backdrop-blur-md text-[#f5ede2] text-xs px-2.5 py-1 rounded-full border border-white/10">
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="inline-block bg-black/40 backdrop-blur-md text-[#cdbea6] text-xs px-2.5 py-1 rounded-full border border-white/10">
                        +{project.features.length - 3} อื่นๆ
                      </span>
                    )}
                  </div>
                  <Button
                    asChild
                    className="bg-[#c8f94a] text-[#1a2404] hover:bg-[#b2e23b] font-bold rounded-2xl px-6 shadow-md transition-all"
                  >
                    <Link href={`/projects/${project.id}`}>
                      ดูรายละเอียด
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Regular Projects */}
      <div className="flex items-center gap-3 mb-6">
        <span className="w-2.5 h-2.5 rounded-full bg-[#2a2014]" />
        <h2 className="text-2xl sm:text-3xl font-bold text-[#2a2014]">โปรเจกต์ทั้งหมด</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
        {regularProjects.map((project) => (
          <div key={project.id} className="oasel-glass rounded-3xl overflow-hidden border border-[#3c280f]/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group">
            <div className="aspect-[4/3] overflow-hidden relative">
              <Image
                src={project.images[0]}
                alt={project.title}
                width={2670}
                height={2000}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="inline-block bg-[#2a2014]/8 text-[#2a2014] text-xs font-semibold px-2.5 py-1 rounded-full border border-[#3c280f]/10">
                    {project.type}
                  </span>
                  <span className="inline-block bg-[#2a2014]/8 text-[#6e5f50] text-xs font-medium px-2.5 py-1 rounded-full border border-[#3c280f]/10">
                    {project.location}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#2a2014] group-hover:text-[#6e5f50] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#6e5f50] mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="inline-block bg-white/70 text-[#44362a] text-xs px-2.5 py-0.5 rounded-full border border-[#3c280f]/8">
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 3 && (
                    <span className="inline-block bg-white/70 text-[#6e5f50] text-xs px-2 py-0.5 rounded-full border border-[#3c280f]/8">
                      +{project.features.length - 3}
                    </span>
                  )}
                </div>
              </div>
              <Button
                asChild
                variant="outline"
                className="w-full rounded-2xl border-[#3c280f]/15 bg-white/80 hover:bg-[#2a2014] hover:text-[#fbf5e9] text-[#2a2014] font-semibold transition-all shadow-xs"
              >
                <Link href={`/projects/${project.id}`}>
                  ดูรายละเอียด
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Process */}
      <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">ขั้นตอนการทำงานของเรา</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="text-3xl font-bold text-[#2a2014] mb-2">01</div>
              <h3 className="text-lg font-semibold mb-2">ปรึกษาและวางแผน</h3>
              <p className="text-muted-foreground">เราเริ่มต้นด้วยการพูดคุยเพื่อเข้าใจความต้องการและไลฟ์สไตล์ของคุณ</p>
              <div className="hidden md:block absolute top-0 right-0 -mr-4 mt-2 text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
            <div className="relative">
              <div className="text-3xl font-bold text-[#2a2014] mb-2">02</div>
              <h3 className="text-lg font-semibold mb-2">ออกแบบระบบ</h3>
              <p className="text-muted-foreground">ทีมงานของเราออกแบบระบบ Smart Home ที่เหมาะสมกับบ้านและความต้องการของคุณ</p>
              <div className="hidden md:block absolute top-0 right-0 -mr-4 mt-2 text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
            <div className="relative">
              <div className="text-3xl font-bold text-[#2a2014] mb-2">03</div>
              <h3 className="text-lg font-semibold mb-2">ติดตั้งและทดสอบ</h3>
              <p className="text-muted-foreground">ทีมงานมืออาชีพของเราติดตั้งอุปกรณ์และทดสอบระบบอย่างละเอียด</p>
              <div className="hidden md:block absolute top-0 right-0 -mr-4 mt-2 text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#2a2014] mb-2">04</div>
              <h3 className="text-lg font-semibold mb-2">สอนการใช้งานและบริการหลังการขาย</h3>
              <p className="text-muted-foreground">เราสอนการใช้งานระบบและให้บริการหลังการขายตลอด 24 ชั่วโมง</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">พร้อมที่จะเริ่มต้นโปรเจกต์ของคุณ?</h2>
        <p className="text-muted-foreground mb-6">
          ปรึกษาผู้เชี่ยวชาญของเราเพื่อเริ่มต้นการติดตั้ง Smart Home ในบ้านของคุณ
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-[#2a2014] text-[#fbf5e9] hover:bg-[#3d2f20] hover:text-[#c8f94a] rounded-2xl font-semibold shadow-sm transition-all">
            <Link href="/contact">
              ติดต่อเรา
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/packages">
              ดูแพ็คเกจติดตั้ง
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}