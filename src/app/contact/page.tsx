"use client";

import { useState } from "react";
// Only import existing components
import { Button } from "@/components/ui/button";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card";
import { CalendarIcon, Check, Phone, Mail, MapPin } from "lucide-react";
import React from 'react';

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

interface TabType {
  value: string;
  label: string;
}

interface SimpleTabsProps {
  tabs: TabType[];
  activeTab: string;
  onTabChange: (tabValue: string) => void;
  children: React.ReactNode;
}

// Basic tabs component replacement
const SimpleTabs: React.FC<SimpleTabsProps> = ({ tabs, activeTab, onTabChange, children }) => {
  return (
    <div>
      <div className="grid w-full grid-cols-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`py-2.5 px-4 font-semibold text-sm rounded-2xl transition-all ${
              activeTab === tab.value
                ? "bg-[#2a2014] text-[#fbf5e9] shadow-sm"
                : "bg-white/70 text-[#6e5f50] hover:bg-white border border-[#3c280f]/10"
            }`}
            onClick={() => onTabChange(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
};

interface ContactPageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false);
  
  // กำหนดค่า default ของ activeTab โดยดูจาก URL ตอนแรกที่เปิดหน้า
  const [activeTab, setActiveTab] = useState<string>(() => {
    // เนื่องจากเป็น client component จึงต้องตรวจสอบว่า window พร้อมใช้งานหรือไม่
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.has('review') ? "message" : "appointment";
    }
    return "appointment";
  });

  // สถานะสำหรับการแสดง loading และ error
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    const formData = new FormData(e.currentTarget);
    const formDataObj = Object.fromEntries(formData.entries());
    
    // ใช้บริการ webhook.site เพื่อทดสอบ (แทนที่ด้วย URL ของคุณเอง)
    // สร้าง webhook ทดสอบได้ที่: https://webhook.site/
    // const webhookUrl = "https://webhook.site/YOUR_TEST_WEBHOOK_ID";
    
    // Discord webhook URL (ใส่ webhook URL ของคุณที่นี่)
    const webhookUrl = "https://discord.com/api/webhooks/1353096824142954608/g5jH5nwiGIem9xE9-o8Wu1pU8QBmmAHgg0n4k6760Cymq8VdMWiFe_RuoNoVisBH98q8";
    
    try {
      // แสดงข้อมูลที่จะส่งใน console เสมอ
      console.log("กำลังส่งข้อมูลฟอร์ม:", formDataObj);
      
      // สร้าง message สำหรับส่งไปยัง webhook
      let message: Record<string, any>;
      
      if (activeTab === "appointment") {
        // ข้อมูลการนัดหมาย
        const appointmentType = appointmentTypes.find(type => type.id === formDataObj.appointmentType as string)?.label || formDataObj.appointmentType;
        const timeSlotLabel = timeSlots.find(slot => slot.id === formDataObj.timeSlot as string)?.label || formDataObj.timeSlot;
        
        message = {
          type: "appointment",
          title: "คำขอนัดหมายใหม่",
          data: {
            name: formDataObj.name || "ไม่ระบุ",
            phone: formDataObj.phone || "ไม่ระบุ",
            email: formDataObj.email || "ไม่ระบุ",
            appointmentType: appointmentType || "ไม่ระบุ",
            date: formatDate(selectedDate) || "ไม่ระบุ",
            timeSlot: timeSlotLabel || "ไม่ระบุ",
            address: formDataObj.address || "ไม่ระบุ"
          },
          timestamp: new Date().toISOString()
        };
      } else {
        // ข้อความติดต่อ
        const reasonLabel = contactReasons.find(reason => reason.id === formDataObj['msg-subject'] as string)?.label || formDataObj['msg-subject'];
        
        message = {
          type: "message",
          title: "ข้อความติดต่อใหม่",
          data: {
            name: formDataObj['msg-name'] || "ไม่ระบุ",
            email: formDataObj['msg-email'] || "ไม่ระบุ",
            subject: reasonLabel || "ไม่ระบุ",
            message: formDataObj['msg-message'] || "ไม่มีข้อความ"
          },
          timestamp: new Date().toISOString()
        };
      }
      
      // สร้าง Discord message format ที่ถูกต้อง
      const discordMessage = {
        content: activeTab === "appointment" ? "มีการส่งคำขอนัดหมายใหม่! 📅" : "มีข้อความติดต่อใหม่! 📨",
        embeds: [{
          title: activeTab === "appointment" ? "ข้อมูลการนัดหมาย" : "ข้อความติดต่อ",
          color: 0xc8f94a,
          fields: Object.entries(message.data).map(([key, value]) => ({
            name: key,
            value: String(value || "ไม่ระบุ"), // แปลงเป็น string เสมอและไม่เป็นค่าว่าง
            inline: key !== "address" && key !== "message"
          })),
          timestamp: new Date().toISOString()
        }]
      };
      
      console.log("ข้อมูลที่จะส่ง:", {
        webhookUrl,
        message: message,
        discordMessage: discordMessage
      });
      
      // ส่งข้อมูลไปยัง webhook URL ที่กำหนด
      // ใช้รูปแบบข้อความที่เหมาะสมกับ webhook ที่ใช้
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordMessage), // ใช้รูปแบบสำหรับ Discord webhook
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('การส่งข้อมูลไม่สำเร็จ:', errorText);
        setSubmitError(`ส่งข้อมูลไม่สำเร็จ: ${response.status} ${response.statusText}`);
        // แสดง alert เพื่อให้เห็นชัดเจน
        alert(`ส่งข้อมูลไม่สำเร็จ: ${response.status} ${response.statusText}`);
      } else {
        console.log('ส่งข้อมูลสำเร็จ!', await response.text());
        // แสดง alert เพื่อให้เห็นชัดเจน
        alert('ส่งข้อมูลสำเร็จ!');
        // เปลี่ยนสถานะเป็นส่งแล้ว
        setFormSubmitted(true);
      }
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการส่งข้อมูล:', error);
      setSubmitError(`เกิดข้อผิดพลาด: ${error instanceof Error ? error.message : String(error)}`);
      // แสดง alert เพื่อให้เห็นชัดเจน
      alert(`เกิดข้อผิดพลาด: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString: string): string => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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
              <div className="w-12 h-12 bg-[#2a2014] rounded-2xl flex items-center justify-center text-[#c8f94a] mr-4 shadow-xs shrink-0">
                {info.icon}
              </div>
              <div>
                <h3 className="font-bold text-[#2a2014] mb-1">{info.title}</h3>
                <p className="text-sm text-[#6e5f50] mb-2">{info.contact}</p>
                <Button variant="link" asChild className="p-0 font-semibold text-[#2a2014] hover:text-[#6e5f50]">
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
            <Button onClick={() => setFormSubmitted(false)} className="bg-[#2a2014] text-[#fbf5e9] hover:bg-[#3d2f20] hover:text-[#c8f94a] rounded-2xl h-11 px-6 font-semibold shadow-sm transition-all">
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
            <SimpleTabs
              tabs={[
                { value: "appointment", label: "นัดหมาย" },
                { value: "message", label: "ส่งข้อความ" }
              ]}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            >
              {activeTab === "appointment" && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block font-medium">ชื่อ-นามสกุล</label>
                      <input 
                        id="name"
                        name="name"
                        placeholder="ชื่อ-นามสกุล" 
                        required 
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block font-medium">เบอร์โทรศัพท์</label>
                      <input 
                        id="phone"
                        name="phone"
                        type="tel" 
                        placeholder="0x-xxx-xxxx" 
                        required 
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block font-medium">อีเมล</label>
                      <input 
                        id="email"
                        name="email"
                        type="email" 
                        placeholder="your@email.com" 
                        required 
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="appointmentType" className="block font-medium">ประเภทการนัดหมาย</label>
                      <select 
                        id="appointmentType"
                        name="appointmentType" 
                        required 
                        className="w-full p-2 border rounded-md"
                      >
                        <option value="">เลือกประเภทการนัดหมาย</option>
                        {appointmentTypes.map((type) => (
                          <option key={type.id} value={type.id}>{type.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block font-medium">วันที่ต้องการนัดหมาย</label>
                      <div className="relative">
                        <button
                          type="button"
                          className="w-full p-2 border rounded-md flex items-center justify-start"
                          onClick={() => setCalendarOpen(!calendarOpen)}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? formatDate(selectedDate) : "เลือกวันที่"}
                        </button>
                        {calendarOpen && (
                          <div className="absolute z-10 mt-1 bg-white border rounded-md shadow-lg p-4">
                            <input 
                              type="date"
                              name="appointmentDate"
                              value={selectedDate}
                              onChange={(e) => {
                                setSelectedDate(e.target.value);
                                setCalendarOpen(false);
                              }} 
                              className="p-2 border rounded-md"
                              min={new Date().toISOString().split('T')[0]}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block font-medium">ช่วงเวลาที่สะดวก</label>
                      <div className="space-y-2">
                        {timeSlots.map((slot) => (
                          <div key={slot.id} className="flex items-center space-x-2">
                            <input 
                              type="radio" 
                              id={slot.id} 
                              name="timeSlot" 
                              value={slot.id}
                              checked={timeSlot === slot.id}
                              onChange={(e) => setTimeSlot(e.target.value)}
                            />
                            <label htmlFor={slot.id}>{slot.label}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="address" className="block font-medium">ที่อยู่สำหรับการติดตั้ง/นัดหมาย</label>
                    <textarea 
                      id="address"
                      name="address"
                      placeholder="ที่อยู่สำหรับการติดตั้งหรือนัดหมาย"
                      className="w-full p-2 border rounded-md h-24"
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#2a2014] text-[#fbf5e9] hover:bg-[#3d2f20] hover:text-[#c8f94a] rounded-2xl h-12 font-semibold shadow-md transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'กำลังส่งข้อมูล...' : 'ส่งคำขอนัดหมาย'}
                  </Button>
                  
                  {submitError && (
                    <div className="mt-3 p-3 bg-red-100 text-red-700 rounded-md">
                      <p className="font-bold">เกิดข้อผิดพลาด:</p>
                      <p>{submitError}</p>
                    </div>
                  )}
                </form>
              )}

              {activeTab === "message" && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="msg-name" className="block font-medium">ชื่อ-นามสกุล</label>
                      <input 
                        id="msg-name"
                        name="msg-name"
                        placeholder="ชื่อ-นามสกุล" 
                        required 
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="msg-email" className="block font-medium">อีเมล</label>
                      <input 
                        id="msg-email"
                        name="msg-email"
                        type="email" 
                        placeholder="your@email.com" 
                        required 
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="msg-subject" className="block font-medium">หัวข้อ</label>
                    <select 
                      id="msg-subject"
                      name="msg-subject"
                      required 
                      className="w-full p-2 border rounded-md"
                    >
                      <option value="">เลือกหัวข้อ</option>
                      {contactReasons.map((reason) => (
                        <option key={reason.id} value={reason.id}>{reason.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="msg-message" className="block font-medium">ข้อความ</label>
                    <textarea 
                      id="msg-message"
                      name="msg-message"
                      placeholder="รายละเอียดของข้อความที่ต้องการส่งถึงเรา" 
                      rows={6} 
                      required 
                      className="w-full p-2 border rounded-md"
                    ></textarea>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#2a2014] text-[#fbf5e9] hover:bg-[#3d2f20] hover:text-[#c8f94a] rounded-2xl h-12 font-semibold shadow-md transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'กำลังส่งข้อมูล...' : 'ส่งข้อความ'}
                  </Button>
                  
                  {submitError && (
                    <div className="mt-3 p-3 bg-red-100 text-red-700 rounded-md">
                      <p className="font-bold">เกิดข้อผิดพลาด:</p>
                      <p>{submitError}</p>
                    </div>
                  )}
                </form>
              )}
            </SimpleTabs>
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
            <Button asChild className="bg-[#2a2014] text-[#fbf5e9] hover:bg-[#3d2f20] hover:text-[#c8f94a] rounded-2xl h-11 px-6 font-semibold shadow-sm transition-all">
              <a href="tel:021234567">โทรหาเราเลย</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#" onClick={(e) => {
                e.preventDefault();
                setActiveTab("appointment");
                // ใช้ querySelector เพื่อหาองค์ประกอบที่ต้องการเลื่อนไป
                const formElement = document.querySelector('.max-w-3xl.mx-auto.mb-16');
                if (formElement) {
                  const offsetTop = formElement.getBoundingClientRect().top + window.pageYOffset;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                  });
                }
              }}>นัดหมายตอนนี้</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}