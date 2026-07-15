"use client";

import type { JSX } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

export const Hero = (): JSX.Element => {
  const t = useTranslations("hero");
  const locale = useLocale();
  const pathname = usePathname();

  const contactHref = pathname === `/${locale}` ? "#contact-us" : `/${locale}/#contact-us`;

  return (
    <div className="relative" id="home">
      <section className="relative min-h-dvh flex items-center justify-center overflow-hidden">
        {/* Background: video */}
        <div className="absolute inset-0">
          <video
            src="/movies/movie-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          />
        
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-28 sm:py-36 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl sm:text-6xl md:text-[96px] text-white mb-4 sm:mb-6 leading-[1.05] max-w-4xl font-[family-name:var(--font-great-vibes)]">
            {t("tagline")}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium italic max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-[family-name:var(--font-plus-jakarta)]">
            {t("description")}
          </p>

          <div className="flex items-center justify-center">
            <a
              href={contactHref}
              className="bg-white border border-[#036546] text-[#024c35] px-6 py-4 rounded-[32px] text-xl md:text-2xl font-medium flex items-center gap-2.5 hover:bg-[#ebeed6] transition-all duration-200 drop-shadow-[0px_4px_2.6px_rgba(0,0,0,0.25)]"
            >
              {t("demo_cta")}
              <ArrowRight className="w-6 h-6" />
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
