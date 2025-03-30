import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card";
import { Search } from "lucide-react";
import Image from 'next/image';

export const metadata = {
  title: "คลังความรู้ Smart Home - ติดตั้ง Smart Home",
  description: "เรียนรู้เกี่ยวกับเทคโนโลยี Smart Home และวิธีการใช้งานอุปกรณ์ต่างๆ",
};

const categories = [
  {
    id: "basics",
    name: "พื้นฐาน Smart Home",
    icon: "🏠",
    topics: [
      { id: "what-is-smart-home", title: "Smart Home คืออะไร?", tags: ["พื้นฐาน", "เริ่มต้น"] },
      { id: "benefits", title: "ประโยชน์ของการติดตั้ง Smart Home", tags: ["พื้นฐาน", "คุ้มค่า"] },
      { id: "getting-started", title: "เริ่มต้นใช้งาน Smart Home อย่างไร", tags: ["พื้นฐาน", "เริ่มต้น"] },
      { id: "components", title: "องค์ประกอบของระบบ Smart Home", tags: ["พื้นฐาน", "อุปกรณ์"] },
    ]
  },
  {
    id: "technologies",
    name: "เทคโนโลยี Smart Home",
    icon: "🛜",
    topics: [
      { id: "communication-protocols", title: "โปรโตคอลการสื่อสารในระบบ Smart Home", tags: ["เทคนิค", "WiFi", "Zigbee", "Z-Wave"] },
      { id: "voice-control", title: "การควบคุมด้วยเสียง", tags: ["เทคนิค", "Google Assistant", "Alexa", "Siri"] },
      { id: "automation", title: "ระบบอัตโนมัติและ AI ในบ้าน", tags: ["เทคนิค", "AI", "อัตโนมัติ"] },
      { id: "connectivity", title: "การเชื่อมต่ออุปกรณ์ Smart Home", tags: ["เทคนิค", "การเชื่อมต่อ"] },
    ]
  },
  {
    id: "devices",
    name: "อุปกรณ์ Smart Home",
    icon: "🔌",
    topics: [
      { id: "smart-lights", title: "ระบบไฟอัจฉริยะ", tags: ["อุปกรณ์", "แสงสว่าง"] },
      { id: "smart-security", title: "ระบบรักษาความปลอดภัยอัจฉริยะ", tags: ["อุปกรณ์", "ความปลอดภัย"] },
      { id: "smart-climate", title: "ระบบควบคุมอุณหภูมิอัจฉริยะ", tags: ["อุปกรณ์", "เครื่องปรับอากาศ", "อุณหภูมิ"] },
      { id: "smart-entertainment", title: "ระบบความบันเทิงอัจฉริยะ", tags: ["อุปกรณ์", "ความบันเทิง"] },
    ]
  },
  {
    id: "installation",
    name: "การติดตั้งและการใช้งาน",
    icon: "🔧",
    topics: [
      { id: "planning", title: "การวางแผนติดตั้ง Smart Home", tags: ["การติดตั้ง", "วางแผน"] },
      { id: "diy-vs-professional", title: "ติดตั้งเองหรือจ้างมืออาชีพ?", tags: ["การติดตั้ง", "DIY", "มืออาชีพ"] },
      { id: "common-issues", title: "ปัญหาที่พบบ่อยและวิธีแก้ไข", tags: ["การใช้งาน", "วิธีแก้ปัญหา"] },
      { id: "maintenance", title: "การดูแลรักษาระบบ Smart Home", tags: ["การใช้งาน", "บำรุงรักษา"] },
    ]
  },
  {
    id: "advanced",
    name: "การใช้งานขั้นสูง",
    icon: "🚀",
    topics: [
      { id: "custom-automation", title: "การสร้างระบบอัตโนมัติแบบกำหนดเอง", tags: ["ขั้นสูง", "อัตโนมัติ"] },
      { id: "integration", title: "การรวมระบบหลายแบรนด์เข้าด้วยกัน", tags: ["ขั้นสูง", "การรวมระบบ"] },
      { id: "energy-monitoring", title: "การติดตามและประหยัดพลังงาน", tags: ["ขั้นสูง", "ประหยัดพลังงาน"] },
      { id: "security-tips", title: "เคล็ดลับความปลอดภัยสำหรับ Smart Home", tags: ["ขั้นสูง", "ความปลอดภัย"] },
    ]
  },
];

