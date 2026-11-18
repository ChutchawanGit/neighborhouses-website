import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, Shield, BellRing, Video, Lock } from "lucide-react";
import Image from 'next/image';

export const metadata = {
  title: "ระบบรักษาความปลอดภัยอัจฉริยะ - Smart Home",
  description: "บริการติดตั้งระบบรักษาความปลอดภัยอัจฉริยะ เพิ่มความปลอดภัยให้กับบ้านของคุณและคนที่คุณรัก",
};

const benefits = [
  { 
    title: "ดูแลบ้านได้ทุกที่ทุกเวลา", 
    description: "ตรวจสอบสถานะและมุมมองกล้องได้จากมือถือแม้จะไม่อยู่บ้าน",
    icon: <Video className="w-6 h-6" />
  },
  { 
    title: "แจ้งเตือนอัตโนมัติ", 
    description: "ระบบแจ้งเตือนทันทีเมื่อตรวจพบการบุกรุกหรือเหตุผิดปกติ",
    icon: <BellRing className="w-6 h-6" />
  },
  { 
    title: "บันทึกภาพอัตโนมัติ", 
    description: "บันทึกภาพอัตโนมัติเมื่อตรวจพบการเคลื่อนไหว เก็บหลักฐานได้ครบถ้วน",
    icon: <Shield className="w-6 h-6" />
  },
  { 
    title: "เชื่อมต่อกับระบบอื่นๆ", 
    description: "เชื่อมต่อกับระบบสมาร์ทโฮมอื่นๆ เพื่อการตอบสนองอัตโนมัติ",
    icon: <Lock className="w-6 h-6" />
  },
];

const features = [
  "กล้องวงจรปิดความละเอียดสูง HD/4K",
  "ระบบตรวจจับการเคลื่อนไหว",
  "ระบบล็อคประตูอัจฉริยะ",
  "การแจ้งเตือนผ่านแอพมือถือ",
  "ระบบไซเรนแจ้งเตือน",
  "การควบคุมระยะไกล",
  "การบันทึกวิดีโอต่อเนื่อง",
  "เชื่อมต่อกับศูนย์รักษาความปลอดภัย",
  "วิเคราะห์ภาพอัจฉริยะ",
  "ระบบป้องกันการเข้ารหัส",
];

