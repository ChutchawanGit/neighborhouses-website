"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger
} from "@/components/ui/tooltip";
import { Check, X, InfoIcon } from "lucide-react";

// Metadata moved to a separate metadata.ts file

const packages = [
  {
    id: "starter",
    name: "Smart Home เริ่มต้น",
    price: "39,900",
    description: "เหมาะสำหรับบ้านขนาดเล็ก หรือเริ่มต้นใช้งานระบบ Smart Home",
    features: {
      "lightControl": { value: 5, label: "ชุดควบคุมแสงสว่าง", unit: "จุด" },
      "camera": { value: 2, label: "กล้องวงจรปิด", unit: "ตัว" },
      "doorLock": { value: 1, label: "ระบบล็อคประตูอัจฉริยะ", unit: "ชุด" },
      "smartSwitch": { value: 3, label: "สวิตช์อัจฉริยะ", unit: "ตัว" },
      "motionSensor": { value: 0, label: "เซ็นเซอร์ตรวจจับการเคลื่อนไหว", unit: "ตัว" },
      "acControl": { value: 0, label: "ระบบควบคุมแอร์อัจฉริยะ", unit: "เครื่อง" },
      "audioControl": { value: 0, label: "ระบบควบคุมเสียง", unit: "ชุด" },
      "curtainControl": { value: 0, label: "ระบบม่านอัจฉริยะ", unit: "ชุด" },
      "advancedSecurity": { value: false, label: "ระบบรักษาความปลอดภัยขั้นสูง" },
      "mobileApp": { value: true, label: "แอพควบคุมผ่านมือถือ" },
      "voiceControl": { value: false, label: "ระบบสั่งงานด้วยเสียง" },
      "installation": { value: true, label: "ติดตั้งฟรี" },
      "warranty": { value: 1, label: "รับประกัน", unit: "ปี" },
    },
    popular: false,
    href: "/packages/starter",
  },
  {
    id: "standard",
    name: "Smart Home กลาง",
    price: "79,900",
    description: "เหมาะสำหรับบ้านขนาดกลาง เพิ่มความสะดวกสบายและปลอดภัย",
    features: {
      "lightControl": { value: 10, label: "ชุดควบคุมแสงสว่าง", unit: "จุด" },
      "camera": { value: 4, label: "กล้องวงจรปิด", unit: "ตัว" },
      "doorLock": { value: 2, label: "ระบบล็อคประตูอัจฉริยะ", unit: "ชุด" },
      "smartSwitch": { value: 6, label: "สวิตช์อัจฉริยะ", unit: "ตัว" },
      "motionSensor": { value: 2, label: "เซ็นเซอร์ตรวจจับการเคลื่อนไหว", unit: "ตัว" },
      "acControl": { value: 2, label: "ระบบควบคุมแอร์อัจฉริยะ", unit: "เครื่อง" },
      "audioControl": { value: 1, label: "ระบบควบคุมเสียง", unit: "ชุด" },
      "curtainControl": { value: 0, label: "ระบบม่านอัจฉริยะ", unit: "ชุด" },
      "advancedSecurity": { value: false, label: "ระบบรักษาความปลอดภัยขั้นสูง" },
      "mobileApp": { value: true, label: "แอพควบคุมผ่านมือถือ" },
      "voiceControl": { value: true, label: "ระบบสั่งงานด้วยเสียง" },
      "installation": { value: true, label: "ติดตั้งฟรี" },
      "warranty": { value: 2, label: "รับประกัน", unit: "ปี" },
    },
    popular: true,
    href: "/packages/standard",
  },
  {
    id: "premium",
    name: "Smart Home พรีเมียม",
    price: "149,900",
    description: "เหมาะสำหรับบ้านขนาดใหญ่ ครบครันทุกฟังก์ชันการใช้งาน",
    features: {
      "lightControl": { value: "ทั้งบ้าน", label: "ชุดควบคุมแสงสว่าง", unit: "จุด" },
      "camera": { value: 8, label: "กล้องวงจรปิด", unit: "ตัว" },
      "doorLock": { value: "ทุกประตู", label: "ระบบล็อคประตูอัจฉริยะ", unit: "ชุด" },
      "smartSwitch": { value: "ทั้งบ้าน", label: "สวิตช์อัจฉริยะ", unit: "ตัว" },
      "motionSensor": { value: 5, label: "เซ็นเซอร์ตรวจจับการเคลื่อนไหว", unit: "ตัว" },
      "acControl": { value: "ทุกเครื่อง", label: "ระบบควบคุมแอร์อัจฉริยะ", unit: "เครื่อง" },
      "audioControl": { value: "ทั้งบ้าน", label: "ระบบควบคุมเสียง", unit: "ชุด" },
      "curtainControl": { value: "มี", label: "ระบบม่านอัจฉริยะ", unit: "ชุด" },
      "advancedSecurity": { value: true, label: "ระบบรักษาความปลอดภัยขั้นสูง" },
      "mobileApp": { value: true, label: "แอพควบคุมผ่านมือถือ" },
      "voiceControl": { value: true, label: "ระบบสั่งงานด้วยเสียง" },
      "installation": { value: true, label: "ติดตั้งฟรี" },
      "warranty": { value: 3, label: "รับประกัน", unit: "ปี" },
    },
    popular: false,
    href: "/packages/premium",
  },
];

