import Header from "@/container/header/Header";
import Footer from "@/container/footer/Footer";
import Features from "@/container/features/features";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="mt-20">{children}</div>

      <Features />
      <Footer />
    </>
  );
}
