"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const pathname = usePathname();

  const servicesHref = pathname === `/${locale}` ? "#services" : `/${locale}/#services`;
  const contactHref = pathname === `/${locale}` ? "#contact-us" : `/${locale}/#contact-us`;

  return (
    <div className="relative" id="home">
      <section className="relative min-h-dvh flex items-center justify-center overflow-hidden">
        {/* Background: aerial golf course photo + green gradient overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/background.png"
            alt=""
            fill
            className="object-cover"
            priority
            aria-hidden="true"
          />
        
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-28 sm:py-36 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-[64px] font-extrabold text-white mb-4 sm:mb-6 tracking-tight leading-tight max-w-4xl font-[family-name:var(--font-plus-jakarta)]">
            {t("tagline")}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium italic max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-[family-name:var(--font-plus-jakarta)]">
            {t("description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a
              href={servicesHref}
              className="bg-[rgba(235,238,214,0.24)] border border-[#4a6435] text-white px-8 py-3.5 rounded-[32px] text-lg font-semibold hover:bg-[rgba(235,238,214,0.35)] transition-all duration-200 shadow-[0px_4px_5.2px_0px_rgba(0,0,0,0.25)]"
            >
              {t("services_cta")}
            </a>
            <a
              href={contactHref}
              className="bg-white text-[#024c35] px-8 py-3.5 rounded-[32px] text-lg font-semibold hover:bg-[#ebeed6] transition-all duration-200 flex items-center gap-2 shadow-[0px_4px_5.2px_0px_rgba(0,0,0,0.25)]"
            >
              {t("cta")}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-16 sm:mt-20 w-full max-w-3xl mx-auto">
            <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-[24px] p-6 sm:p-8">
              <p className="text-base sm:text-lg text-[#e6ebe9] leading-relaxed text-center">
                {t("stats.description")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
