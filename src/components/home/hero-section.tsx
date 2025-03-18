"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 bg-zinc-100 overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-4">
            <span className="block">แพ็คเกจ Smart Home</span>
            <span className="block text-[#00bbb4]">สำหรับบ้านยุคใหม่</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            บริการติดตั้ง Smart Home ครบวงจร เพิ่มความสะดวกสบายและปลอดภัยให้กับบ้านของคุณ
            ด้วยเทคโนโลยีทันสมัยที่ควบคุมได้ด้วยปลายนิ้ว
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#00bbb4] text-white hover:bg-[#e6ed4a]">
              <Link href="/packages">
                ดูแพ็คเกจทั้งหมด
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">ปรึกษาผู้เชี่ยวชาญ</Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="aspect-video rounded-lg overflow-hidden bg-zinc-800 border border-zinc-200 shadow-xl">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://ext.same-assets.com/3496853278/991350081.svg+xml')" }}>
              <div className="w-full h-full bg-black/40 flex items-center justify-center">
                <Button variant="outline" size="icon" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  <span className="sr-only">Play</span>
                </Button>
              </div>
            </div>
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

      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    </section>
  );
}
