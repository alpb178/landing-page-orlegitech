import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import ContactUs from "@/components/Contact";
import SectionAnimation from "@/components/SectionAnimation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SectionAnimation delay={100}>
        <Services />
      </SectionAnimation>
      <SectionAnimation delay={200}>
        <AboutUs />
      </SectionAnimation>
      <SectionAnimation delay={400}>
        <Pricing />
      </SectionAnimation>
      <SectionAnimation delay={600}>
        <ContactUs />
      </SectionAnimation>
      <SectionAnimation delay={800}>
        <Footer />
      </SectionAnimation>
    </main>
  );
}
