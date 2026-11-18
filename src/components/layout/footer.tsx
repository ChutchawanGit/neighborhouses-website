import Link from "next/link";
import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";

const companyLinks = [
  { name: "Overview (หน้าแรก)", href: "/" },
  { name: "Tiered Packages (แพ็คเกจติดตั้ง)", href: "/packages" },
  { name: "All Services (บริการทั้งหมด)", href: "/services" },
  { name: "Estate Showcase (ผลงานจริง)", href: "/projects" },
  { name: "Cost Estimator (คำนวณราคา)", href: "/calculator" },
  { name: "About Studio (เกี่ยวกับเรา)", href: "/about" },
];

const serviceLinks = [
  { name: "Smart Lighting (ระบบแสงสว่าง)", href: "/services/lighting" },
  { name: "AI CCTV 4K (กล้องวงจรปิด)", href: "/services/cctv" },
  { name: "Smart Security (ความปลอดภัย)", href: "/services/security" },
  { name: "Home Automation (บ้านอัตโนมัติ)", href: "/services/automation" },
  { name: "Multi-Room Audio (ระบบเสียง)", href: "/services/audio" },
  { name: "Smart Appliances (เครื่องใช้ไฟฟ้า)", href: "/services/appliances" },
];

const resourceLinks = [
  { name: "FAQ (คำถามพบบ่อย)", href: "/faq" },
  { name: "Knowledge Base (คลังความรู้)", href: "/knowledge-base" },
  { name: "Articles (บทความ)", href: "/blog" },
  { name: "Privacy Policy (นโยบายความเป็นส่วนตัว)", href: "/privacy" },
  { name: "Terms of Service (ข้อกำหนดการบริการ)", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#3c280f]/15 bg-[#1b150f] text-[#f7efe1] mt-16">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-xl bg-[#c8f94a] flex items-center justify-center shrink-0">
                <span className="font-extrabold text-xs text-[#1a2404]">NH</span>
              </div>
              <span className="text-xl font-semibold tracking-tight text-white">
                Neighbor Houses
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-[#cdbea6] font-normal leading-relaxed max-w-sm mb-6">
              ผู้นำด้านการออกแบบและติดตั้งระบบบ้านอัจฉริยะ (Luxury Smart Home) มาตรฐานสถาปัตยกรรมระดับสากล เพื่อสุนทรียภาพแห่งการอยู่อาศัยที่สมบูรณ์แบบ
            </p>

            <div className="space-y-2 text-xs text-[#cdbea6]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c8f94a] shrink-0" />
                <span>โทรศัพท์: 02-123-4567, 089-123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c8f94a] shrink-0" />
                <span>อีเมล: contact@neighborhouses.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#c8f94a] shrink-0 mt-0.5" />
                <span>123 ถนนสุขุมวิท แขวงคลองตัน เขตคลองเตย กรุงเทพฯ 10110</span>
              </div>
            </div>
          </div>

          {/* Site Navigation */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#c8f94a] mb-4">
              SITE MAP
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#cdbea6] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Services */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#c8f94a] mb-4">
              SERVICES
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#cdbea6] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Warranty */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#c8f94a] mb-4">
              RESOURCES
            </h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-[#cdbea6] hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-[#c8f94a] mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span className="text-xs font-semibold text-white">5-Year Warranty</span>
              </div>
              <p className="text-[11px] text-[#cdbea6] leading-tight">
                ครอบคลุมอุปกรณ์และการบริการ On-Site ตลอดสัญญา
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5 bg-[#140f0b]">
        <div className="container flex flex-col md:flex-row justify-between items-center text-xs text-[#9d8e78]">
          <p>© 2025 Neighbor Houses Co., Ltd. All rights reserved.</p>
          <div className="flex gap-5 mt-3 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              นโยบายความเป็นส่วนตัว
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              ข้อกำหนดและเงื่อนไข
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
