"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard,
  Layers,
  Package,
  Building2,
  Calculator,
  BookOpen,
  HelpCircle,
  Newspaper,
  PhoneCall,
  Info,
  ChevronRight,
  Sparkles,
  Phone,
  ShieldCheck,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

interface NavTab {
  id: string;
  name: string;
  thaiName: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
  subItems?: { name: string; href: string }[];
}

const navTabs: NavTab[] = [
  {
    id: "dossier",
    name: "Overview",
    thaiName: "หน้าแรก",
    href: "/",
    icon: LayoutDashboard,
    badge: "LIVE",
  },
  {
    id: "services",
    name: "Services & Systems",
    thaiName: "บริการ & ระบบ",
    href: "/services",
    icon: Layers,
    badge: "6 SYSTEMS",
    subItems: [
      { name: "ภาพรวมบริการทั้งหมด", href: "/services" },
      { name: "Smart Lighting (แสงสว่าง)", href: "/services/lighting" },
      { name: "AI CCTV 4K (กล้องวงจรปิด)", href: "/services/cctv" },
      { name: "Smart Security (ความปลอดภัย)", href: "/services/security" },
      { name: "Home Automation (บ้านอัตโนมัติ)", href: "/services/automation" },
      { name: "Multi-Room Audio (ระบบเสียง)", href: "/services/audio" },
      { name: "Smart Appliances (เครื่องใช้ไฟฟ้า)", href: "/services/appliances" },
    ],
  },
  {
    id: "packages",
    name: "Tiered Packages",
    thaiName: "แพ็คเกจติดตั้ง",
    href: "/packages",
    icon: Package,
    badge: "3 TIERS",
    subItems: [
      { name: "แพ็คเกจทั้งหมด", href: "/packages" },
      { name: "Estate Essential (39.9k)", href: "/packages/basic" },
      { name: "Manor Signature (79.9k)", href: "/packages/standard" },
      { name: "Sovereign Bespoke (149.9k)", href: "/packages/premium" },
      { name: "เปรียบเทียบแพ็คเกจ", href: "/packages/compare" },
    ],
  },
  {
    id: "projects",
    name: "Estate Showcase",
    thaiName: "ผลงานติดตั้ง",
    href: "/projects",
    icon: Building2,
    badge: "PORTFOLIO",
  },
  {
    id: "calculator",
    name: "Cost Estimator",
    thaiName: "คำนวณราคา",
    href: "/calculator",
    icon: Calculator,
    badge: "ESTIMATE",
  },
  {
    id: "knowledge",
    name: "Knowledge Base",
    thaiName: "คลังความรู้",
    href: "/knowledge-base",
    icon: BookOpen,
  },
  {
    id: "blog",
    name: "Articles & Trends",
    thaiName: "บทความ",
    href: "/blog",
    icon: Newspaper,
  },
  {
    id: "faq",
    name: "FAQ & Guide",
    thaiName: "คำถามพบบ่อย",
    href: "/faq",
    icon: HelpCircle,
  },
  {
    id: "about",
    name: "Our Studio",
    thaiName: "เกี่ยวกับเรา",
    href: "/about",
    icon: Info,
  },
  {
    id: "contact",
    name: "Private Consultation",
    thaiName: "ติดต่อเรา",
    href: "/contact",
    icon: PhoneCall,
    badge: "BOOK",
  },
];

