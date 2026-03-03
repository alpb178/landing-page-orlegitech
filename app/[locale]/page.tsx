import Image from "next/image";
import SectionAnimation from "@/components/SectionAnimation";
import ScrollToSection from "@/components/ScrollToSection";
import AboutUs from "@/container/about/AboutUs";
import ContactUs from "@/container/contact/Contact";
import Features from "@/container/features/features";
import Footer from "@/container/footer/Footer";
import Header from "@/container/header/Header";
import Hero from "@/container/hero/Hero";
import Pricing from "@/container/price/Pricing";
import Services from "@/container/services/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#012319] via-[#012319] via-[75%] to-[#008c63] relative overflow-hidden">
      {/* Decorative leaf overlays */}
      <Image
        src="/images/decorative/leaf-3.svg"
        alt=""
        width={1156}
        height={1328}
        className="absolute -left-[28%] top-[20%] w-[80%] rotate-[-162.37deg] -scale-y-100 opacity-15 pointer-events-none z-0"
        aria-hidden="true"
      />
      <Image
        src="/images/decorative/leaf-4.svg"
        alt=""
        width={1459}
        height={1409}
        className="absolute left-[30%] top-[32%] w-[101%] rotate-[-117.79deg] -scale-y-100 opacity-15 pointer-events-none z-0"
        aria-hidden="true"
      />
      <Image
        src="/images/decorative/leaf-5.svg"
        alt=""
        width={1113}
        height={1502}
        className="absolute left-[17%] top-[4%] w-[77%] rotate-[-6.86deg] opacity-10 pointer-events-none z-0"
        aria-hidden="true"
      />
      <Image
        src="/images/decorative/leaf-1.svg"
        alt=""
        width={1664}
        height={1701}
        className="absolute -left-[58%] top-[49%] w-[116%] rotate-[14.11deg] opacity-15 pointer-events-none z-0"
        aria-hidden="true"
      />
      <Image
        src="/images/decorative/leaf-2.svg"
        alt=""
        width={1146}
        height={1718}
        className="absolute left-[56%] top-[61%] w-[80%] rotate-[-172.63deg] opacity-15 pointer-events-none z-0"
        aria-hidden="true"
      />
      <Image
        src="/images/decorative/group-bottom-left.svg"
        alt=""
        width={1677}
        height={1585}
        className="absolute -left-[58%] top-[71%] w-[116%] rotate-[-70.7deg] -scale-y-100 opacity-20 pointer-events-none z-0"
        aria-hidden="true"
      />
      <Image
        src="/images/decorative/group-bottom-right.svg"
        alt=""
        width={1677}
        height={1585}
        className="absolute left-[30%] top-[80%] w-[116%] rotate-[-70.7deg] -scale-y-100 opacity-20 pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative z-10">
        <ScrollToSection />
        <Header />
        <Hero />
        <SectionAnimation delay={100}>
          <Services />
        </SectionAnimation>
        <SectionAnimation delay={100}>
          <Features />
        </SectionAnimation>
        <SectionAnimation delay={200}>
          <AboutUs />
        </SectionAnimation>
        <SectionAnimation delay={100}>
          <Pricing />
        </SectionAnimation>
        <SectionAnimation delay={100}>
          <ContactUs />
        </SectionAnimation>
        <Footer />
      </div>
    </main>
  );
}
