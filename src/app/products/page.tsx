import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';

export const metadata = {
  title: "สินค้า Smart Home - ติดตั้ง Smart Home",
  description: "แนะนำอุปกรณ์ Smart Home คุณภาพสูง สำหรับการติดตั้งระบบ Smart Home ในบ้านของคุณ",
};

const products = [
  {
    name: "Smart Light Switch",
    brand: "Phillips Hue",
    description: "สวิตช์อัจฉริยะควบคุมแสงสว่างได้จากทุกที่ ตั้งเวลาเปิด-ปิดอัตโนมัติ รองรับการสั่งงานด้วยเสียง",
    features: [
      "ควบคุมผ่านแอพมือถือ",
      "ตั้งเวลาเปิด-ปิดอัตโนมัติ",
      "รองรับการสั่งงานด้วยเสียง",
      "ติดตั้งง่าย ใช้แทนสวิตช์เดิมได้",
      "ประหยัดพลังงาน",
    ],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2670&auto=format&fit=crop",
    category: "lighting",
  },
  {
    name: "กล้องวงจรปิดอัจฉริยะ",
    brand: "EZVIZ",
    description: "กล้องวงจรปิดความละเอียดสูง เชื่อมต่อไวไฟได้ ดูภาพสดผ่านมือถือได้ตลอดเวลา พร้อมระบบแจ้งเตือนอัตโนมัติ",
    features: [
      "ความละเอียด Full HD 1080p",
      "มุมมอง 360 องศา",
      "บันทึกวิดีโอทั้งกลางวันและกลางคืน",
      "ระบบตรวจจับการเคลื่อนไหว",
      "เก็บข้อมูลบนคลาวด์",
      "แจ้งเตือนผ่านแอพมือถือ",
    ],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop",
    category: "security",
  },
  {
    name: "ลำโพงอัจฉริยะ",
    brand: "Google Nest",
    description: "ลำโพงอัจฉริยะที่ทำงานด้วยเสียง ควบคุมอุปกรณ์ Smart Home ทั้งหมด ฟังเพลง และรับข้อมูลต่างๆ ได้อย่างสะดวก",
    features: [
      "สั่งงานด้วยเสียง",
      "ควบคุมอุปกรณ์ Smart Home ทั้งหมด",
      "ฟังเพลงจากบริการสตรีมมิ่ง",
      "ให้ข้อมูลข่าวสาร สภาพอากาศ และอื่นๆ",
      "ตั้งเวลาปลุก ตั้งนาฬิกาจับเวลา",
    ],
    image: "https://images.unsplash.com/photo-1512446816042-444d641267d4?q=80&w=2670&auto=format&fit=crop",
    category: "audio",
  },
  {
    name: "Smart Door Lock",
    brand: "Yale",
    description: "ระบบล็อคประตูอัจฉริยะที่สามารถปลดล็อคได้หลายวิธี รวมถึงรหัส ลายนิ้วมือ การ์ด และควบคุมผ่านแอพมือถือ",
    features: [
      "ปลดล็อคด้วยรหัสหรือลายนิ้วมือ",
      "ปลดล็อคผ่านแอพมือถือ",
      "แจ้งเตือนเมื่อมีการเปิดประตู",
      "สร้างรหัสชั่วคราวสำหรับผู้มาเยือน",
      "ติดตั้งง่าย ไม่ต้องเดินสายไฟใหม่",
      "แบตเตอรี่ใช้งานได้นาน",
    ],
    image: "https://images.unsplash.com/photo-1584644207904-a03a08f463a8?q=80&w=2670&auto=format&fit=crop",
    category: "security",
  },
  {
    name: "เซ็นเซอร์ตรวจจับการเคลื่อนไหว",
    brand: "Aqara",
    description: "เซ็นเซอร์ขนาดเล็กที่ตรวจจับการเคลื่อนไหวและแจ้งเตือนผ่านแอพมือถือ ใช้ควบคุมไฟและอุปกรณ์อื่นๆ โดยอัตโนมัติ",
    features: [
      "ตรวจจับการเคลื่อนไหวได้ไกลถึง 7 เมตร",
      "เชื่อมต่อกับอุปกรณ์อื่นๆ ได้ง่าย",
      "แบตเตอรี่ใช้งานได้นานถึง 2 ปี",
      "ติดตั้งง่ายไม่ต้องใช้เครื่องมือ",
      "รองรับการทำงานผ่าน HomeKit, Google Home, และ Amazon Alexa",
    ],
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=2670&auto=format&fit=crop",
    category: "automation",
  },
  {
    name: "Smart Air Conditioner Controller",
    brand: "Sensibo",
    description: "อุปกรณ์ควบคุมเครื่องปรับอากาศให้เป็นระบบอัจฉริยะ ควบคุมผ่านแอพมือถือได้ทุกที่ ประหยัดพลังงาน",
    features: [
      "ควบคุมแอร์ผ่านแอพมือถือ",
      "ตั้งเวลาเปิด-ปิดอัตโนมัติ",
      "ตรวจจับอุณหภูมิและความชื้น",
      "ใช้ได้กับเครื่องปรับอากาศทุกรุ่นที่มีรีโมต",
      "ประหยัดพลังงานและลดค่าไฟ",
      "รองรับการสั่งงานด้วยเสียง",
    ],
    image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=2574&auto=format&fit=crop",
    category: "appliances",
  },
  {
    name: "Smart Hub",
    brand: "Samsung SmartThings",
    description: "ศูนย์กลางการควบคุมอุปกรณ์ Smart Home ทั้งหมด เชื่อมต่ออุปกรณ์หลากหลายแบรนด์เข้าด้วยกันและควบคุมผ่านแอพเดียว",
    features: [
      "รองรับอุปกรณ์หลากหลายแบรนด์",
      "ควบคุมทุกอุปกรณ์ผ่านแอพเดียว",
      "ตั้งค่าการทำงานอัตโนมัติ",
      "รองรับการสั่งงานด้วยเสียง",
      "เชื่อมต่อด้วย Wi-Fi, Zigbee, Z-Wave",
    ],
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=2670&auto=format&fit=crop",
    category: "automation",
  },
  {
    name: "Smart Plug",
    brand: "TP-Link",
    description: "ปลั๊กอัจฉริยะที่ช่วยให้เครื่องใช้ไฟฟ้าทั่วไปกลายเป็นอุปกรณ์อัจฉริยะ ควบคุมการเปิด-ปิดได้จากทุกที่",
    features: [
      "ควบคุมผ่านแอพมือถือ",
      "ตั้งเวลาเปิด-ปิดอัตโนมัติ",
      "ติดตามการใช้พลังงาน",
      "ขนาดกะทัดรัด ไม่บังเต้ารับข้างเคียง",
      "รองรับการสั่งงานด้วยเสียง",
    ],
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=2574&auto=format&fit=crop",
    category: "appliances",
  },
];

