import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Quote } from "lucide-react";

export const metadata = {
  title: "รีวิวจากลูกค้า - Smart Home",
  description: "รีวิวและความประทับใจจากลูกค้าที่ใช้บริการติดตั้ง Smart Home กับเรา",
};

const categories = [
  { id: "all", name: "ทั้งหมด" },
  { id: "condo", name: "คอนโดมิเนียม" },
  { id: "house", name: "บ้านเดี่ยว" },
  { id: "townhouse", name: "ทาวน์เฮาส์" },
  { id: "commercial", name: "อาคารพาณิชย์" },
];

const testimonials = [
  {
    id: 1,
    name: "คุณสมชาย จิตรอำรุง",
    position: "เจ้าของบ้านเดี่ยว จ.นนทบุรี",
    quote: "ผมประทับใจกับบริการติดตั้ง Smart Home มาก ทีมงานมืออาชีพ ทำงานรวดเร็วและเรียบร้อย ระบบทำงานได้ดีเยี่ยม สามารถควบคุมทุกอย่างในบ้านได้จากมือถือเพียงเครื่องเดียว ช่วยประหยัดพลังงานและเพิ่มความปลอดภัยให้กับบ้านของเรา",
    rating: 5,
    date: "15 มีนาคม 2567",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2574&auto=format&fit=crop",
    category: "house",
    featured: true,
    systems: ["ระบบไฟอัตโนมัติ", "ระบบรักษาความปลอดภัย", "ระบบเครื่องใช้ไฟฟ้าอัจฉริยะ"],
  },
  {
    id: 2,
    name: "คุณนภา วงศ์ประภา",
    position: "เจ้าของคอนโดมิเนียม สุขุมวิท",
    quote: "การติดตั้ง Smart Home ในคอนโดของฉันเปลี่ยนการอยู่อาศัยไปอย่างสิ้นเชิง สามารถควบคุมแสงไฟ แอร์ และเครื่องใช้ไฟฟ้าได้ง่ายๆ ผ่านมือถือหรือคำสั่งเสียง ประหยัดพื้นที่และยังช่วยประหยัดค่าไฟได้มากกว่า 20% ทีมงานติดตั้งเป็นมืออาชีพ สะอาดเรียบร้อย แนะนำเลยค่ะ",
    rating: 5,
    date: "5 มีนาคม 2567",
    image: "https://images.unsplash.com/photo-1560185008-b033106af5c3?q=80&w=2670&auto=format&fit=crop",
    category: "condo",
    featured: true,
    systems: ["ระบบไฟอัตโนมัติ", "ระบบเครื่องปรับอากาศอัจฉริยะ", "ระบบสั่งงานด้วยเสียง"],
  },
  {
    id: 3,
    name: "คุณอนุชา พัฒนธำรง",
    position: "เจ้าของร้านอาหาร จ.เชียงใหม่",
    quote: "ติดตั้งระบบ Smart Home ในร้านอาหาร ช่วยให้การบริหารจัดการร้านง่ายขึ้นมาก ทั้งระบบไฟ แอร์ และกล้องวงจรปิด สามารถควบคุมได้แม้ไม่ได้อยู่ที่ร้าน ช่วยประหยัดค่าไฟและเพิ่มความปลอดภัย ลูกค้าก็ชื่นชมบรรยากาศที่ทันสมัย คุ้มค่ากับการลงทุนมากครับ",
    rating: 5,
    date: "20 กุมภาพันธ์ 2567",
    image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2785&auto=format&fit=crop",
    category: "commercial",
    featured: false,
    systems: ["ระบบไฟอัตโนมัติ", "ระบบเครื่องปรับอากาศอัจฉริยะ", "ระบบรักษาความปลอดภัย"],
  },
  {
    id: 4,
    name: "คุณวิภาวี สุนทรเกียรติ",
    position: "เจ้าของทาวน์โฮม จ.ปทุมธานี",
    quote: "เลือกติดตั้ง Smart Home เพราะมีลูกเล็ก ต้องการความปลอดภัยและความสะดวกสบาย หลังติดตั้งแล้วชีวิตง่ายขึ้นมาก โดยเฉพาะระบบกล้องที่สามารถดูลูกได้ตลอดเวลาแม้ไม่อยู่บ้าน ระบบไฟอัตโนมัติที่เปิดปิดตามการเคลื่อนไหวช่วยประหยัดไฟ ระบบล็อคประตูที่ปลอดภัย ทีมงานบริการดีมาก ตอบคำถามใส่ใจทุกรายละเอียด",
    rating: 5,
    date: "15 กุมภาพันธ์ 2567",
    image: "https://images.unsplash.com/photo-1605146768851-eda79da34897?q=80&w=2670&auto=format&fit=crop",
    category: "townhouse",
    featured: false,
    systems: ["ระบบรักษาความปลอดภัย", "ระบบไฟอัตโนมัติ", "ระบบล็อคประตูอัจฉริยะ"],
  },
  {
    id: 5,
    name: "คุณธนากร เจริญทรัพย์",
    position: "เจ้าของบ้านเดี่ยว จ.ระยอง",
    quote: "ผมมีบ้านหลังใหญ่และต้องการระบบที่ช่วยประหยัดพลังงานและสะดวกในการควบคุม หลังจากติดตั้ง Smart Home ช่วยประหยัดค่าไฟได้เกือบ 30% และที่สำคัญคือความสะดวกสบายที่เพิ่มขึ้น ชอบมากที่สามารถสั่งงานด้วยเสียงและตั้งค่าระบบอัตโนมัติได้ตามต้องการ",
    rating: 4,
    date: "10 กุมภาพันธ์ 2567",
    image: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?q=80&w=2671&auto=format&fit=crop",
    category: "house",
    featured: false,
    systems: ["ระบบประหยัดพลังงาน", "ระบบสั่งงานด้วยเสียง", "ระบบควบคุมเครื่องใช้ไฟฟ้า"],
  },
  {
    id: 6,
    name: "คุณพิมพ์มาดา วิษณุรักษ์",
    position: "เจ้าของคอนโดมิเนียม พัทยา",
    quote: "ฉันมีคอนโดที่พัทยาแต่ไม่ได้อยู่ประจำ การติดตั้ง Smart Home ทำให้สามารถควบคุมและตรวจสอบทุกอย่างได้จากระยะไกล ทั้งระบบกล้อง ระบบไฟ และแอร์ เวลาจะมาพัก ก็สามารถเปิดแอร์ล่วงหน้าผ่านแอพได้ ให้ห้องเย็นพอดีเมื่อมาถึง สะดวกมาก",
    rating: 5,
    date: "1 กุมภาพันธ์ 2567",
    image: "https://images.unsplash.com/photo-1603512690375-9e1e3a035fc2?q=80&w=2552&auto=format&fit=crop",
    category: "condo",
    featured: false,
    systems: ["ระบบรักษาความปลอดภัย", "ระบบควบคุมระยะไกล", "ระบบเครื่องปรับอากาศอัจฉริยะ"],
  },
  {
    id: 7,
    name: "คุณสมศักดิ์ ทรัพย์อนันต์",
    position: "เจ้าของกิจการร้านค้า กรุงเทพฯ",
    quote: "ติดตั้งในร้านค้าทั้งระบบไฟ แอร์ และระบบรักษาความปลอดภัย ช่วยประหยัดต้นทุนในการบริหารจัดการได้มาก โดยเฉพาะค่าไฟที่ลดลงเนื่องจากระบบเปิดปิดอัตโนมัติตามเวลาที่กำหนด ระบบกล้องที่ดูออนไลน์ได้ตลอดเวลาทำให้อุ่นใจแม้ไม่อยู่ที่ร้าน",
    rating: 4,
    date: "25 มกราคม 2567",
    image: "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?q=80&w=2670&auto=format&fit=crop",
    category: "commercial",
    featured: false,
    systems: ["ระบบไฟอัตโนมัติ", "ระบบเครื่องปรับอากาศ", "ระบบรักษาความปลอดภัย"],
  },
  {
    id: 8,
    name: "คุณสุนันทา นวลละออง",
    position: "เจ้าของทาวน์โฮม จ.สมุทรปราการ",
    quote: "ตัดสินใจติดตั้ง Smart Home เพราะต้องการยกระดับคุณภาพชีวิต ผลลัพธ์เกินความคาดหมาย ทั้งความสะดวกสบายที่เพิ่มขึ้น และการประหยัดพลังงาน ชอบระบบไฟอัตโนมัติมากที่สุด ไม่ต้องกังวลว่าจะลืมปิดไฟอีกต่อไป ทีมงานให้คำแนะนำดีมาก บริการหลังการขายประทับใจ",
    rating: 5,
    date: "15 มกราคม 2567",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2670&auto=format&fit=crop",
    category: "townhouse",
    featured: false,
    systems: ["ระบบไฟอัตโนมัติ", "ระบบประหยัดพลังงาน", "ระบบควบคุมผ่านมือถือ"],
  },
];

