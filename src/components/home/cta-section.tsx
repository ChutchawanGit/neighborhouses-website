"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 bg-[#00bbb4] overflow-hidden relative">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black mb-4">
            เริ่มต้นใช้ชีวิตแบบ Smart Home วันนี้
          </h2>
          <p className="text-xl text-zinc-800 mb-8">
            ปรึกษาผู้เชี่ยวชาญของเราเพื่อรับคำแนะนำและวางแผนติดตั้งระบบ Smart Home ที่เหมาะกับบ้านของคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-black text-white hover:bg-zinc-800">
              <Link href="/contact">
                ปรึกษาเรา ฟรี!
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-black text-black hover:bg-black/5">
              <Link href="/packages">
                ดูแพ็คเกจทั้งหมด
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 bottom-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M44.9,-76.2C57.4,-69.2,66.3,-55.3,71.9,-40.9C77.4,-26.5,79.7,-11.8,77.7,1.8C75.7,15.3,69.5,27.7,61.4,38.8C53.2,50,43.2,59.9,31.1,66.1C19,72.3,4.8,74.7,-9.9,74.5C-24.6,74.3,-49.1,71.4,-62.3,59.3C-75.5,47.3,-77.3,26.1,-78.1,5.4C-78.9,-15.3,-78.8,-35.5,-69.8,-50.1C-60.7,-64.7,-42.8,-73.7,-25.9,-78.8C-9,-84,-4.5,-85.4,6.4,-81.3C17.2,-77.2,32.4,-83.2,44.9,-76.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="absolute left-0 top-0 w-40 h-40 opacity-20">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M46.4,-78.2C59.6,-71.3,69.4,-58.6,76.4,-44.3C83.4,-30,87.6,-15,87.8,0.1C88,15.3,84.2,30.5,76.4,43.4C68.6,56.3,56.9,66.8,43.3,74.4C29.8,82,14.9,86.8,0.2,86.4C-14.6,86.1,-29.1,80.8,-41.6,72.3C-54.1,63.9,-64.5,52.4,-71.7,39.1C-78.9,25.7,-82.8,10.4,-82.9,-5.2C-83,-20.8,-79.3,-36.6,-70.3,-47.9C-61.3,-59.3,-47,-66.1,-33.2,-72.4C-19.4,-78.6,-6.2,-84.2,7.3,-84.9C20.8,-85.6,33.2,-85.1,46.4,-78.2Z" transform="translate(100 100)" />
        </svg>
      </div>
    </section>
  );
}
