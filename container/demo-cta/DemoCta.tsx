"use client";

import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function DemoCta() {
  const t = useTranslations("demoCta");
  const locale = useLocale();
  const pathname = usePathname();
  const contactHref =
    pathname === `/${locale}` ? "#contact-us" : `/${locale}/#contact-us`;

  return (
    <section className="py-10">
      <div className="container mx-auto px-5">
        <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-[24px] p-6 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="flex flex-col gap-3.5 text-center md:text-left">
            <p className="text-[#ebeed6] text-2xl font-semibold">
              {t("title")}
            </p>
            <p className="text-[#ebeed6] text-base">{t("subtitle")}</p>
          </div>
          <a
            href={contactHref}
            className="bg-white border border-[#036546] text-[#024c35] px-6 py-4 rounded-[32px] text-xl md:text-2xl font-medium flex items-center justify-center gap-2.5 hover:bg-[#ebeed6] transition-all duration-200 drop-shadow-[0px_4px_2.6px_rgba(0,0,0,0.25)] whitespace-nowrap"
          >
            {t("cta")}
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
