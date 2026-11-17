import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata = {
  title: "ข้อกำหนดและเงื่อนไขการใช้บริการ (Terms of Service) - Neighbor Houses",
  description: "ข้อกำหนดและเงื่อนไขการให้บริการติดตั้งระบบ Smart Home และการรับประกันสินค้า",
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container max-w-4xl">
        <Link href="/" className="inline-flex items-center text-sm text-zinc-500 hover:text-zinc-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          กลับสู่หน้าหลัก
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-700">
            <FileText className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold tracking-[0.2em] text-emerald-700 uppercase">Service Terms</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-light text-zinc-900 mb-4">
          ข้อกำหนดและเงื่อนไข <span className="font-medium">(Terms of Service)</span>
        </h1>
        <p className="text-sm text-zinc-500 mb-10 pb-6 border-b border-zinc-100">
          อัปเดตล่าสุด: มกราคม 2025 • Neighbor Houses Co., Ltd.
        </p>

        <div className="prose prose-zinc max-w-none text-zinc-700 font-light leading-relaxed space-y-8">
          <section>
            <h2 className="text-xl font-medium text-zinc-900 mb-3">1. ขอบเขตการให้บริการ</h2>
            <p>
              Neighbor Houses ให้บริการรับคำปรึกษา สำรวจ ออกแบบ จำหน่าย และติดตั้งระบบบ้านอัจฉริยะ (Smart Home), ระบบควบคุมแสงสว่าง (Smart Lighting), ระบบความปลอดภัย (AI Security & CCTV), ระบบเสียงและโฮมเธียเตอร์ สำหรับบ้านพักอาศัย คอนโดมิเนียม และอาคารพาณิชย์
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-zinc-900 mb-3">2. การสำรวจหน้างานและการเสนอราคา</h2>
            <p>
              การประเมินราคาเบื้องต้นผ่านเว็บไซต์หรือระบบ Calculator เป็นเพียงการประมาณการเท่านั้น การเสนอราคาสุดท้ายจะออกให้หลังจากทีมวิศวกรผู้เชี่ยวชาญเข้าสำรวจโครงสร้างและระบบไฟฟ้าจริง ณ สถานที่ติดตั้ง
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-zinc-900 mb-3">3. มาตรฐานการติดตั้งและการรับประกัน (Warranty)</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>อุปกรณ์ฮาร์ดแวร์ทุกชิ้นเป็นของแท้ 100% พร้อมการรับประกันศูนย์อย่างเป็นทางการตามที่ระบุในแต่ละแพ็คเกจ (1–5 ปี)</li>
              <li>การรับประกันงานติดตั้งครอบคลุมการเดินสาย ท่อร้อยสาย และความเรียบร้อยของหน้างานเป็นเวลาอย่างน้อย 1 ปี</li>
              <li>บริการ On-Site Support สำหรับตรวจเช็คและแก้ไขปัญหาทางเทคนิคตามรอบการบริการที่ตกลงในสัญญา</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-zinc-900 mb-3">4. ความรับผิดชอบของลูกค้า</h2>
            <p>
              ลูกค้ามีหน้าที่จัดเตรียมระบบไฟฟ้าและสัญญาณอินเทอร์เน็ตความเร็วสูงที่มีความเสถียรในพื้นที่ติดตั้ง เพื่อให้ระบบ Smart Home และระบบสำรองข้อมูลบน Cloud สามารถทำงานได้อย่างเต็มประสิทธิภาพ
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
