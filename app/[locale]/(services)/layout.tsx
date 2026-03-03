import Header from "@/container/header/Header";
import Footer from "@/container/footer/Footer";
import Features from "@/container/features/features";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#012319] via-[#012319] via-[75%] to-[#008c63]">
      <Header />
      <div className="pt-24 pb-12">{children}</div>
      <Features />
      <Footer />
    </main>
  );
}
