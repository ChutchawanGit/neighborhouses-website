import Link from "next/link";

const companyLinks = [
  { name: "หน้าแรก", href: "/" },
  { name: "แพ็คเกจ", href: "/packages" },
  { name: "บริการ", href: "/services" },
  { name: "ผลงาน", href: "/projects" },
  { name: "เกี่ยวกับเรา", href: "/about" },
];

const serviceLinks = [
  { name: "ติดตั้งกล้องวงจรปิด", href: "/services/cctv" },
  { name: "Smart Lighting", href: "/services/lighting" },
  { name: "ระบบเสียง", href: "/services/audio" },
  { name: "Smart Security", href: "/services/security" },
  { name: "Home Automation", href: "/services/automation" },
];

const resourceLinks = [
  { name: "บทความ", href: "/blog" },
  { name: "คำถามที่พบบ่อย", href: "/faq" },
];

export function Footer() {
  return (
    <footer className="border-t bg-zinc-950 text-zinc-200">
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">Smart Home</span>
            </Link>
            <p className="text-sm text-zinc-400 max-w-sm">
              บริการออกแบบและติดตั้ง Smart Home สำหรับที่อยู่อาศัยและอาคารทุกประเภท
              เพื่อสร้างประสบการณ์การอยู่อาศัยที่ทันสมัยและสะดวกสบาย
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.line.me/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.89c.50 0 .866.37.866.87a.873.873 0 0 1-.866.869H17.24v1.283h2.126c.5 0 .866.37.866.869s-.37.87-.866.87H16.37a.873.873 0 0 1-.87-.87V9.89c0-.5.37-.87.87-.87h3.126zm-4.5 3.891a.87.87 0 0 1-.869.87.87.87 0 0 1-.87-.87V9.89a.87.87 0 0 1 .87-.87.87.87 0 0 1 .87.87v3.891zm-3.207 0a.87.87 0 0 1-.87.87.873.873 0 0 1-.868-.87v-2.24l-1.938 2.63a.92.92 0 0 1-.743.348.874.874 0 0 1-.745-.348l-1.938-2.63v2.24a.873.873 0 0 1-.869.87.87.87 0 0 1-.868-.87V9.89a.87.87 0 0 1 .868-.87.92.92 0 0 1 .745.348l2.63 3.587 2.63-3.587a.92.92 0 0 1 .744-.348.87.87 0 0 1 .869.87v3.891zm-9.217-7.391C2.44 6.39 2 7.28 2 8.24v7.52c0 .96.44 1.852 1.217 2.85a7.065 7.065 0 0 0 2.74 2.151c1.084.456 2.282.716 3.578.716 1.296 0 2.494-.26 3.578-.716a7.065 7.065 0 0 0 2.739-2.15c.776-.999 1.217-1.891 1.217-2.852V8.239c0-.96-.44-1.851-1.217-2.85a7.065 7.065 0 0 0-2.739-2.15C11.997 2.783 10.8 2.522 9.504 2.522c-1.296 0-2.494.261-3.578.717a7.065 7.065 0 0 0-2.74 2.151z"/></svg>
                <span className="sr-only">Line</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-white mb-4">บริษัท</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-zinc-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-4">บริการ</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-zinc-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-4">ข้อมูลเพิ่มเติม</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-zinc-400 hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h3 className="font-medium text-white mb-4">ติดต่อเรา</h3>
              <p className="text-sm text-zinc-400">
                โทร: 02-123-4567<br />
                อีเมล: info@smarthome.th<br />
                เลขที่ 123 ถนนสุขุมวิท แขวงคลองตัน<br />
                เขตคลองเตย กรุงเทพฯ 10110
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-800 py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-zinc-500">© 2025 Smart Home Thailand. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-xs text-zinc-500 hover:text-white">
              นโยบายความเป็นส่วนตัว
            </Link>
            <Link href="/terms" className="text-xs text-zinc-500 hover:text-white">
              ข้อกำหนดและเงื่อนไข
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
