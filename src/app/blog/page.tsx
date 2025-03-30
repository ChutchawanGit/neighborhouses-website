import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
export const metadata = {
  title: "บทความ Smart Home - ติดตั้ง Smart Home",
  description: "บทความและเคล็ดลับเกี่ยวกับเทคโนโลยี Smart Home รวมถึงเทรนด์ล่าสุดสำหรับบ้านอัจฉริยะ",
};

const blogPosts = [
  {
    id: "smart-home-beginners-guide",
    title: "คู่มือเริ่มต้นใช้งาน Smart Home สำหรับมือใหม่",
    excerpt: "เรียนรู้พื้นฐานของระบบ Smart Home และวิธีการเริ่มต้นใช้งานอย่างง่ายๆ สำหรับผู้ที่สนใจแต่ยังไม่เคยใช้งานมาก่อน",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2670&auto=format&fit=crop",
    author: "อรรถพล วิศวกร",
    date: "15 มีนาคม 2567",
    readTime: "5 นาที",
    category: "คู่มือและเคล็ดลับ",
    featured: true,
  },
  {
    id: "smart-home-security",
    title: "เพิ่มความปลอดภัยให้บ้านด้วยระบบรักษาความปลอดภัยอัจฉริยะ",
    excerpt: "แนะนำระบบรักษาความปลอดภัยอัจฉริยะที่ช่วยปกป้องบ้านและครอบครัวของคุณจากภัยคุกคามต่างๆ",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop",
    author: "ปิยะพงษ์ ผู้เชี่ยวชาญด้านความปลอดภัย",
    date: "10 มีนาคม 2567",
    readTime: "7 นาที",
    category: "ความปลอดภัย",
    featured: true,
  },
  {
    id: "smart-home-energy-saving",
    title: "ประหยัดค่าไฟด้วย Smart Home จริงหรือ?",
    excerpt: "วิเคราะห์การประหยัดพลังงานและค่าใช้จ่ายที่เกิดขึ้นจริงเมื่อใช้ระบบ Smart Home พร้อมเคล็ดลับการตั้งค่าเพื่อประหยัดพลังงานสูงสุด",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop",
    author: "สมศรี นักประหยัด",
    date: "5 มีนาคม 2567",
    readTime: "6 นาที",
    category: "ประหยัดพลังงาน",
    featured: true,
  },
  {
    id: "smart-speakers-comparison",
    title: "เปรียบเทียบลำโพงอัจฉริยะยอดนิยม: Google Nest, Amazon Echo และ Apple HomePod",
    excerpt: "เจาะลึกข้อดีข้อเสียของลำโพงอัจฉริยะยอดนิยม เพื่อช่วยคุณเลือกรุ่นที่เหมาะสมกับบ้านและไลฟ์สไตล์ของคุณ",
    image: "https://images.unsplash.com/photo-1512446816042-444d641267d4?q=80&w=2670&auto=format&fit=crop",
    author: "วิชัย นักวิเคราะห์เทคโนโลยี",
    date: "1 มีนาคม 2567",
    readTime: "9 นาที",
    category: "รีวิวผลิตภัณฑ์",
  },
  {
    id: "smart-home-trends-2024",
    title: "เทรนด์ Smart Home ปี 2567 ที่น่าจับตามอง",
    excerpt: "อัพเดทเทรนด์ล่าสุดในวงการ Smart Home ที่กำลังมาแรงและน่าจับตามองในปี 2567 เพื่อให้บ้านของคุณทันสมัยอยู่เสมอ",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2670&auto=format&fit=crop",
    author: "สุทธิพงษ์ ผู้เชี่ยวชาญด้าน IoT",
    date: "25 กุมภาพันธ์ 2567",
    readTime: "8 นาที",
    category: "เทรนด์และนวัตกรรม",
  },
  {
    id: "smart-home-automation-ideas",
    title: "10 ไอเดียการใช้งาน Smart Home Automation ที่คุณอาจไม่เคยรู้มาก่อน",
    excerpt: "รวมไอเดียการใช้งานระบบอัตโนมัติในบ้านแบบสร้างสรรค์ที่จะช่วยให้ชีวิตประจำวันของคุณสะดวกสบายยิ่งขึ้น",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2670&auto=format&fit=crop",
    author: "อรรถพล วิศวกร",
    date: "20 กุมภาพันธ์ 2567",
    readTime: "7 นาที",
    category: "คู่มือและเคล็ดลับ",
  },
  {
    id: "smart-home-vs-traditional",
    title: "บ้านธรรมดา VS บ้านอัจฉริยะ: คุ้มค่าหรือไม่?",
    excerpt: "วิเคราะห์ความคุ้มค่าในการลงทุนติดตั้งระบบ Smart Home เทียบกับบ้านแบบดั้งเดิม ทั้งในด้านค่าใช้จ่าย ประโยชน์ใช้สอย และคุณภาพชีวิต",
    image: "https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?q=80&w=2670&auto=format&fit=crop",
    author: "มนตรี นักวิเคราะห์ด้านที่อยู่อาศัย",
    date: "15 กุมภาพันธ์ 2567",
    readTime: "10 นาที",
    category: "วิเคราะห์และเปรียบเทียบ",
  },
  {
    id: "smart-home-for-elderly",
    title: "Smart Home สำหรับผู้สูงอายุ: เทคโนโลยีที่ช่วยดูแลและอำนวยความสะดวก",
    excerpt: "แนะนำระบบและอุปกรณ์ Smart Home ที่ช่วยดูแลผู้สูงอายุ เพิ่มความปลอดภัย และอำนวยความสะดวกในการใช้ชีวิตประจำวัน",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop",
    author: "พนิดา นักสังคมสงเคราะห์",
    date: "10 กุมภาพันธ์ 2567",
    readTime: "6 นาที",
    category: "Smart Living",
  },
];