export function SideRail() {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/neighborhouses-website";

  const isCurrentActive = (tab: NavTab) => {
    if (tab.href === "/") {
      return pathname === "/" || pathname === "";
    }
    return pathname === tab.href || pathname.startsWith(tab.href + "/");
  };

  return (
    <aside
      className={`fixed top-3 bottom-3 left-3 z-50 hidden lg:flex flex-col justify-between transition-all duration-300 ease-out oasel-glass-floating rounded-3xl p-3 border border-[#3c280f]/10 shadow-2xl ${
        isExpanded ? "w-[270px]" : "w-[76px]"
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => {
        setIsExpanded(false);
        setHoveredTab(null);
      }}
    >
      {/* Rail Top: Brand Icon */}
      <div>
        <div className="flex items-center justify-between px-2 py-2 mb-4 border-b border-[#3c280f]/10 pb-3">
          <Link href="/" className="flex items-center gap-3 overflow-hidden">
            <div className="w-10 h-10 rounded-2xl bg-[#2a2014] flex items-center justify-center shrink-0 shadow-md">
              <span className="font-extrabold text-sm tracking-tighter text-[#c8f94a]">NH</span>
            </div>
            {isExpanded && (
              <div className="flex flex-col whitespace-nowrap overflow-hidden transition-opacity duration-200">
                <span className="font-semibold text-sm tracking-tight text-[#2a2014] leading-tight">
                  Neighbor Houses
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#6e5f50] font-medium">
                  Smart Living
                </span>
              </div>
            )}
          </Link>

          {isExpanded && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#6e5f50] hover:text-[#2a2014] p-1 rounded-lg hover:bg-black/5 transition"
              title="Toggle width"
            >
              <PanelLeftClose className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Tab Items List */}
        <nav className="flex flex-col gap-1.5">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const active = isCurrentActive(tab);
            const isHovered = hoveredTab === tab.id;

            return (
              <div
                key={tab.id}
                className="relative"
                onMouseEnter={() => setHoveredTab(tab.id)}
              >
                <Link
                  href={tab.href}
                  className={`flex items-center gap-3.5 px-3 py-2.5 rounded-2xl transition-all duration-200 group ${
                    active
                      ? "bg-[#c8f94a] text-[#1a2404] font-semibold shadow-[0_2px_12px_rgba(200,249,74,0.4)]"
                      : "text-[#44362a] hover:bg-[#fff9ed]/80 hover:text-[#2a2014]"
                  }`}
                >
                  <div className="relative shrink-0 flex items-center justify-center w-6 h-6">
                    <Icon className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110 ${active ? "text-[#1a2404]" : "text-[#44362a]"}`} />
                    {active && !isExpanded && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#1a2404]" />
                    )}
                  </div>

                  {isExpanded && (
                    <div className="flex items-center justify-between w-full overflow-hidden whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold tracking-tight leading-tight">
                          {tab.name}
                        </span>
                        <span className={`text-[10px] font-normal leading-tight ${active ? "text-[#1a2404]/80" : "text-[#786857]"}`}>
                          {tab.thaiName}
                        </span>
                      </div>

                      {tab.badge && (
                        <span
                          className={`text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded-full ${
                            active
                              ? "bg-[#1a2404] text-[#c8f94a]"
                              : "bg-[#e8dcce] text-[#44362a]"
                          }`}
                        >
                          {tab.badge}
                        </span>
                      )}
                    </div>
                  )}
                </Link>

                {/* Submenu Flyout (when collapsed or hovering on tabs with children) */}
                {tab.subItems && isHovered && (
                  <div
                    className={`absolute z-50 p-2.5 rounded-2xl oasel-glass-floating border border-[#3c280f]/15 shadow-2xl min-w-[220px] ${
                      isExpanded ? "left-[102%] top-0" : "left-[84px] top-0"
                    }`}
                  >
                    <div className="px-2.5 py-1 mb-1 border-b border-[#3c280f]/10">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#6e5f50]">
                        {tab.name}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      {tab.subItems.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`px-3 py-1.5 rounded-xl text-xs transition-colors ${
                            pathname === sub.href
                              ? "bg-[#c8f94a] text-[#1a2404] font-semibold"
                              : "text-[#44362a] hover:bg-black/5 hover:text-[#2a2014]"
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Rail Bottom: System Status & Consultation */}
      <div className="pt-3 border-t border-[#3c280f]/10 flex flex-col gap-2">
        {isExpanded ? (
          <div className="p-3 rounded-2xl bg-[#fff9ed]/90 border border-[#3c280f]/10">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#2a2014]">
                Matter &amp; KNX Ready
              </span>
            </div>
            <p className="text-[11px] text-[#6e5f50] leading-tight font-light mb-2">
              Bespoke luxury smart home engineering
            </p>
            <a
              href="tel:021234567"
              className="inline-flex items-center justify-center gap-2 w-full py-2 rounded-xl bg-[#2a2014] text-[#fbf5e9] text-xs font-semibold hover:bg-[#44362a] transition shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#c8f94a]" />
              <span>02-123-4567</span>
            </a>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <span
              className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"
              title="System Protocol: Online"
            />
            <a
              href="tel:021234567"
              className="w-10 h-10 rounded-2xl bg-[#2a2014] text-[#c8f94a] flex items-center justify-center hover:scale-105 transition shadow-sm"
              title="Call Studio: 02-123-4567"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </aside>
  );
}

export default SideRail;
