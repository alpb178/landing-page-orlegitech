import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";
import ContactUs from "@/components/Contact";

export const metadata: Metadata = {
  title: "Orlegitech - Tu aliado para una experiencia de golf inigualable",
  openGraph: {
    title: "Orlegitech - Tu aliado para una experiencia de golf inigualable",
    description:
      "Orlegitech ofrece servicios de golf con más de 150 campos en 10 países. Aplicación móvil, drones y alquiler de buggies.",
    images: ["/images/hero/background.png"],
  },
  description:
    "Orlegitech ofrece servicios de golf con más de 150 campos en 10 países. Aplicación móvil, drones y alquiler de buggies.",
  keywords: ["golf", "alquiler de buggies", "drones", "aplicacion movil"],
  authors: [{ name: "Orlegitech", url: "https://orlegitech.com" }],
  creator: "Orlegitech",
  publisher: "Orlegitech",
  robots: "index, follow",
  icons: {
    icon: "/icons.svg",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <AboutUs />
      <Pricing />
      <ContactUs />
      <Footer />
    </main>
  );
}
