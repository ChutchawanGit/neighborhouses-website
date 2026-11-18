import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, Brush, Sparkles, Settings, UserCheck } from "lucide-react";
import Image from 'next/image';

export const metadata = {
  title: "ออกแบบระบบ Smart Home - Smart Home",
  description: "บริการออกแบบและติดตั้งระบบ Smart Home ที่ตรงกับความต้องการของคุณโดยเฉพาะ ครบทุกฟังก์ชันการใช้งาน",
};

const benefits = [
  { 
    title: "ออกแบบเฉพาะคุณ", 
    description: "ระบบที่ออกแบบเฉพาะสำหรับบ้านของคุณ ตรงตามความต้องการและไลฟ์สไตล์", 
    icon: <UserCheck className="w-6 h-6" /> 
  },
  { 
    title: "โซลูชันครบวงจร", 
    description: "ระบบสมาร์ทโฮมที่ครอบคลุมทุกด้าน ทั้งความสะดวกสบาย ความปลอดภัย และความบันเทิง", 
    icon: <Sparkles className="w-6 h-6" /> 
  },
  { 
    title: "ปรับแต่งได้ไม่จำกัด", 
    description: "เลือกฟีเจอร์และฟังก์ชันที่คุณต้องการได้อย่างอิสระ ตามความต้องการและงบประมาณ", 
    icon: <Settings className="w-6 h-6" /> 
  },
  { 
    title: "ควบคุมงบประมาณ", 
    description: "ออกแบบระบบที่เหมาะสมกับงบประมาณของคุณ ไม่มีค่าใช้จ่ายแฝง", 
    icon: <Brush className="w-6 h-6" /> 
  },
];

const designProcess = [
  {
    title: "ปรึกษากับผู้เชี่ยวชาญ",
    description: "พูดคุยกับทีมผู้เชี่ยวชาญของเราเพื่อให้เข้าใจความต้องการและไลฟ์สไตล์ของคุณ"
  },
  {
    title: "ออกแบบระบบ",
    description: "ทีมของเราจะออกแบบระบบสมาร์ทโฮมที่เหมาะสมกับบ้านและความต้องการของคุณ"
  },
  {
    title: "เลือกอุปกรณ์",
    description: "เลือกอุปกรณ์และฟีเจอร์ที่ตรงกับความต้องการและงบประมาณของคุณ"
  },
  {
    title: "ติดตั้งและตั้งค่า",
    description: "ทีมช่างผู้เชี่ยวชาญจะติดตั้งและตั้งค่าระบบให้พร้อมใช้งานอย่างมีประสิทธิภาพ"
  },
  {
    title: "สอนการใช้งาน",
    description: "ทีมงานจะสอนวิธีใช้งานระบบทั้งหมดให้คุณสามารถใช้งานได้อย่างเต็มประสิทธิภาพ"
  },
  {
    title: "บริการหลังการขาย",
    description: "บริการดูแลหลังการขาย พร้อมให้คำปรึกษาและแก้ไขปัญหาตลอด 24 ชั่วโมง"
  }
];

const services = [
  "ปรึกษากับผู้เชี่ยวชาญ",
  "ออกแบบระบบตามความต้องการเฉพาะ",
  "เลือกอุปกรณ์ที่เหมาะสมกับการใช้งาน",
  "ติดตั้งและตั้งค่าระบบทั้งหมด",
  "รองรับการขยายระบบในอนาคต",
  "บริการหลังการขายครบวงจร",
  "รับประกันนานสูงสุด 5 ปี",
  "บริการตรวจเช็คระบบประจำปี",
  "อัพเดทซอฟต์แวร์ตลอดอายุการใช้งาน",
  "ทีมช่างเทคนิคบริการ 24/7",
];

