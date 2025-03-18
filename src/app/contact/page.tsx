"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CalendarIcon, Check, Phone, Mail, MapPin } from "lucide-react";
import { format } from "date-fns";
import { th } from "date-fns/locale";

// Metadata moved to a separate metadata.ts file

const contactInfo = [
  {
    title: "โทรศัพท์",
    contact: "02-123-4567",
    icon: <Phone className="h-6 w-6" />,
    action: "โทรหาเรา",
    link: "tel:021234567",
  },
  {
    title: "อีเมล",
    contact: "info@smarthome.th",
    icon: <Mail className="h-6 w-6" />,
    action: "ส่งอีเมลหาเรา",
    link: "mailto:info@smarthome.th",
  },
  {
    title: "ที่อยู่",
    contact: "123 อาคารสมาร์ทเพลส ชั้น 5 ถ.สุขุมวิท กรุงเทพฯ 10110",
    icon: <MapPin className="h-6 w-6" />,
    action: "ดูแผนที่",
    link: "https://maps.google.com",
  },
];

const appointmentTypes = [
  { id: "consultation", label: "ปรึกษาเกี่ยวกับระบบ Smart Home" },
  { id: "survey", label: "นัดหมายเพื่อสำรวจพื้นที่" },
  { id: "installation", label: "นัดหมายเพื่อติดตั้งระบบ" },
  { id: "support", label: "ปรึกษาปัญหาการใช้งาน/บริการหลังการขาย" },
];

const timeSlots = [
  { id: "morning", label: "ช่วงเช้า (9:00 - 12:00 น.)" },
  { id: "afternoon", label: "ช่วงบ่าย (13:00 - 16:00 น.)" },
  { id: "evening", label: "ช่วงเย็น (16:00 - 19:00 น.)" },
];

const contactReasons = [
  { id: "information", label: "สอบถามข้อมูลทั่วไป" },
  { id: "quotation", label: "ขอใบเสนอราคา" },
  { id: "complaint", label: "แจ้งปัญหาการใช้งาน" },
  { id: "partnership", label: "สอบถามเรื่องการเป็นพันธมิตรทางธุรกิจ" },
  { id: "review", label: "ส่งรีวิวการใช้งาน" },
  { id: "other", label: "อื่นๆ" },
];

export default function ContactPage({ searchParams }) {
  const [date, setDate] = useState(null);
  const [timeSlot, setTimeSlot] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const defaultTab = searchParams?.review ? "message" : "appointment";
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">
          ติดต่อเรา
        </h1>
        <p className="text-xl text-muted-foreground">
          สอบถามข้อมูลหรือนัดหมายการติดตั้งระบบ Smart Home
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {contactInfo.map((info, index) => (
          <Card key={index}>
            <CardContent className="p-6 flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-[#00bbb4] mr-4">
                {info.icon}
              </div>
              <div>
                <h3 className="font-medium mb-1">{info.title}</h3>
                <p className="text-muted-foreground mb-2">{info.contact}</p>
                <Button variant="link" asChild className="p-0 font-medium text-[#00bbb4] hover:text-yellow-800">
                  <a href={info.link} target={info.title === "ที่อยู่" ? "_blank" : undefined} rel="noreferrer">
                    {info.action}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {formSubmitted ? (
        <Card className="max-w-3xl mx-auto mb-16">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">ขอบคุณที่ติดต่อเรา!</h2>
            <p className="text-muted-foreground mb-6">
              เราได้รับข้อมูลของคุณเรียบร้อยแล้ว ทีมงานของเราจะติดต่อกลับหาคุณภายใน 24 ชั่วโมง
            </p>
            <Button onClick={() => setFormSubmitted(false)} className="bg-[#00bbb4] text-black hover:bg-[#e6ed4a]">
              ส่งข้อความเพิ่มเติม
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card className="max-w-3xl mx-auto mb-16">
          <CardHeader>
            <CardTitle>ติดต่อทีมงานของเรา</CardTitle>
            <CardDescription>นัดหมายเพื่อปรึกษาหรือติดตั้งระบบ Smart Home หรือส่งข้อความถึงเรา</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="appointment">นัดหมาย</TabsTrigger>
                <TabsTrigger value="message">ส่งข้อความ</TabsTrigger>
              </TabsList>

              <TabsContent value="appointment">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">ชื่อ-นามสกุล</Label>
                      <Input id="name" placeholder="ชื่อ-นามสกุล" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">เบอร์โทรศัพท์</Label>
                      <Input id="phone" type="tel" placeholder="0x-xxx-xxxx" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">อีเมล</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="appointmentType">ประเภทการนัดหมาย</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="เลือกประเภทการนัดหมาย" />
                        </SelectTrigger>
                        <SelectContent>
                          {appointmentTypes.map((type) => (
                            <SelectItem key={type.id} value={type.id}>{type.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>วันที่ต้องการนัดหมาย</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP", { locale: th }) : "เลือกวันที่"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => {
                              const today = new Date();
                              today.setHours(0, 0, 0, 0);
                              return date < today;
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeSlot">ช่วงเวลาที่สะดวก</Label>
                      <RadioGroup value={timeSlot} onValueChange={setTimeSlot}>
                        {timeSlots.map((slot) => (
                          <div key={slot.id} className="flex items-center space-x-2">
                            <RadioGroupItem value={slot.id} id={slot.id} />
                            <Label htmlFor={slot.id}>{slot.label}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">ที่อยู่สำหรับการติดตั้ง/นัดหมาย</Label>
                    <Textarea id="address" placeholder="ที่อยู่สำหรับการติดตั้งหรือนัดหมาย" />
                  </div>

                  <Button type="submit" className="w-full bg-[#00bbb4] text-black hover:bg-[#e6ed4a]">
                    ส่งคำขอนัดหมาย
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="message">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="msg-name">ชื่อ-นามสกุล</Label>
                      <Input id="msg-name" placeholder="ชื่อ-นามสกุล" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="msg-email">อีเมล</Label>
                      <Input id="msg-email" type="email" placeholder="your@email.com" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="msg-subject">หัวข้อ</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="เลือกหัวข้อ" />
                      </SelectTrigger>
                      <SelectContent>
                        {contactReasons.map((reason) => (
                          <SelectItem key={reason.id} value={reason.id}>{reason.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="msg-message">ข้อความ</Label>
                    <Textarea id="msg-message" placeholder="รายละเอียดของข้อความที่ต้องการส่งถึงเรา" rows={6} required />
                  </div>

                  <Button type="submit" className="w-full bg-[#00bbb4] text-black hover:bg-[#e6ed4a]">
                    ส่งข้อความ
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}

      <div className="border rounded-lg overflow-hidden h-96 mx-auto mb-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124024.65299227383!2d100.50162159999999!3d13.7500246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok!5e0!3m2!1sen!2sth!4v1666619265672!5m2!1sen!2sth"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        />
      </div>

      <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">ให้เราช่วยคุณเริ่มต้นใช้งาน Smart Home</h2>
          <p className="text-muted-foreground mb-6">
            ทีมงานของเรามีความเชี่ยวชาญและพร้อมให้คำแนะนำเพื่อให้คุณได้ระบบ Smart Home ที่เหมาะกับความต้องการมากที่สุด
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#00bbb4] text-black hover:bg-[#e6ed4a]">
              <a href="tel:021234567">โทรหาเราเลย</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#" onClick={() => setActiveTab("appointment")}>นัดหมายตอนนี้</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
