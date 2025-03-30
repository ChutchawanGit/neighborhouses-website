import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, Lightbulb, Home, Clock, Smartphone } from "lucide-react";
import Image from 'next/image';

export const metadata = {
  title: "ระบบไฟอัจฉริยะ - Smart Home",
  description: "บริการติดตั้งระบบไฟอัจฉริยะสำหรับบ้าน ควบคุมแสงสว่างทั้งในบ้านและนอกบ้านผ่านมือถือ",
};

const benefits = [
  { 
    title: "ประหยัดพลังงาน", 
    description: "ระบบไฟอัจฉริยะช่วยประหยัดพลังงานได้ถึง 30% เมื่อเทียบกับการใช้ระบบไฟแบบทั่วไป", 
    icon: <Lightbulb className="w-6 h-6" /> 
  },
  { 
    title: "ควบคุมได้จากทุกที่", 
    description: "ควบคุมไฟในบ้านได้จากทุกที่ผ่านแอพบนสมาร์ทโฟน แม้ไม่อยู่บ้าน", 
    icon: <Smartphone className="w-6 h-6" /> 
  },
  { 
    title: "ปรับแต่งบรรยากาศ", 
    description: "สร้างบรรยากาศที่เหมาะสมสำหรับทุกโอกาสด้วยการปรับความสว่างและสีของแสงไฟ", 
    icon: <Home className="w-6 h-6" /> 
  },
  { 
    title: "ตั้งเวลาอัตโนมัติ", 
    description: "ตั้งเวลาเปิด-ปิดไฟอัตโนมัติ หรือตั้งค่าให้ทำงานตามเงื่อนไขที่กำหนด", 
    icon: <Clock className="w-6 h-6" /> 
  },
];

const features = [
  "หลอดไฟ LED อัจฉริยะที่ปรับความสว่างและสีได้",
  "สวิตช์อัจฉริยะที่ควบคุมผ่านแอพและเสียง",
  "เซ็นเซอร์ตรวจจับการเคลื่อนไหว เปิดไฟอัตโนมัติ",
  "ฟังก์ชันตั้งเวลาและกำหนดการทำงาน",
  "เชื่อมต่อกับระบบผู้ช่วยเสียง (Google Assistant, Alexa)",
  "ระบบจัดกลุ่มไฟสำหรับห้องหรือโซนต่างๆ",
  "ปรับลักษณะแสงตามช่วงเวลากลางวัน-กลางคืน",
  "ประหยัดพลังงานด้วยระบบตรวจจับความสว่าง",
  "แบตเตอรี่สำรองสำหรับกรณีไฟฟ้าดับ (บางรุ่น)",
  "การเชื่อมต่อกับระบบสมาร์ทโฮมอื่นๆ",
];

const products = [
  { name: "หลอดไฟ LED อัจฉริยะ", image: "https://same-assets.com/f/2023-05/SameAssets-20230531-43b31a.jpg" },
  { name: "สวิตช์ไฟอัจฉริยะ", image: "https://same-assets.com/f/2023-05/SameAssets-20230531-70a3a9.jpg" },
  { name: "โคมไฟอัจฉริยะ", image: "https://same-assets.com/f/2023-05/SameAssets-20230531-43b31b.jpg" },
  { name: "ไฟตกแต่งภายนอกอัจฉริยะ", image: "https://same-assets.com/f/2023-05/SameAssets-20230531-70a3a8.jpg" },
];

