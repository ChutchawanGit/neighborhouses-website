"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Info, Download } from "lucide-react"; // เปลี่ยนจาก InfoCircle เป็น Info

// ลบส่วน metadata ออกไป (ย้ายไปที่ layout.tsx แล้ว)

// เพิ่ม TypeScript interfaces
interface SystemOption {
  name: string;
  basePrice: number;
  pricePerPoint?: number;
  pricePerCamera?: number;
  pricePerDoorLock?: number;
  pricePerAC?: number;
  pricePerRoom?: number;
  pricePerSensor?: number;
}

interface HomeType {
  id: string;
  name: string;
  baseFactor: number;
}

interface HomeSize {
  id: string;
  name: string;
  sizeFactor: number;
}

interface Package {
  name: string;
  discount: number;
}

interface SmartHomeOptions {
  homeType: HomeType[];
  homeSize: HomeSize[];
  systemPrices: {
    lighting: SystemOption;
    security: SystemOption;
    hvac: SystemOption;
    audio: SystemOption;
    automation: SystemOption;
    control: SystemOption;
  };
  packages: {
    basic: Package;
    standard: Package;
    premium: Package;
    [key: string]: Package; // เพิ่ม index signature
  };
}

interface Systems {
  lighting: { enabled: boolean; points: number };
  security: { enabled: boolean; cameras: number; doorLocks: number };
  hvac: { enabled: boolean; acUnits: number };
  audio: { enabled: boolean; rooms: number };
  automation: { enabled: boolean; sensors: number };
  control: { enabled: boolean };
  [key: string]: any; // เพิ่ม index signature
}

const smartHomeOptions: SmartHomeOptions = {
  homeType: [
    { id: "condo", name: "คอนโดมิเนียม", baseFactor: 0.8 },
    { id: "townhouse", name: "ทาวน์เฮาส์", baseFactor: 1.0 },
    { id: "singleHouse", name: "บ้านเดี่ยว", baseFactor: 1.2 },
    { id: "villa", name: "วิลล่า", baseFactor: 1.5 },
  ],
  homeSize: [
    { id: "small", name: "ขนาดเล็ก (<100 ตร.ม.)", sizeFactor: 1.0 },
    { id: "medium", name: "ขนาดกลาง (100-200 ตร.ม.)", sizeFactor: 1.5 },
    { id: "large", name: "ขนาดใหญ่ (200-300 ตร.ม.)", sizeFactor: 2.0 },
    { id: "xlarge", name: "ขนาดใหญ่มาก (>300 ตร.ม.)", sizeFactor: 2.5 },
  ],
  systemPrices: {
    lighting: { name: "ระบบควบคุมแสงสว่าง", basePrice: 15000, pricePerPoint: 2500 },
    security: { name: "ระบบรักษาความปลอดภัย", basePrice: 25000, pricePerCamera: 5000, pricePerDoorLock: 8000 },
    hvac: { name: "ระบบควบคุมเครื่องปรับอากาศ", basePrice: 10000, pricePerAC: 3500 },
    audio: { name: "ระบบเสียง", basePrice: 30000, pricePerRoom: 7500 },
    automation: { name: "ระบบอัตโนมัติ", basePrice: 15000, pricePerSensor: 2000 },
    control: { name: "ระบบควบคุมกลาง", basePrice: 20000 },
  },
  packages: {
    basic: { name: "แพ็คเกจเริ่มต้น", discount: 0.05 },
    standard: { name: "แพ็คเกจมาตรฐาน", discount: 0.1 },
    premium: { name: "แพ็คเกจพรีเมียม", discount: 0.15 },
  }
};

