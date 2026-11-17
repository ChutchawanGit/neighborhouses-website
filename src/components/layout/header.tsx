"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown, Phone, Sparkles } from "lucide-react";
import Image from 'next/image';

const navItems = [
  { name: "หน้าแรก", href: "/" },
  {
    name: "บริการ",
    href: "/services",
    dropdown: true,
    items: [
      { name: "ภาพรวมบริการทั้งหมด", href: "/services" },
      { name: "ระบบควบคุมแสงสว่าง (Lighting)", href: "/services/lighting" },
      { name: "ระบบกล้องวงจรปิด (AI CCTV)", href: "/services/cctv" },
      { name: "ระบบรักษาความปลอดภัย (Security)", href: "/services/security" },
      { name: "ระบบเครื่องใช้ไฟฟ้าอัจฉริยะ", href: "/services/appliances" },
      { name: "ระบบเซ็นเซอร์และอัตโนมัติ (Automation)", href: "/services/automation" },
      { name: "ระบบเสียง Multi-Room Audio", href: "/services/audio" },
    ]
  },
  {
    name: "แพ็คเกจ",
    href: "/packages",
    dropdown: true,
    items: [
      { name: "ดูแพ็คเกจทั้งหมด", href: "/packages" },
      { name: "แพ็คเกจเริ่มต้น (Basic)", href: "/packages/basic" },
      { name: "แพ็คเกจยอดนิยม (Standard)", href: "/packages/standard" },
      { name: "แพ็คเกจพรีเมียม (Premium)", href: "/packages/premium" },
      { name: "ตารางเปรียบเทียบแพ็คเกจ", href: "/packages/compare" },
    ]
  },
  { name: "ผลงานติดตั้ง", href: "/projects" },
  { name: "คำนวณราคา", href: "/calculator" },
  {
    name: "เกี่ยวกับเรา",
    href: "/about",
    dropdown: true,
    items: [
      { name: "เรื่องราวของเรา", href: "/about" },
      { name: "คำถามที่พบบ่อย (FAQ)", href: "/faq" },
      { name: "คลังความรู้ Smart Home", href: "/knowledge-base" },
      { name: "บทความ", href: "/blog" },
    ]
  },
  { name: "ติดต่อเรา", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/neighborhouses-website';

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? "border-b border-zinc-200/80 bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.03)]" 
        : "border-b border-zinc-200/50 bg-white/80 backdrop-blur-sm"
    }`}>
      <div className="container flex h-20 items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Image
              src={`${basePath}/images/logo.png`}
              alt="Neighbor House Logo"
              width={150}
              height={45}
              priority
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div className="hidden sm:block border-l border-zinc-200 pl-3">
            <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 block font-semibold leading-tight">
              Luxury Smart Living
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link
            href="/"
            className={`text-sm font-medium tracking-wide transition-colors hover:text-zinc-900 ${
              pathname === "/" ? "text-emerald-700 font-semibold" : "text-zinc-700"
            }`}
          >
            หน้าแรก
          </Link>
          {navItems.slice(1, -1).map((item) => (
            <React.Fragment key={item.href}>
              {item.dropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className={`text-sm font-medium tracking-wide transition-colors hover:text-zinc-900 flex items-center gap-1 py-2 outline-none ${
                      pathname === item.href || pathname.startsWith(item.href + '/') 
                        ? "text-emerald-700 font-semibold" 
                        : "text-zinc-700"
                    }`}>
                      {item.name}
                      <ChevronDown className="h-3.5 w-3.5 text-zinc-500 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 p-1.5 rounded-xl border border-zinc-200/80 bg-white/95 backdrop-blur-md shadow-xl">
                    {item.items?.map((subItem) => (
                      <DropdownMenuItem key={subItem.href} asChild className="rounded-lg cursor-pointer">
                        <Link
                          href={subItem.href}
                          className={`w-full py-2 px-3 text-xs tracking-wide font-normal transition-colors ${
                            pathname === subItem.href ? 'bg-zinc-100 text-zinc-900 font-medium' : 'text-zinc-700 hover:text-zinc-950'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-zinc-900 ${
                    pathname === item.href || pathname.startsWith(item.href + '/') 
                      ? "text-emerald-700 font-semibold" 
                      : "text-zinc-700"
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Action Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <a 
            href="tel:021234567" 
            className="hidden xl:flex items-center gap-2 text-xs font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-800">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span>02-123-4567</span>
          </a>

          <Button asChild size="sm" className="hidden sm:inline-flex rounded-full bg-zinc-900 text-white hover:bg-zinc-800 px-5 text-xs font-medium tracking-wide shadow-sm hover:shadow transition-all duration-300">
            <Link href="/contact" className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>ประเมินหน้างานฟรี</span>
            </Link>
          </Button>

          {/* Mobile Sheet Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-zinc-100">
                <Menu className="h-5 w-5 text-zinc-800" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white p-6">
              <div className="flex flex-col h-full justify-between pt-4">
                <div>
                  <Link href="/" className="flex items-center mb-8" onClick={() => setIsOpen(false)}>
                    <Image
                      src={`${basePath}/images/logo.png`}
                      alt="Neighbor House Logo"
                      width={140}
                      height={40}
                      className="h-9 w-auto"
                    />
                  </Link>
                  <div className="flex flex-col space-y-3">
                    {navItems.map((item) => (
                      <div key={item.href} className="py-1">
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`block text-base font-medium tracking-wide transition-colors ${
                            pathname === item.href ? "text-emerald-700" : "text-zinc-800"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-100">
                  <Button asChild className="w-full rounded-full bg-zinc-900 text-white hover:bg-zinc-800 py-6 text-sm">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      นัดหมายสำรวจหน้างาน
                    </Link>
                  </Button>
                  <p className="text-center text-xs text-zinc-500 mt-4 font-light">
                    โทรปรึกษา: 02-123-4567
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
