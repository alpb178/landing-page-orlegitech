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
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          {/* Main Logo with Leaf Icon */}
          <div className="mb-8 flex justify-center items-center gap-4">
            <Image
              src="/icons.svg"
              alt="orlegitech leaf icon"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <span className="text-6xl md:text-7xl font-bold text-white">
              Orlegitech
            </span>
          </div>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl font-bold text-white mb-8 italic">
            {t("tagline")}
          </p>

          <p className="text-2xl md:text-3xl  text-white mb-8 italic">
            {t("description")}
          </p>

          {/* CTA Button */}
          <button
            onClick={() => (window.location.href = "#contact-us")}
            className="bg-[#1a4d3a] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#2d6b52] transition-colors flex items-center gap-2 mx-auto"
          >
            {t("cta")}
            <span>→</span>
          </button>
        </div>
      </section>
      <section className=" hidden md:flex h-[800px] w-full aspect-video bg-[#1a4d3a] items-center justify-center">
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

      <div className="absolute hidden md:block top-[50%] left-0 right-0 mt-20 bg-[#F5F5F0] rounded-lg p-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-r border-gray-300 pr-8">
            <p className="text-4xl font-bold text-[#1a4d3a] mb-2">
              {t("stats.fields")}
            </p>
            <p className="text-gray-600 text-sm">
              {t("stats.fieldsDescription")}
            </p>
          </div>
          <div className="border-r border-gray-300 pr-8">
            <p className="text-4xl font-bold text-[#1a4d3a] mb-2">
              {t("stats.users")}
            </p>
            <p className="text-gray-600 text-sm">
              {t("stats.usersDescription")}
            </p>
          </div>
          <div className="text-gray-700 text-sm">
            <p className="text-xl font-bold text-[#1a4d3a] mb-2">
              {t("stats.management")}
            </p>
            <p>{t("stats.managementDescription")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
