import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, Shield, BellRing, Video, Lock } from "lucide-react";

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
  { name: "กล้องวงจรปิดอัจฉริยะ", image: "https://same-assets.com/f/2023-05/SameAssets-20230531-70a3a8.jpg" },
  { name: "ระบบล็อคประตูอัจฉริยะ", image: "https://same-assets.com/f/2023-05/SameAssets-20230531-43b31b.jpg" },
  { name: "เซ็นเซอร์ตรวจจับความเคลื่อนไหว", image: "https://same-assets.com/f/2023-05/SameAssets-20230531-70a3a4.jpg" },
  { name: "กล้องวิดีโอหน้าประตู", image: "https://same-assets.com/f/2023-05/SameAssets-20230531-70a3a9.jpg" },
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
              <img 
                src="https://same-assets.com/f/2023-05/SameAssets-20230531-70a3a7.jpg"
                alt="ระบบรักษาความปลอดภัยอัจฉริยะ" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#00bbb4] p-6 rounded-lg shadow-lg">
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
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
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
              <p className="text-3xl font-bold mb-2 text-[#00bbb4]">45,900 บาท</p>
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
              <Button asChild className="w-full bg-[#00bbb4] text-white hover:bg-[#009a9b]">
                <Link href="/contact?package=security-basic">เลือกแพ็คเกจนี้</Link>
              </Button>
            </div>

            <div className="bg-white rounded-lg p-6 border border-zinc-200 shadow-lg relative">
              <div className="absolute -top-3 right-4 bg-[#00bbb4] text-white text-xs font-bold px-3 py-1 rounded-full">แนะนำ</div>
              <h3 className="text-xl font-bold mb-4">แพ็คเกจมาตรฐาน</h3>
              <p className="text-3xl font-bold mb-2 text-[#00bbb4]">65,900 บาท</p>
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
              <Button asChild className="w-full bg-[#00bbb4] text-white hover:bg-[#009a9b]">
                <Link href="/contact?package=security-standard">เลือกแพ็คเกจนี้</Link>
              </Button>
            </div>

            <div className="bg-white rounded-lg p-6 border border-zinc-200">
              <h3 className="text-xl font-bold mb-4">แพ็คเกจพรีเมียม</h3>
              <p className="text-3xl font-bold mb-2 text-[#00bbb4]">95,900 บาท</p>
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
              <Button asChild className="w-full bg-[#00bbb4] text-white hover:bg-[#009a9b]">
                <Link href="/contact?package=security-premium">เลือกแพ็คเกจนี้</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#00bbb4] p-12 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">พร้อมที่จะเพิ่มความปลอดภัยให้กับบ้านของคุณ?</h2>
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