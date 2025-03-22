import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "แพ็คเกจ Smart Home - ติดตั้ง Smart Home",
  description: "แพ็คเกจติดตั้ง Smart Home ครบวงจร เลือกแพ็คเกจที่เหมาะกับบ้านของคุณ",
};

const packages = [
  {
    name: "Smart Home เริ่มต้น",
    description: "เหมาะสำหรับบ้านขนาดเล็ก หรือเริ่มต้นใช้งานระบบ Smart Home",
    price: "39,900",
    features: [
      "ชุดควบคุมแสงสว่าง 5 จุด",
      "กล้องวงจรปิด 2 ตัว",
      "ระบบล็อคประตูอัจฉริยะ 1 ชุด",
      "สวิตช์อัจฉริยะ 3 ตัว",
      "แอพควบคุมผ่านมือถือ",
      "ติดตั้งฟรี รับประกัน 1 ปี",
    ],
    href: "/packages/basic",
    popular: false,
  },
  {
    name: "Smart Home กลาง",
    description: "เหมาะสำหรับบ้านขนาดกลาง เพิ่มความสะดวกสบายและปลอดภัย",
    price: "79,900",
    features: [
      "ชุดควบคุมแสงสว่าง 10 จุด",
      "กล้องวงจรปิด 4 ตัว",
      "ระบบล็อคประตูอัจฉริยะ 2 ชุด",
      "สวิตช์อัจฉริยะ 6 ตัว",
      "เซ็นเซอร์ตรวจจับการเคลื่อนไหว 2 ตัว",
      "ระบบควบคุมแอร์อัจฉริยะ 2 เครื่อง",
      "ระบบควบคุมเสียง 1 ชุด",
      "แอพควบคุมผ่านมือถือ",
      "ติดตั้งฟรี รับประกัน 2 ปี",
    ],
    href: "/packages/standard",
    popular: true,
  },
  {
    name: "Smart Home พรีเมียม",
    description: "เหมาะสำหรับบ้านขนาดใหญ่ ครบครันทุกฟังก์ชันการใช้งาน",
    price: "149,900",
    features: [
      "ชุดควบคุมแสงสว่างทั้งบ้าน",
      "กล้องวงจรปิด 8 ตัว",
      "ระบบล็อคประตูอัจฉริยะทุกประตู",
      "สวิตช์อัจฉริยะทั้งบ้าน",
      "เซ็นเซอร์ตรวจจับการเคลื่อนไหว 5 ตัว",
      "ระบบควบคุมแอร์อัจฉริยะทุกเครื่อง",
      "ระบบควบคุมเสียงทั้งบ้าน",
      "ระบบม่านอัจฉริยะ",
      "ระบบรักษาความปลอดภัยขั้นสูง",
      "แอพควบคุมผ่านมือถือและระบบสั่งงานด้วยเสียง",
      "ติดตั้งฟรี รับประกัน 3 ปี",
    ],
    href: "/packages/premium",
    popular: false,
  },
  {
    name: "Smart Lighting",
    description: "แพ็คเกจเฉพาะระบบแสงสว่าง สามารถขยายเพิ่มในอนาคตได้",
    price: "25,900",
    features: [
      "ชุดควบคุมแสงสว่าง 8 จุด",
      "สวิตช์อัจฉริยะ 4 ตัว",
      "เซ็นเซอร์ตรวจจับการเคลื่อนไหว 2 ตัว",
      "แอพควบคุมผ่านมือถือ",
      "รองรับการสั่งงานด้วยเสียง",
      "ติดตั้งฟรี รับประกัน 1 ปี",
    ],
    href: "/packages/lighting",
    popular: false,
  },
  {
    name: "Smart Security",
    description: "แพ็คเกจเฉพาะระบบรักษาความปลอดภัย เพิ่มความมั่นใจให้กับบ้านคุณ",
    price: "45,900",
    features: [
      "กล้องวงจรปิด 4 ตัว",
      "ระบบล็อคประตูอัจฉริยะ 2 ชุด",
      "เซ็นเซอร์ตรวจจับการเคลื่อนไหว 3 ตัว",
      "ระบบแจ้งเตือนผ่านมือถือ",
      "เชื่อมต่อกับศูนย์ควบคุม 24 ชั่วโมง",
      "ติดตั้งฟรี รับประกัน 2 ปี",
    ],
    href: "/packages/security",
    popular: false,
  },
  {
    name: "ออกแบบเอง",
    description: "ออกแบบระบบ Smart Home ที่ตรงกับความต้องการของคุณโดยเฉพาะ",
    price: "เริ่มต้น",
    features: [
      "ปรึกษากับผู้เชี่ยวชาญ",
      "ออกแบบระบบตามความต้องการ",
      "เลือกอุปกรณ์ได้ตามต้องการ",
      "รองรับการขยายระบบในอนาคต",
      "บริการหลังการขายครบวงจร",
    ],
    href: "/packages/custom-design",
    popular: false,
    custom: true,
  },
];

export default function PackagesPage() {
  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-4">
          แพ็คเกจติดตั้ง Smart Home
        </h1>
        <p className="text-xl text-muted-foreground">
          เลือกแพ็คเกจที่เหมาะกับความต้องการของคุณ สามารถปรับแต่งได้ตามต้องการ
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {packages.map((pkg) => (
          <Card 
            key={pkg.name} 
            className={`relative flex flex-col h-full transition-all group ${
              pkg.popular ? 'border-emerald-500 shadow-lg' : 'hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100'
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-0 right-0 flex justify-center">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                  แนะนำ
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{pkg.name}</CardTitle>
              <CardDescription className="text-base">{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-6">
                <span className="text-3xl font-bold">{pkg.price}</span>
                {!pkg.custom && <span className="text-muted-foreground ml-1">บาท</span>}
              </div>
              <ul className="space-y-2">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                asChild 
                className={`w-full transition-all ${
                  pkg.popular 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white' 
                  : 'group-hover:bg-emerald-500 group-hover:text-white'
                }`}
              >
                <Link href={pkg.href}>
                  {pkg.custom ? 'ปรึกษาผู้เชี่ยวชาญ' : 'เลือกแพ็คเกจนี้'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">มีคำถามเกี่ยวกับแพ็คเกจของเรา?</h2>
          <p className="text-muted-foreground mb-6">
            หากคุณมีคำถามเพิ่มเติมเกี่ยวกับแพ็คเกจหรือต้องการคำแนะนำในการเลือกแพ็คเกจที่เหมาะสมกับบ้านของคุณ
            โปรดติดต่อทีมงานของเรา
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 transition-all">
              <Link href="/contact">
                ติดต่อเรา
              </Link>
            </Button>
            <Button asChild variant="outline" className="hover:text-emerald-500 hover:border-emerald-500">
              <Link href="/faq">
                คำถามที่พบบ่อย
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}