const featureExplanations = {
  "lightControl": "ชุดควบคุมแสงสว่างที่สามารถควบคุมผ่านแอพมือถือหรือเสียง เปิด-ปิดอัตโนมัติ และปรับความสว่างได้",
  "camera": "กล้องวงจรปิดความละเอียดสูง ดูภาพสดผ่านแอพ และบันทึกภาพเมื่อตรวจพบการเคลื่อนไหว",
  "doorLock": "ล็อคประตูที่สามารถปลดล็อคด้วยรหัส นิ้วมือ หรือควบคุมผ่านแอพมือถือ",
  "smartSwitch": "สวิตช์อัจฉริยะที่ควบคุมเครื่องใช้ไฟฟ้าได้ผ่านแอพมือถือหรือเสียง",
  "motionSensor": "เซ็นเซอร์ตรวจจับการเคลื่อนไหวที่สามารถตั้งค่าให้ทำงานอัตโนมัติเมื่อตรวจพบการเคลื่อนไหว",
  "acControl": "ระบบควบคุมเครื่องปรับอากาศที่สามารถตั้งอุณหภูมิ ตั้งเวลา และควบคุมผ่านแอพมือถือ",
  "audioControl": "ระบบควบคุมเสียงที่สามารถเล่นเพลงในพื้นที่ต่างๆ ของบ้านผ่านแอพมือถือ",
  "curtainControl": "ระบบควบคุมม่านที่สามารถเปิด-ปิดม่านได้ผ่านแอพมือถือหรืออัตโนมัติตามเวลา",
  "advancedSecurity": "ระบบรักษาความปลอดภัยขั้นสูงที่รวมการตรวจจับการบุกรุก แจ้งเตือนอัตโนมัติ และเชื่อมต่อกับศูนย์รักษาความปลอดภัย",
  "mobileApp": "แอพพลิเคชั่นบนมือถือที่ใช้ควบคุมระบบ Smart Home ทั้งหมด",
  "voiceControl": "ระบบสั่งงานด้วยเสียงผ่าน Google Assistant, Amazon Alexa หรือ Apple Siri",
  "installation": "บริการติดตั้งระบบทั้งหมดโดยทีมงานผู้เชี่ยวชาญ",
  "warranty": "ระยะเวลารับประกันอุปกรณ์และการติดตั้ง พร้อมบริการหลังการขาย",
};

const featureOrder = [
  "lightControl", "camera", "doorLock", "smartSwitch", "motionSensor",
  "acControl", "audioControl", "curtainControl", "advancedSecurity",
  "mobileApp", "voiceControl", "installation", "warranty"
];

