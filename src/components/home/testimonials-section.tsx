"use client";

import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import type { CarouselApi } from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "การติดตั้ง Smart Home ทำให้ชีวิตประจำวันสะดวกสบายขึ้นมาก สามารถควบคุมทุกอย่างได้จากมือถือ บริการหลังการขายดีเยี่ยม ทีมงานให้คำแนะนำและแก้ไขปัญหาได้อย่างรวดเร็ว",
    author: "คุณสมศักดิ์ จิตรสุขใส",
    title: "เจ้าของบ้านเดี่ยว จ.นนทบุรี",
    rating: 5,
  },
  {
    quote: "ประทับใจในการบริการมาก ทีมงานติดตั้งเป็นมืออาชีพ ทำงานรวดเร็วและเรียบร้อย ระบบทำงานได้อย่างมีประสิทธิภาพ ช่วยประหยัดค่าไฟและเพิ่มความปลอดภัยให้กับบ้านของเรา",
    author: "คุณพิมพ์มาดา วิริยะพันธ์",
    title: "เจ้าของคอนโดมิเนียม กรุงเทพฯ",
    rating: 5,
  },
  {
    quote: "ใช้บริการติดตั้งระบบกล้องวงจรปิดและระบบล็อคประตูอัจฉริยะ ทำให้รู้สึกอุ่นใจเวลาไม่อยู่บ้าน สามารถเช็คและควบคุมทุกอย่างได้จากมือถือ ราคาคุ้มค่ากับคุณภาพที่ได้รับ",
    author: "คุณนพรัตน์ สุขสวัสดิ์",
    title: "เจ้าของธุรกิจรีสอร์ท จ.เชียงใหม่",
    rating: 4,
  },
  {
    quote: "บริการดีเยี่ยม มีความเป็นมืออาชีพสูง ให้คำแนะนำและวางแผนการติดตั้งที่เหมาะสมกับบ้านของเรา ระบบใช้งานง่าย แม้แต่ผู้สูงอายุอย่างแม่ก็ใช้งานได้ไม่ยาก",
    author: "คุณวิชัย เจริญทรัพย์",
    title: "เจ้าของบ้านเดี่ยว จ.ปทุมธานี",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const onSelect = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl mb-4">
            เสียงจากลูกค้าของเรา
          </h2>
          <p className="text-xl text-muted-foreground">
            ความประทับใจจากผู้ใช้บริการ Smart Home
          </p>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="max-w-5xl mx-auto"
          setApi={setApi}
          onSelect={onSelect}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-4/5 lg:basis-3/4 px-4">
                <div className={`bg-zinc-50 p-8 rounded-lg border transition-all ${activeIndex === index ? 'border-[#00bbb4] shadow-md' : 'border-gray-200'}`}>
                  <div className="mb-6 text-[#00bbb4]">
                    <Quote className="h-8 w-8" />
                  </div>
                  <blockquote className="text-xl mb-8">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="mr-4 bg-[#00bbb4] h-12 w-12 rounded-full flex items-center justify-center text-black font-bold text-xl">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                      <div className="flex mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={i < testimonial.rating ? "#EAB308" : "none"}
                            stroke={i < testimonial.rating ? "#EAB308" : "currentColor"}
                            className="h-4 w-4 mr-0.5"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-center gap-2">
            <CarouselPrevious className="relative static border-[#00bbb4] text-[#00bbb4] hover:bg-yellow-100 hover:text-[#009991] hover:border-yellow-700" />
            <CarouselNext className="relative static border-[#00bbb4] text-[#00bbb4] hover:bg-yellow-100 hover:text-[#009991] hover:border-yellow-700" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
