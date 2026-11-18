import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, Zap, Lightbulb, Smartphone, Timer, BarChart3 } from "lucide-react";
import Image from 'next/image';

export const metadata = {
  title: "ระบบควบคุมเครื่องใช้ไฟฟ้า - Smart Home",
  description: "บริการติดตั้งระบบควบคุมเครื่องใช้ไฟฟ้าอัจฉริยะ ควบคุมอุปกรณ์ไฟฟ้าทั้งบ้านผ่านสมาร์ทโฟน ประหยัดพลังงานและเพิ่มความสะดวกสบาย",
};

const benefits = [
  { 
    title: "ควบคุมได้จากทุกที่", 
    description: "ควบคุมเครื่องใช้ไฟฟ้าได้จากทุกที่ แม้ไม่อยู่บ้าน ผ่านแอพบนสมาร์ทโฟน", 
    icon: <Smartphone className="w-6 h-6" /> 
  },
  { 
    title: "ประหยัดพลังงาน", 
    description: "ลดการใช้พลังงานที่ไม่จำเป็น ช่วยประหยัดค่าไฟฟ้าได้ถึง 30%", 
    icon: <BarChart3 className="w-6 h-6" /> 
  },
  { 
    title: "ตั้งเวลาอัตโนมัติ", 
    description: "ตั้งเวลาเปิด-ปิดอุปกรณ์อัตโนมัติ และกำหนดรูปแบบการทำงานล่วงหน้า", 
    icon: <Timer className="w-6 h-6" /> 
  },
  { 
    title: "ใช้งานง่าย", 
    description: "ดีไซน์ที่เรียบง่าย ใช้งานได้ทุกเพศทุกวัย ไม่ว่าจะมีความรู้ด้านเทคโนโลยีหรือไม่", 
    icon: <Lightbulb className="w-6 h-6" /> 
  },
];

const features = [
  "ควบคุมเครื่องใช้ไฟฟ้าผ่านแอพบนสมาร์ทโฟน",
  "ตั้งเวลาเปิด-ปิดอัตโนมัติตามตารางเวลาที่กำหนด",
  "ตั้งค่าฉากทัศน์ (Scene) สำหรับสถานการณ์ต่างๆ",
  "ระบบการแจ้งเตือนการใช้พลังงานผิดปกติ",
  "รายงานการใช้พลังงานของเครื่องใช้ไฟฟ้าแต่ละชนิด",
  "การเชื่อมต่อกับระบบสั่งงานด้วยเสียง",
  "การตั้งค่าการทำงานอัตโนมัติตามเงื่อนไข",
  "การควบคุมระดับการใช้พลังงาน",
  "การรองรับเครื่องใช้ไฟฟ้าหลากหลายยี่ห้อและประเภท",
  "การรองรับการเชื่อมต่อกับระบบสมาร์ทโฮมอื่นๆ",
];

const supportedAppliances = [
  { name: "เครื่องปรับอากาศ", compatible: "ทุกยี่ห้อที่มีรีโมต IR" },
  { name: "โทรทัศน์", compatible: "สมาร์ททีวีที่มี Wi-Fi หรือทีวีทั่วไปผ่าน IR" },
  { name: "เครื่องซักผ้า", compatible: "รุ่นที่รองรับการเชื่อมต่อ WiFi หรือมีระบบ Smart Control" },
  { name: "ตู้เย็น", compatible: "รุ่นใหม่ที่มีระบบ Smart Connect" },
  { name: "หม้อหุงข้าว", compatible: "รุ่นอัจฉริยะ หรือใช้ผ่านปลั๊กอัจฉริยะ" },
  { name: "เครื่องทำน้ำอุ่น", compatible: "ใช้ผ่านสวิตช์และปลั๊กอัจฉริยะ" },
  { name: "ไมโครเวฟ", compatible: "รุ่นที่รองรับการเชื่อมต่อ WiFi หรือผ่านปลั๊กอัจฉริยะ" },
  { name: "พัดลม", compatible: "ใช้ผ่านสวิตช์และปลั๊กอัจฉริยะ หรือรุ่นที่มี WiFi" },
];

