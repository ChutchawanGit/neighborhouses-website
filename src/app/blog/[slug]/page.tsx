import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CalendarIcon, ClockIcon, UserIcon, ArrowLeft, Facebook, Twitter, Link2 } from "lucide-react";
import Image from 'next/image';
export async function generateMetadata({ params }: { params: { slug: string } }) {
  // This would normally fetch from a CMS or database
  const post = getBlogPostBySlug(params.slug);

  return {
    title: `${post.title} - Smart Home`,
    description: post.excerpt,
  };
}

function getBlogPostBySlug(slug: string) {
  // This is a placeholder for demonstration. In a real app, you'd fetch from a database or CMS
  const posts = [
    {
      id: "smart-home-beginners-guide",
      title: "คู่มือเริ่มต้นใช้งาน Smart Home สำหรับมือใหม่",
      excerpt: "เรียนรู้พื้นฐานของระบบ Smart Home และวิธีการเริ่มต้นใช้งานอย่างง่ายๆ สำหรับผู้ที่สนใจแต่ยังไม่เคยใช้งานมาก่อน",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2670&auto=format&fit=crop",
      author: "อรรถพล วิศวกร",
      date: "15 มีนาคม 2567",
      readTime: "5 นาที",
      category: "คู่มือและเคล็ดลับ",
      content: `
        <p>ระบบ Smart Home กำลังเป็นที่นิยมอย่างมากในปัจจุบัน เนื่องจากช่วยเพิ่มความสะดวกสบายและประหยัดพลังงานให้กับบ้านของคุณ แต่สำหรับผู้ที่เพิ่งเริ่มต้น อาจจะรู้สึกสับสนว่าควรเริ่มต้นอย่างไร บทความนี้จะพาคุณเริ่มต้นใช้งาน Smart Home อย่างง่ายๆ</p>

        <h2>Smart Home คืออะไร?</h2>
        <p>Smart Home คือ บ้านที่มีการติดตั้งอุปกรณ์อัจฉริยะที่สามารถควบคุมได้ผ่านอินเทอร์เน็ตหรือระบบไร้สาย ทำให้คุณสามารถควบคุมการทำงานของอุปกรณ์ต่างๆ ในบ้านได้จากระยะไกล หรือตั้งค่าให้ทำงานอัตโนมัติตามเงื่อนไขที่กำหนด</p>

        <h2>ประโยชน์ของ Smart Home</h2>
        <p>ระบบ Smart Home มีประโยชน์มากมาย ได้แก่:</p>
        <ul>
          <li>เพิ่มความสะดวกสบายในการอยู่อาศัย</li>
          <li>ประหยัดพลังงานและลดค่าใช้จ่าย</li>
          <li>เพิ่มความปลอดภัยให้กับบ้าน</li>
          <li>ช่วยดูแลผู้สูงอายุหรือผู้ที่ต้องการการดูแลพิเศษ</li>
          <li>เพิ่มมูลค่าให้กับบ้าน</li>
        </ul>

        <h2>เริ่มต้นใช้งาน Smart Home อย่างไร?</h2>
        <p>การเริ่มต้นใช้งาน Smart Home ไม่จำเป็นต้องปรับเปลี่ยนบ้านทั้งหมดในครั้งเดียว คุณสามารถเริ่มต้นจากระบบง่ายๆ ก่อน แล้วค่อยๆ ขยายเพิ่มเติมในอนาคต</p>

        <h3>1. เลือกระบบควบคุมกลาง (Hub)</h3>
        <p>ระบบควบคุมกลางหรือ Hub เป็นอุปกรณ์ที่ใช้เชื่อมต่อและควบคุมอุปกรณ์ Smart Home ทั้งหมด คุณควรเลือกระบบที่รองรับอุปกรณ์หลากหลายและใช้งานง่าย เช่น Google Home, Amazon Alexa, หรือ Apple HomeKit</p>

        <h3>2. เริ่มจากระบบพื้นฐาน</h3>
        <p>เริ่มต้นจากระบบพื้นฐานที่ใช้งานง่ายและเห็นผลชัดเจน เช่น:</p>
        <ul>
          <li>หลอดไฟอัจฉริยะ: ควบคุมการเปิด-ปิดไฟและปรับความสว่างได้ผ่านสมาร์ทโฟน</li>
          <li>เทอร์โมสตัทอัจฉริยะ: ควบคุมอุณหภูมิในบ้านและประหยัดพลังงาน</li>
          <li>กล้องวงจรปิดอัจฉริยะ: ตรวจสอบความปลอดภัยของบ้านได้ตลอดเวลา</li>
          <li>ปลั๊กไฟอัจฉริยะ: ควบคุมการเปิด-ปิดเครื่องใช้ไฟฟ้าและติดตามการใช้พลังงาน</li>
        </ul>

        <h3>3. ขยายระบบตามความต้องการ</h3>
        <p>หลังจากที่คุณคุ้นเคยกับระบบพื้นฐานแล้ว คุณสามารถขยายระบบตามความต้องการ เช่น:</p>
        <ul>
          <li>ระบบรักษาความปลอดภัยที่ครบวงจร: กล้องวงจรปิด, เซ็นเซอร์ตรวจจับการเคลื่อนไหว, ระบบแจ้งเตือน</li>
          <li>ระบบควบคุมเครื่องใช้ไฟฟ้า: ควบคุมทีวี, เครื่องปรับอากาศ, เครื่องซักผ้า ฯลฯ</li>
          <li>ระบบควบคุมม่านและประตู: เปิด-ปิดม่านและประตูอัตโนมัติ</li>
          <li>ระบบเสียงและความบันเทิง: ควบคุมระบบเสียงและความบันเทิงทั้งบ้าน</li>
        </ul>

        <h2>ข้อควรคำนึงในการใช้งาน Smart Home</h2>
        <p>ในการใช้งาน Smart Home มีข้อควรคำนึงดังนี้:</p>
        <ul>
          <li>ความปลอดภัยของข้อมูล: ตรวจสอบความปลอดภัยของอุปกรณ์และตั้งค่ารหัสผ่านที่รัดกุม</li>
          <li>ความเข้ากันได้ของอุปกรณ์: เลือกอุปกรณ์ที่สามารถเชื่อมต่อกับระบบควบคุมกลางของคุณได้</li>
          <li>การเชื่อมต่ออินเทอร์เน็ต: ตรวจสอบว่าการเชื่อมต่ออินเทอร์เน็ตของคุณมีความเสถียรและครอบคลุมทั่วบ้าน</li>
          <li>การใช้งานเมื่อไฟดับ: ตรวจสอบว่าอุปกรณ์ยังสามารถใช้งานได้หรือมีระบบสำรองเมื่อไฟดับ</li>
        </ul>

        <h2>สรุป</h2>
        <p>Smart Home เป็นเทคโนโลยีที่ช่วยเพิ่มความสะดวกสบายและประหยัดพลังงานให้กับบ้านของคุณ การเริ่มต้นใช้งานไม่จำเป็นต้องซับซ้อน คุณสามารถเริ่มต้นจากระบบพื้นฐานก่อน แล้วค่อยๆ ขยายเพิ่มเติมตามความต้องการ หากคุณต้องการคำแนะนำเพิ่มเติม สามารถปรึกษาผู้เชี่ยวชาญของเราได้ทุกเมื่อ</p>
      `,
      relatedPosts: [
        "smart-home-security",
        "smart-home-energy-saving",
        "smart-speakers-comparison"
      ]
    },
    // Other posts would be defined here
  ];

  return posts.find(post => post.id === slug) || posts[0];
}

