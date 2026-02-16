"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function Hero() {
  const t = useTranslations("hero");
  const router = useRouter();
  const locale = useLocale();
  const description2 = t("description2");

  return (
    <div className="relative" id="home">
      <section className="relative min-h-dvh flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/background.png"
            alt="Golf course background"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay: lighter at top for sky, darker at bottom for text */}
          <div
            className="absolute inset-0 bg-linear-to-b from-black/35 via-black/50 to-black/65"
            aria-hidden
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-28 sm:py-36 flex flex-col items-center justify-center text-center">
          {/* Tagline — main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight max-w-4xl [text-shadow:0_2px_20px_rgba(0,0,0,0.4)]">
            {t("tagline")}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-medium max-w-2xl mx-auto mb-2 leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]">
            {t("description")}
          </p>

          {description2 && (
            <p className="text-lg sm:text-xl text-white/90 max-w-xl mx-auto mb-8 sm:mb-10 [text-shadow:0_1px_10px_rgba(0,0,0,0.3)]">
              {description2}
            </p>
          )}

          {/* CTA Button */}
          <button
            type="button"
            onClick={() => router.push(`/${locale}/demo`)}
            className="mt-6 sm:mt-8 bg-[#013322] text-white px-6 py-3.5 cursor-pointer rounded-xl text-lg font-semibold shadow-lg shadow-black/25 hover:bg-[#024a32] hover:shadow-xl hover:shadow-black/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            <span>{t("demo.cta")}</span>
            <span className="ml-2 inline-block" aria-hidden>→</span>
          </button>

          {/* Informative box — in flow so it works on all viewports */}
          <div className="mt-16 sm:mt-20 w-full max-w-3xl mx-auto">
            <div className="bg-[#E2ECCA]/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/20 border border-white/30">
              <p className="text-base sm:text-lg text-[#1a4d3a] font-medium leading-relaxed">
                {t("stats.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hidden h-[800px] w-full aspect-video bg-[#01261A] items-center justify-center">
        <div className="relative hidden md:block aspect-video rounded-lg max-w-full">
          <video
            src="/movies/movie-web.mp4"
            className="w-full h-[498px] object-cover rounded-lg"
            controls
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero/background.png"
          />
        </div>
      </section>

      <div className="hidden w-full h-full">
        <video
          src="/movies/movie-app.mp4"
          className="w-full h-full"
          controls
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero/background.png"
        />
      </div>
    </div>
  );
}
