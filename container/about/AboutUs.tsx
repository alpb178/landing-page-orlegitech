"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import Features from "../features/features";

export default function AboutUs() {
  const t = useTranslations("about");

  return (
    <section id="about-us" className="relative">
      {/* Top Section with Background Image */}
      {/* Features Section with Dark Green Background */}
      <Features />
      <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur Effect */}
        <div className="absolute inset-0">
          <Image
            src="/images/about/background.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <h2 className="text-5xl md:text-6xl font-['Montserrat_Alternates'] font-semibold text-center text-white mb-12">
            {t("title")}
          </h2>

          {/* Image and Text Cards with Glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Image Card */}
            <div className="relative w-full h-[400px] aspect-video rounded-lg overflow-hidden">
              <video
                src="/movies/movie-about.mp4"
                className="w-full h-full object-cover rounded-lg"
                controls
                autoPlay
                muted
                loop
                playsInline
                poster="/images/hero/background.png"
              />
            </div>

            {/* Text Card */}
            <div className="bg-white/20 text-xl backdrop-blur-md rounded-2xl p-8">
              <p className="text-white leading-relaxed mb-4">
                {t("description.1")}
              </p>
              <p className="text-white leading-relaxed mb-4">
                {t("description.2")}
              </p>
              <p className="text-white leading-relaxed">{t("description.3")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