export default function CustomDesignPage() {
  return (
    <div className="container py-20">
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
              ออกแบบ<span className="text-[#2a2014]">ระบบสมาร์ทโฮม</span><br />ที่ตรงกับความต้องการ
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              ออกแบบระบบ Smart Home ที่ตรงกับความต้องการของคุณโดยเฉพาะ ด้วยทีมผู้เชี่ยวชาญที่พร้อมดูแลตั้งแต่การออกแบบจนถึงการติดตั้ง
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#2a2014] text-[#fbf5e9] hover:bg-[#3d2f20] hover:text-[#c8f94a] rounded-2xl font-semibold shadow-sm transition-all">
                <Link href="/contact">ปรึกษาผู้เชี่ยวชาญ</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/calculator">คำนวณราคาติดตั้ง</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                alt="ออกแบบระบบสมาร์ทโฮม" 
                className="w-full h-full object-cover"
                width={800}
                height={600}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#2a2014] p-6 rounded-lg shadow-lg">
              <p className="text-lg font-bold text-white">เริ่มต้นเพียง</p>
              <p className="text-3xl font-bold text-white">เริ่มต้น</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">ประโยชน์ของการออกแบบระบบเฉพาะตัว</h2>
          <p className="text-xl text-muted-foreground">
            การออกแบบระบบสมาร์ทโฮมเฉพาะตัวช่วยให้คุณได้ระบบที่เหมาะสมกับความต้องการและไลฟ์สไตล์ของคุณอย่างแท้จริง
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-[#2a2014] hover:shadow-md transition-all">
              <div className="mb-4 w-12 h-12 bg-[#2a2014]/5 rounded-full flex items-center justify-center text-[#2a2014]">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="bg-zinc-50 p-12 rounded-lg">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">กระบวนการออกแบบของเรา</h2>
            <p className="text-xl text-muted-foreground">
              ทีมผู้เชี่ยวชาญของเราพร้อมดูแลคุณในทุกขั้นตอน ตั้งแต่การออกแบบไปจนถึงการติดตั้งและบริการหลังการขาย
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProcess.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-zinc-200 hover:shadow-md transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#2a2014] text-white flex items-center justify-center mr-3">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">บริการของเรา</h2>
            <p className="text-xl text-muted-foreground mb-6">
              เราให้บริการครบวงจรตั้งแต่การออกแบบไปจนถึงการติดตั้งและดูแลหลังการขาย เพื่อให้คุณได้ระบบสมาร์ทโฮมที่ตรงใจและใช้งานได้อย่างเต็มประสิทธิภาพ
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop" 
                alt="ปรึกษากับผู้เชี่ยวชาญ" 
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1512446816042-444d641267d4?q=80&w=600&auto=format&fit=crop" 
                alt="ออกแบบระบบ" 
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop" 
                alt="ติดตั้งและตั้งค่า" 
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=600&auto=format&fit=crop" 
                alt="บริการหลังการขาย" 
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="bg-zinc-100 p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">บริการการออกแบบของเรา</h2>
              <p className="text-muted-foreground mb-8">
                ปรึกษาเราเพื่อออกแบบระบบสมาร์ทโฮมที่เหมาะกับบ้านและไลฟ์สไตล์ของคุณ ทีมผู้เชี่ยวชาญของเราพร้อมให้คำแนะนำและออกแบบระบบตามความต้องการเฉพาะของคุณ
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>ปรึกษากับผู้เชี่ยวชาญ</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>ออกแบบระบบตามความต้องการเฉพาะ</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>เลือกอุปกรณ์ที่เหมาะสมกับการใช้งาน</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>ประมาณราคาที่ชัดเจน</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                  <span>รองรับการขยายระบบในอนาคต</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-[#2a2014] text-[#fbf5e9] hover:bg-[#3d2f20] hover:text-[#c8f94a] rounded-2xl font-semibold shadow-sm transition-all">
                <Link href="/contact?service=custom-design">ปรึกษาผู้เชี่ยวชาญ</Link>
              </Button>
            </div>
            <div className="md:col-span-3 bg-white rounded-lg p-6 border border-zinc-200">
              <h3 className="text-xl font-bold mb-6">ข้อมูลที่เราต้องการเพื่อการออกแบบ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-[#2a2014] mb-2">รายละเอียดบ้านของคุณ</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">ขนาดและลักษณะของบ้าน</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">จำนวนห้องและพื้นที่ใช้สอย</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">แบบแปลนบ้าน (ถ้ามี)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-[#2a2014] mb-2">ความต้องการของคุณ</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">ฟีเจอร์ที่คุณต้องการในระบบสมาร์ทโฮม</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">ไลฟ์สไตล์และการใช้งานประจำวัน</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">งบประมาณที่คุณตั้งใจไว้</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-[#2a2014] mb-2">ระบบปัจจุบัน (ถ้ามี)</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">ระบบสมาร์ทโฮมที่มีอยู่แล้ว</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">อุปกรณ์อิเล็กทรอนิกส์ที่ใช้อยู่</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">ระบบเครือข่ายอินเทอร์เน็ตในบ้าน</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-[#2a2014] mb-2">แผนในอนาคต</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">แผนการขยายระบบในอนาคต</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">การปรับปรุงบ้านที่วางแผนไว้</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 mr-2 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">ความต้องการพิเศษอื่นๆ</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#2a2014] p-10 sm:p-14 rounded-3xl text-white border border-white/10 shadow-2xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">พร้อมที่จะออกแบบบ้านอัจฉริยะของคุณ?</h2>
          <p className="text-xl text-white/90 mb-8">
            ปรึกษาผู้เชี่ยวชาญของเราเพื่อเริ่มต้นออกแบบระบบสมาร์ทโฮมที่ตรงกับความต้องการของคุณโดยเฉพาะ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#c8f94a] text-[#1a2404] hover:bg-[#b2e23b] font-bold rounded-2xl shadow-sm transition-all">
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