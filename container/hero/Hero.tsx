"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  return (
    <div className="relative" id="home">
      <section className="relative h-[1080px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/background.png"
            alt="Golf course background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32 flex flex-col items-center justify-center text-center">
          <Image
            src="/logo-orlegitech.svg"
            alt="orlegitech leaf icon"
            width={897}
            height={148}
            className="hidden  w-auto h-auto mb-8 mt-44 "
          />

          {/* Tagline */}
          <p className="text-2xl md:text-3xl  text-white mb-8 italic font-['Inter']">
            {t("tagline")}
          </p>

          <p className="text-2xl md:text-3xl  text-white mb-8 italic font-['Inter']">
            {t("description")}
          </p>

          <p className="text-2xl md:text-3xl  text-white mb-8 italic font-['Inter']">
            {t("description2")}
          </p>

          {/* CTA Button */}
          <button
            onClick={() => (window.location.href = "#contact-us")}
            className="bg-[#013322] text-[#EADFD1] px-4 py-2 font-['Inter']
                rounded-lg text-lg font-medium hover:shadow-lg "
          >
            <span>{t("cta")}</span>
            <span className="ml-2">→</span>
          </button>
        </div>
      </section>
      <section className=" hidden md:flex h-[800px] w-full aspect-video bg-[#01261A] items-center justify-center">
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

      <div className=" block md:hidden w-full h-full">
        <video
          src="/movies/movie-app.mp4"
          className="w-full h-full "
          controls
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero/background.png"
        />
      </div>

      <div className="absolute hidden md:block top-[50%] left-0 right-0 mt-20 bg-[#E2ECCA] rounded-lg p-8 max-w-6xl mx-auto">
        <p className="text-xl font-['Montserrat_Alternates'] font-semibold text-[#1a4d3a] mb-2">
          {t("stats.description")}
        </p>
      </div>
    </div>
  );
}