const categories = [
  { id: "all", name: "ทั้งหมด" },
  { id: "lighting", name: "ระบบแสงสว่าง" },
  { id: "security", name: "ระบบรักษาความปลอดภัย" },
  { id: "audio", name: "ระบบเสียง" },
  { id: "automation", name: "ระบบอัตโนมัติ" },
  { id: "appliances", name: "ควบคุมเครื่องใช้ไฟฟ้า" },
];

export default function ProductsPage() {
  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-4">
          อุปกรณ์ Smart Home
        </h1>
        <p className="text-xl text-muted-foreground">
          อุปกรณ์คุณภาพสูงที่เราเลือกสรรเพื่อการติดตั้งระบบ Smart Home ในบ้านของคุณ
        </p>
      </div>

      <div className="flex overflow-x-auto pb-4 mb-8 -mx-4 px-4 sm:px-0 sm:justify-center space-x-2">
        {categories.map((category) => (
          <button
            key={category.id}
            className="min-w-fit rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {products.map((product) => (
          <div key={product.name} className="border border-zinc-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                width={product.image.includes("w=2574") ? 2574 : 2670}
                height={2000}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-zinc-500 mb-1">{product.brand}</div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              <div className="space-y-2 mb-4">
                {product.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
                {product.features.length > 3 && (
                  <div className="text-sm text-zinc-500">+{product.features.length - 3} คุณสมบัติเพิ่มเติม</div>
                )}
              </div>
              <Button asChild className="w-full bg-[#00bbb4] text-black hover:bg-[#e6ed4a]">
                <Link href={`/products/${product.category}`}>
                  ดูรายละเอียด
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">สนใจติดตั้งอุปกรณ์ Smart Home?</h2>
          <p className="text-muted-foreground mb-6">
            เราสามารถช่วยคุณเลือกและติดตั้งอุปกรณ์ที่เหมาะสมกับบ้านของคุณ
            ปรึกษาผู้เชี่ยวชาญของเราเพื่อรับคำแนะนำที่เหมาะกับความต้องการของคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#00bbb4] text-black hover:bg-[#e6ed4a]">
              <Link href="/packages">
                ดูแพ็คเกจติดตั้ง
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">
                ปรึกษาผู้เชี่ยวชาญ
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}