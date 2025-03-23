import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Image from 'next/image';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);
  return {
    title: `${project.title} - Smart Home Projects`,
    description: project.description,
  };
}

function getProjectById(id: string) {
  // This is a mock function that would normally fetch from a database or CMS
  const projects = [
    {
      id: "luxury-condo-bangkok",
      title: "คอนโดหรูย่านสุขุมวิท",
      description: "ติดตั้งระบบ Smart Home ครบวงจรสำหรับคอนโดหรูย่านสุขุมวิท ด้วยระบบควบคุมแสงสว่าง ม่านอัตโนมัติ ระบบความบันเทิง และระบบรักษาความปลอดภัย",
      type: "คอนโดมิเนียม",
      location: "สุขุมวิท, กรุงเทพฯ",
      features: ["ระบบควบคุมแสงสว่าง", "ม่านอัตโนมัติ", "ระบบเสียงและความบันเทิง", "ระบบรักษาความปลอดภัย"],
      yearCompleted: "2566",
      clientType: "เจ้าของคอนโดมิเนียม",
      projectSize: "150 ตร.ม.",
      challengeDescription: "ลูกค้าต้องการระบบ Smart Home ที่ทันสมัยและใช้งานง่าย โดยเน้นเรื่องความปลอดภัยและความบันเทิงในบ้าน แต่พื้นที่ในคอนโดมีจำกัด จึงต้องการการออกแบบที่ลงตัวและไม่รกรุงรัง",
      solutionDescription: "เราออกแบบระบบ Smart Home ที่ซ่อนอุปกรณ์ไว้อย่างลงตัว โดยติดตั้งลำโพงบนเพดาน และซ่อนสายไฟทั้งหมดในผนัง ระบบควบคุมทั้งหมดทำงานผ่านแอพพลิเคชั่นบนสมาร์ทโฟน และสามารถสั่งงานด้วยเสียงได้ ทำให้ไม่ต้องมีรีโมทหลายอัน ช่วยลดความรกรุงรัง",
      resultsDescription: "ลูกค้าพึงพอใจกับระบบ Smart Home ที่ทันสมัยและใช้งานง่าย สามารถควบคุมทุกอย่างในบ้านได้จากที่เดียว ช่วยเพิ่มความสะดวกสบายและความปลอดภัย ทำให้การอยู่อาศัยในคอนโดมิเนียมมีคุณภาพชีวิตที่ดีขึ้น",
      images: [
        "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=2670&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2670&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2670&auto=format&fit=crop",
      ],
      testimonial: {
        content: "การติดตั้งระบบ Smart Home ทำให้ชีวิตของผมสะดวกสบายขึ้นมาก สามารถควบคุมทุกอย่างในคอนโดได้จากสมาร์ทโฟนเพียงเครื่องเดียว ทั้งระบบแสงไฟ ม่าน เครื่องปรับอากาศ และระบบความบันเทิง ทำให้ไม่ต้องมีรีโมทเยอะๆ และยังช่วยประหยัดพลังงานอีกด้วย",
        author: "คุณสมชาย พัฒนา",
        position: "เจ้าของคอนโดมิเนียม"
      },
      relatedProjects: ["modern-house-phuket", "townhome-chiang-mai"]
    },
    {
      id: "modern-house-phuket",
      title: "บ้านเดี่ยวสไตล์โมเดิร์น",
      description: "ติดตั้งระบบ Smart Home ทั้งหลังสำหรับบ้านเดี่ยวสไตล์โมเดิร์นในภูเก็ต ประกอบด้วยระบบควบคุมแสงสว่าง เครื่องปรับอากาศ ระบบรักษาความปลอดภัย และระบบบันเทิง",
      type: "บ้านเดี่ยว",
      location: "ภูเก็ต",
      features: ["ระบบควบคุมแสงสว่าง", "ระบบควบคุมเครื่องปรับอากาศ", "ระบบรักษาความปลอดภัย", "ระบบเสียงและความบันเทิง", "สระว่ายน้ำอัจฉริยะ"],
      yearCompleted: "2565",
      clientType: "ครอบครัว",
      projectSize: "350 ตร.ม.",
      challengeDescription: "ลูกค้าต้องการระบบ Smart Home ที่ครอบคลุมทั้งบ้าน รวมถึงสระว่ายน้ำ และสวน โดยต้องการให้ระบบทั้งหมดทำงานร่วมกันได้อย่างไร้รอยต่อ และสามารถควบคุมได้จากระยะไกล เนื่องจากลูกค้าไม่ได้พักอาศัยประจำ",
      solutionDescription: "เราออกแบบระบบ Smart Home ที่ครอบคลุมทั้งตัวบ้าน สระว่ายน้ำ และสวน โดยใช้ระบบควบคุมกลางที่สามารถเชื่อมต่ออุปกรณ์ทั้งหมดเข้าด้วยกัน ทำให้สามารถควบคุมทุกอย่างได้จากแอพพลิเคชั่นเดียว นอกจากนี้ยังติดตั้งระบบรักษาความปลอดภัยที่ทันสมัย พร้อมกล้องวงจรปิดที่สามารถดูได้จากระยะไกล",
      resultsDescription: "ลูกค้าสามารถควบคุมทุกอย่างในบ้านได้จากระยะไกล ทั้งระบบไฟ เครื่องปรับอากาศ ระบบรักษาความปลอดภัย รวมถึงสระว่ายน้ำและระบบรดน้ำต้นไม้ในสวน ทำให้มั่นใจได้ว่าบ้านจะอยู่ในสภาพที่สมบูรณ์แม้จะไม่ได้พักอาศัยประจำ",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=2344&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2670&auto=format&fit=crop",
      ],
      testimonial: {
        content: "เรามาพักที่ภูเก็ตเพียงปีละ 2-3 ครั้ง แต่ด้วยระบบ Smart Home ทำให้เราสามารถดูแลบ้านได้แม้จะอยู่ไกล สามารถเช็คกล้องวงจรปิด เปิด-ปิดไฟ และควบคุมอุณหภูมิบ้านได้ก่อนที่เราจะมาถึง ทำให้บ้านพร้อมใช้งานทันทีที่เราเดินทางมาถึง",
        author: "คุณสมศักดิ์ และ คุณสมหญิง",
        position: "เจ้าของบ้าน"
      },
      relatedProjects: ["luxury-condo-bangkok", "vacation-home-samui"]
    },
    // Additional projects would be defined here
  ];

  return projects.find(project => project.id === id) || projects[0];
}

