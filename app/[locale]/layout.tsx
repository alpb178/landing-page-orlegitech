import type { Metadata } from "next";
import { Inter, Dancing_Script, Montserrat_Alternates } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import { LanguageCode } from "@/constant/languages";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserratAlternates = Montserrat_Alternates({
  variable: "--font-montserrat-alternates",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Orlegitech - Tu aliado para una experiencia de golf inigualable",
  description:
    "Orlegitech ofrece servicios de golf con más de 150 campos en 10 países. Aplicación móvil, drones y alquiler de buggies.",
  icons: {
    icon: "/icons.svg",
  },
  openGraph: {
    images: "/icons.svg",
    title: "Orlegitech - Tu aliado para una experiencia de golf inigualable",
    description:
      "Orlegitech ofrece servicios de golf con más de 150 campos en 10 países. Aplicación móvil, drones y alquiler de buggies.",
    url: "https://orlegitech.com",
    siteName: "Orlegitech",
    locale: "es",
    type: "website",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as LanguageCode)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${montserratAlternates.variable} ${dancingScript.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ScrollToTop />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
