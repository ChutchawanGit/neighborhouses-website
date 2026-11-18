import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";
import Image from 'next/image';

export const metadata = {
  title: "ระบบอัตโนมัติอัจฉริยะ - Smart Home",
  description: "บริการติดตั้งระบบอัตโนมัติอัจฉริยะ เพิ่มความสะดวกสบายและประหยัดพลังงานด้วยเทคโนโลยีสมัยใหม่",
};

const benefits = [
  { title: "บ้านทำงานเอง", description: "ระบบทำงานอัตโนมัติตามเงื่อนไขที่ตั้งไว้ โดยไม่ต้องควบคุมด้วยตัวเอง" },
  { title: "ประหยัดพลังงาน", description: "ลดการใช้พลังงานด้วยระบบอัตโนมัติที่เปิด-ปิดเครื่องใช้ไฟฟ้าเมื่อจำเป็น" },
  { title: "ชีวิตสะดวกสบาย", description: "ทำให้การอยู่อาศัยสะดวกสบายมากขึ้นด้วยการตอบสนองอัตโนมัติ" },
  { title: "ปรับแต่งได้ตามใจ", description: "ปรับแต่งการทำงานอัตโนมัติได้ตามความต้องการเฉพาะของคุณ" },
];

const automationScenarios = [
  {
    title: "ยามเช้า",
    description: "เมื่อถึงเวลาตื่นนอน ม่านจะเปิดอัตโนมัติ ไฟจะสว่างที่ความสว่าง 30% เครื่องชงกาแฟจะเริ่มทำงาน และอุณหภูมิห้องจะปรับให้เหมาะสม",
    icon: "☀️"
  },
  {
    title: "ออกจากบ้าน",
    description: "เมื่อคุณออกจากบ้าน ระบบจะปิดไฟทั้งหมด ปรับอุณหภูมิแอร์ให้ประหยัดพลังงาน ล็อคประตูอัตโนมัติ และเปิดระบบรักษาความปลอดภัย",
    icon: "🚪"
  },
  {
    title: "กลับบ้าน",
    description: "เมื่อคุณกลับมาถึงบ้าน ไฟจะเปิดอัตโนมัติ อุณหภูมิห้องจะปรับให้สบาย เครื่องปรับอากาศจะเปิด และระบบความบันเทิงจะพร้อมใช้งาน",
    icon: "🏠"
  },
  {
    title: "โหมดดูหนัง",
    description: "กดปุ่มเดียว ไฟจะหรี่ลง ม่านจะปิด ทีวีและระบบเสียงจะเปิด และอุณหภูมิห้องจะปรับให้เหมาะสมกับการดูหนัง",
    icon: "🎬"
  },
  {
    title: "โหมดนอน",
    description: "เมื่อถึงเวลานอน ไฟจะดับทั้งหมดยกเว้นไฟทางเดิน อุณหภูมิจะปรับให้เหมาะกับการนอน และระบบรักษาความปลอดภัยจะทำงานเต็มที่",
    icon: "🌙"
  },
  {
    title: "ประหยัดพลังงาน",
    description: "เมื่อไม่มีคนอยู่ในห้องเกิน 10 นาที ไฟและเครื่องใช้ไฟฟ้าจะปิดอัตโนมัติ ช่วยลดการใช้พลังงานโดยไม่จำเป็น",
    icon: "💡"
  },
];

export default function AutomationServicePage() {
  return (
    <div className="container py-20">
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
              ระบบ<span className="text-[#2a2014]">อัตโนมัติ</span>อัจฉริยะ
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              ยกระดับบ้านของคุณด้วยระบบอัตโนมัติที่ทำให้บ้านทำงานเองโดยอัตโนมัติ เพิ่มความสะดวกสบายและประหยัดพลังงาน
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#2a2014] text-[#fbf5e9] hover:bg-[#3d2f20] hover:text-[#c8f94a] rounded-2xl font-semibold shadow-sm transition-all">
                <Link href="/contact">ปรึกษาผู้เชี่ยวชาญ</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/packages/automation">ดูแพ็คเกจติดตั้ง</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=2670&auto=format&fit=crop" width={2670} height={2000}
                   alt="ระบบอัตโนมัติอัจฉริยะ" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#2a2014] p-5 sm:p-6 rounded-3xl shadow-xl border border-white/10 text-white">
              <p className="text-xs text-[#cdbea6] font-medium uppercase tracking-wider">บ้านทำงานเอง</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#c8f94a]">อัตโนมัติ</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">ประโยชน์ของระบบอัตโนมัติ</h2>
          <p className="text-xl text-muted-foreground">
            ระบบอัตโนมัติช่วยให้บ้านของคุณทำงานได้เองโดยอัตโนมัติ เพิ่มความสะดวกสบายและประหยัดพลังงาน
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-[#2a2014] hover:shadow-md transition-all">
              <div className="mb-4 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-[#2a2014]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="9" y1="3" x2="9" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">สถานการณ์อัตโนมัติ</h2>
          <p className="text-xl text-muted-foreground mb-8">
            เราสามารถตั้งค่าการทำงานอัตโนมัติได้หลากหลายรูปแบบตามความต้องการของคุณ
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {automationScenarios.map((scenario, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-[#2a2014] hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{scenario.icon}</span>
                <h3 className="text-xl font-semibold">{scenario.title}</h3>
              </div>
              <p className="text-muted-foreground">{scenario.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20 bg-zinc-50 p-8 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">วิธีการทำงาน</h2>
          <p className="text-xl text-muted-foreground mb-12">
            ระบบอัตโนมัติทำงานด้วยเซ็นเซอร์และการตั้งค่าเงื่อนไขการทำงานที่ชาญฉลาด
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="text-3xl font-bold text-[#2a2014] mb-4">01</div>
              <h3 className="text-xl font-semibold mb-2">เซ็นเซอร์ตรวจจับ</h3>
              <p className="text-muted-foreground">เซ็นเซอร์ตรวจจับสภาพแวดล้อม การเคลื่อนไหว อุณหภูมิ และอื่นๆ</p>
              <div className="hidden md:block absolute top-0 right-0 -mr-4 mt-2 text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
            <div className="relative">
              <div className="text-3xl font-bold text-[#2a2014] mb-4">02</div>
              <h3 className="text-xl font-semibold mb-2">ประมวลผล</h3>
              <p className="text-muted-foreground">ศูนย์ควบคุมประมวลผลข้อมูลและตัดสินใจตามเงื่อนไขที่ตั้งไว้</p>
              <div className="hidden md:block absolute top-0 right-0 -mr-4 mt-2 text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#2a2014] mb-4">03</div>
              <h3 className="text-xl font-semibold mb-2">ทำงานอัตโนมัติ</h3>
              <p className="text-muted-foreground">อุปกรณ์ต่างๆ ในบ้านทำงานโดยอัตโนมัติตามคำสั่งจากศูนย์ควบคุม</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2a2014] p-10 sm:p-14 rounded-3xl text-white border border-white/10 shadow-2xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">พร้อมให้บ้านของคุณทำงานอัตโนมัติ?</h2>
          <p className="text-xl text-zinc-800 mb-8">
            ปรึกษาผู้เชี่ยวชาญของเราเพื่อรับคำแนะนำและเริ่มต้นการติดตั้งระบบที่เหมาะสมกับบ้านของคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-black text-white hover:bg-zinc-800">
              <Link href="/contact">ติดต่อเรา</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-black text-black hover:bg-black/5">
              <Link href="/packages/automation">ดูแพ็คเกจติดตั้ง</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}