export default function PackageComparisonPage() {
  const [selectedPackages, setSelectedPackages] = useState(packages.map(p => p.id));

  const togglePackage = (packageId) => {
    setSelectedPackages(prev =>
      prev.includes(packageId) && prev.length > 1
        ? prev.filter(id => id !== packageId)
        : [...prev.filter(id => id !== packageId), packageId]
    );
  };

  const filteredPackages = packages.filter(pkg => selectedPackages.includes(pkg.id));

  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">
          เปรียบเทียบแพ็คเกจ
        </h1>
        <p className="text-xl text-muted-foreground">
          เปรียบเทียบแพ็คเกจติดตั้ง Smart Home แบบต่างๆ เพื่อเลือกแพ็คเกจที่เหมาะกับบ้านของคุณ
        </p>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-4 mb-8">
        <div className="text-sm font-medium">เลือกแพ็คเกจที่ต้องการเปรียบเทียบ:</div>
        {packages.map(pkg => (
          <button
            key={pkg.id}
            onClick={() => togglePackage(pkg.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedPackages.includes(pkg.id)
                ? 'bg-[#00bbb4] text-black hover:from-emerald-600 hover:to-teal-600'
                : 'bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-100'
            }`}
          >
            {pkg.name}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[768px]">
          <div className="grid grid-cols-[250px_repeat(auto-fill,minmax(150px,1fr))]">
            {/* Header row */}
            <div className="border-b border-zinc-200 p-4"></div>
            {filteredPackages.map(pkg => (
              <div
                key={pkg.id}
                className={`border-b border-zinc-200 p-4 text-center ${pkg.popular ? 'bg-yellow-50' : ''}`}
              >
                {pkg.popular && (
                  <div className="text-xs font-medium text-[#00bbb4] mb-1">แนะนำ</div>
                )}
                <h3 className="font-bold text-lg">{pkg.name}</h3>
                <div className="my-3">
                  <span className="text-2xl font-bold">{pkg.price}</span>
                  <span className="text-sm text-muted-foreground"> บาท</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                <Button asChild className={`w-full ${pkg.popular ? 'bg-[#00bbb4] hover:bg-yellow-600 text-black' : ''}`}>
                  <Link href={pkg.href}>
                    เลือกแพ็คเกจนี้
                  </Link>
                </Button>
              </div>
            ))}

            {/* Features rows */}
            {featureOrder.map(featureKey => {
              const featureLabel = packages[0].features[featureKey].label;
              const featureUnit = packages[0].features[featureKey].unit || "";

              return (
                <React.Fragment key={featureKey}>
                  <div className="border-b border-zinc-200 p-4 bg-zinc-50 flex items-center">
                    <span>{featureLabel}</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <InfoIcon className="h-4 w-4 ml-1 text-zinc-400 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p>{featureExplanations[featureKey]}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>

                  {filteredPackages.map(pkg => {
                    const feature = pkg.features[featureKey];
                    const value = feature.value;

                    return (
                      <div key={`${pkg.id}-${featureKey}`} className="border-b border-zinc-200 p-4 text-center">
                        {typeof value === 'boolean' ? (
                          value ? (
                            <Check className="mx-auto h-5 w-5 text-green-500" />
                          ) : (
                            <X className="mx-auto h-5 w-5 text-red-500" />
                          )
                        ) : (
                          <span>
                            {value} {value !== "มี" && featureUnit}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">ต้องการแพ็คเกจที่เหมาะกับความต้องการเฉพาะของคุณ?</h2>
          <p className="text-muted-foreground mb-6">
            เราเข้าใจว่าทุกบ้านมีความต้องการที่แตกต่างกัน ทีมงานของเราพร้อมให้คำปรึกษาและออกแบบระบบ Smart Home ที่เหมาะกับบ้านของคุณโดยเฉพาะ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#00bbb4] text-black hover:from-emerald-600 hover:to-teal-600">
              <Link href="/contact">ปรึกษาผู้เชี่ยวชาญ</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/faq">คำถามที่พบบ่อย</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