const products = [
  { name: "กล้องวงจรปิดอัจฉริยะ", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop" },
  { name: "ระบบล็อคประตูอัจฉริยะ", image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop" },
  { name: "เซ็นเซอร์ตรวจจับความเคลื่อนไหว", image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=1200&auto=format&fit=crop" },
  { name: "กล้องวิดีโอหน้าประตู", image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=1200&auto=format&fit=crop" },
];

export default function SecurityServicePage() {
  return (
    <div className="container py-20">
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
              ระบบรักษาความปลอดภัย<span className="text-[#2a2014]">อัจฉริยะ</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              เพิ่มความปลอดภัยให้กับบ้านของคุณด้วยระบบรักษาความปลอดภัยอัจฉริยะที่ทันสมัย ควบคุมและตรวจสอบได้จากทุกที่ผ่านสมาร์ทโฟน
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#2a2014] text-[#fbf5e9] hover:bg-[#3d2f20] hover:text-[#c8f94a] rounded-2xl font-semibold shadow-sm transition-all">
                <Link href="/contact">ปรึกษาผู้เชี่ยวชาญ</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/calculator">คำนวณราคาติดตั้ง</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
                alt="ระบบรักษาความปลอดภัยอัจฉริยะ" 
                className="w-full h-full object-cover" 
                width={800}
                height={600}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#2a2014] p-6 rounded-lg shadow-lg">
              <p className="text-lg font-bold text-white">เริ่มต้นเพียง</p>
              <p className="text-3xl font-bold text-white">45,900 บาท</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">ประโยชน์ของระบบรักษาความปลอดภัยอัจฉริยะ</h2>
          <p className="text-xl text-muted-foreground">
            ระบบรักษาความปลอดภัยอัจฉริยะช่วยเพิ่มความอุ่นใจให้กับคุณและครอบครัว ด้วยเทคโนโลยีที่ทันสมัย
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-[#2a2014] hover:shadow-md transition-all">
              <div className="mb-4 w-12 h-12 bg-[#2a2014]/5 rounded-full flex items-center justify-center text-[#2a2014]">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">คุณสมบัติของระบบ</h2>
            <p className="text-xl text-muted-foreground mb-6">
              ระบบรักษาความปลอดภัยอัจฉริยะของเรามาพร้อมกับคุณสมบัติที่ครบครัน เพื่อการปกป้องบ้านของคุณอย่างสมบูรณ์แบบ
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {products.map((product, index) => (
              <div key={index} className="aspect-square rounded-lg overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="bg-zinc-100 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-zinc-200">
              <h3 className="text-xl font-bold mb-4">แพ็คเกจเริ่มต้น</h3>
              <p className="text-3xl font-bold mb-2 text-[#2a2014]">45,900 บาท</p>
              <p className="text-sm text-zinc-500 mb-6">รวมค่าติดตั้งและอุปกรณ์</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>กล้องวงจรปิด 4 ตัว</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>ระบบล็อคประตูอัจฉริยะ 2 ชุด</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>เซ็นเซอร์ตรวจจับการเคลื่อนไหว 3 ตัว</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>ระบบแจ้งเตือนผ่านมือถือ</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>เชื่อมต่อกับศูนย์ควบคุม 24 ชั่วโมง</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>ติดตั้งฟรี รับประกัน 2 ปี</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-[#2a2014] text-[#fbf5e9] hover:bg-[#3d2f20] hover:text-[#c8f94a] rounded-2xl font-semibold shadow-sm transition-all">
                <Link href="/contact?package=security-basic">เลือกแพ็คเกจนี้</Link>
              </Button>
            </div>

            <div className="bg-white rounded-lg p-6 border border-zinc-200 shadow-lg relative">
              <div className="absolute -top-3 right-4 bg-[#c8f94a] text-[#1a2404] text-xs font-bold px-3 py-1 rounded-full shadow-xs">แนะนำ</div>
              <h3 className="text-xl font-bold mb-4">แพ็คเกจมาตรฐาน</h3>
              <p className="text-3xl font-bold mb-2 text-[#2a2014]">65,900 บาท</p>
              <p className="text-sm text-zinc-500 mb-6">รวมค่าติดตั้งและอุปกรณ์</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>กล้องวงจรปิดความละเอียดสูง 6 ตัว</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>ระบบล็อคประตูอัจฉริยะ 3 ชุด</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>เซ็นเซอร์ตรวจจับการเคลื่อนไหว 5 ตัว</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>กล้องหน้าประตูพร้อมอินเตอร์คอม</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>ระบบไซเรนแจ้งเตือนเมื่อตรวจพบการบุกรุก</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>ติดตั้งฟรี รับประกัน 3 ปี</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-[#2a2014] text-[#fbf5e9] hover:bg-[#3d2f20] hover:text-[#c8f94a] rounded-2xl font-semibold shadow-sm transition-all">
                <Link href="/contact?package=security-standard">เลือกแพ็คเกจนี้</Link>
              </Button>
            </div>

            <div className="bg-white rounded-lg p-6 border border-zinc-200">
              <h3 className="text-xl font-bold mb-4">แพ็คเกจพรีเมียม</h3>
              <p className="text-3xl font-bold mb-2 text-[#2a2014]">95,900 บาท</p>
              <p className="text-sm text-zinc-500 mb-6">รวมค่าติดตั้งและอุปกรณ์</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>กล้องวงจรปิด 4K ครอบคลุมทั้งบ้าน</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>ระบบล็อคประตูอัจฉริยะทุกประตู</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>เซ็นเซอร์ติดตั้งทั้งประตูและหน้าต่าง</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>ระบบ AI ตรวจจับและวิเคราะห์บุคคล</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>ระบบสำรองไฟฉุกเฉิน</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>ติดตั้งฟรี รับประกัน 5 ปี</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-[#2a2014] text-[#fbf5e9] hover:bg-[#3d2f20] hover:text-[#c8f94a] rounded-2xl font-semibold shadow-sm transition-all">
                <Link href="/contact?package=security-premium">เลือกแพ็คเกจนี้</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2a2014] p-10 sm:p-14 rounded-3xl text-white border border-white/10 shadow-2xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">พร้อมที่จะเพิ่มความปลอดภัยให้กับบ้านของคุณ?</h2>
          <p className="text-xl text-white/90 mb-8">
            ปรึกษาผู้เชี่ยวชาญของเราเพื่อรับคำแนะนำและเริ่มต้นการติดตั้งระบบที่เหมาะสมกับบ้านของคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#c8f94a] text-[#1a2404] hover:bg-[#b2e23b] font-bold rounded-2xl shadow-sm transition-all">
              <Link href="/contact">ติดต่อเรา</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link href="/calculator">คำนวณราคาติดตั้ง</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}