export default function CalculatorPage() {
  const [homeType, setHomeType] = useState("townhouse");
  const [homeSize, setHomeSize] = useState("medium");
  const [systems, setSystems] = useState<Systems>({
    lighting: { enabled: true, points: 5 },
    security: { enabled: true, cameras: 2, doorLocks: 1 },
    hvac: { enabled: true, acUnits: 2 },
    audio: { enabled: false, rooms: 0 },
    automation: { enabled: false, sensors: 0 },
    control: { enabled: true },
  });
  const [selectedPackage, setSelectedPackage] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  const [monthlyInstallment, setMonthlyInstallment] = useState(0);
  const [suggestedPackage, setSuggestedPackage] = useState("");

  // Calculate total cost whenever inputs change
  useEffect(() => {
    calculateTotalCost();
  }, [homeType, homeSize, systems, selectedPackage]);

  const calculateTotalCost = () => {
    const selectedHomeType = smartHomeOptions.homeType.find(type => type.id === homeType);
    const selectedHomeSize = smartHomeOptions.homeSize.find(size => size.id === homeSize);
    const baseFactor = selectedHomeType ? selectedHomeType.baseFactor : 1;
    const sizeFactor = selectedHomeSize ? selectedHomeSize.sizeFactor : 1;

    let systemsCost = 0;

    // Calculate lighting cost
    if (systems.lighting.enabled) {
      const { basePrice, pricePerPoint } = smartHomeOptions.systemPrices.lighting;
      systemsCost += basePrice + ((pricePerPoint || 0) * systems.lighting.points);
    }

    // Calculate security cost
    if (systems.security.enabled) {
      const { basePrice, pricePerCamera, pricePerDoorLock } = smartHomeOptions.systemPrices.security;
      systemsCost += basePrice + ((pricePerCamera || 0) * systems.security.cameras) + ((pricePerDoorLock || 0) * systems.security.doorLocks);
    }

    // Calculate HVAC cost
    if (systems.hvac.enabled) {
      const { basePrice, pricePerAC } = smartHomeOptions.systemPrices.hvac;
      systemsCost += basePrice + ((pricePerAC || 0) * systems.hvac.acUnits);
    }

    // Calculate audio cost
    if (systems.audio.enabled) {
      const { basePrice, pricePerRoom } = smartHomeOptions.systemPrices.audio;
      systemsCost += basePrice + ((pricePerRoom || 0) * systems.audio.rooms);
    }

    // Calculate automation cost
    if (systems.automation.enabled) {
      const { basePrice, pricePerSensor } = smartHomeOptions.systemPrices.automation;
      systemsCost += basePrice + ((pricePerSensor || 0) * systems.automation.sensors);
    }

    // Calculate control system cost
    if (systems.control.enabled) {
      systemsCost += smartHomeOptions.systemPrices.control.basePrice;
    }

    // Apply home type and size factors
    let cost = systemsCost * baseFactor * sizeFactor;

    // Apply package discount if selected
    if (selectedPackage) {
      const packageInfo = smartHomeOptions.packages[selectedPackage];
      if (packageInfo) {
        cost = cost * (1 - packageInfo.discount);
      }
    }

    // Round to nearest 100
    cost = Math.round(cost / 100) * 100;

    setTotalCost(cost);

    // Calculate monthly installment (10 months)
    const monthly = Math.round(cost / 10 / 100) * 100;
    setMonthlyInstallment(monthly);

    // Suggest package based on systems selected
    let enabledCount = 0;
    Object.keys(systems).forEach(key => {
      if (systems[key].enabled) enabledCount++;
    });

    if (enabledCount <= 2) {
      setSuggestedPackage("basic");
    } else if (enabledCount <= 4) {
      setSuggestedPackage("standard");
    } else {
      setSuggestedPackage("premium");
    }
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('th-TH').format(price);
  };

  const updateSystemValue = (system: string, property: string, value: any): void => {
    setSystems(prev => ({
      ...prev,
      [system]: {
        ...prev[system],
        [property]: value
      }
    }));
  };

  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">
          คำนวณราคา Smart Home
        </h1>
        <p className="text-xl text-muted-foreground">
          ประมาณการราคาเบื้องต้นสำหรับการติดตั้งระบบ Smart Home ที่เหมาะกับบ้านของคุณ
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Property Information */}
          <Card>
            <CardHeader>
              <CardTitle>ข้อมูลที่อยู่อาศัย</CardTitle>
              <CardDescription>เลือกประเภทและขนาดที่อยู่อาศัยของคุณ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="homeType">ประเภทที่อยู่อาศัย</Label>
                  <Select value={homeType} onValueChange={setHomeType}>
                    <SelectTrigger id="homeType">
                      <SelectValue placeholder="เลือกประเภทที่อยู่อาศัย" />
                    </SelectTrigger>
                    <SelectContent>
                      {smartHomeOptions.homeType.map(type => (
                        <SelectItem key={type.id} value={type.id}>{type.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="homeSize">ขนาดที่อยู่อาศัย</Label>
                  <Select value={homeSize} onValueChange={setHomeSize}>
                    <SelectTrigger id="homeSize">
                      <SelectValue placeholder="เลือกขนาดที่อยู่อาศัย" />
                    </SelectTrigger>
                    <SelectContent>
                      {smartHomeOptions.homeSize.map(size => (
                        <SelectItem key={size.id} value={size.id}>{size.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Smart Home Systems */}
          <Card>
            <CardHeader>
              <CardTitle>ระบบ Smart Home</CardTitle>
              <CardDescription>เลือกระบบที่คุณต้องการติดตั้ง</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Lighting System */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="lighting-switch">ระบบควบคุมแสงสว่าง</Label>
                    <p className="text-sm text-muted-foreground">ควบคุมไฟในบ้านผ่านแอพมือถือหรือเสียง</p>
                  </div>
                  <Switch
                    id="lighting-switch"
                    checked={systems.lighting.enabled}
                    onCheckedChange={(checked: boolean) => updateSystemValue('lighting', 'enabled', checked)}
                  />
                </div>
                {systems.lighting.enabled && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="lighting-points">จำนวนจุดควบคุมแสงสว่าง: {systems.lighting.points}</Label>
                      <span className="text-sm text-muted-foreground">
                        {formatPrice(smartHomeOptions.systemPrices.lighting.pricePerPoint || 0)} บาท/จุด
                      </span>
                    </div>
                    <Slider
                      id="lighting-points"
                      min={1}
                      max={20}
                      step={1}
                      value={[systems.lighting.points]}
                      onValueChange={(value: number[]) => updateSystemValue('lighting', 'points', value[0])}
                    />
                  </div>
                )}
              </div>

              {/* Security System */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="security-switch">ระบบรักษาความปลอดภัย</Label>
                    <p className="text-sm text-muted-foreground">กล้องวงจรปิด ระบบล็อคประตู และเซ็นเซอร์</p>
                  </div>
                  <Switch
                    id="security-switch"
                    checked={systems.security.enabled}
                    onCheckedChange={(checked: boolean) => updateSystemValue('security', 'enabled', checked)}
                  />
                </div>
                {systems.security.enabled && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="security-cameras">จำนวนกล้องวงจรปิด: {systems.security.cameras}</Label>
                        <span className="text-sm text-muted-foreground">
                          {formatPrice(smartHomeOptions.systemPrices.security.pricePerCamera || 0)} บาท/ตัว
                        </span>
                      </div>
                      <Slider
                        id="security-cameras"
                        min={0}
                        max={10}
                        step={1}
                        value={[systems.security.cameras]}
                        onValueChange={(value: number[]) => updateSystemValue('security', 'cameras', value[0])}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="security-door-locks">จำนวนล็อคประตูอัจฉริยะ: {systems.security.doorLocks}</Label>
                        <span className="text-sm text-muted-foreground">
                          {formatPrice(smartHomeOptions.systemPrices.security.pricePerDoorLock || 0)} บาท/ชุด
                        </span>
                      </div>
                      <Slider
                        id="security-door-locks"
                        min={0}
                        max={5}
                        step={1}
                        value={[systems.security.doorLocks]}
                        onValueChange={(value: number[]) => updateSystemValue('security', 'doorLocks', value[0])}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* ทำแบบเดียวกันกับระบบอื่น ๆ - เพิ่ม type ให้กับ parameters ทั้งหมด */}
              {/* HVAC System */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="hvac-switch">ระบบควบคุมเครื่องปรับอากาศ</Label>
                    <p className="text-sm text-muted-foreground">ควบคุมแอร์ผ่านแอพมือถือ ตั้งเวลา และตั้งอุณหภูมิอัตโนมัติ</p>
                  </div>
                  <Switch
                    id="hvac-switch"
                    checked={systems.hvac.enabled}
                    onCheckedChange={(checked: boolean) => updateSystemValue('hvac', 'enabled', checked)}
                  />
                </div>
                {systems.hvac.enabled && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="hvac-ac-units">จำนวนเครื่องปรับอากาศ: {systems.hvac.acUnits}</Label>
                      <span className="text-sm text-muted-foreground">
                        {formatPrice(smartHomeOptions.systemPrices.hvac.pricePerAC || 0)} บาท/เครื่อง
                      </span>
                    </div>
                    <Slider
                      id="hvac-ac-units"
                      min={1}
                      max={10}
                      step={1}
                      value={[systems.hvac.acUnits]}
                      onValueChange={(value: number[]) => updateSystemValue('hvac', 'acUnits', value[0])}
                    />
                  </div>
                )}
              </div>

              {/* Audio System */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="audio-switch">ระบบเสียง</Label>
                    <p className="text-sm text-muted-foreground">ลำโพงอัจฉริยะทั่วบ้าน ควบคุมผ่านแอพหรือเสียง</p>
                  </div>
                  <Switch
                    id="audio-switch"
                    checked={systems.audio.enabled}
                    onCheckedChange={(checked: boolean) => updateSystemValue('audio', 'enabled', checked)}
                  />
                </div>
                {systems.audio.enabled && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="audio-rooms">จำนวนห้องที่ติดตั้ง: {systems.audio.rooms}</Label>
                      <span className="text-sm text-muted-foreground">
                        {formatPrice(smartHomeOptions.systemPrices.audio.pricePerRoom || 0)} บาท/ห้อง
                      </span>
                    </div>
                    <Slider
                      id="audio-rooms"
                      min={1}
                      max={10}
                      step={1}
                      value={[systems.audio.rooms]}
                      onValueChange={(value: number[]) => updateSystemValue('audio', 'rooms', value[0])}
                    />
                  </div>
                )}
              </div>

              {/* Automation System */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="automation-switch">ระบบอัตโนมัติ</Label>
                    <p className="text-sm text-muted-foreground">เซ็นเซอร์และระบบอัตโนมัติต่างๆ</p>
                  </div>
                  <Switch
                    id="automation-switch"
                    checked={systems.automation.enabled}
                    onCheckedChange={(checked: boolean) => updateSystemValue('automation', 'enabled', checked)}
                  />
                </div>
                {systems.automation.enabled && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="automation-sensors">จำนวนเซ็นเซอร์: {systems.automation.sensors}</Label>
                      <span className="text-sm text-muted-foreground">
                        {formatPrice(smartHomeOptions.systemPrices.automation.pricePerSensor || 0)} บาท/ตัว
                      </span>
                    </div>
                    <Slider
                      id="automation-sensors"
                      min={1}
                      max={15}
                      step={1}
                      value={[systems.automation.sensors]}
                      onValueChange={(value: number[]) => updateSystemValue('automation', 'sensors', value[0])}
                    />
                  </div>
                )}
              </div>

              {/* Control System */}
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="control-switch">ระบบควบคุมกลาง</Label>
                  <p className="text-sm text-muted-foreground">ศูนย์กลางควบคุมอุปกรณ์ Smart Home ทั้งหมด</p>
                </div>
                <Switch
                  id="control-switch"
                  checked={systems.control.enabled}
                  onCheckedChange={(checked: boolean) => updateSystemValue('control', 'enabled', checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Package Selection */}
          <Card>
            <CardHeader>
              <CardTitle>แพ็คเกจติดตั้ง</CardTitle>
              <CardDescription>เลือกแพ็คเกจเพื่อรับส่วนลด</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.keys(smartHomeOptions.packages).map((packageKey) => {
                  const packageInfo = smartHomeOptions.packages[packageKey];
                  const isRecommended = packageKey === suggestedPackage;
                  return (
                    <div
                      key={packageKey}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedPackage === packageKey
                          ? 'border-[#00bbb4] bg-yellow-50'
                          : 'border-zinc-200 hover:border-[#00bbb4]'
                      } ${isRecommended ? 'relative' : ''}`}
                      onClick={() => setSelectedPackage(packageKey)}
                    >
                      {isRecommended && (
                        <div className="absolute -top-2 -right-2 bg-[#00bbb4] text-black text-xs px-2 py-1 rounded-full">
                          แนะนำ
                        </div>
                      )}
                      <h3 className="font-semibold mb-2">{packageInfo.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        ส่วนลด {packageInfo.discount * 100}%
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cost Summary */}
        <div className="lg:row-span-2">
          <div className="sticky top-24">
            <Card>
              <CardHeader>
                <CardTitle>สรุปราคา</CardTitle>
                <CardDescription>ประมาณการราคาการติดตั้ง Smart Home</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">ราคารวมก่อนส่วนลด</span>
                    <span>{formatPrice(totalCost)} บาท</span>
                  </div>

                  {selectedPackage && (
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">ส่วนลดแพ็คเกจ {smartHomeOptions.packages[selectedPackage].name}</span>
                      <span className="text-green-600">-{formatPrice(totalCost * smartHomeOptions.packages[selectedPackage].discount)} บาท</span>
                    </div>
                  )}

                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">ราคารวมทั้งสิ้น</span>
                      <span className="text-xl font-bold">{formatPrice(totalCost)} บาท</span>
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    ราคานี้รวมค่าอุปกรณ์และค่าติดตั้ง (ผ่อน 0% นาน 10 เดือน สำหรับบัตรเครดิตที่ร่วมรายการ)
                  </div>

                  <div className="bg-zinc-50 p-3 rounded-md mt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">ผ่อนชำระรายเดือน</span>
                      <span className="font-semibold text-[#00bbb4]">{formatPrice(monthlyInstallment)} บาท/เดือน</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      ระยะเวลาผ่อนชำระ 10 เดือน
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Info className="h-4 w-4 shrink-0 mt-0.5" />
                    <p>ราคานี้เป็นการประมาณการเบื้องต้น ราคาจริงอาจมีการเปลี่ยนแปลงขึ้นอยู่กับการสำรวจพื้นที่และความต้องการเฉพาะของลูกค้า</p>
                  </div>

                  <Button className="w-full bg-[#00bbb4] text-black hover:bg-[#e6ed4a]">
                    <Download className="h-4 w-4 mr-2" />
                    บันทึกใบเสนอราคา
                  </Button>

                  <div className="grid grid-cols-2 gap-2">
                    <Button asChild variant="outline">
                      <Link href="/packages">ดูแพ็คเกจทั้งหมด</Link>
                    </Button>
                    <Button asChild>
                      <Link href="/contact">ติดต่อเรา</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}