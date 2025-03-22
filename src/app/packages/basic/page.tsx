import Link from "next/link";
import Image from "next/image";
import { Check, ArrowLeft, MessageCircle, Calendar, Wrench } from "lucide-react";


export const metadata = {
  title: "แพ็คเกจ Basic - Smart Home",
  description: "รายละเอียดแพ็คเกจ Basic สำหรับผู้ที่เริ่มต้นใช้งานระบบ Smart Home",
};

export default function BasicPackagePage() {
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
              src="https://same-assets.com/f/2023-05/SameAssets-20230531-70a3a9.jpg"
              alt="Basic Smart Home Package"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
              unoptimized
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://same-assets.com/f/2023-05/SameAssets-20230531-43b31a.jpg"
                alt="Smart Light Control"
                width={280}
                height={200}
                className="w-full h-auto rounded-lg"
                unoptimized
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://same-assets.com/f/2023-05/SameAssets-20230531-70a3a8.jpg"
                alt="Security Camera"
                width={280}
                height={200}
                className="w-full h-auto rounded-lg"
                unoptimized
              />
            </div>
          </div>
        </div>

        <div>
          <div className="mb-2 inline-flex items-center rounded-full border border-teal-100 bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-600">
            เริ่มต้น
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">แพ็คเกจ Basic</h1>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold">35,000 บาท</span>
            <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-600">
              รวมค่าติดตั้ง
            </span>
          </div>

          <p className="text-lg text-zinc-600 mb-6">
            เหมาะสำหรับผู้ที่เริ่มต้นใช้งานระบบ Smart Home ด้วยชุดอุปกรณ์พื้นฐานครบครัน 
            ที่ช่วยให้คุณควบคุมอุปกรณ์ไฟฟ้าผ่านมือถือและมีระบบรักษาความปลอดภัยเบื้องต้น
          </p>

          <div className="border-t border-b border-zinc-200 py-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">คุณสมบัติหลัก</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>ควบคุมไฟได้ 5 จุด</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>กล้องวงจรปิด 2 ตัว</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>เซ็นเซอร์ประตู 1 จุด</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>ควบคุมเครื่องปรับอากาศ 2 เครื่อง</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>แอพควบคุมบนมือถือ</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>รับประกัน 1 ปี</span>
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
            ใช้เวลาในการติดตั้งประมาณ 1-2 วัน ขึ้นอยู่กับขนาดและโครงสร้างของบ้าน
            ทีมงานของเราจะประสานงานเพื่อหาวันและเวลาที่สะดวกสำหรับคุณ
          </p>
        </div>

        <div className="rounded-lg border border-zinc-200 p-6">
          <div className="flex items-center mb-4">
            <Wrench className="h-5 w-5 text-[#00bbb4] mr-2" />
            <h3 className="font-semibold">การรับประกันและบริการ</h3>
          </div>
          <p className="text-sm text-zinc-500">
            รับประกันอุปกรณ์และการติดตั้ง 1 ปีเต็ม หากมีปัญหาสามารถติดต่อทีมช่างเทคนิคได้ในเวลาทำการ
            บริการตรวจเช็คระบบฟรี 2 ครั้งต่อปี
          </p>
        </div>

        <div className="rounded-lg border border-zinc-200 p-6">
          <div className="flex items-center mb-4">
            <MessageCircle className="h-5 w-5 text-[#00bbb4] mr-2" />
            <h3 className="font-semibold">ต้องการข้อมูลเพิ่มเติม?</h3>
          </div>
          <p className="text-sm text-zinc-500 mb-4">
            หากคุณมีคำถามเพิ่มเติมเกี่ยวกับแพ็คเกจหรือต้องการคำแนะนำ สามารถติดต่อทีมงานของเราได้ตลอดเวลา
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
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-[#00bbb4] mb-2">ระบบควบคุมไฟอัจฉริยะ (5 จุด)</h4>
              <p className="text-sm text-zinc-500">
                สวิตช์ไฟอัจฉริยะมาตรฐาน WiFi ควบคุมผ่านแอพมือถือได้ทั้ง iOS และ Android
                สามารถตั้งเวลาเปิด-ปิดอัตโนมัติ และรองรับการควบคุมด้วยเสียงผ่าน Google Assistant และ Amazon Alexa
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-[#00bbb4] mb-2">กล้องวงจรปิด (2 ตัว)</h4>
              <p className="text-sm text-zinc-500">
                กล้อง IP Camera ความละเอียด 2MP (1080p) มุมมองกว้าง 130° รองรับการบันทึกภาพกลางคืน 
                บันทึกเสียงได้ และมีระบบตรวจจับการเคลื่อนไหว สามารถดูผ่านแอพมือถือได้ตลอดเวลา
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-[#00bbb4] mb-2">เซ็นเซอร์ประตู (1 จุด)</h4>
              <p className="text-sm text-zinc-500">
                เซ็นเซอร์แม่เหล็กไร้สาย แจ้งเตือนเมื่อมีการเปิดประตู สามารถตั้งค่าการแจ้งเตือนไปยังโทรศัพท์มือถือได้
                ใช้แบตเตอรี่ที่มีอายุการใช้งานยาวนานถึง 1 ปี
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-[#00bbb4] mb-2">ระบบควบคุมเครื่องปรับอากาศ (2 เครื่อง)</h4>
              <p className="text-sm text-zinc-500">
                อุปกรณ์ควบคุมเครื่องปรับอากาศผ่าน WiFi รองรับเครื่องปรับอากาศเกือบทุกยี่ห้อ สามารถควบคุมอุณหภูมิ
                ตั้งเวลาเปิด-ปิด และเปลี่ยนโหมดการทำงานผ่านแอพมือถือได้
              </p>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg border border-zinc-200 p-6">
          <h3 className="font-semibold mb-4">ข้อดีของแพ็คเกจ Basic</h3>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
              <div>
                <span className="font-medium">ประหยัดค่าไฟฟ้า</span>
                <p className="text-sm text-zinc-500 mt-1">
                  การควบคุมไฟและเครื่องปรับอากาศอย่างชาญฉลาดช่วยลดการใช้พลังงานที่ไม่จำเป็น ทำให้ประหยัดค่าไฟฟ้าได้ถึง 10-15% ต่อเดือน
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
              <div>
                <span className="font-medium">เพิ่มความปลอดภัย</span>
                <p className="text-sm text-zinc-500 mt-1">
                  กล้องวงจรปิดและเซ็นเซอร์ประตูช่วยเพิ่มความปลอดภัยให้บ้านของคุณ ด้วยระบบแจ้งเตือนที่ส่งตรงถึงมือถือทันทีที่มีเหตุการณ์ผิดปกติ
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
              <div>
                <span className="font-medium">สะดวกสบาย</span>
                <p className="text-sm text-zinc-500 mt-1">
                  ควบคุมอุปกรณ์ในบ้านได้จากทุกที่ผ่านสมาร์ทโฟน ไม่ว่าจะอยู่ในบ้านหรือนอกบ้าน คุณสามารถตรวจสอบและควบคุมอุปกรณ์ได้ตลอดเวลา
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}