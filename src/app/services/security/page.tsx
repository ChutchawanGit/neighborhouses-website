import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";
import Image from 'next/image';

export const metadata = {
  title: "ระบบรักษาความปลอดภัยอัจฉริยะ - Smart Home",
  description: "บริการติดตั้งระบบรักษาความปลอดภัยอัจฉริยะ เพิ่มความปลอดภัยให้กับบ้านของคุณและคนที่คุณรัก",
};

const benefits = [
  { title: "ดูแลบ้านได้ทุกที่ทุกเวลา", description: "ตรวจสอบสถานะและมุมมองกล้องได้จากมือถือแม้จะไม่อยู่บ้าน" },
  { title: "แจ้งเตือนอัตโนมัติ", description: "ระบบแจ้งเตือนทันทีเมื่อตรวจพบการบุกรุกหรือเหตุผิดปกติ" },
  { title: "บันทึกภาพอัตโนมัติ", description: "บันทึกภาพอัตโนมัติเมื่อตรวจพบการเคลื่อนไหว เก็บหลักฐานได้ครบถ้วน" },
  { title: "เชื่อมต่อกับระบบอื่นๆ", description: "เชื่อมต่อกับระบบสมาร์ทโฮมอื่นๆ เพื่อการตอบสนองอัตโนมัติ" },
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
  { 
    name: "กล้องวงจรปิดอัจฉริยะ", 
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop",
    width: 2574,
    height: 1900
  },
  { 
    name: "ระบบล็อคประตูอัจฉริยะ", 
    image: "https://images.unsplash.com/photo-1584644207904-a03a08f463a8?q=80&w=2670&auto=format&fit=crop",
    width: 2670,
    height: 2000
  },
  { 
    name: "เซ็นเซอร์ตรวจจับความเคลื่อนไหว", 
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=2670&auto=format&fit=crop",
    width: 2670,
    height: 2000
  },
  { 
    name: "กล้องวิดีโอหน้าประตู", 
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2670&auto=format&fit=crop",
    width: 2670,
    height: 2000
  },
];

export default function SecurityServicePage() {
  return (
    <div className="container py-20">
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
              ระบบรักษาความปลอดภัย<span className="text-[#00bbb4]">อัจฉริยะ</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              เพิ่มความปลอดภัยให้กับบ้านของคุณด้วยระบบรักษาความปลอดภัยอัจฉริยะที่ทันสมัย ควบคุมและตรวจสอบได้จากทุกที่ผ่านสมาร์ทโฟน
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#00bbb4] text-black hover:bg-[#e6ed4a]">
                <Link href="/contact">ปรึกษาผู้เชี่ยวชาญ</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/packages/security">ดูแพ็คเกจติดตั้ง</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
                width={2574}
                height={1900}
                alt="ระบบรักษาความปลอดภัยอัจฉริยะ" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#00bbb4] p-6 rounded-lg shadow-lg">
              <p className="text-lg font-bold text-black">ปกป้องบ้านคุณ</p>
              <p className="text-3xl font-bold text-black">24/7</p>
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
            <div key={index} className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-[#00bbb4] hover:shadow-md transition-all">
              <div className="mb-4 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-[#00bbb4]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 7 9 18l-5-5"></path>
                </svg>
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
                  width={product.width}
                  height={product.height}
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#00bbb4] p-12 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">พร้อมที่จะเพิ่มความปลอดภัยให้กับบ้านของคุณ?</h2>
          <p className="text-xl text-zinc-800 mb-8">
            ปรึกษาผู้เชี่ยวชาญของเราเพื่อรับคำแนะนำและเริ่มต้นการติดตั้งระบบที่เหมาะสมกับบ้านของคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-black text-white hover:bg-zinc-800">
              <Link href="/contact">ติดต่อเรา</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-black text-black hover:bg-black/5">
              <Link href="/packages/security">ดูแพ็คเกจติดตั้ง</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}