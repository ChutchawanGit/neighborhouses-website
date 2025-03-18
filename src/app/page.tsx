import { HeroSection } from "@/components/home/hero-section";
import { PackagesSection } from "@/components/home/packages-section";
import { ServicesSection } from "@/components/home/services-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PackagesSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
