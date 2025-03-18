"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
    description: "เพิ่มความสะดวกสบายด้วยระบบควบคุมแสงสว่างอัตโนมัติ สั่งงานผ่านแอพ หรือตั้งเวลาการทำงาน",
    href: "/services/lighting",
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
    description: "ควบคุมเครื่องใช้ไฟฟ้าทั้งหมดในบ้านจากที่เดียว ตั้งเวลาเปิด-ปิด และติดตามการใช้พลังงาน",
    href: "/services/appliances",
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
    description: "เซ็นเซอร์ตรวจจับความเคลื่อนไหว แสงสว่าง อุณหภูมิ ควบคุมการทำงานของอุปกรณ์ต่างๆ โดยอัตโนมัติ",
    href: "/services/automation",
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
    description: "เชื่อมต่อระบบเสียงทั่วทั้งบ้าน ควบคุมง่ายผ่านแอพ หรือระบบสั่งงานด้วยเสียง",
    href: "/services/audio",
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
    description: "กล้องวงจรปิดความละเอียดสูง ดูภาพสดผ่านมือถือได้ทุกที่ พร้อมระบบแจ้งเตือนเมื่อตรวจพบความเคลื่อนไหว",
    href: "/services/cctv",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
    title: "ระบบรักษาความปลอดภัย",
    description: "ระบบล็อคประตูอัจฉริยะ เซ็นเซอร์ตรวจจับการบุกรุก และระบบแจ้งเตือนภัยครบวงจร",
    href: "/services/security",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-zinc-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl mb-4">
            บริการของเรา
          </h2>
          <p className="text-xl text-muted-foreground">
            ครอบคลุมทุกการใช้งาน Smart Home เพื่อเพิ่มความสะดวกสบายและความปลอดภัยให้กับบ้านของคุณ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#00bbb4] hover:shadow-md transition-all"
            >
              <div className="mb-4 text-[#00bbb4]">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Button asChild variant="ghost" className="p-0 h-auto text-[#00bbb4] hover:text-[#009991] hover:bg-transparent">
                <Link href={service.href} className="flex items-center">
                  <span>อ่านเพิ่มเติม</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="default" className="bg-[#00bbb4] text-black hover:bg-[#e6ed4a]">
            <Link href="/services">ดูบริการทั้งหมด</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
