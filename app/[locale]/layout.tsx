import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
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

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://orlegitech.com"),
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

  if (!routing.locales.includes(locale as LanguageCode)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ScrollToTop />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
