import Image from "next/image";
import { Header } from "@/container/header/Header";
import { Footer } from "@/container/footer/Footer";

/**
 * Chrome for the standalone pages (support, privacy, terms): the landing
 * background plus the shared header and footer, without the marketing
 * sections the service pages append after their content.
 */

export default function StandaloneLayout({
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

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <div className="flex-1 pt-32 pb-12">{children}</div>
        <Footer />
      </div>
    </main>
  );
}
