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
    name: "วิศรุต วัฒนากุล",
    position: "ผู้ก่อตั้งและประธานกรรมการบริหาร (Founder & CEO)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    bio: "ผู้เชี่ยวชาญด้านสถาปัตยกรรมเทคโนโลยีและการบริหารโครงการบ้านอัจฉริยะระดับลักชัวรี ประสบการณ์กว่า 15 ปี"
  },
  {
    name: "ดร. นพดล สุวรรณรัตน์",
    position: "ผู้อำนวยการฝ่ายวิศวกรรมระบบ (Chief Technology Officer)",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    bio: "ผู้เชี่ยวชาญด้านโปรโตคอล IoT, Matter, KNX และโครงสร้างระบบอัตโนมัติความปลอดภัยสูงในที่อยู่อาศัย"
  },
  {
    name: "พิมลดา มงคลชัย",
    position: "ผู้อำนวยการฝ่ายออกแบบสถาปัตยกรรมภายใน (Lead Interior Architect)",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    bio: "สถาปนิกผู้เชี่ยวชาญการออกแบบแสงสว่าง (Circadian Lighting) และการซ่อนระบบอุปกรณ์ให้กลมกลืนกับงานตกแต่งภายใน"
  },
  {
    name: "กานดา จิตเจริญ",
    position: "ผู้อำนวยการฝ่ายบริการและบริหารความพึงพอใจลูกค้า (Head of Customer Experience)",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    bio: "ดูแลมาตรฐานการบริการ On-Site Support และการดูแลลูกค้าระดับ Executive ให้ได้รับความพึงพอใจสูงสุด"
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2a2014] text-[#fbf5e9] text-[11px] font-semibold tracking-widest uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#c8f94a]" />
              <span>ABOUT NEIGHBOR HOUSES</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#2a2014] mb-6 leading-tight">
              สุนทรียภาพแห่งชีวิตอัจฉริยะ <br />
              <span className="text-[#6e5f50] font-normal">ผสานสถาปัตยกรรมและเทคโนโลยี</span>
            </h1>
            <p className="text-base sm:text-lg text-[#6e5f50] mb-6 leading-relaxed">
              เรามุ่งมั่นที่จะยกระดับคุณภาพชีวิตและการอยู่อาศัยระดับพรีเมียม ผ่านเทคโนโลยีระบบบ้านอัจฉริยะ (Smart Living) ที่ทำงานอย่างไร้รอยต่อ ปลอดภัย และเสถียรที่สุด
            </p>
            <p className="text-sm text-[#8a7b6c] mb-8 leading-relaxed">
              ด้วยประสบการณ์ด้านวิศวกรรมระบบและสถาปัตยกรรมภายใน ทีมงานผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษา ออกแบบ และติดตั้งระบบที่ตอบโจทย์ไลฟ์สไตล์เฉพาะตัวอย่างไร้ข้อจำกัด
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#2a2014] text-[#fbf5e9] hover:bg-[#3d2f20] hover:text-[#c8f94a] rounded-2xl h-12 px-6 font-semibold shadow-md transition-all">
                <Link href="/contact">ปรึกษาโครงการกับเรา</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl border-[#3c280f]/15 bg-white/80 hover:bg-[#2a2014] hover:text-[#fbf5e9] text-[#2a2014] h-12 px-6 font-semibold transition-all">
                <Link href="/services">สำรวจบริการทั้งหมด</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-[#3c280f]/15 shadow-xl bg-[#2a2014]">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                alt="Smart Home Studio & Experience Center"
                width={600}
                height={400}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#2a2014] p-5 sm:p-6 rounded-3xl shadow-xl border border-white/10 text-white">
              <p className="text-xs text-[#cdbea6] font-medium uppercase tracking-wider">ก่อตั้งเมื่อ</p>
              <p className="text-3xl font-extrabold text-[#c8f94a]">2012</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2a2014] text-[#fbf5e9] text-[11px] font-semibold tracking-widest uppercase mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#c8f94a]" />
            <span>PURPOSE & DIRECTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#2a2014]">พันธกิจและวิสัยทัศน์</h2>
          <p className="text-base sm:text-lg text-[#6e5f50]">
            เรามีเป้าหมายที่ชัดเจนในการพัฒนาเทคโนโลยีบ้านอัจฉริยะเพื่อยกระดับคุณภาพชีวิตของคนไทย
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="oasel-glass p-8 sm:p-10 rounded-3xl border border-[#3c280f]/10 hover:shadow-lg transition-all">
            <div className="mb-5 w-14 h-14 bg-[#2a2014] rounded-2xl flex items-center justify-center text-[#c8f94a] shadow-md">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[#2a2014]">พันธกิจ (Mission)</h3>
            <p className="text-sm sm:text-base text-[#6e5f50] mb-6 leading-relaxed">
              พัฒนาโซลูชันบ้านอัจฉริยะมาตรฐานวิศวกรรมสากล ที่เชื่อมต่อได้เสถียร ใช้งานง่าย และตอบสนองแม่นยำ เพื่อยกระดับสุนทรียภาพและความปลอดภัยสูงสุดในทุกการอยู่อาศัย
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 text-[#1a2404] bg-[#c8f94a] rounded-full p-0.5 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#2a2014]">พัฒนาโซลูชันที่ผสานเป็นเนื้อเดียวกับสถาปัตยกรรม</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 text-[#1a2404] bg-[#c8f94a] rounded-full p-0.5 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#2a2014]">รองรับโปรโตคอลเปิดสากล ทั้ง Matter, Apple HomeKit และ KNX</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 text-[#1a2404] bg-[#c8f94a] rounded-full p-0.5 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#2a2014]">การันตีการดูแล On-Site บริการตลอดอายุสัญญา</span>
              </li>
            </ul>
          </div>
          <div className="oasel-glass p-8 sm:p-10 rounded-3xl border border-[#3c280f]/10 hover:shadow-lg transition-all">
            <div className="mb-5 w-14 h-14 bg-[#2a2014] rounded-2xl flex items-center justify-center text-[#c8f94a] shadow-md">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[#2a2014]">วิสัยทัศน์ (Vision)</h3>
            <p className="text-sm sm:text-base text-[#6e5f50] mb-6 leading-relaxed">
              เป็นผู้นำด้านระบบบ้านอัจฉริยะระดับลักชัวรีและสถาปัตยกรรม (Architectural Smart Living) ในเอเชียตะวันออกเฉียงใต้ ที่ผสมผสานเทคโนโลยีชั้นนำเข้ากับความประณีตแห่งงานดีไซน์
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 text-[#1a2404] bg-[#c8f94a] rounded-full p-0.5 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#2a2014]">ยกระดับมาตรฐานบ้านไทยสู่ระดับสากล</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 text-[#1a2404] bg-[#c8f94a] rounded-full p-0.5 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#2a2014]">นำนวัตกรรม AI ประหยัดพลังงานมาใช้จริง</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 text-[#1a2404] bg-[#c8f94a] rounded-full p-0.5 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#2a2014]">สร้างความยั่งยืนและความเป็นส่วนตัวสูงสุดแก่ผู้อยู่อาศัย</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2a2014] text-[#fbf5e9] text-[11px] font-semibold tracking-widest uppercase mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#c8f94a]" />
            <span>FOUNDATIONAL PRINCIPLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#2a2014]">ค่านิยมหลักของเรา</h2>
          <p className="text-base sm:text-lg text-[#6e5f50]">
            เราดำเนินธุรกิจภายใต้ค่านิยมหลักที่ยึดมั่น เพื่อส่งมอบบริการที่ดีที่สุดให้กับลูกค้า
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="oasel-glass p-6 sm:p-7 rounded-3xl border border-[#3c280f]/10 hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="mb-4 w-12 h-12 bg-[#2a2014] rounded-2xl flex items-center justify-center text-[#c8f94a] shadow-sm">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#2a2014]">คุณภาพสูงสุด</h3>
              <p className="text-sm text-[#6e5f50] leading-relaxed">
                เรามุ่งมั่นที่จะส่งมอบผลิตภัณฑ์และบริการที่มีคุณภาพสูงสุด ไม่ประนีประนอมในเรื่องมาตรฐานวิศวกรรม
              </p>
            </div>
          </div>
          <div className="oasel-glass p-6 sm:p-7 rounded-3xl border border-[#3c280f]/10 hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="mb-4 w-12 h-12 bg-[#2a2014] rounded-2xl flex items-center justify-center text-[#c8f94a] shadow-sm">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#2a2014]">ลูกค้าเป็นศูนย์กลาง</h3>
              <p className="text-sm text-[#6e5f50] leading-relaxed">
                ทุกการตัดสินใจออกแบบมีวิถีชีวิตของลูกค้าเป็นศูนย์กลาง ส่งมอบประสบการณ์ที่สะดวกสบายและเป็นธรรมชาติ
              </p>
            </div>
          </div>
          <div className="oasel-glass p-6 sm:p-7 rounded-3xl border border-[#3c280f]/10 hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="mb-4 w-12 h-12 bg-[#2a2014] rounded-2xl flex items-center justify-center text-[#c8f94a] shadow-sm">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#2a2014]">ความน่าเชื่อถือ</h3>
              <p className="text-sm text-[#6e5f50] leading-relaxed">
                สร้างความไว้วางใจผ่านความโปร่งใส ความซื่อสัตย์ และสัญญาการรับประกันดูแลหลังการขายอย่างจริงใจ
              </p>
            </div>
          </div>
          <div className="oasel-glass p-6 sm:p-7 rounded-3xl border border-[#3c280f]/10 hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="mb-4 w-12 h-12 bg-[#2a2014] rounded-2xl flex items-center justify-center text-[#c8f94a] shadow-sm">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#2a2014]">นวัตกรรมล้ำหน้า</h3>
              <p className="text-sm text-[#6e5f50] leading-relaxed">
                ติดตามและนำเทคโนโลยีระดับโลกที่เสถียรที่สุดมาปรับใช้ เพื่อให้บ้านพร้อมรับอนาคตเสมอ
              </p>
            </div>
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2a2014] text-[#fbf5e9] text-[11px] font-semibold tracking-widest uppercase mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#c8f94a]" />
            <span>EXECUTIVE LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#2a2014]">ทีมผู้บริหาร</h2>
          <p className="text-base sm:text-lg text-[#6e5f50]">
            ทีมงานผู้เชี่ยวชาญด้านวิศวกรรมและสถาปัตยกรรมที่อยู่เบื้องหลังความสำเร็จของเรา
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="oasel-glass rounded-3xl overflow-hidden border border-[#3c280f]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="aspect-[4/3] overflow-hidden relative bg-[#2a2014]">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1.5 text-[#2a2014] group-hover:text-[#6e5f50] transition-colors">{member.name}</h3>
                  <div className="mb-3">
                    <span className="text-[11px] font-semibold text-[#1a2404] bg-[#c8f94a]/30 px-2.5 py-1 rounded-full border border-[#c8f94a]/60 inline-block leading-tight">
                      {member.position}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6e5f50] leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Info */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="oasel-glass p-8 sm:p-10 rounded-3xl border border-[#3c280f]/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a2014] text-[#fbf5e9] text-[10px] font-semibold tracking-widest uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8f94a]" />
                CORPORATE HQ
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#2a2014]">ข้อมูลบริษัท</h2>
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#2a2014] flex items-center justify-center text-[#c8f94a] shrink-0 mr-4 shadow-xs mt-0.5">
                    <Building className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2a2014]">ชื่อนิติบุคคล</h3>
                    <p className="text-sm text-[#6e5f50]">บริษัท เนเบอร์เฮาส์ จำกัด (Neighbor Houses Co., Ltd.)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#2a2014] flex items-center justify-center text-[#c8f94a] shrink-0 mr-4 shadow-xs mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2a2014]">ที่ตั้งสำนักงานใหญ่</h3>
                    <p className="text-sm text-[#6e5f50] leading-relaxed">
                      เลขที่ 123 อาคารเทคโนโลยี ชั้น 10<br />
                      ถนนรัชดาภิเษก แขวงดินแดง เขตดินแดง กรุงเทพมหานคร 10400
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#2a2014] flex items-center justify-center text-[#c8f94a] shrink-0 mr-4 shadow-xs mt-0.5">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2a2014]">เวลาเปิดทำการ</h3>
                    <p className="text-sm text-[#6e5f50] leading-relaxed">
                      จันทร์ - ศุกร์: 09:00 - 18:00 น.<br />
                      เสาร์: 09:00 - 15:00 น. (On-Call Support 24/7 สำหรับลูกค้าสัญญาระดับ Executive)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="oasel-glass p-8 sm:p-10 rounded-3xl border border-[#3c280f]/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2a2014] text-[#fbf5e9] text-[10px] font-semibold tracking-widest uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8f94a]" />
                COMMUNICATION
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#2a2014]">ติดต่อและนัดหมาย</h2>
              <p className="text-sm text-[#6e5f50] mb-6 leading-relaxed">
                ไม่ว่าคุณจะมีคำถาม ปรึกษาแบบแปลนร่วมกับสถาปนิก หรือพร้อมเริ่มโครงการติดตั้งระบบ ทีมงานระดับพรีเมียมของเราพร้อมดูแลตลอดกระบวนการ
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                <div className="bg-white/80 p-4 rounded-2xl border border-[#3c280f]/10">
                  <p className="text-xs text-[#6e5f50] font-medium mb-1">สายด่วนลูกค้าสัมพันธ์</p>
                  <p className="text-[#2a2014] text-lg font-extrabold tracking-tight">02-123-4567</p>
                </div>
                <div className="bg-white/80 p-4 rounded-2xl border border-[#3c280f]/10">
                  <p className="text-xs text-[#6e5f50] font-medium mb-1">อีเมลติดต่อฝ่ายขาย</p>
                  <p className="text-[#2a2014] text-sm sm:text-base font-extrabold tracking-tight truncate">contact@neighborhouses.co.th</p>
                </div>
                <div className="bg-white/80 p-4 rounded-2xl border border-[#3c280f]/10">
                  <p className="text-xs text-[#6e5f50] font-medium mb-1">ฝ่ายบริการหลังการขาย</p>
                  <p className="text-[#2a2014] text-lg font-extrabold tracking-tight">02-123-4568</p>
                </div>
                <div className="bg-white/80 p-4 rounded-2xl border border-[#3c280f]/10">
                  <p className="text-xs text-[#6e5f50] font-medium mb-1">ฝ่ายวิศวกรรมและแปลน</p>
                  <p className="text-[#2a2014] text-lg font-extrabold tracking-tight">02-123-4569</p>
                </div>
              </div>
            </div>
            <Button asChild className="w-full bg-[#2a2014] text-[#fbf5e9] hover:bg-[#3d2f20] hover:text-[#c8f94a] rounded-2xl h-12 font-semibold shadow-md transition-all">
              <Link href="/contact">ส่งข้อความหรือนัดหมายเข้าดู Showroom</Link>
            </Button>
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
