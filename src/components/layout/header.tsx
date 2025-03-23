"use client";

import * as React from "react";
import Link from "next/link";
import Image from 'next/image';
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { name: "หน้าแรก", href: "/" },
  {
    name: "บริการ",
    href: "/services",
    dropdown: true,
    items: [
      { name: "ระบบควบคุมแสงสว่าง", href: "/services/lighting" },
      { name: "ระบบรักษาความปลอดภัย", href: "/services/security" },
      { name: "ระบบเสียงอัจฉริยะ", href: "/services/audio" },
      { name: "ระบบอัตโนมัติอัจฉริยะ", href: "/services/automation" },
      { name: "ระบบควบคุมเครื่องใช้ไฟฟ้า", href: "/services/appliances" },
      { name: "ดูบริการทั้งหมด", href: "/services" },
    ]
  },
  {
    name: "แพ็คเกจ",
    href: "/packages",
    dropdown: true,
    items: [
      { name: "ดูแพ็คเกจทั้งหมด", href: "/packages" },
      { name: "เปรียบเทียบแพ็คเกจ", href: "/packages/compare" },
      { name: "คำนวณราคา", href: "/calculator" },
      { name: "แพ็คเกจเริ่มต้น", href: "/packages/basic" },
      { name: "แพ็คเกจกลาง", href: "/packages/standard" },
      { name: "แพ็คเกจพรีเมียม", href: "/packages/premium" },
    ]
  },
  { name: "สินค้า", href: "/products" },
  { name: "ผลงาน", href: "/projects" },
  {
    name: "เกี่ยวกับเรา",
    href: "/about",
    dropdown: true,
    items: [
      { name: "เกี่ยวกับบริษัท", href: "/about" },
      { name: "รีวิวจากลูกค้า", href: "/testimonials" },
      { name: "คำถามที่พบบ่อย", href: "/faq" },
      { name: "บทความ", href: "/blog" },
    ]
  },
  { name: "ติดต่อเรา", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white">
      <div className="container flex h-16 items-center">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Neighbor House Logo"
              width={160}
              height={50}
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center justify-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-emerald-500 ${pathname === "/" ? "text-emerald-500" : "text-muted-foreground"
                }`}
            >
              หน้าแรก
            </Link>
            {navItems.slice(1).map((item) => (
              <React.Fragment key={item.href}>
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className={`text-sm font-medium transition-colors hover:text-emerald-500 flex items-center ${pathname === item.href || pathname.startsWith(item.href + '/') ? "text-emerald-500" : "text-muted-foreground"
                        }`}>
                        {item.name}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 h-4 w-4">
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {item.items?.map((subItem) => (
                        <DropdownMenuItem key={subItem.href} asChild>
                          <Link
                            href={subItem.href}
                            className={`w-full ${pathname === subItem.href ? 'bg-accent' : ''}`}
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
                    className={`text-sm font-medium transition-colors hover:text-emerald-500 ${pathname === item.href || pathname.startsWith(item.href + '/') ? "text-emerald-500" : "text-muted-foreground"
                      }`}
                  >
                    {item.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="flex items-center gap-4">
          <Button asChild variant="default" className="hidden lg:flex bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 transition-all">
            <Link href="/contact">ติดต่อเรา</Link>
          </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="px-2 py-4">
                  <Link href="/" className="flex items-center mb-8" onClick={() => setIsOpen(false)}>
                    <Image
                      src="/images/logo.png"
                      alt="Neighbor House Logo"
                      width={160}
                      height={50}
                      className="h-auto w-auto"
                    />
                  </Link>
                  <div className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <div key={item.href}>
                        {item.dropdown ? (
                          <>
                            <div className={`text-base font-medium mb-2 ${pathname === item.href || pathname.startsWith(item.href + '/') ? "text-emerald-500" : "text-muted-foreground"
                              }`}>
                              {item.name}
                            </div>
                            <div className="pl-4 flex flex-col space-y-2 mb-2">
                              {item.items?.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className={`text-sm ${pathname === subItem.href ? "text-emerald-500" : "text-muted-foreground"
                                    }`}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            className={`text-base font-medium ${pathname === item.href || pathname.startsWith(item.href + '/') ? "text-emerald-500" : "text-muted-foreground"
                              }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}