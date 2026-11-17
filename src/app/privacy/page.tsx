import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "นโยบายความเป็นส่วนตัว (Privacy Policy) - Neighbor Houses",
  description: "นโยบายความเป็นส่วนตัวและการคุ้มครองข้อมูลส่วนบุคคลของ Neighbor Houses Smart Home",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container max-w-4xl">
        <Link href="/" className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          กลับสู่หน้าหลัก
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-700">
            <Shield className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold tracking-[0.2em] text-emerald-700 uppercase">Legal & Privacy</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-light text-zinc-900 mb-4">
          นโยบายความเป็นส่วนตัว <span className="font-medium">(Privacy Policy)</span>
        </h1>
        <p className="text-sm text-zinc-500 mb-10 pb-6 border-b border-zinc-100">
          อัปเดตล่าสุด: มกราคม 2025 • Neighbor Houses Co., Ltd.
        </p>

        <div className="prose prose-zinc max-w-none text-zinc-700 font-light leading-relaxed space-y-8">
          <section>
            <h2 className="text-xl font-medium text-zinc-900 mb-3">1. บทนำและความมุ่งมั่นของเรา</h2>
            <p>
              Neighbor Houses ตระหนักถึงความสำคัญของการคุ้มครองข้อมูลส่วนบุคคลและความเป็นส่วนตัวของลูกค้าผู้มีอุปการคุณทุกท่าน เอกสารฉบับนี้จัดทำขึ้นเพื่อชี้แจงวิธีการที่เราเก็บรวบรวม ใช้ เปิดเผย และปกป้องข้อมูลส่วนบุคคลของคุณตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-zinc-900 mb-3">2. ข้อมูลส่วนบุคคลที่เราจัดเก็บ</h2>
            <p>เราอาจเก็บรวบรวมข้อมูลส่วนบุคคลที่จำเป็นสำหรับการให้บริการ เช่น:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>ข้อมูลระบุตัวตน: ชื่อ, นามสกุล, เบอร์โทรศัพท์, อีเมล, ที่อยู่สำหรับติดตั้งระบบ</li>
              <li>ข้อมูลทางเทคนิค: ข้อมูลเครือข่ายภายในบ้านและอุปกรณ์ Smart Home ที่ใช้ในการออกแบบการติดตั้ง</li>
              <li>ข้อมูลการติดต่อและธุรกรรม: ประวัติการประเมินราคา การออกใบเสร็จรับเงิน และการรับประกันสินค้า</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-zinc-900 mb-3">3. วัตถุประสงค์ในการประมวลผลข้อมูล</h2>
            <p>
              เราใช้ข้อมูลของคุณเพื่อวัตถุประสงค์ในการสำรวจหน้างาน ออกแบบระบบ จัดส่งอุปกรณ์ ดำเนินการติดตั้ง และให้บริการบำรุงรักษาหลังการขาย รวมถึงการแจ้งเตือนสิทธิประโยชน์และการรับประกันสินค้า โดยเราจะไม่นำข้อมูลของคุณไปจำหน่ายหรือส่งต่อให้บุคคลภายนอกโดยเด็ดขาด
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-zinc-900 mb-3">4. มาตรการรักษาความปลอดภัยของข้อมูล</h2>
            <p>
              เราใช้มาตรการรักษาความปลอดภัยทั้งทางกายภาพและทางเทคโนโลยีสารสนเทศ รวมถึงการเข้ารหัสข้อมูล (Encryption) และการจำกัดสิทธิ์การเข้าถึงข้อมูลเฉพาะบุคลากรที่เกี่ยวข้องกับการติดตั้งเท่านั้น
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-zinc-900 mb-3">5. การติดต่อเรา</h2>
            <p>
              หากคุณมีข้อสงสัยเกี่ยวกับนโยบายความเป็นส่วนตัวหรือต้องการใช้สิทธิในฐานะเจ้าของข้อมูล สามารถติดต่อเราได้ที่อีเมล info@smarthome.th หรือโทร 02-123-4567
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