export default function TestimonialsPage() {
  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">
          รีวิวจากลูกค้า
        </h1>
        <p className="text-xl text-muted-foreground">
          เสียงจากลูกค้าที่ใช้บริการติดตั้ง Smart Home กับเรา
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex overflow-x-auto pb-4 mb-8 -mx-4 px-4 sm:px-0 sm:justify-center space-x-2">
        {categories.map((category) => (
          <button
            key={category.id}
            className="min-w-fit rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Featured Testimonials */}
      {testimonials.filter(t => t.featured).length > 0 && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">รีวิวแนะนำ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.filter(t => t.featured).map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg border border-zinc-200 overflow-hidden shadow">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  <div className="bg-zinc-950 relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-zinc-300">{testimonial.position}</div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col">
                    <div className="mb-4 text-[#00bbb4]">
                      <Quote className="h-8 w-8" />
                    </div>
                    <blockquote className="flex-1 text-muted-foreground mb-4 line-clamp-[7]">
                      {testimonial.quote}
                    </blockquote>
                    <div className="mt-auto">
                      <div className="flex mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={i < testimonial.rating ? "#EAB308" : "none"}
                            stroke={i < testimonial.rating ? "#EAB308" : "currentColor"}
                            className="h-5 w-5 mr-0.5"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {testimonial.systems.map((system, idx) => (
                          <span key={idx} className="inline-block bg-zinc-100 text-zinc-800 text-xs px-2 py-1 rounded-full">
                            {system}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Testimonials */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">รีวิวทั้งหมด</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.filter(t => !t.featured).map((testimonial) => (
            <div key={testimonial.id} className="bg-white border border-zinc-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-[#00bbb4]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                </div>
              </div>
              <div className="mb-4 text-[#00bbb4]">
                <Quote className="h-6 w-6" />
              </div>
              <blockquote className="text-muted-foreground mb-4 line-clamp-4">
                {testimonial.quote}
              </blockquote>
              <div className="flex mb-4">
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
                <span className="text-xs text-muted-foreground ml-2 mt-0.5">{testimonial.date}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {testimonial.systems.map((system, idx) => (
                  <span key={idx} className="inline-block bg-zinc-100 text-zinc-800 text-xs px-2 py-1 rounded-full">
                    {system}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Testimonials */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">วิดีโอรีวิว</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-100 aspect-video rounded-lg flex items-center justify-center border">
            <div className="text-center p-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-zinc-400">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
              <span className="text-muted-foreground">คลิกเพื่อดูวิดีโอ</span>
            </div>
          </div>
          <div className="bg-zinc-100 aspect-video rounded-lg flex items-center justify-center border">
            <div className="text-center p-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-zinc-400">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="10 8 16 12 10 16 10 8"></polygon>
              </svg>
              <span className="text-muted-foreground">คลิกเพื่อดูวิดีโอ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Your Review */}
      <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">แชร์ประสบการณ์ของคุณ</h2>
          <p className="text-muted-foreground mb-6">
            เป็นลูกค้าของเรา? แชร์ประสบการณ์การใช้งาน Smart Home ของคุณให้ผู้อื่นได้รับทราบ
          </p>
          <Button asChild className="bg-[#00bbb4] text-black hover:bg-[#e6ed4a]">
            <Link href="/contact?review=true">แชร์รีวิวของคุณ</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
