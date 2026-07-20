"use client";

import type { JSX } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

export const AboutUs = (): JSX.Element => {
  const t = useTranslations("about");
  const locale = useLocale();
  const pathname = usePathname();
  const contactHref =
    pathname === `/${locale}` ? "#contact-us" : `/${locale}/#contact-us`;

  return (
    <section id="about-us" className="relative">
      <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur */}
       

        <div className="relative z-10 container mx-auto px-4 py-20">
          <h2 className="text-5xl md:text-[64px] text-center text-white mb-12 font-(family-name:--font-great-vibes)">
            {t("title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Video Card */}
            <div className="relative w-full h-[500px] rounded-[32px] overflow-hidden">
              <video
                src="/movies/movie-about.mp4"
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
                poster="/images/hero/background.png"
              />
            </div>

            {/* Text Card */}
            <div className="bg-[rgba(255,255,255,0.1)] h-auto lg:h-[500px] backdrop-blur-md rounded-[24px] p-8">
              <p className="text-white text-xl leading-relaxed mb-4 [text-shadow:0_1px_8px_rgba(0,0,0,0.3)]">
                {t("description.1")}
              </p>
              <p className="text-white text-xl leading-relaxed mb-4 [text-shadow:0_1px_8px_rgba(0,0,0,0.3)]">
                {t("description.2")}
              </p>
              <p className="text-white text-xl leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.3)]">
                {t("description.3")}
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <a
              href={contactHref}
              className="bg-white border border-[#036546] text-[#024c35] px-6 py-4 rounded-[32px] text-xl md:text-2xl font-medium flex items-center gap-2.5 hover:bg-[#ebeed6] transition-all duration-200 drop-shadow-[0px_4px_2.6px_rgba(0,0,0,0.25)]"
            >
              {t("demo_cta")}
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
