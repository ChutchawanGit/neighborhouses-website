"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Phone,
  Sparkles,
  Search,
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck,
  LayoutDashboard,
  Layers,
  Package,
  Building2,
  Calculator,
  BookOpen,
} from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/neighborhouses-website";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine current page name for Oasel-style breadcrumbs
  const getBreadcrumb = () => {
    if (pathname === "/" || pathname === "") return "Overview / Dossier";
    if (pathname.startsWith("/services")) return "Services / Systems Engineering";
    if (pathname.startsWith("/packages")) return "Packages / Tiered Solutions";
    if (pathname.startsWith("/projects")) return "Showcase / Estate Portfolio";
    if (pathname.startsWith("/calculator")) return "Estimator / Smart Calculator";
    if (pathname.startsWith("/about")) return "Studio / About Us";
    if (pathname.startsWith("/contact")) return "Contact / Private Consultation";
    if (pathname.startsWith("/blog")) return "Editorial / Articles & Trends";
    if (pathname.startsWith("/faq")) return "Guide / FAQ";
    if (pathname.startsWith("/knowledge-base")) return "Library / Knowledge Base";
    return "Architecture / Living";
  };

  return (
    <header className="sticky top-3 z-40 w-full px-3 sm:px-6 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto oasel-glass-floating rounded-2xl md:rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between border border-[#3c280f]/10 shadow-lg">
        {/* Left Side: Brand on mobile & Breadcrumbs on desktop */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-[#2a2014] flex items-center justify-center shrink-0">
              <span className="font-extrabold text-xs tracking-tighter text-[#c8f94a]">NH</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-semibold text-base tracking-tight text-[#2a2014]">
                Neighbor Houses
              </span>
              <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-widest text-[#786857]">
                Smart Living
              </span>
            </div>
          </Link>

          {/* Desktop Breadcrumb Badge */}
          <div className="hidden md:flex items-center gap-2 pl-3 border-l border-[#3c280f]/10">
            <ChevronRight className="w-3.5 h-3.5 text-[#6e5f50]" />
            <span className="text-xs font-medium text-[#6e5f50] font-sans">
              {getBreadcrumb()}
            </span>
          </div>
        </div>

        {/* Center: Oasel Status Pill */}
        <div className="hidden xl:flex items-center gap-3 px-3.5 py-1 rounded-full bg-[#f4ede2]/80 border border-[#3c280f]/10 text-xs text-[#44362a]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-semibold tracking-wide uppercase">
            KNX • Matter • HomeKit Certified
          </span>
        </div>

        {/* Right Side: Quick Action & Mobile Menu */}
        <div className="flex items-center gap-3">
          <a
            href="tel:021234567"
            className="hidden sm:flex items-center gap-2 text-xs font-semibold text-[#44362a] hover:text-[#2a2014] transition-colors px-3 py-1.5 rounded-full hover:bg-black/5"
          >
            <Phone className="w-3.5 h-3.5 text-[#2a2014]" />
            <span>02-123-4567</span>
          </a>

          <Button
            asChild
            size="sm"
            className="rounded-full bg-[#2a2014] text-[#fbf5e9] hover:bg-[#44362a] px-5 py-2 text-xs font-semibold tracking-wide shadow-md transition-all duration-200"
          >
            <Link href="/contact" className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#c8f94a]" />
              <span>ปรึกษาฟรี</span>
            </Link>
          </Button>

          {/* Mobile Sheet Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 rounded-full bg-[#f4ede2] border border-[#3c280f]/10 hover:bg-[#eae0d2]"
              >
                <Menu className="h-5 w-5 text-[#2a2014]" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 bg-[#f4ede2] p-6 border-r border-[#3c280f]/10">
              <div className="flex flex-col h-full justify-between pt-4">
                <div>
                  <div className="flex items-center gap-2.5 mb-8 pb-4 border-b border-[#3c280f]/10">
                    <div className="w-9 h-9 rounded-xl bg-[#2a2014] flex items-center justify-center">
                      <span className="font-extrabold text-sm text-[#c8f94a]">NH</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base text-[#2a2014] leading-none">
                        Neighbor Houses
                      </h3>
                      <p className="text-[10px] text-[#6e5f50] uppercase tracking-widest mt-1">
                        Luxury Smart Home
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    {[
                      { name: "Overview (หน้าแรก)", href: "/" },
                      { name: "Services (บริการ & ระบบ)", href: "/services" },
                      { name: "Packages (แพ็คเกจติดตั้ง)", href: "/packages" },
                      { name: "Portfolio (ผลงานติดตั้ง)", href: "/projects" },
                      { name: "Calculator (คำนวณราคา)", href: "/calculator" },
                      { name: "Knowledge Base (คลังความรู้)", href: "/knowledge-base" },
                      { name: "Articles (บทความ)", href: "/blog" },
                      { name: "FAQ (คำถามพบบ่อย)", href: "/faq" },
                      { name: "About Us (เกี่ยวกับเรา)", href: "/about" },
                      { name: "Contact (ติดต่อเรา)", href: "/contact" },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          pathname === item.href
                            ? "bg-[#c8f94a] text-[#1a2404] font-semibold"
                            : "text-[#44362a] hover:bg-black/5"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#3c280f]/10">
                  <Button asChild className="w-full rounded-full bg-[#2a2014] text-[#fbf5e9] py-6 text-sm font-semibold">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      นัดหมายสำรวจหน้างาน
                    </Link>
                  </Button>
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
