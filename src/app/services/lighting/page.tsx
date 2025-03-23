import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";
import Image from 'next/image';

export const metadata = {
  title: "ระบบควบคุมแสงสว่างอัจฉริยะ - Smart Home",
  description: "บริการติดตั้งระบบควบคุมแสงสว่างอัจฉริยะ ที่ช่วยเพิ่มความสะดวกสบายและประหยัดพลังงาน",
};

const benefits = [
  {
    title: "ความสะดวกสบาย",
    description: "ควบคุมแสงสว่างได้จากทุกที่ผ่านสมาร์ทโฟน แท็บเล็ต หรือระบบสั่งการด้วยเสียง",
    icon: "/icons/comfort.svg",
  },
  {
    title: "ประหยัดพลังงาน",
    description: "ลดการใช้พลังงานด้วยระบบตั้งเวลาและเซ็นเซอร์ตรวจจับการเคลื่อนไหว",
    icon: "/icons/energy.svg",
  },
  {
    title: "ปรับแต่งบรรยากาศ",
    description: "สร้างบรรยากาศที่เหมาะสมกับกิจกรรมต่างๆ ด้วยการปรับระดับความสว่างและโทนสี",
    icon: "/icons/ambience.svg",
  },
  {
    title: "ง่ายต่อการใช้งาน",
    description: "ระบบใช้งานง่าย สามารถตั้งค่าล่วงหน้าและรูปแบบการใช้งานที่ใช้ประจำได้",
    icon: "/icons/easy.svg",
  },
];

const features = [
  "ควบคุมผ่านแอพมือถือ",
  "สั่งงานด้วยเสียง",
  "ตั้งเวลาเปิด-ปิดอัตโนมัติ",
  "เซ็นเซอร์ตรวจจับการเคลื่อนไหว",
  "ปรับระดับความสว่าง",
  "ปรับเปลี่ยนโทนสี",
  "ตั้งค่ารูปแบบการใช้งาน (Scene)",
  "เชื่อมต่อกับระบบอื่นๆ",
  "ประหยัดพลังงาน",
  "ระบบติดตามการใช้พลังงาน",
];

const faqItems = [
  {
    question: "ระบบควบคุมแสงสว่างอัจฉริยะคืออะไร?",
    answer: "ระบบควบคุมแสงสว่างอัจฉริยะเป็นเทคโนโลยีที่ช่วยให้คุณสามารถควบคุมแสงสว่างในบ้านผ่านแอพมือถือ หรือเสียง รวมถึงตั้งค่าการทำงานอัตโนมัติ เพื่อเพิ่มความสะดวกสบายและประหยัดพลังงาน",
  },
  {
    question: "จำเป็นต้องเดินสายไฟใหม่ทั้งหมดหรือไม่?",
    answer: "ไม่จำเป็นในหลายกรณี เรามีระบบที่สามารถติดตั้งทดแทนสวิตช์เดิมได้โดยไม่ต้องเดินสายไฟใหม่ หรือมีระบบไร้สายที่ติดตั้งง่ายและสะดวก ทีมงานของเราจะประเมินและแนะนำวิธีที่เหมาะสมที่สุดสำหรับบ้านของคุณ",
  },
  {
    question: "สามารถใช้ร่วมกับระบบ Smart Home อื่นๆ ได้หรือไม่?",
    answer: "ได้ ระบบควบคุมแสงสว่างของเราสามารถเชื่อมต่อกับระบบ Smart Home อื่นๆ เช่น Google Home, Amazon Alexa, Apple HomeKit และระบบอื่นๆ ได้อย่างไร้รอยต่อ",
  },
  {
    question: "ระบบนี้ช่วยประหยัดค่าไฟได้จริงหรือไม่?",
    answer: "ได้จริง ระบบควบคุมแสงสว่างอัจฉริยะช่วยประหยัดค่าไฟได้ถึง 20-30% โดยการตั้งเวลาเปิด-ปิดอัตโนมัติ การใช้เซ็นเซอร์ตรวจจับการเคลื่อนไหว และการปรับระดับความสว่างที่เหมาะสม",
  },
  {
    question: "หากไฟดับหรืออินเทอร์เน็ตขัดข้อง ระบบจะทำงานได้หรือไม่?",
    answer: "ระบบยังสามารถใช้งานได้ผ่านสวิตช์แบบดั้งเดิม และเมื่อมีไฟฟ้ากลับมา ระบบจะกลับมาทำงานตามปกติโดยอัตโนมัติ ส่วนการควบคุมผ่านแอพมือถือจะกลับมาใช้งานได้เมื่ออินเทอร์เน็ตกลับมาทำงานตามปกติ",
  },
];

