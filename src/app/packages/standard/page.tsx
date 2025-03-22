import Link from "next/link";
import Image from "next/image";
import { Check, ArrowLeft, MessageCircle, Calendar, Wrench, Star } from "lucide-react";

export const metadata = {
  title: "แพ็คเกจ Standard - Smart Home",
  description: "รายละเอียดแพ็คเกจ Standard สำหรับผู้ที่ต้องการระบบ Smart Home ที่ครบครันมากขึ้น",
};

export default function StandardPackagePage() {
  return (
    <div className="container py-16">
      <Link
        href="/packages"
        className="inline-flex items-center text-sm text-[#00bbb4] hover:text-[#009a9b] mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        กลับไปหน้าแพ็คเกจทั้งหมด
      </Link>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <div className="rounded-lg overflow-hidden mb-6">
            <Image
              src="https://same-assets.com/f/2023-05/SameAssets-20230531-70a3a7.jpg"
              alt="Standard Smart Home Package"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
              unoptimized
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://same-assets.com/f/2023-05/SameAssets-20230531-43b31c.jpg"
                alt="Smart Door Lock"
                width={280}
                height={200}
                className="w-full h-auto rounded-lg"
                unoptimized
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://same-assets.com/f/2023-05/SameAssets-20230531-70a3a6.jpg"
                alt="Smart Speaker"
                width={280}
                height={200}
                className="w-full h-auto rounded-lg"
                unoptimized
              />
            </div>
          </div>
        </div>

        <div>
          <div className="mb-2 inline-flex items-center rounded-full border border-[#00bbb4] bg-[#e6f7f7] px-2.5 py-0.5 text-xs font-medium text-[#00bbb4]">
            <Star className="h-3 w-3 mr-1 fill-[#00bbb4]" /> แนะนำ
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">แพ็คเกจ Standard</h1>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold">65,000 บาท</span>
            <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-600">
              รวมค่าติดตั้ง
            </span>
          </div>

          <p className="text-lg text-zinc-600 mb-6">
            เหมาะสำหรับผู้ที่ต้องการระบบ Smart Home ที่ครบครันมากขึ้น ด้วยชุดอุปกรณ์ที่หลากหลาย
            ทั้งการควบคุมไฟฟ้า ระบบความปลอดภัย และความบันเทิงในบ้าน
          </p>

          <div className="border-t border-b border-zinc-200 py-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">คุณสมบัติหลัก</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>ควบคุมไฟได้ 10 จุด</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>กล้องวงจรปิด 4 ตัว, เซ็นเซอร์ประตู 2 จุด</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>กลอนประตูอัจฉริยะ 1 ชุด</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>ควบคุมเครื่องปรับอากาศ 4 เครื่อง</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>ลำโพงอัจฉริยะ 2 ตัว</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>เซ็นเซอร์ตรวจจับการเคลื่อนไหว 2 จุด</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>แอพควบคุมบนมือถือ, แท็บเล็ตควบคุม 1 เครื่อง</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>รับประกัน 2 ปี, บริการ 24/7</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-[#00bbb4] text-white hover:bg-[#009a9b] h-12 py-2 px-4"
            >
              สั่งซื้อแพ็คเกจนี้
            </Link>
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-zinc-200 hover:bg-zinc-100 hover:text-zinc-900 h-12 py-2 px-4"
            >
              ปรับแต่งแพ็คเกจเอง
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-lg border border-zinc-200 p-6">
          <div className="flex items-center mb-4">
            <Calendar className="h-5 w-5 text-[#00bbb4] mr-2" />
            <h3 className="font-semibold">ระยะเวลาการติดตั้ง</h3>
          </div>
          <p className="text-sm text-zinc-500">
            ใช้เวลาในการติดตั้งประมาณ 2-3 วัน ขึ้นอยู่กับขนาดและโครงสร้างของบ้าน
            ทีมงานผู้เชี่ยวชาญของเราจะประสานงานอย่างใกล้ชิดเพื่อให้การติดตั้งเป็นไปอย่างราบรื่น
          </p>
        </div>

        <div className="rounded-lg border border-zinc-200 p-6">
          <div className="flex items-center mb-4">
            <Wrench className="h-5 w-5 text-[#00bbb4] mr-2" />
            <h3 className="font-semibold">การรับประกันและบริการ</h3>
          </div>
          <p className="text-sm text-zinc-500">
            รับประกันอุปกรณ์และการติดตั้ง 2 ปีเต็ม พร้อมบริการช่วยเหลือตลอด 24 ชั่วโมง
            บริการตรวจเช็คระบบฟรี 4 ครั้งต่อปี และอัพเดทซอฟต์แวร์ตลอดอายุการใช้งาน
          </p>
        </div>

        <div className="rounded-lg border border-zinc-200 p-6">
          <div className="flex items-center mb-4">
            <MessageCircle className="h-5 w-5 text-[#00bbb4] mr-2" />
            <h3 className="font-semibold">ต้องการข้อมูลเพิ่มเติม?</h3>
          </div>
          <p className="text-sm text-zinc-500 mb-4">
            หากคุณมีคำถามเพิ่มเติมเกี่ยวกับแพ็คเกจหรือต้องการคำแนะนำเฉพาะสำหรับบ้านของคุณ สามารถติดต่อทีมงานของเราได้ตลอดเวลา
          </p>
          <Link
            href="/contact"
            className="text-sm text-[#00bbb4] hover:text-[#009a9b] font-medium"
          >
            ติดต่อเรา →
          </Link>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">รายละเอียดผลิตภัณฑ์เพิ่มเติม</h2>
        
        <div className="rounded-lg border border-zinc-200 p-6 bg-zinc-50 mb-8">
          <h3 className="font-semibold mb-4">สเปคอุปกรณ์ที่ได้รับ</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-[#00bbb4] mb-2">ระบบควบคุมไฟอัจฉริยะ (10 จุด)</h4>
              <p className="text-sm text-zinc-500">
                สวิตช์อัจฉริยะรุ่น Premium ควบคุมผ่าน WiFi รองรับการหรี่ไฟและตั้งค่าแสงที่เหมาะสม
                ตั้งเวลาเปิด-ปิดได้ และทำงานร่วมกับเซ็นเซอร์ตรวจจับการเคลื่อนไหวได้
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-[#00bbb4] mb-2">กล้องวงจรปิด (4 ตัว)</h4>
              <p className="text-sm text-zinc-500">
                กล้อง IP Camera ความละเอียด 3MP มุมมองกว้าง 140° พร้อมระบบอินฟราเรด
                ตรวจจับการเคลื่อนไหวอัจฉริยะ และสามารถหมุนเพื่อปรับมุมมองได้ บันทึกข้อมูลในระบบคลาวด์
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-[#00bbb4] mb-2">กลอนประตูอัจฉริยะ (1 ชุด)</h4>
              <p className="text-sm text-zinc-500">
                กลอนประตูไร้กุญแจ สามารถปลดล็อคด้วยรหัส ลายนิ้วมือ บัตร หรือผ่านแอพมือถือ
                พร้อมระบบแจ้งเตือนเมื่อมีการเปิดประตู บันทึกประวัติการเข้า-ออก
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-[#00bbb4] mb-2">เซ็นเซอร์ประตู (2 จุด)</h4>
              <p className="text-sm text-zinc-500">
                เซ็นเซอร์แม่เหล็กไร้สายรุ่นพรีเมียม แจ้งเตือนทันทีเมื่อมีการเปิด-ปิดประตู
                ทำงานร่วมกับระบบความปลอดภัยอื่นๆ ได้ เช่น เปิดไฟอัตโนมัติเมื่อเปิดประตู
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-[#00bbb4] mb-2">ระบบควบคุมแอร์ (4 เครื่อง)</h4>
              <p className="text-sm text-zinc-500">
                ระบบควบคุมเครื่องปรับอากาศระดับพรีเมียม ตั้งค่าอุณหภูมิตามช่วงเวลา
                ตรวจจับการมีผู้ใช้งานในห้อง และประหยัดพลังงานโดยอัตโนมัติ
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-[#00bbb4] mb-2">ลำโพงอัจฉริยะ (2 ตัว)</h4>
              <p className="text-sm text-zinc-500">
                ลำโพงอัจฉริยะระดับพรีเมียม รองรับการควบคุมด้วยเสียง คุณภาพเสียงระดับสูง
                สามารถใช้ร่วมกับระบบ Smart Home ทั้งหมด ควบคุมอุปกรณ์ต่างๆ ผ่านคำสั่งเสียง
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-[#00bbb4] mb-2">เซ็นเซอร์ตรวจจับการเคลื่อนไหว (2 จุด)</h4>
              <p className="text-sm text-zinc-500">
                เซ็นเซอร์ตรวจจับการเคลื่อนไหวไร้สาย ครอบคลุมพื้นที่กว้าง ทำงานร่วมกับไฟและระบบความปลอดภัย
                สามารถตั้งค่าการแจ้งเตือนและการทำงานอัตโนมัติได้ตามความต้องการ
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-[#00bbb4] mb-2">แท็บเล็ตควบคุม (1 เครื่อง)</h4>
              <p className="text-sm text-zinc-500">
                แท็บเล็ตรุ่นพิเศษพร้อมแอพควบคุมบ้านอัจฉริยะติดตั้งไว้ล่วงหน้า สามารถควบคุมอุปกรณ์ทั้งหมดในบ้าน
                ดูภาพจากกล้องวงจรปิด และตั้งค่าระบบอัตโนมัติได้
              </p>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg border border-zinc-200 p-6">
          <h3 className="font-semibold mb-4">จุดเด่นของแพ็คเกจ Standard</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
              <div>
                <span className="font-medium">ระบบความปลอดภัยที่ครอบคลุม</span>
                <p className="text-sm text-zinc-500 mt-1">
                  ด้วยกล้องวงจรปิด 4 ตัว กลอนประตูอัจฉริยะ และเซ็นเซอร์ต่างๆ ช่วยให้บ้านของคุณปลอดภัยทั้งเวลาอยู่บ้านและไม่อยู่บ้าน
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
              <div>
                <span className="font-medium">ควบคุมด้วยเสียง</span>
                <p className="text-sm text-zinc-500 mt-1">
                  ลำโพงอัจฉริยะทำให้คุณสามารถควบคุมอุปกรณ์ต่างๆ ในบ้านด้วยคำสั่งเสียง โดยไม่ต้องใช้มือถือหรือรีโมท
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
              <div>
                <span className="font-medium">ระบบอัตโนมัติ</span>
                <p className="text-sm text-zinc-500 mt-1">
                  เซ็นเซอร์ตรวจจับการเคลื่อนไหวช่วยให้ระบบทำงานโดยอัตโนมัติ เช่น เปิดไฟเมื่อเดินเข้าห้อง หรือเปิดแอร์เมื่อมีคนอยู่ในห้อง
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
              <div>
                <span className="font-medium">ประหยัดพลังงาน</span>
                <p className="text-sm text-zinc-500 mt-1">
                  ระบบอัจฉริยะช่วยให้การใช้พลังงานเป็นไปอย่างมีประสิทธิภาพ ประหยัดค่าไฟฟ้าได้ถึง 20-25% เมื่อเทียบกับบ้านทั่วไป
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
              <div>
                <span className="font-medium">การรับประกันและบริการที่ครอบคลุม</span>
                <p className="text-sm text-zinc-500 mt-1">
                  รับประกัน 2 ปีเต็ม พร้อมบริการ 24/7 และการตรวจเช็คระบบฟรี 4 ครั้งต่อปี เพื่อให้มั่นใจว่าระบบทำงานได้อย่างมีประสิทธิภาพ
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
              <div>
                <span className="font-medium">ยกระดับความสะดวกสบาย</span>
                <p className="text-sm text-zinc-500 mt-1">
                  ควบคุมทุกอุปกรณ์ในบ้านจากจุดเดียว ไม่ว่าจะเป็นแอพบนมือถือหรือแท็บเล็ตควบคุมที่มาพร้อมกับแพ็คเกจ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}