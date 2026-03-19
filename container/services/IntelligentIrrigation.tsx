"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";

export default function IntelligentIrrigation() {
  const t = useTranslations("services.intelligentIrrigation");

  return (
    <section className="relative min-h-[calc(100vh-96px)] overflow-hidden">
      <div className="container mx-auto px-5 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left: Image with badge */}
          <div className="relative w-full lg:w-[504px] h-[400px] lg:h-[499px] shrink-0">
            <div className="relative w-full h-full rounded-[32px] overflow-hidden">
              <Image
                src="/images/services/irrigation-detail.png"
                alt={t("badge")}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(1,35,25,0.4)] to-transparent" />
            </div>
            <div className="absolute top-6 left-1/2 -translate-x-1/2">
              <div className="bg-[rgba(235,238,214,0.8)] opacity-60 px-4 py-2 rounded-[120px] shadow-[0px_7px_14px_0px_rgba(0,0,0,0.25)]">
                <span className="text-[#012319] text-base font-normal whitespace-nowrap">
                  {t("badge")}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-6 text-white text-shadow-[0px_2px_4px_rgba(0,0,0,0.25)] max-w-[624px]">
            <h1 className="text-2xl font-bold">
              {t("title")}
            </h1>
            <div className="flex flex-col gap-4 text-base text-justify">
              <p>{t("description1")}</p>
              <p>{t("description2")}</p>
              <p>{t("description3")}</p>
            </div>

            {/* CTA Card */}
            <div className="bg-[rgba(255,255,255,0.1)] rounded-[32px] p-6 mt-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                <h2 className="text-[28px] lg:text-[32px] font-bold leading-tight max-w-[420px]">
                  {t("cta")}{" "}
                  <span className="text-[#a1c353]">{t("ctaHighlight")}</span>
                </h2>
                <Link
                  href="#pricing"
                  className="bg-white px-6 py-3 rounded-[32px] shadow-[0px_4px_5.2px_0px_rgba(0,0,0,0.25)] flex items-center gap-2.5 hover:bg-gray-100 transition-colors"
                >
                  <span className="text-[#024c35] text-base font-medium whitespace-nowrap">
                    {t("viewPlans")}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#024c35]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