export default function LightingServicePage() {
  return (
    <div className="container py-20">
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
              ระบบแสงสว่าง<span className="text-[#00bbb4]">อัจฉริยะ</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              ยกระดับบ้านของคุณด้วยระบบแสงสว่างอัจฉริยะที่ควบคุมได้ง่ายผ่านมือถือ ปรับแต่งบรรยากาศในบ้านให้เหมาะกับทุกโอกาสและทุกช่วงเวลา
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#00bbb4] text-white hover:bg-[#009a9b]">
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
                src="https://same-assets.com/f/2023-05/SameAssets-20230531-70a3a7.jpg"
                alt="ระบบแสงสว่างอัจฉริยะ" 
                className="w-full h-full object-cover"
                width={800}
                height={600}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#00bbb4] p-6 rounded-lg shadow-lg">
              <p className="text-lg font-bold text-white">เริ่มต้นเพียง</p>
              <p className="text-3xl font-bold text-white">25,900 บาท</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">ประโยชน์ของระบบแสงสว่างอัจฉริยะ</h2>
          <p className="text-xl text-muted-foreground">
            ระบบแสงสว่างอัจฉริยะไม่เพียงเพิ่มความสะดวกสบาย แต่ยังช่วยประหยัดพลังงานและสร้างบรรยากาศที่ดีให้บ้านของคุณ
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-[#00bbb4] hover:shadow-md transition-all">
              <div className="mb-4 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-[#00bbb4]">
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
            <h2 className="text-3xl font-bold mb-6">คุณสมบัติของระบบแสงสว่างอัจฉริยะ</h2>
            <p className="text-xl text-muted-foreground mb-6">
              ระบบแสงสว่างอัจฉริยะของเรามาพร้อมกับคุณสมบัติที่ครบครัน เพื่อความสะดวกสบายและการใช้งานที่หลากหลาย
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
              <p className="text-3xl font-bold mb-2 text-[#00bbb4]">25,900 บาท</p>
              <p className="text-sm text-zinc-500 mb-6">รวมค่าติดตั้งและอุปกรณ์</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>ชุดควบคุมแสงสว่าง 8 จุด</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>สวิตช์อัจฉริยะ 4 ตัว</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>เซ็นเซอร์ตรวจจับการเคลื่อนไหว 2 ตัว</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>แอพควบคุมผ่านมือถือ</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>รองรับการสั่งงานด้วยเสียง</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>ติดตั้งฟรี รับประกัน 1 ปี</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-[#00bbb4] text-white hover:bg-[#009a9b]">
                <Link href="/contact?package=lighting-basic">เลือกแพ็คเกจนี้</Link>
              </Button>
            </div>

            <div className="bg-white rounded-lg p-6 border border-zinc-200 shadow-lg relative">
              <div className="absolute -top-3 right-4 bg-[#00bbb4] text-white text-xs font-bold px-3 py-1 rounded-full">แนะนำ</div>
              <h3 className="text-xl font-bold mb-4">แพ็คเกจมาตรฐาน</h3>
              <p className="text-3xl font-bold mb-2 text-[#00bbb4]">45,900 บาท</p>
              <p className="text-sm text-zinc-500 mb-6">รวมค่าติดตั้งและอุปกรณ์</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>ชุดควบคุมแสงสว่าง 16 จุด</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>สวิตช์อัจฉริยะ 8 ตัว</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>เซ็นเซอร์ตรวจจับการเคลื่อนไหว 4 ตัว</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>ไฟเส้น LED RGB อัจฉริยะ 5 เมตร</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>แอพควบคุมพร้อมฟังก์ชันตั้งค่าอัตโนมัติ</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>ติดตั้งฟรี รับประกัน 2 ปี</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-[#00bbb4] text-white hover:bg-[#009a9b]">
                <Link href="/contact?package=lighting-standard">เลือกแพ็คเกจนี้</Link>
              </Button>
            </div>

            <div className="bg-white rounded-lg p-6 border border-zinc-200">
              <h3 className="text-xl font-bold mb-4">แพ็คเกจพรีเมียม</h3>
              <p className="text-3xl font-bold mb-2 text-[#00bbb4]">85,900 บาท</p>
              <p className="text-sm text-zinc-500 mb-6">รวมค่าติดตั้งและอุปกรณ์</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>ชุดควบคุมแสงสว่างทั้งบ้าน</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>สวิตช์อัจฉริยะทุกห้อง</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>เซ็นเซอร์ตรวจจับการเคลื่อนไหว 8 ตัว</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>ชุดไฟตกแต่งภายนอกอัจฉริยะ</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>หลอดไฟ LED RGB ปรับสีได้ 10 ชุด</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>ติดตั้งฟรี รับประกัน 5 ปี</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-[#00bbb4] text-white hover:bg-[#009a9b]">
                <Link href="/contact?package=lighting-premium">เลือกแพ็คเกจนี้</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#00bbb4] p-12 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">พร้อมที่จะยกระดับบ้านของคุณด้วยระบบแสงสว่างอัจฉริยะ?</h2>
          <p className="text-xl text-white/90 mb-8">
            ปรึกษาผู้เชี่ยวชาญของเราเพื่อรับคำแนะนำและเริ่มต้นการติดตั้งระบบที่เหมาะสมกับบ้านของคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-[#00bbb4] hover:bg-zinc-100">
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