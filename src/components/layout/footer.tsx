import Link from "next/link";
import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";

const companyLinks = [
  { name: "หน้าแรก", href: "/" },
  { name: "แพ็คเกจติดตั้ง", href: "/packages" },
  { name: "บริการทั้งหมด", href: "/services" },
  { name: "ผลงานติดตั้งจริง", href: "/projects" },
  { name: "คำนวณราคาเบื้องต้น", href: "/calculator" },
  { name: "เกี่ยวกับเรา", href: "/about" },
];

const serviceLinks = [
  { name: "ระบบควบคุมแสงสว่าง (Smart Lighting)", href: "/services/lighting" },
  { name: "ระบบกล้องวงจรปิดอัจฉริยะ (AI CCTV)", href: "/services/cctv" },
  { name: "ระบบรักษาความปลอดภัย (Security)", href: "/services/security" },
  { name: "ระบบบ้านอัตโนมัติ (Automation)", href: "/services/automation" },
  { name: "ระบบเครื่องใช้ไฟฟ้า (Appliances)", href: "/services/appliances" },
  { name: "ระบบเสียง Multi-Room Audio", href: "/services/audio" },
];

const resourceLinks = [
  { name: "คำถามที่พบบ่อย (FAQ)", href: "/faq" },
  { name: "คลังความรู้ Smart Home", href: "/knowledge-base" },
  { name: "บทความและเทคโนโลยี", href: "/blog" },
  { name: "นโยบายความเป็นส่วนตัว", href: "/privacy" },
  { name: "ข้อกำหนดและเงื่อนไข", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-300">
      <div className="container py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <span className="text-2xl font-light tracking-tight text-white">
                Neighbor <span className="font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Houses</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-sm mb-6">
              ผู้นำด้านการออกแบบและติดตั้งระบบบ้านอัจฉริยะ (Luxury Smart Home) สำหรับคฤหาสน์และที่อยู่อาศัยระดับพรีเมียม ผสานงานสถาปัตยกรรมเข้ากับเทคโนโลยีชั้นนำระดับสากล
            </p>

            <div className="space-y-2.5 text-xs text-zinc-400 font-light">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>โทรศัพท์: 02-123-4567, 089-123-4567</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>อีเมล: contact@neighborhouses.com</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>เลขที่ 123 อาคารสถาปัตย์ ชั้น 18 ถนนสุขุมวิท คลองตัน คลองเตย กรุงเทพฯ 10110</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-5">
              โครงสร้างเว็บไซต์
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-zinc-400 hover:text-white transition-colors font-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-5">
              บริการติดตั้ง
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-zinc-400 hover:text-white transition-colors font-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Support */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-5">
              ข้อมูลและการรับประกัน
            </h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs text-zinc-400 hover:text-white transition-colors font-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-xl border border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2 text-emerald-400 mb-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-medium text-white">รับประกันความพึงพอใจ</span>
              </div>
              <p className="text-[11px] text-zinc-400 font-light leading-snug">
                บริการ On-Site Support ตรวจเช็คระบบถึงบ้านคุณตลอดอายุการรับประกัน
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-zinc-900 py-6 bg-zinc-950/80">
        <div className="container flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 font-light">
          <p>© 2025 Neighbor Houses Co., Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">
              นโยบายความเป็นส่วนตัว
            </Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">
              ข้อกำหนดและเงื่อนไข
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