const usageScenarios = [
  {
    icon: "🔄",
    title: "การควบคุมระยะไกล",
    description: "เปิด-ปิดเครื่องใช้ไฟฟ้าจากระยะไกลได้ทุกที่ผ่านแอพพลิเคชั่นบนสมาร์ทโฟน ไม่ว่าจะอยู่นอกบ้านหรือในห้องนอน"
  },
  {
    icon: "⏱️",
    title: "การตั้งเวลา",
    description: "ตั้งเวลาเปิด-ปิดเครื่องใช้ไฟฟ้าอัตโนมัติ เช่น เปิดเครื่องปรับอากาศก่อนกลับถึงบ้าน หรือปิดไฟอัตโนมัติตอนกลางคืน"
  },
  {
    icon: "🔊",
    title: "สั่งงานด้วยเสียง",
    description: "สั่งงานด้วยเสียงผ่านผู้ช่วยเสียงอัจฉริยะ เช่น 'เปิดทีวี' 'ปิดไฟในห้องนอน' หรือ 'ตั้งอุณหภูมิแอร์ที่ 25 องศา'"
  }
];

export default function AppliancesControlPage() {
  return (
    <div className="container py-20">
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
              ระบบควบคุม<span className="text-[#00bbb4]">เครื่องใช้ไฟฟ้า</span>อัจฉริยะ
            </h1>
                          <p className="text-xl text-muted-foreground mb-8">
              ระบบควบคุมเครื่องใช้ไฟฟ้าอัจฉริยะช่วยให้ผู้ใช้สามารถจัดการอุปกรณ์ต่างๆ ผ่านสมาร์ทโฟน ทำให้การใช้งานสะดวกและมีประสิทธิภาพมากขึ้น
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#00bbb4] text-black hover:bg-[#e6ed4a]">
                <Link href="/appliances">ดูข้อมูลเพิ่มเติม</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/compatibility">ตรวจสอบความเข้ากันได้</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop" width={1200} height={900}
                alt="ระบบควบคุมเครื่องใช้ไฟฟ้าอัจฉริยะ" 
                className="w-full h-full object-cover" 
                unoptimized
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#2a2014] p-5 sm:p-6 rounded-3xl shadow-xl border border-white/10 text-white">
              <p className="text-xs text-[#cdbea6] font-medium uppercase tracking-wider">ควบคุมอัจฉริยะ</p>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#c8f94a]">สั่งงานง่าย</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">ประโยชน์ของระบบควบคุมเครื่องใช้ไฟฟ้าอัจฉริยะ</h2>
          <p className="text-xl text-muted-foreground">
            ระบบควบคุมเครื่องใช้ไฟฟ้าอัจฉริยะไม่เพียงเพิ่มความสะดวกสบาย แต่ยังช่วยประหยัดพลังงานและยกระดับคุณภาพชีวิตของคุณ
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-[#00bbb4] hover:shadow-md transition-all">
              <div className="mb-4 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-[#00bbb4]">
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
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6">คุณสมบัติของระบบ</h2>
            <p className="text-xl text-muted-foreground mb-6">
              ระบบควบคุมเครื่องใช้ไฟฟ้าอัจฉริยะของเรามาพร้อมกับคุณสมบัติที่ครบครัน ตอบโจทย์การใช้งานที่หลากหลาย
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
          <div className="order-1 lg:order-2">
            <div className="aspect-video rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2670&auto=format&fit=crop" width={2670} height={2000}
                alt="ระบบควบคุมเครื่องใช้ไฟฟ้า" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">รูปแบบการใช้งาน</h2>
          <p className="text-xl text-muted-foreground mb-8">
            ระบบควบคุมเครื่องใช้ไฟฟ้าสามารถใช้งานได้หลากหลายรูปแบบตามความต้องการของผู้ใช้
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usageScenarios.map((scenario, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-[#00bbb4] hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{scenario.icon}</span>
                <h3 className="text-xl font-semibold">{scenario.title}</h3>
              </div>
              <p className="text-muted-foreground">{scenario.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">เครื่องใช้ไฟฟ้าที่รองรับ</h2>
          <p className="text-xl text-muted-foreground mb-8">
            ระบบสามารถรองรับเครื่องใช้ไฟฟ้าได้หลากหลายประเภทและยี่ห้อ ตามรายละเอียดด้านล่าง
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportedAppliances.map((appliance, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-[#00bbb4] hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">⚡</span>
                <h3 className="text-xl font-semibold">{appliance.name}</h3>
              </div>
              <p className="text-muted-foreground">{appliance.compatible}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#00bbb4] p-12 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">สิ่งที่ควรรู้เกี่ยวกับระบบควบคุมเครื่องใช้ไฟฟ้า</h2>
          <p className="text-xl text-zinc-800 mb-8">
            ระบบควบคุมเครื่องใช้ไฟฟ้าช่วยให้การจัดการอุปกรณ์ในบ้านเป็นเรื่องง่าย สะดวก และประหยัดพลังงาน
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-black text-white hover:bg-zinc-800">
              <Link href="/guide">คู่มือการใช้งาน</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-black text-black hover:bg-black/5">
              <Link href="/faq">คำถามที่พบบ่อย</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}