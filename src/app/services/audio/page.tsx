import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check } from "lucide-react";
import Image from 'next/image';

export const metadata = {
  title: "ระบบเสียงอัจฉริยะ - Smart Home",
  description: "บริการติดตั้งระบบเสียงอัจฉริยะทั่วบ้าน ควบคุมง่ายผ่านสมาร์ทโฟนหรือคำสั่งเสียง",
};

const benefits = [
  { title: "เสียงคุณภาพสูงทั่วบ้าน", description: "เพลิดเพลินกับคุณภาพเสียงระดับพรีเมียมในทุกห้องของบ้าน" },
  { title: "ควบคุมง่ายด้วยเสียง", description: "สั่งเปิดเพลง ปรับระดับเสียง หรือเปลี่ยนเพลงด้วยคำสั่งเสียงได้" },
  { title: "ควบคุมแยกตามห้อง", description: "เลือกเล่นเพลงหรือปรับระดับเสียงแยกตามห้องได้อย่างอิสระ" },
  { title: "เชื่อมต่อกับทุกอุปกรณ์", description: "รองรับการเชื่อมต่อกับทุกอุปกรณ์ไม่ว่าจะเป็นสมาร์ทโฟน แท็บเล็ต หรือคอมพิวเตอร์" },
];

const features = [
  "ลำโพงคุณภาพสูงติดตั้งในผนังหรือฝ้าเพดาน",
  "รองรับการเล่นเพลงจากบริการสตรีมมิ่งชั้นนำ",
  "ควบคุมผ่านแอพพลิเคชั่นบนสมาร์ทโฟน",
  "รองรับการสั่งงานด้วยเสียง",
  "ตั้งเวลาเปิด-ปิดอัตโนมัติ",
  "ปรับแต่งเสียงได้ตามต้องการ",
  "ควบคุมแบบโซนแยกตามห้อง",
  "รองรับการเชื่อมต่อไร้สาย Bluetooth/Wi-Fi",
  "เชื่อมต่อกับระบบโฮมเธียเตอร์",
  "การอัพเดทซอฟต์แวร์อัตโนมัติ",
];

export default function AudioServicePage() {
  return (
    <div className="container py-20">
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
              ระบบเสียง<span className="text-[#00bbb4]">อัจฉริยะ</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              ยกระดับประสบการณ์การฟังเพลงในบ้านของคุณด้วยระบบเสียงอัจฉริยะที่ควบคุมง่าย ให้คุณภาพเสียงระดับพรีเมียม
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#00bbb4] text-black hover:bg-[#e6ed4a]">
                <Link href="/contact">ปรึกษาผู้เชี่ยวชาญ</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/packages/audio">ดูแพ็คเกจติดตั้ง</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1516280906200-1d059b5ce1eb?q=80&w=2670&auto=format&fit=crop"
                   alt="ระบบเสียงอัจฉริยะ" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#00bbb4] p-6 rounded-lg shadow-lg">
              <p className="text-lg font-bold text-black">คุณภาพเสียง</p>
              <p className="text-3xl font-bold text-black">พรีเมียม</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">ประโยชน์ของระบบเสียงอัจฉริยะ</h2>
          <p className="text-xl text-muted-foreground">
            ระบบเสียงอัจฉริยะช่วยเพิ่มความสะดวกสบายและความบันเทิงภายในบ้านของคุณ
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-[#00bbb4] hover:shadow-md transition-all">
              <div className="mb-4 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-[#00bbb4]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
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
              ระบบเสียงอัจฉริยะของเรามาพร้อมกับคุณสมบัติที่ครบครัน เพื่อประสบการณ์การฟังเพลงที่สมบูรณ์แบบ
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
              <Image src="https://images.unsplash.com/photo-1574879148365-18efb2cf079f?q=80&w=2671&auto=format&fit=crop"
                   alt="ระบบเสียงคุณภาพสูง" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 bg-zinc-50 p-8 rounded-lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">แนะนำการใช้งาน</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-zinc-200 hover:shadow-md transition-all">
              <div className="text-3xl font-bold text-[#00bbb4] mb-4">01</div>
              <h3 className="text-xl font-semibold mb-2">ฟังเพลงทั่วบ้าน</h3>
              <p className="text-muted-foreground">เล่นเพลงเดียวกันทั่วทั้งบ้าน หรือเลือกเล่นเพลงที่แตกต่างกันในแต่ละห้องตามต้องการ</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-zinc-200 hover:shadow-md transition-all">
              <div className="text-3xl font-bold text-[#00bbb4] mb-4">02</div>
              <h3 className="text-xl font-semibold mb-2">ควบคุมด้วยเสียง</h3>
              <p className="text-muted-foreground">สั่งเปิดเพลง ปรับระดับเสียง หรือเปลี่ยนเพลงด้วยคำสั่งเสียงผ่าน Google Assistant หรือ Amazon Alexa</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-zinc-200 hover:shadow-md transition-all">
              <div className="text-3xl font-bold text-[#00bbb4] mb-4">03</div>
              <h3 className="text-xl font-semibold mb-2">ปาร์ตี้โหมด</h3>
              <p className="text-muted-foreground">เปิดใช้งานโหมดปาร์ตี้ เพื่อปรับแต่งแสงและเสียงให้เหมาะกับบรรยากาศงานปาร์ตี้ทันที</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#00bbb4] p-12 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">พร้อมยกระดับประสบการณ์การฟังเพลงในบ้านของคุณ?</h2>
          <p className="text-xl text-zinc-800 mb-8">
            ปรึกษาผู้เชี่ยวชาญของเราเพื่อรับคำแนะนำและเริ่มต้นการติดตั้งระบบที่เหมาะสมกับบ้านของคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-black text-white hover:bg-zinc-800">
              <Link href="/contact">ติดต่อเรา</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-black text-black hover:bg-black/5">
              <Link href="/packages/audio">ดูแพ็คเกจติดตั้ง</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
