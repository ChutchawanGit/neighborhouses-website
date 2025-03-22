"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* ส่วนของภาพพื้นหลังและ Effect */}
      <div className="absolute inset-0 z-0">
        {/* ภาพพื้นหลัง - คงค่า opacity ที่ 0.45 */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            opacity: "1"
          }}
        />
        
        {/* Gradient overlay ด้านบน - ปรับให้เข้มน้อยลง */}
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white to-transparent opacity-20"></div>
        
        {/* Gradient overlay ด้านล่าง - ปรับให้มีการเฟดแบบนุ่มนวลมากขึ้น และขยายพื้นที่ให้ครอบคลุมมากขึ้น */}
        <div 
          className="absolute inset-x-0 bottom-0" 
          style={{ 
            height: '50vh', /* เพิ่มความสูงให้ครอบคลุมมากขึ้น */
            background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 5%, rgba(255,255,255,0.9) 10%, rgba(255,255,255,0.8) 20%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 70%, rgba(255,255,255,0.05) 85%, rgba(255,255,255,0) 100%)'
          }}
        ></div>
        
        {/* ลดความทึบของ overlay สีขาว */}
        <div className="absolute inset-0 bg-white opacity-5"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-4">
            <span className="block">Neighbor Houses</span>
            <span className="block bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 text-transparent bg-clip-text">สำหรับบ้านยุคใหม่</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            บริการติดตั้ง Smart Home ครบวงจร เพิ่มความสะดวกสบายและปลอดภัยให้กับบ้านของคุณ
            ด้วยเทคโนโลยีทันสมัยที่ควบคุมได้ด้วยปลายนิ้ว
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 transition-all">
              <Link href="/packages">
                ดูแพ็คเกจทั้งหมด
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-gray-50 border-zinc-200 hover:bg-gray-100">
              <Link href="/contact">ปรึกษาผู้เชี่ยวชาญ</Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="aspect-video rounded-lg overflow-hidden bg-zinc-800 shadow-xl" style={{ border: 'none' }}>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dftKArsWaCs?autoplay=0" 
              title="Smart Home System Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="w-full h-full object-cover"
              style={{ margin: '-1px', width: 'calc(100% + 2px)', height: 'calc(100% + 2px)' }}
            ></iframe>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-x-16 gap-y-8">
          <div className="flex items-center">
            <img src="https://ext.same-assets.com/268403754/1187847822.svg+xml" alt="Partner logo" className="h-10 w-auto grayscale opacity-70" />
          </div>
          <div className="flex items-center">
            <img src="https://ext.same-assets.com/2946675380/679194529.svg+xml" alt="Partner logo" className="h-10 w-auto grayscale opacity-70" />
          </div>
          <div className="flex items-center">
            <img src="https://ext.same-assets.com/3900658367/4254507783.svg+xml" alt="Partner logo" className="h-10 w-auto grayscale opacity-70" />
          </div>
          <div className="flex items-center">
            <img src="https://ext.same-assets.com/819762305/3681126479.svg+xml" alt="Partner logo" className="h-10 w-auto grayscale opacity-70" />
          </div>
          <div className="flex items-center">
            <img src="https://ext.same-assets.com/251439802/4143483249.svg+xml" alt="Partner logo" className="h-10 w-auto grayscale opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
}