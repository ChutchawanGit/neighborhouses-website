import Link from "next/link";
import Image from "next/image";
import { Check, ArrowLeft, MessageCircle, Calendar, Wrench, Crown } from "lucide-react";

export const metadata = {
  title: "แพ็คเกจ Premium - Smart Home",
  description: "รายละเอียดแพ็คเกจ Premium สำหรับผู้ที่ต้องการประสบการณ์ Smart Home ที่สมบูรณ์แบบ",
};

export default function PremiumPackagePage() {
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
              src="https://same-assets.com/f/2023-05/SameAssets-20230531-70a3a5.jpg"
              alt="Premium Smart Home Package"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
              unoptimized
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://same-assets.com/f/2023-05/SameAssets-20230531-43b31b.jpg"
                alt="Smart Lighting System"
                width={280}
                height={200}
                className="w-full h-auto rounded-lg"
                unoptimized
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://same-assets.com/f/2023-05/SameAssets-20230531-70a3a4.jpg"
                alt="Smart Home System"
                width={280}
                height={200}
                className="w-full h-auto rounded-lg"
                unoptimized
              />
            </div>
          </div>
        </div>

        <div>
          <div className="mb-2 inline-flex items-center rounded-full border border-[#9747FF] bg-[#f5f0ff] px-2.5 py-0.5 text-xs font-medium text-[#9747FF]">
            <Crown className="h-3 w-3 mr-1 fill-[#9747FF]" /> พรีเมียม
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">แพ็คเกจ Premium</h1>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold">120,000 บาท</span>
            <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-600">
              รวมค่าติดตั้ง
            </span>
          </div>

          <p className="text-lg text-zinc-600 mb-6">
            สำหรับผู้ที่ต้องการประสบการณ์ Smart Home ที่สมบูรณ์แบบ ครบครันด้วยอุปกรณ์อัจฉริยะระดับพรีเมียม
            ที่ช่วยยกระดับความสะดวกสบาย ความปลอดภัย และความหรูหราให้บ้านของคุณ
          </p>

          <div className="border-t border-b border-zinc-200 py-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">คุณสมบัติหลัก</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>ควบคุมไฟได้ทุกจุดในบ้าน, ระบบแสงอัตโนมัติ</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>กล้องวงจรปิด 8 ตัว, เซ็นเซอร์ประตูและหน้าต่างทุกบาน</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>กลอนประตูอัจฉริยะ 2 ชุด</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>ควบคุมเครื่องปรับอากาศทุกเครื่อง, ระบบปรับอุณหภูมิอัตโนมัติ</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>ลำโพงอัจฉริยะทุกห้อง, ระบบเสียงรอบทิศทาง</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>เซ็นเซอร์อัจฉริยะครบทุกประเภท</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>ระบบอัตโนมัติที่ปรับตามพฤติกรรมการใช้งาน</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>แอพควบคุมบนมือถือ, แท็บเล็ตควบคุม 2 เครื่อง</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                <span>รับประกัน 5 ปี, บริการ 24/7 VIP</span>
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
            ใช้เวลาในการติดตั้งประมาณ 3-5 วัน ขึ้นอยู่กับขนาดและความซับซ้อนของบ้าน
            ทีมงานผู้เชี่ยวชาญระดับสูงของเราจะวางแผนและบริหารจัดการโครงการอย่างมืออาชีพ
          </p>
        </div>

        <div className="rounded-lg border border-zinc-200 p-6">
          <div className="flex items-center mb-4">
            <Wrench className="h-5 w-5 text-[#00bbb4] mr-2" />
            <h3 className="font-semibold">การรับประกันและบริการ</h3>
          </div>
          <p className="text-sm text-zinc-500">
            รับประกันอุปกรณ์และการติดตั้ง 5 ปีเต็ม พร้อมบริการช่วยเหลือตลอด 24 ชั่วโมงแบบ VIP
            มีทีมช่างเฉพาะสำหรับลูกค้าพรีเมียม และบริการตรวจเช็คระบบฟรี 6 ครั้งต่อปี
          </p>
        </div>

        <div className="rounded-lg border border-zinc-200 p-6">
          <div className="flex items-center mb-4">
            <MessageCircle className="h-5 w-5 text-[#00bbb4] mr-2" />
            <h3 className="font-semibold">ต้องการข้อมูลเพิ่มเติม?</h3>
          </div>
          <p className="text-sm text-zinc-500 mb-4">
            ลูกค้าพรีเมียมจะได้รับบริการให้คำปรึกษาส่วนตัวกับผู้เชี่ยวชาญ เพื่อออกแบบระบบที่เหมาะสมกับบ้านและไลฟ์สไตล์ของคุณโดยเฉพาะ
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
              <h4 className="font-medium text-[#00bbb4] mb-2">ระบบแสงอัจฉริยะทั้งบ้าน</h4>
              <p className="text-sm text-zinc-500">
                ระบบไฟอัจฉริยะระดับพรีเมียมทุกจุดในบ้าน พร้อมระบบปรับแสงอัตโนมัติตามเวลาและสภาพแสงธรรมชาติ
                ควบคุมความสว่าง สี และโทนแสงได้ตามต้องการ สร้างบรรยากาศที่เหมาะสมกับทุกโอกาส
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-[#00bbb4] mb-2">ระบบกล้องวงจรปิดครบวงจร (8 ตัว)</h4>
              <p className="text-sm text-zinc-500">
                กล้อง IP Camera ความละเอียด 4K ครอบคลุมทุกพื้นที่ทั้งภายในและภายนอกบ้าน มีระบบ AI ตรวจจับบุคคล
                แยกแยะใบหน้า และแจ้งเตือนเมื่อพบสิ่งผิดปกติ พร้อมระบบบันทึกข้อมูลในคลาวด์แบบไม่จำกัด
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-[#00bbb4] mb-2">กลอนประตูอัจฉริยะ (2 ชุด)</h4>
              <p className="text-sm text-zinc-500">
                กลอนประตูระดับสูงพร้อมกล้องและอินเตอร์คอม สามารถปลดล็อคด้วยลายนิ้วมือ ใบหน้า รหัส หรือผ่านแอพมือถือ
                มีระบบแจ้งเตือนเมื่อมีผู้มาเยือน และสามารถสื่อสารกับผู้มาเยือนได้แม้ไม่อยู่บ้าน
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-[#00bbb4] mb-2">เซ็นเซอร์ประตูและหน้าต่างทุกบาน</h4>
              <p className="text-sm text-zinc-500">
                เซ็นเซอร์แม่เหล็กคุณภาพสูงติดตั้งที่ประตูและหน้าต่างทุกบาน แจ้งเตือนทันทีเมื่อมีการเปิด-ปิด
                ทำงานร่วมกับระบบรักษาความปลอดภัยและระบบปรับอากาศ เพื่อความปลอดภัยและประหยัดพลังงาน
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-[#00bbb4] mb-2">ระบบปรับอากาศอัตโนมัติ</h4>
              <p className="text-sm text-zinc-500">
                ระบบควบคุมเครื่องปรับอากาศทุกเครื่องในบ้าน พร้อมเซ็นเซอร์วัดอุณหภูมิและความชื้นในแต่ละห้อง
                ปรับสภาพอากาศให้เหมาะสมโดยอัตโนมัติ และเรียนรู้พฤติกรรมการใช้งานเพื่อประหยัดพลังงานสูงสุด
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-[#00bbb4] mb-2">ระบบเสียงรอบทิศทาง</h4>
              <p className="text-sm text-zinc-500">
                ลำโพงอัจฉริยะคุณภาพสูงติดตั้งในทุกห้อง เชื่อมต่อกันเป็นระบบเสียงรอบทิศทาง ควบคุมด้วยเสียงหรือแอพ
                ฟังเพลงในแต่ละห้องแยกกันได้ หรือเล่นพร้อมกันทั้งบ้าน พร้อมระบบสื่อสารภายในบ้าน
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-[#00bbb4] mb-2">เซ็นเซอร์อัจฉริยะ</h4>
              <p className="text-sm text-zinc-500">
                เซ็นเซอร์ครบทุกประเภท ทั้งตรวจจับการเคลื่อนไหว วัดอุณหภูมิ ความชื้น คุณภาพอากาศ แสง และการรั่วซึมของน้ำ
                ทำงานร่วมกันเป็นระบบอัตโนมัติที่ปรับตามสภาพแวดล้อมและพฤติกรรมการใช้งาน
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-[#00bbb4] mb-2">ระบบอัจฉริยะเรียนรู้พฤติกรรม</h4>
              <p className="text-sm text-zinc-500">
                ซอฟต์แวร์อัจฉริยะที่เรียนรู้พฤติกรรมการใช้งานของผู้อยู่อาศัย และปรับการทำงานของระบบให้เหมาะสมโดยอัตโนมัติ
                ช่วยให้บ้านปรับตัวตามไลฟ์สไตล์ของคุณ เพิ่มความสะดวกสบายและประหยัดพลังงาน
              </p>
            </div>
          </div>
        </div>
        
        <div className="rounded-lg border border-zinc-200 p-6">
          <h3 className="font-semibold mb-4">จุดเด่นของแพ็คเกจ Premium</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
              <div>
                <span className="font-medium">บ้านที่เข้าใจคุณ</span>
                <p className="text-sm text-zinc-500 mt-1">
                  ด้วยเทคโนโลยี AI และ Machine Learning ทำให้บ้านสามารถเรียนรู้และปรับตัวตามพฤติกรรมการใช้งานของคุณโดยอัตโนมัติ
                  ทำให้บ้านกลายเป็นพื้นที่ที่สะดวกสบายและตอบสนองความต้องการของคุณได้อย่างสมบูรณ์
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
              <div>
                <span className="font-medium">ระบบความปลอดภัยระดับสูง</span>
                <p className="text-sm text-zinc-500 mt-1">
                  ระบบรักษาความปลอดภัยครบวงจรที่ทำงานร่วมกันเป็นโครงข่าย ตรวจจับและแจ้งเตือนการบุกรุกได้อย่างแม่นยำ
                  พร้อมบันทึกภาพความละเอียดสูงและแจ้งเตือนไปยังมือถือและศูนย์รักษาความปลอดภัย
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
              <div>
                <span className="font-medium">ประหยัดพลังงานสูงสุด</span>
                <p className="text-sm text-zinc-500 mt-1">
                  ระบบอัจฉริยะที่วิเคราะห์การใช้พลังงานและปรับการทำงานของอุปกรณ์ไฟฟ้าให้เหมาะสมที่สุด
                  ช่วยลดค่าใช้จ่ายด้านพลังงานได้ถึง 30-40% เมื่อเทียบกับบ้านทั่วไป
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
              <div>
                <span className="font-medium">บริการระดับ VIP</span>
                <p className="text-sm text-zinc-500 mt-1">
                  ทีมช่างเทคนิคเฉพาะสำหรับลูกค้าพรีเมียม พร้อมให้บริการตลอด 24 ชั่วโมงทุกวัน รับประกัน 5 ปี
                  และดูแลตรวจเช็คระบบถึง 6 ครั้งต่อปี ไม่มีค่าใช้จ่ายเพิ่มเติม
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
              <div>
                <span className="font-medium">การควบคุมที่หลากหลาย</span>
                <p className="text-sm text-zinc-500 mt-1">
                  ควบคุมทุกระบบในบ้านได้หลากหลายวิธี ทั้งผ่านแอพมือถือ แท็บเล็ต คำสั่งเสียง หรือระบบอัตโนมัติ
                  ให้คุณเลือกวิธีที่สะดวกที่สุดในแต่ละสถานการณ์
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Check className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
              <div>
                <span className="font-medium">ยกระดับคุณภาพชีวิต</span>
                <p className="text-sm text-zinc-500 mt-1">
                  เทคโนโลยีอัจฉริยะทำให้ชีวิตประจำวันของคุณสะดวกสบายและมีประสิทธิภาพมากขึ้น
                  ลดภาระงานประจำวัน และให้คุณมีเวลาสำหรับสิ่งที่สำคัญมากขึ้น
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}