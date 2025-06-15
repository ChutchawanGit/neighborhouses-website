import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin, Award, Users, CheckCircle, Building, Target, BookOpen } from "lucide-react";

export const metadata = {
  title: "เกี่ยวกับบริษัท - Smart Home",
  description: "เกี่ยวกับบริษัท Smart Home ผู้นำด้านโซลูชันบ้านอัจฉริยะในประเทศไทย ที่มุ่งมั่นยกระดับคุณภาพชีวิตด้วยเทคโนโลยีที่ทันสมัย",
};

const teamMembers = [
  {
    name: "นาย A",
    position: "ผู้ก่อตั้งและประธานบริษัท",
    image: "https://same-assets.com/f/2023-05/SameAssets-20230531-b0fbaf.jpg",
    bio: "ผู้เชี่ยวชาญด้านเทคโนโลยีสมาร์ทโฮมมากว่า 15 ปี เคยร่วมงานกับบริษัทเทคโนโลยีชั้นนำในต่างประเทศ"
  },
  {
    name: "นาย B",
    position: "ผู้อำนวยการฝ่ายเทคโนโลยี",
    image: "https://same-assets.com/f/2023-05/SameAssets-20230531-b0fbab.jpg",
    bio: "วิศวกรไฟฟ้าและผู้เชี่ยวชาญด้านระบบอัตโนมัติ มีประสบการณ์ในการพัฒนาเทคโนโลยีสมาร์ทโฮมมากว่า 10 ปี"
  },
  {
    name: "นาย C",
    position: "ผู้อำนวยการฝ่ายออกแบบและติดตั้ง",
    image: "https://same-assets.com/f/2023-05/SameAssets-20230531-b0fbac.jpg",
    bio: "สถาปนิกและนักออกแบบระบบที่มีประสบการณ์ในการออกแบบและติดตั้งระบบสมาร์ทโฮมในโครงการใหญ่ทั่วประเทศ"
  },
  {
    name: "นาย D",
    position: "ผู้อำนวยการฝ่ายบริการลูกค้า",
    image: "https://same-assets.com/f/2023-05/SameAssets-20230531-b0fbad.jpg",
    bio: "ผู้เชี่ยวชาญด้านการบริการลูกค้า มุ่งมั่นให้ลูกค้าได้รับประสบการณ์ที่ดีที่สุดในทุกขั้นตอนการบริการ"
  },
  {
    name: "นาย E",
    position: "ตัวประกอบ",
    image: "https://same-assets.com/f/2023-05/SameAssets-20230531-b0fbad.jpg",
    bio: "ผู้เชี่ยวชาญด้านการบริการลูกค้า มุ่งมั่นให้ลูกค้าได้รับประสบการณ์ที่ดีที่สุดในทุกขั้นตอนการบริการ กะหรี่"
  }
];

const milestones = [
  {
    year: "2025",
    title: "ก่อตั้งบริษัท",
    description: "เริ่มต้นธุรกิจด้วยทีมงานเพียง 5 คน เน้นการพัฒนาโซลูชันสมาร์ทโฮมสำหรับบ้านขนาดเล็ก"
  },
//   {
//     year: "2025",
//     title: "ขยายบริการ",
//     description: "เริ่มให้บริการครอบคลุมทั่วประเทศไทย และขยายทีมงานเป็น 25 คน ได้รับรางวัลสตาร์ทอัพยอดเยี่ยม"
//   },
  {
    year: "2025",
    title: "เปิดตัวแพลตฟอร์มควบคุม",
    description: "พัฒนาแพลตฟอร์มการควบคุมบ้านอัจฉริยะของตัวเอง รองรับการเชื่อมต่อกับอุปกรณ์หลากหลายยี่ห้อ"
  },
//   {
//     year: "2020",
//     title: "ร่วมมือกับพันธมิตรทั่วโลก",
//     description: "ร่วมมือกับผู้ผลิตอุปกรณ์สมาร์ทโฮมชั้นนำจากทั่วโลก ขยายโซลูชันให้ครอบคลุมความต้องการที่หลากหลาย"
//   },
//   {
//     year: "2022",
//     title: "พัฒนาระบบ AI",
//     description: "นำเทคโนโลยี AI มาใช้ในระบบสมาร์ทโฮม เพื่อการเรียนรู้พฤติกรรมผู้ใช้และการปรับระบบอัตโนมัติ"
//   },
//   {
//     year: "2023",
//     title: "ผู้นำตลาดในประเทศไทย",
//     description: "ก้าวขึ้นเป็นผู้นำตลาดสมาร์ทโฮมในประเทศไทย ด้วยส่วนแบ่งตลาดกว่า 30% และลูกค้ามากกว่า 5,000 ราย"
//   }
];