const featuredArticles = [
  {
    id: "smart-home-beginners",
    title: "คู่มือ Smart Home สำหรับมือใหม่",
    excerpt: "เรียนรู้พื้นฐานของระบบ Smart Home และวิธีการเริ่มต้นใช้งานอย่างง่ายๆ สำหรับผู้ที่สนใจแต่ยังไม่เคยใช้งานมาก่อน",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2670&auto=format&fit=crop",
    category: "พื้นฐาน",
  },
  {
    id: "save-energy",
    title: "ประหยัดพลังงานด้วย Smart Home",
    excerpt: "วิธีใช้ระบบ Smart Home เพื่อลดการใช้พลังงานและประหยัดค่าไฟฟ้าในบ้านของคุณ",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop",
    category: "ประหยัดพลังงาน",
  },
  {
    id: "security-system",
    title: "เสริมความปลอดภัยให้บ้านด้วย Smart Home",
    excerpt: "แนะนำระบบรักษาความปลอดภัยอัจฉริยะที่ช่วยปกป้องบ้านและครอบครัวของคุณ",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop&width=auto",
    category: "ความปลอดภัย",
  },
];

export default function KnowledgeBasePage() {
  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">
          คลังความรู้ Smart Home
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          เรียนรู้เกี่ยวกับเทคโนโลยี Smart Home และวิธีการใช้งานอุปกรณ์ต่างๆ
        </p>
        <div className="relative max-w-md mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="ค้นหาบทความ..."
            className="block w-full pl-10 pr-3 py-2 border border-zinc-300 rounded-md leading-5 bg-white placeholder-zinc-500 focus:outline-none focus:placeholder-zinc-400 focus:ring-1 focus:ring-yellow-500 focus:border-[#00bbb4]"
          />
        </div>
      </div>

      {/* Featured Articles */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">บทความแนะนำ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <Link key={article.id} href={`/knowledge-base/${article.id}`} className="group">
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="aspect-[16/9] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="mb-2">
                    <span className="inline-block bg-zinc-100 text-zinc-800 text-xs px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-[#00bbb4] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                    {article.excerpt}
                  </p>
                  <span className="text-sm text-[#00bbb4] group-hover:text-yellow-800 font-medium inline-flex items-center">
                    อ่านเพิ่มเติม
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">หมวดหมู่</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card key={category.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <CardTitle>{category.name}</CardTitle>
                </div>
                <CardDescription>
                  {category.topics.length} บทความ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.topics.slice(0, 3).map((topic) => (
                    <li key={topic.id}>
                      <Link href={`/knowledge-base/${topic.id}`} className="text-sm hover:text-[#00bbb4] transition-colors inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-3 w-3">
                          <path d="M9 18l6-6-6-6"></path>
                        </svg>
                        {topic.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                {category.topics.length > 3 && (
                  <Button
                    asChild
                    variant="ghost"
                    className="mt-3 w-full text-xs hover:text-[#00bbb4] hover:bg-yellow-50"
                  >
                    <Link href={`/knowledge-base/category/${category.id}`}>
                      ดูทั้งหมด {category.topics.length} บทความ
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Popular tags */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">แท็กยอดนิยม</h2>
        <div className="flex flex-wrap gap-3">
          {Array.from(new Set(categories.flatMap(category =>
            category.topics.flatMap(topic => topic.tags)
          ))).map((tag, index) => (
            <Link
              key={index}
              href={`/knowledge-base/tag/${tag}`}
              className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-800 text-sm hover:bg-yellow-100 hover:text-yellow-800 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-zinc-50 p-8 rounded-lg border border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">รับข่าวสารเกี่ยวกับ Smart Home</h2>
          <p className="text-muted-foreground mb-6">
            ลงทะเบียนเพื่อรับบทความใหม่ เคล็ดลับ และข่าวสารเกี่ยวกับเทคโนโลยี Smart Home ล่าสุด
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="อีเมลของคุณ"
              className="flex-1 px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-[#00bbb4]"
            />
            <Button className="bg-[#00bbb4] text-black hover:bg-[#e6ed4a]">
              สมัครรับข่าวสาร
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
