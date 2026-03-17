import Image from "next/image";
import SectionAnimation from "@/components/SectionAnimation";
import ScrollToSection from "@/components/ScrollToSection";
import Header from "@/container/header/Header";
import Footer from "@/container/footer/Footer";
import Features from "@/container/features/features";
import AboutUs from "@/container/about/AboutUs";
import Pricing from "@/container/price/Pricing";
import ContactUs from "@/container/contact/Contact";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#012319] via-[#012319] via-[75%] to-[#008c63] relative overflow-clip">
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

      <div className="relative z-10">
        <ScrollToSection />
        <Header />
        <div className="pt-24 pb-12">{children}</div>
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