const categories = [
  { id: "all", name: "ทั้งหมด" },
  { id: "guides", name: "คู่มือและเคล็ดลับ" },
  { id: "security", name: "ความปลอดภัย" },
  { id: "energy", name: "ประหยัดพลังงาน" },
  { id: "reviews", name: "รีวิวผลิตภัณฑ์" },
  { id: "trends", name: "เทรนด์และนวัตกรรม" },
  { id: "analysis", name: "วิเคราะห์และเปรียบเทียบ" },
  { id: "living", name: "Smart Living" },
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-4">
          บทความและเคล็ดลับ
        </h1>
        <p className="text-xl text-muted-foreground">
          เรียนรู้เกี่ยวกับเทคโนโลยี Smart Home และเคล็ดลับการใช้งานที่จะทำให้บ้านของคุณสะดวกสบายยิ่งขึ้น
        </p>
      </div>

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

      {/* Featured Posts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {featuredPosts.map((post, index) => (
          <div
            key={post.id}
            className={`relative overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow ${
              index === 0 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
          >
            <div className={`${index === 0 ? 'aspect-[16/9] md:aspect-[16/10]' : 'aspect-[16/9]'} relative`}>
              <Image
                src={post.image}
                alt={post.title}
                width={2670}
                height={2000}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="mb-2">
                  <span className="inline-block bg-[#00bbb4] text-black text-xs px-2 py-1 rounded-full">{post.category}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold mb-2">{post.title}</h2>
                <div className="flex items-center text-sm text-zinc-200">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Regular Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {regularPosts.map((post) => (
          <div key={post.id} className="border border-zinc-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="aspect-[16/9] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={2670}
                height={2000}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6">
              <div className="mb-3">
                <span className="inline-block bg-zinc-100 text-zinc-800 text-xs px-2 py-1 rounded-full">{post.category}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center text-sm text-zinc-500 mb-4">
                <span>{post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center text-[#00bbb4] hover:text-yellow-800 font-medium"
              >
                อ่านเพิ่มเติม
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">สนใจรับข่าวสารและบทความใหม่ๆ</h2>
          <p className="text-muted-foreground mb-6">
            ลงทะเบียนรับข่าวสาร บทความ และโปรโมชันเกี่ยวกับ Smart Home ล่าสุดจากเรา
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="อีเมลของคุณ"
                className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <button
                type="submit"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#00bbb4] px-4 text-sm font-medium text-black hover:bg-[#e6ed4a] focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                สมัครรับข่าวสาร
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}