export default function AboutPage() {
  return (
    <div className="container py-20">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
              เกี่ยวกับ <span className="text-[#00bbb4]">Smart Home</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              เรามุ่งมั่นที่จะยกระดับคุณภาพชีวิตของคนไทยผ่านเทคโนโลยีบ้านอัจฉริยะที่ใช้งานง่าย ปลอดภัย และคุ้มค่า
            </p>
            <p className="text-muted-foreground mb-8">
              ด้วยประสบการณ์กว่า 10 ปีในวงการสมาร์ทโฮมและทีมงานผู้เชี่ยวชาญ 
              เราพร้อมให้คำปรึกษาและออกแบบระบบบ้านอัจฉริยะที่เหมาะสมกับความต้องการและไลฟ์สไตล์ของคุณ
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#00bbb4] text-white hover:bg-[#009a9b]">
                <Link href="/contact">ติดต่อเรา</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">ดูบริการของเรา</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://same-assets.com/f/2023-05/SameAssets-20230531-70a3a5.jpg"
                alt="Smart Home Office"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#00bbb4] p-6 rounded-lg shadow-lg text-white">
              <p className="text-lg font-bold">ก่อตั้งเมื่อ</p>
              <p className="text-3xl font-bold">2012</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">พันธกิจและวิสัยทัศน์</h2>
          <p className="text-xl text-muted-foreground">
            เรามีเป้าหมายที่ชัดเจนในการพัฒนาเทคโนโลยีบ้านอัจฉริยะเพื่อยกระดับคุณภาพชีวิตของคนไทย
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg border border-zinc-200 hover:border-[#00bbb4] hover:shadow-md transition-all">
            <div className="mb-4 w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-[#00bbb4]">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">พันธกิจ</h3>
            <p className="text-muted-foreground mb-4">
              พัฒนาโซลูชันบ้านอัจฉริยะที่เข้าถึงได้ ใช้งานง่าย และมีประสิทธิภาพ เพื่อยกระดับคุณภาพชีวิตของคนไทย
              ผ่านการใช้เทคโนโลยีที่ทันสมัยและเป็นมิตรกับสิ่งแวดล้อม
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-[#00bbb4] shrink-0 mt-0.5" />
                <span>พัฒนาโซลูชันที่ตอบโจทย์ความต้องการของผู้ใช้</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-[#00bbb4] shrink-0 mt-0.5" />
                <span>สร้างระบบที่เข้าถึงได้ในทุกระดับราคา</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-[#00bbb4] shrink-0 mt-0.5" />
                <span>ให้บริการที่เป็นเลิศในทุกขั้นตอน</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg border border-zinc-200 hover:border-[#00bbb4] hover:shadow-md transition-all">
            <div className="mb-4 w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-[#00bbb4]">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">วิสัยทัศน์</h3>
            <p className="text-muted-foreground mb-4">
              เป็นผู้นำในการพัฒนาเทคโนโลยีบ้านอัจฉริยะในภูมิภาคเอเชียตะวันออกเฉียงใต้ ที่ช่วยให้ผู้คนมีชีวิตที่สะดวกสบาย
              ปลอดภัย และประหยัดพลังงานมากขึ้น
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-[#00bbb4] shrink-0 mt-0.5" />
                <span>สร้างบ้านอัจฉริยะที่เข้าถึงได้สำหรับทุกคน</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-[#00bbb4] shrink-0 mt-0.5" />
                <span>เป็นผู้นำนวัตกรรมในภูมิภาค</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-[#00bbb4] shrink-0 mt-0.5" />
                <span>สร้างสังคมที่ยั่งยืนด้วยเทคโนโลยีอัจฉริยะ</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">ค่านิยมหลักของเรา</h2>
          <p className="text-xl text-muted-foreground">
            เราดำเนินธุรกิจภายใต้ค่านิยมหลักที่ยึดมั่น เพื่อส่งมอบบริการที่ดีที่สุดให้กับลูกค้า
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-[#00bbb4] hover:shadow-md transition-all">
            <div className="mb-4 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-[#00bbb4]">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">คุณภาพ</h3>
            <p className="text-muted-foreground">
              เรามุ่งมั่นที่จะส่งมอบผลิตภัณฑ์และบริการที่มีคุณภาพสูงสุด ไม่ประนีประนอมในเรื่องมาตรฐาน
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-[#00bbb4] hover:shadow-md transition-all">
            <div className="mb-4 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-[#00bbb4]">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">ลูกค้าเป็นศูนย์กลาง</h3>
            <p className="text-muted-foreground">
              ทุกการตัดสินใจของเรามีลูกค้าเป็นศูนย์กลาง เราฟังและเข้าใจความต้องการเพื่อส่งมอบประสบการณ์ที่ดีที่สุด
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-[#00bbb4] hover:shadow-md transition-all">
            <div className="mb-4 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-[#00bbb4]">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">ความน่าเชื่อถือ</h3>
            <p className="text-muted-foreground">
              เราสร้างความไว้วางใจผ่านความโปร่งใส ความซื่อสัตย์ และการรักษาสัญญาในทุกการดำเนินงาน
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-[#00bbb4] hover:shadow-md transition-all">
            <div className="mb-4 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-[#00bbb4]">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">นวัตกรรม</h3>
            <p className="text-muted-foreground">
              เรามุ่งมั่นในการพัฒนาและนำเสนอเทคโนโลยีใหม่ๆ อยู่เสมอ เพื่อให้ลูกค้าได้รับประโยชน์สูงสุด
            </p>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">เส้นทางการเติบโตของเรา</h2>
          <p className="text-xl text-muted-foreground">
            ตลอดระยะเวลาการดำเนินธุรกิจ เราได้เติบโตและพัฒนาอย่างต่อเนื่อง
          </p>
        </div>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-300 before:to-transparent">
          {milestones.map((milestone, index) => (
            <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${index % 2 === 0 ? "" : ""}`}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#00bbb4] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                {milestone.year.slice(-2)}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg border border-zinc-200 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-xl font-bold text-[#00bbb4]">{milestone.year}</div>
                </div>
                <div className="text-lg font-semibold mb-1">{milestone.title}</div>
                <div className="text-muted-foreground">{milestone.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">ทีมผู้บริหาร</h2>
          <p className="text-xl text-muted-foreground">
            ทีมงานผู้เชี่ยวชาญที่อยู่เบื้องหลังความสำเร็จของเรา
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg border border-zinc-200 overflow-hidden hover:border-[#00bbb4] hover:shadow-md transition-all">
              <Image
                src={member.image}
                alt={member.name}
                width={250}
                height={250}
                className="w-full h-44 object-cover object-center"
                unoptimized
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-[#00bbb4] font-medium mb-3">{member.position}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Info */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-zinc-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">ข้อมูลบริษัท</h2>
            <div className="space-y-4">
              <div className="flex">
                <Building className="h-5 w-5 mr-3 text-[#00bbb4] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold">ชื่อบริษัท</h3>
                  <p className="text-muted-foreground">บริษัท สมาร์ท โฮม โซลูชัน จำกัด</p>
                </div>
              </div>
              <div className="flex">
                <MapPin className="h-5 w-5 mr-3 text-[#00bbb4] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold">ที่อยู่</h3>
                  <p className="text-muted-foreground">
                    เลขที่ 123 อาคารเทคโนโลยี ชั้น 10<br />
                    ถนนรัชดาภิเษก แขวงดินแดง<br />
                    เขตดินแดง กรุงเทพมหานคร 10400
                  </p>
                </div>
              </div>
              <div className="flex">
                <Clock className="h-5 w-5 mr-3 text-[#00bbb4] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold">เวลาทำการ</h3>
                  <p className="text-muted-foreground">
                    จันทร์ - ศุกร์: 09:00 - 18:00 น.<br />
                    เสาร์: 09:00 - 15:00 น.<br />
                    ศูนย์บริการลูกค้า: ให้บริการตลอด 24 ชั่วโมง
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">ติดต่อเรา</h2>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                ไม่ว่าคุณจะมีคำถาม ต้องการขอคำปรึกษา หรือพร้อมที่จะเริ่มต้นโครงการสมาร์ทโฮม 
                ทีมงานของเราพร้อมให้บริการคุณอย่างเต็มที่
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <p className="font-semibold mb-1">โทรศัพท์</p>
                  <p className="text-[#00bbb4] text-lg font-bold">02-123-4567</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <p className="font-semibold mb-1">อีเมล</p>
                  <p className="text-[#00bbb4] text-lg font-bold">info@smarthome.co.th</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <p className="font-semibold mb-1">ฝ่ายบริการลูกค้า</p>
                  <p className="text-[#00bbb4] text-lg font-bold">02-123-4568</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-zinc-200">
                  <p className="font-semibold mb-1">ฝ่ายเทคนิค</p>
                  <p className="text-[#00bbb4] text-lg font-bold">02-123-4569</p>
                </div>
              </div>
              <Button asChild className="w-full bg-[#00bbb4] text-white hover:bg-[#009a9b]">
                <Link href="/contact">ส่งข้อความถึงเรา</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#00bbb4] p-12 rounded-lg text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">พร้อมยกระดับบ้านของคุณให้เป็นบ้านอัจฉริยะ?</h2>
          <p className="text-xl opacity-90 mb-8">
            เริ่มต้นการเดินทางสู่บ้านอัจฉริยะกับเราวันนี้ ทีมงานผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาและบริการคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-[#00bbb4] hover:bg-zinc-100">
              <Link href="/contact">ติดต่อทีมงาน</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/packages">ดูแพ็คเกจของเรา</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}