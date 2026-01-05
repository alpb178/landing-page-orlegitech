"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import AnimatedCard from "@/components/AnimatedCard";

interface Service {
  title: string;
  description: React.ReactNode;
  image: string;
  showStars?: boolean;
  showMapOverlay?: boolean;
}

export default function Services() {
  const t = useTranslations("services");

  const services: Service[] = [
    {
      title: t("app.title"),
      image: "/images/services/app.png",
      showStars: true,
      description: (
        <div className="space-y-2">
          <p className="text-black font-bold text-lg">{t("app.mainTitle")}</p>
          <p className="text-gray-600 text-sm">•{t("app.features.1")}</p>
          <p className="text-gray-600 text-sm">•{t("app.features.2")}</p>
          <p className="text-gray-600 text-sm">•{t("app.features.3")}</p>
          <p className="text-gray-600 text-sm">•{t("app.features.4")}</p>
        </div>
      ),
    },
    {
      title: t("drone.title"),
      description: (
        <div className="space-y-2">
          <p className="text-black font-bold text-lg">{t("drone.mainTitle")}</p>
          <p className="text-gray-600 text-sm">•{t("drone.features.1")}</p>
          <p className="text-gray-600 text-sm">•{t("drone.features.2")}</p>
        </div>
      ),
      image: "/images/services/drone.png",
      showStars: true,
    },
    {
      title: t("buggy.title"),
      image: "/images/services/irrigation.png",
      showStars: true,
      description: (
        <div className="space-y-2">
          <p className="text-black font-bold text-lg">{t("buggy.mainTitle")}</p>
          <p className="text-gray-600 text-sm">•{t("buggy.features.1")}</p>
          <p className="text-gray-600 text-sm">•{t("buggy.features.2")}</p>
          <p className="text-gray-600 text-sm">•{t("buggy.features.3")}</p>
          <p className="text-gray-600 text-sm">•{t("buggy.features.4")}</p>
        </div>
      ),
      showMapOverlay: true,
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#F5F5F0]">
      <div className="container mx-auto px-5">
        <h2 className="text-7xl font-['Montserrat_Alternates'] font-semibold text-center text-gray-800 mb-[100px]">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <AnimatedCard
              key={service.title}
              delay={index * 150}
              className="relative mb-10"
            >
              {/* Title and stars positioned outside and above the card */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                <div className="flex flex-col items-center bg-white w-[200px] justify-center rounded-full shadow-sm gap-2">
                  <span
                    className="text-[#1a4d3a] text-6xl font-bold absolute -top-12 right-8"
                    style={{
                      fontFamily: "var(--font-dancing-script)",
                    }}
                  >
                    {service.title}
                  </span>
                  {service.showStars && (
                    <div className="flex gap-1 px-2 py-1 mt-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-2xl">
                          ★
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {/* Image Card */}
              <div className="relative w-auto h-[496px] rounded-2xl shadow-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title + " image"}
                  width={352}
                  height={496}
                  className="object-cover w-full h-[290px]"
                />
                <div className="bg-white/20 text-xl backdrop-blur-md rounded-2xl p-8">
                  {service.description}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