export default function SmartLightingPage() {
  return (
    <div className="container py-20">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-6">
              ระบบควบคุมแสงสว่าง<span className="text-[#00bbb4]">อัจฉริยะ</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              เพิ่มความสะดวกสบายให้กับบ้านของคุณด้วยระบบควบคุมแสงสว่างอัจฉริยะ ที่สามารถควบคุมได้จากทุกที่ ตั้งเวลาเปิด-ปิดอัตโนมัติ และปรับแต่งบรรยากาศได้ตามต้องการ
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#00bbb4] text-black hover:bg-[#e6ed4a]">
                <Link href="/contact">
                  ปรึกษาผู้เชี่ยวชาญ
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/packages/lighting">
                  ดูแพ็คเกจติดตั้ง
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2574&auto=format&fit=crop"
                alt="ระบบควบคุมแสงสว่างอัจฉริยะ"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#00bbb4] p-6 rounded-lg shadow-lg">
              <p className="text-lg font-bold text-black">ประหยัดพลังงานได้ถึง</p>
              <p className="text-3xl font-bold text-black">30%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">ประโยชน์ของระบบควบคุมแสงสว่างอัจฉริยะ</h2>
          <p className="text-xl text-muted-foreground">
            ระบบควบคุมแสงสว่างอัจฉริยะไม่เพียงแค่เพิ่มความสะดวกสบาย แต่ยังช่วยประหยัดพลังงานและสร้างบรรยากาศที่เหมาะสมกับทุกช่วงเวลา
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-[#00bbb4] hover:shadow-md transition-all">
              <div className="mb-4 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-[#00bbb4]">
                {/* Placeholder for icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v8"></path>
                  <path d="M12 18v4"></path>
                  <path d="M4.93 10.93l1.41 1.41"></path>
                  <path d="M17.66 17.66l1.41 1.41"></path>
                  <path d="M2 12h4"></path>
                  <path d="M18 12h4"></path>
                  <path d="M6.34 17.66l-1.41 1.41"></path>
                  <path d="M19.07 10.93l-1.41 1.41"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">คุณสมบัติของระบบ</h2>
            <p className="text-xl text-muted-foreground mb-6">
              ระบบควบคุมแสงสว่างอัจฉริยะของเรามาพร้อมกับคุณสมบัติที่หลากหลาย เพื่อตอบสนองความต้องการของคุณอย่างครบครัน
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
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=2670&auto=format&fit=crop"
                  alt="ควบคุมผ่านมือถือ"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1532006369555-90160a3b2013?q=80&w=2574&auto=format&fit=crop"
                  alt="ตั้งเวลาอัตโนมัติ"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1596555224999-7f579ba07b1d?q=80&w=2508&auto=format&fit=crop"
                  alt="สั่งงานด้วยเสียง"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1564540574859-0dfb63985953?q=80&w=2670&auto=format&fit=crop"
                  alt="ปรับแต่งบรรยากาศ"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="mb-20 bg-zinc-50 p-8 rounded-lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">ขั้นตอนการติดตั้ง</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="text-3xl font-bold text-[#00bbb4] mb-2">01</div>
              <h3 className="text-lg font-semibold mb-2">สำรวจและวางแผน</h3>
              <p className="text-muted-foreground">เราจะทำการสำรวจพื้นที่และวางแผนการติดตั้งที่เหมาะสมกับบ้านของคุณ</p>
              <div className="hidden md:block absolute top-0 right-0 -mr-4 mt-2 text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
            <div className="relative">
              <div className="text-3xl font-bold text-[#00bbb4] mb-2">02</div>
              <h3 className="text-lg font-semibold mb-2">ติดตั้งอุปกรณ์</h3>
              <p className="text-muted-foreground">ทีมงานมืออาชีพของเราทำการติดตั้งอุปกรณ์ทั้งหมดให้เรียบร้อย</p>
              <div className="hidden md:block absolute top-0 right-0 -mr-4 mt-2 text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
            <div className="relative">
              <div className="text-3xl font-bold text-[#00bbb4] mb-2">03</div>
              <h3 className="text-lg font-semibold mb-2">ตั้งค่าระบบ</h3>
              <p className="text-muted-foreground">เราตั้งค่าระบบทั้งหมดให้พร้อมใช้งาน และปรับแต่งตามความต้องการของคุณ</p>
              <div className="hidden md:block absolute top-0 right-0 -mr-4 mt-2 text-zinc-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#00bbb4] mb-2">04</div>
              <h3 className="text-lg font-semibold mb-2">สอนการใช้งาน</h3>
              <p className="text-muted-foreground">เราสอนการใช้งานระบบทั้งหมดให้คุณสามารถใช้งานได้อย่างเต็มประสิทธิภาพ</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">คำถามที่พบบ่อย</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-zinc-200 rounded-lg p-6 hover:border-[#00bbb4] transition-colors">
                <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#00bbb4] p-12 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">พร้อมที่จะติดตั้งระบบควบคุมแสงสว่างอัจฉริยะ?</h2>
          <p className="text-xl text-zinc-800 mb-8">
            ปรึกษาผู้เชี่ยวชาญของเราเพื่อรับคำแนะนำและเริ่มต้นการติดตั้งระบบที่เหมาะสมกับบ้านของคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-black text-white hover:bg-zinc-800">
              <Link href="/contact">
                ติดต่อเรา
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-black text-black hover:bg-black/5">
              <Link href="/packages/lighting">
                ดูแพ็คเกจติดตั้ง
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