function getRelatedPosts(slugs: string[]) {
  // This is a placeholder. In a real app, you'd fetch these from a database or CMS
  const allPosts = [
    {
      id: "smart-home-security",
      title: "เพิ่มความปลอดภัยให้บ้านด้วยระบบรักษาความปลอดภัยอัจฉริยะ",
      excerpt: "แนะนำระบบรักษาความปลอดภัยอัจฉริยะที่ช่วยปกป้องบ้านและครอบครัวของคุณจากภัยคุกคามต่างๆ",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop",
      author: "ปิยะพงษ์ ผู้เชี่ยวชาญด้านความปลอดภัย",
      date: "10 มีนาคม 2567",
    },
    {
      id: "smart-home-energy-saving",
      title: "ประหยัดค่าไฟด้วย Smart Home จริงหรือ?",
      excerpt: "วิเคราะห์การประหยัดพลังงานและค่าใช้จ่ายที่เกิดขึ้นจริงเมื่อใช้ระบบ Smart Home พร้อมเคล็ดลับการตั้งค่าเพื่อประหยัดพลังงานสูงสุด",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop",
      author: "สมศรี นักประหยัด",
      date: "5 มีนาคม 2567",
    },
    {
      id: "smart-speakers-comparison",
      title: "เปรียบเทียบลำโพงอัจฉริยะยอดนิยม: Google Nest, Amazon Echo และ Apple HomePod",
      excerpt: "เจาะลึกข้อดีข้อเสียของลำโพงอัจฉริยะยอดนิยม เพื่อช่วยคุณเลือกรุ่นที่เหมาะสมกับบ้านและไลฟ์สไตล์ของคุณ",
      image: "https://images.unsplash.com/photo-1512446816042-444d641267d4?q=80&w=2670&auto=format&fit=crop",
      author: "วิชัย นักวิเคราะห์เทคโนโลยี",
      date: "1 มีนาคม 2567",
    },
  ];

  return allPosts.filter(post => slugs.includes(post.id));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  const relatedPosts = getRelatedPosts(post.relatedPosts || []);

  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          กลับไปยังบทความทั้งหมด
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">{post.category}</span>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarIcon className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <ClockIcon className="h-4 w-4 mr-1" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight mb-6">{post.title}</h1>

          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-[#00bbb4] rounded-full flex items-center justify-center text-white font-bold mr-3">
              {post.author.charAt(0)}
            </div>
            <div>
              <div className="font-medium">{post.author}</div>
              <div className="text-sm text-muted-foreground">ผู้เขียน</div>
            </div>
          </div>
        </div>

        <div className="aspect-[16/9] rounded-lg overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={post.title}
            width={2670}
            height={2000}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-zinc max-w-none mb-12"
             dangerouslySetInnerHTML={{ __html: post.content }}>
        </div>

        <div className="border-t border-b py-6 mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm font-medium">แชร์บทความนี้:</div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">แชร์ไปยัง Facebook</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-blue-50 hover:text-blue-400 hover:border-blue-400"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">แชร์ไปยัง Twitter</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-gray-50 hover:text-gray-600 hover:border-gray-600"
              >
                <Link2 className="h-4 w-4" />
                <span className="sr-only">คัดลอกลิงก์</span>
              </Button>
            </div>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">บทความที่เกี่ยวข้อง</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(related => (
                <div key={related.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-[16/9] overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      width={2670}
                      height={2000}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">{related.title}</h3>
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <UserIcon className="h-3 w-3 mr-1" />
                      <span>{related.author}</span>
                      <span className="mx-2">•</span>
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      <span>{related.date}</span>
                    </div>
                    <Link
                      href={`/blog/${related.id}`}
                      className="text-sm text-[#00bbb4] hover:text-yellow-800 font-medium"
                    >
                      อ่านบทความ
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-zinc-50 p-8 rounded-lg border border-zinc-200">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">สนใจติดตั้ง Smart Home?</h2>
            <p className="text-muted-foreground mb-6">
              ปรึกษาผู้เชี่ยวชาญของเราเพื่อรับคำแนะนำและเริ่มต้นการติดตั้งระบบที่เหมาะสมกับบ้านของคุณ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#00bbb4] text-black hover:bg-[#e6ed4a]">
                <Link href="/contact">ติดต่อเรา</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/packages">ดูแพ็คเกจติดตั้ง</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}