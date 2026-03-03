"use client";

import { Check } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import AnimatedCard from "@/components/AnimatedCard";

export default function Pricing() {
  const t = useTranslations("pricing");
  const locale = useLocale();
  const pathname = usePathname();
  const contactHref =
    pathname === `/${locale}` ? "#contact-us" : `/${locale}/#contact-us`;

  const baseFeatures = Array.from({ length: 9 }, (_, i) =>
    t(`plans.base.features.${i + 1}`)
  );
  const premiumFeatures = Array.from({ length: 7 }, (_, i) =>
    t(`plans.premium.features.${i + 1}`)
  );
  const riegoFeatures = Array.from({ length: 7 }, (_, i) =>
    t(`addons.riego.features.${i + 1}`)
  );
  const droneFeatures = Array.from({ length: 7 }, (_, i) =>
    t(`addons.drone.features.${i + 1}`)
  );

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-5xl md:text-[60px] font-medium text-center text-white mb-16 font-[family-name:var(--font-plus-jakarta)]">
          {t("title")}
        </h2>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[858px] mx-auto mb-16">
          {/* Plan Base */}
          <AnimatedCard delay={0}>
            <div className="bg-[rgba(3,101,70,0.3)] rounded-[32px] shadow-[0px_3px_8px_0px_rgba(0,0,0,0.12)] px-8 py-8 flex flex-col gap-6 h-full">
              <p className="text-white text-xl font-semibold">
                {t("plans.base.name")}
              </p>
              <hr className="border-white/20" />
              <ul className="flex flex-col gap-2 flex-1">
                {baseFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-6 h-6 text-[#a1c353] shrink-0" />
                    <span className="text-white text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedCard>

          {/* Plan Premium */}
          <AnimatedCard delay={200}>
            <div className="bg-[rgba(3,101,70,0.3)] rounded-[32px] shadow-[0px_0px_32px_0px_#627c30,0px_3px_8px_0px_rgba(0,0,0,0.12)] px-8 py-8 flex flex-col gap-6 h-full relative">
              <div className="flex items-center justify-between">
                <p className="text-white text-xl font-semibold">
                  {t("plans.premium.name")}
                </p>
                <span className="bg-[rgba(230,240,237,0.2)] text-[#f6f9ee] text-sm px-4 py-1 rounded-full">
                  {t("plans.premium.badge")}
                </span>
              </div>
              <hr className="border-white/20" />
              <ul className="flex flex-col gap-2 flex-1">
                {premiumFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-6 h-6 text-[#a1c353] shrink-0" />
                    <span className="text-white text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={contactHref}
                className="bg-white text-[#024c35] text-center py-3 rounded-[32px] text-base font-semibold hover:bg-[#ebeed6] transition-colors"
              >
                {t("plans.premium.cta")}
              </a>
            </div>
          </AnimatedCard>
        </div>

        {/* Add-Ons Section */}
        <div className="max-w-[858px] mx-auto">
          <h3 className="text-4xl font-medium text-white mb-8 font-[family-name:var(--font-plus-jakarta)]">
            {t("addons.title")}
          </h3>

          <div className="flex flex-col gap-8">
            {/* Módulo de Riego Inteligente */}
            <AnimatedCard delay={100}>
              <div className="bg-[rgba(3,101,70,0.3)] rounded-[32px] shadow-[0px_3px_8px_0px_rgba(0,0,0,0.12)] px-8 py-8 flex flex-col gap-6">
                <p className="text-white text-2xl font-semibold">
                  {t("addons.riego.name")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  {riegoFeatures.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#a1c353] shrink-0" />
                      <span className="text-white text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>

            {/* Módulo de informes aéreos */}
            <AnimatedCard delay={200}>
              <div className="bg-[rgba(3,101,70,0.3)] rounded-[32px] shadow-[0px_3px_8px_0px_rgba(0,0,0,0.12)] px-8 py-8 flex flex-col gap-6">
                <p className="text-white text-2xl font-semibold">
                  {t("addons.drone.name")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  {droneFeatures.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#a1c353] shrink-0" />
                      <span className="text-white text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}