function getRelatedProjects(ids: string[]) {
  // This would fetch related projects from database
  const allProjects = [
    {
      id: "luxury-condo-bangkok",
      title: "คอนโดหรูย่านสุขุมวิท",
      type: "คอนโดมิเนียม",
      location: "สุขุมวิท, กรุงเทพฯ",
      image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?q=80&w=2670&auto=format&fit=crop",
    },
    {
      id: "modern-house-phuket",
      title: "บ้านเดี่ยวสไตล์โมเดิร์น",
      type: "บ้านเดี่ยว",
      location: "ภูเก็ต",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2675&auto=format&fit=crop",
    },
    {
      id: "townhome-chiang-mai",
      title: "ทาวน์โฮมย่านนิมมาน",
      type: "ทาวน์โฮม",
      location: "นิมมานเหมินทร์, เชียงใหม่",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2674&auto=format&fit=crop",
    },
    {
      id: "vacation-home-samui",
      title: "บ้านพักตากอากาศเกาะสมุย",
      type: "บ้านพักตากอากาศ",
      location: "เกาะสมุย, สุราษฎร์ธานี",
      image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=2670&auto=format&fit=crop",
    },
  ];

  return allProjects.filter(project => ids.includes(project.id));
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);
  const relatedProjects = getRelatedProjects(project.relatedProjects || []);

  return (
    <div className="container py-20">
      <Link href="/projects" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        กลับไปยังโปรเจกต์ทั้งหมด
      </Link>

      {/* Hero Section */}
      <div className="mb-16">
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">{project.type}</span>
            <span className="inline-block bg-zinc-100 text-zinc-800 text-xs px-2 py-1 rounded-full">{project.location}</span>
            <span className="inline-block bg-zinc-100 text-zinc-800 text-xs px-2 py-1 rounded-full">{project.yearCompleted}</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground">{project.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <Image src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.slice(1, 3).map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <Image src={image} alt={`${project.title} ${index + 2}`} className="w-full h-full object-cover" />
              </div>
            ))}

            <div className="col-span-2">
              <div className="border border-zinc-200 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">โปรเจกต์นี้รวมถึง:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">รายละเอียดโปรเจกต์</h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-lg font-medium mb-2">ประเภทโปรเจกต์</h3>
            <p className="text-muted-foreground">{project.type}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">สถานที่</h3>
            <p className="text-muted-foreground">{project.location}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">ปีที่เสร็จสมบูรณ์</h3>
            <p className="text-muted-foreground">{project.yearCompleted}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">ขนาดโปรเจกต์</h3>
            <p className="text-muted-foreground">{project.projectSize}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">ความท้าทาย</h3>
            <p className="text-muted-foreground">{project.challengeDescription}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">วิธีการแก้ปัญหา</h3>
            <p className="text-muted-foreground">{project.solutionDescription}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">ผลลัพธ์</h3>
            <p className="text-muted-foreground">{project.resultsDescription}</p>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      {project.testimonial && (
        <div className="mb-16 bg-zinc-50 p-8 rounded-lg border border-zinc-200">
          <div className="max-w-3xl mx-auto">
            <svg className="h-8 w-8 text-zinc-400 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            <blockquote className="text-xl italic mb-6">{project.testimonial.content}</blockquote>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#00bbb4] rounded-full flex items-center justify-center text-white font-bold mr-3">
                {project.testimonial.author.charAt(0)}
              </div>
              <div>
                <div className="font-medium">{project.testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{project.testimonial.position}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">โปรเจกต์ที่เกี่ยวข้อง</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map(related => (
              <Link key={related.id} href={`/projects/${related.id}`} className="group">
                <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-[16/9] overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="inline-block bg-zinc-100 text-zinc-800 text-xs px-2 py-1 rounded-full">{related.type}</span>
                      <span className="inline-block bg-zinc-100 text-zinc-800 text-xs px-2 py-1 rounded-full">{related.location}</span>
                    </div>
                    <h3 className="font-semibold group-hover:text-[#00bbb4] transition-colors">{related.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="bg-[#00bbb4] p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">สนใจติดตั้ง Smart Home?</h2>
        <p className="text-xl text-zinc-800 mb-8 max-w-3xl mx-auto">
          ปรึกษาผู้เชี่ยวชาญของเราเพื่อรับคำแนะนำและเริ่มต้นการติดตั้งระบบที่เหมาะสมกับบ้านของคุณ
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-black text-white hover:bg-zinc-800">
            <Link href="/contact">ติดต่อเรา</Link>
          </Button>
          <Button asChild variant="outline" className="bg-transparent border-black text-black hover:bg-black/5">
            <Link href="/packages">ดูแพ็คเกจติดตั้ง</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
