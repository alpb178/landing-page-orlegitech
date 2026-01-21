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
    <main className="min-h-screen">
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
    </main>
  );
}
