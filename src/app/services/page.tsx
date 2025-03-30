import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from 'next/image';

export const metadata = {
  title: "บริการ Smart Home - ติดตั้ง Smart Home",
  description: "บริการติดตั้ง Smart Home ครบวงจร ทั้งระบบแสงสว่าง ความปลอดภัย และการควบคุมเครื่องใช้ไฟฟ้า",
};

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z"></path>
        <path d="M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"></path>
        <path d="M12 3v1"></path>
        <path d="M12 20v1"></path>
        <path d="M3 12h1"></path>
        <path d="M20 12h1"></path>
        <path d="m18.364 5.636-.707.707"></path>
        <path d="m6.343 17.657-.707.707"></path>
        <path d="m5.636 5.636.707.707"></path>
        <path d="m17.657 17.657.707.707"></path>
      </svg>
    ),
    title: "ระบบควบคุมแสงสว่าง",
    description: "เพิ่มความสะดวกสบายด้วยระบบควบคุมแสงสว่างอัตโนมัติ สั่งงานผ่านแอพ หรือตั้งเวลาการทำงาน สามารถปรับระดับความสว่าง และตั้งค่าการเปิด-ปิดอัตโนมัติตามเวลาหรือตามการเคลื่อนไหว",
    href: "/services/lighting",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=2574&auto=format&fit=crop",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
        <path d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm.8-3a1 1 0 0 0-.8-1H4a1 1 0 0 0-1 1v1h5V8zm11.2 0a1 1 0 0 0-.8-1h-3a1 1 0 0 0-1 1v1h5V8zm-2 3v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1z"></path>
        <rect x="17" y="10" width="4" height="10" rx="1"></rect>
        <path d="M5 18h15"></path>
      </svg>
    ),
    title: "ระบบควบคุมเครื่องใช้ไฟฟ้า",
    description: "ควบคุมเครื่องใช้ไฟฟ้าทั้งหมดในบ้านจากที่เดียว ตั้งเวลาเปิด-ปิด และติดตามการใช้พลังงาน ช่วยประหยัดค่าไฟและเพิ่มความสะดวกสบายในการใช้งาน",
    href: "/services/appliances",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
        <path d="M2 12a10 10 0 0 1 20 0c0 4.4-3.6 8-8 8h-4c-4.4 0-8-3.6-8-8z"></path>
        <path d="M13.7 13.4a3 3 0 1 1 0-2.8"></path>
        <line x1="8" y1="9" x2="2" y2="9"></line>
        <line x1="9" y1="15" x2="3" y2="15"></line>
      </svg>
    ),
    title: "ระบบเซ็นเซอร์และอัตโนมัติ",
    description: "เซ็นเซอร์ตรวจจับความเคลื่อนไหว แสงสว่าง อุณหภูมิ ควบคุมการทำงานของอุปกรณ์ต่างๆ โดยอัตโนมัติ เพิ่มความสะดวกสบายและประหยัดพลังงาน",
    href: "/services/automation",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>
    ),
    title: "ระบบควบคุมเสียง",
    description: "เชื่อมต่อระบบเสียงทั่วทั้งบ้าน ควบคุมง่ายผ่านแอพ หรือระบบสั่งงานด้วยเสียง รองรับการเล่นเพลงแยกตามห้องหรือทั่วทั้งบ้าน",
    href: "/services/audio",
    image: "https://images.unsplash.com/photo-1516280906200-1d059b5ce1eb?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7l-5-5Z"></path>
        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
        <circle cx="10" cy="13" r="2"></circle>
        <path d="m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22"></path>
      </svg>
    ),
    title: "ระบบกล้องวงจรปิด",
    description: "กล้องวงจรปิดความละเอียดสูง ดูภาพสดผ่านมือถือได้ทุกที่ พร้อมระบบแจ้งเตือนเมื่อตรวจพบความเคลื่อนไหว บันทึกวิดีโอคมชัดทั้งกลางวันและกลางคืน",
    href: "/services/cctv",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
    title: "ระบบรักษาความปลอดภัย",
    description: "ระบบล็อคประตูอัจฉริยะ เซ็นเซอร์ตรวจจับการบุกรุก และระบบแจ้งเตือนภัยครบวงจร เพิ่มความปลอดภัยให้กับบ้านคุณตลอด 24 ชั่วโมง",
    href: "/services/security",
    image: "https://images.unsplash.com/photo-1531825752534-71484b0175ba?q=80&w=2574&auto=format&fit=crop",
  },
];

export default function ServicesPage() {
  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-4">
          บริการของเรา
        </h1>
        <p className="text-xl text-muted-foreground">
          ครอบคลุมทุกการใช้งาน Smart Home เพื่อเพิ่มความสะดวกสบายและความปลอดภัยให้กับบ้านของคุณ
        </p>
      </div>

      <div className="grid grid-cols-1 gap-16 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
          >
            <div className="w-full md:w-1/2">
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={service.image.includes("w=2574") ? 2574 : 2670}
                  height={service.image.includes("w=2574") ? 1920 : 2000}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="mb-4 text-[#00bbb4]">{service.icon}</div>
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <Button asChild className="bg-[#00bbb4] text-black hover:bg-[#e6ed4a]">
                <Link href={service.href}>
                  อ่านเพิ่มเติม
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">พร้อมเริ่มต้นใช้งาน Smart Home?</h2>
          <p className="text-muted-foreground mb-6">
            เลือกแพ็คเกจที่เหมาะกับความต้องการของคุณ หรือปรึกษาผู้เชี่ยวชาญของเราเพื่อออกแบบระบบที่ตรงกับความต้องการของคุณโดยเฉพาะ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#00bbb4] text-black hover:bg-[#e6ed4a]">
              <Link href="/packages">
                ดูแพ็คเกจทั้งหมด
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