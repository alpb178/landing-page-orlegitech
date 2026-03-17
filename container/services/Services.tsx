"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import AnimatedCard from "@/components/AnimatedCard";
import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl md:text-5xl font-medium text-center text-white mb-16 uppercase font-(family-name:--font-plus-jakarta)">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* App Card — two phone mockups on gradient */}
          <AnimatedCard delay={0} className="relative">
            <Link href="/app-service" className="block">
              <div className="relative h-[496px] rounded-[24px] overflow-hidden bg-linear-to-b from-[#eff5b3] to-[#3a4913]">
                {/* Left phone (behind) */}
                <div className="absolute left-[23%] top-[22%] w-[29%] h-[56%] border-[3px] border-[#012319] rounded-[14px] overflow-hidden bg-[#f4f4f4] z-0">
                  <Image
                    src="/images/services/app.png"
                    alt={t("app.title") + " screen 1"}
                    width={863}
                    height={3014}
                    className="absolute w-[106%] h-[161%] -left-[3%] top-0 object-cover"
                  />
                </div>
                {/* Right phone (in front) */}
                <div className="absolute left-[47%] top-[14%] w-[30%] h-[56%] border-[3px] border-[#012319] rounded-[17px] overflow-hidden bg-[#f4f4f4] z-10">
                  <Image
                    src="/images/features/project-management.jpg"
                    alt={t("app.title") + " screen 2"}
                    width={863}
                    height={3014}
                    className="absolute w-[106%] h-[161%] -left-[3%] -top-[38%] object-cover"
                  />
                </div>
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex items-end justify-between">
                  <span className="text-white text-[32px] italic font-medium font-(family-name:--font-plus-jakarta)">
                    {t("app.title")}
                  </span>
                  <div className="w-[48px] h-[48px] flex items-center justify-center">
                    <ArrowUpRight className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedCard>

          {/* Informes aéreos Card */}
          <AnimatedCard delay={150} className="relative">
            <Link href="/aerial-reports-service" className="block">
              <div className="relative h-[496px] rounded-[24px] overflow-hidden bg-gradient-to-b from-[#26b285] to-[#012d1f]">
                <div className="absolute -left-[13%] -top-[3%] w-[126%] h-[126%]">
                  <Image
                    src="/images/services/drone.jpg"
                    alt={t("drone.title") + " image"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-[rgba(1,51,34,0.2)]" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <span className="text-white text-[32px] italic font-medium font-[family-name:var(--font-plus-jakarta)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    {t("drone.title")}
                  </span>
                  <div className="w-[48px] h-[48px] flex items-center justify-center">
                    <ArrowUpRight className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedCard>

          {/* Riego inteligente Card */}
          <AnimatedCard delay={300} className="relative">
            <Link href="/intelligent-irrigation" className="block">
              <div className="relative h-[496px] rounded-[24px] overflow-hidden bg-gradient-to-b from-[#26b285] to-[#012d1f]">
                <div className="absolute left-0 -top-[4%] w-full h-[104%]">
                  <Image
                    src="/images/services/irrigation.png"
                    alt={t("buggy.title") + " image"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-[rgba(1,51,34,0.2)]" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <span className="text-white text-[32px] italic font-medium font-[family-name:var(--font-plus-jakarta)] drop-shadow-[0_4px_8px_rgba(0,0,0,0.05)]">
                    {t("buggy.title")}
                  </span>
                  <div className="w-[48px] h-[48px] flex items-center justify-center">
                    <ArrowUpRight className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
