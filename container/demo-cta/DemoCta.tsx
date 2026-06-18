"use client";

import type { JSX } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";

export const DemoCta = (): JSX.Element => {
  const t = useTranslations("demoCta");
  const locale = useLocale();
  const pathname = usePathname();
  const contactHref =
    pathname === `/${locale}` ? "#contact-us" : `/${locale}/#contact-us`;

  return (
    <section className="py-10">
      <div className="container mx-auto px-5">
        <div className="relative max-w-5xl mx-auto pt-20 md:pt-0">
          <div className="relative bg-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-[24px] flex flex-col md:flex-row items-center md:justify-end gap-8 px-8 py-8 md:min-h-[364px] md:py-12 md:pr-12 md:pl-[440px]">
            {/* Phone mockups (overlap the card on the left) */}
            <div className="md:absolute md:left-[40px] md:top-1/2 md:-translate-y-1/2 flex justify-center">
              {/* Decorative glow behind the phones */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-[#a1c353]/20 blur-3xl pointer-events-none"
                aria-hidden="true"
              />
              <Image
                src="/images/demo/phones.png"
                alt=""
                width={342}
                height={466}
                className="relative w-[240px] md:w-[342px] h-auto pointer-events-none drop-shadow-[0px_20px_40px_rgba(0,0,0,0.35)]"
                aria-hidden="true"
              />
            </div>

            {/* Text + CTA */}
            <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
              <div className="flex flex-col gap-4 md:max-w-[410px]">
                <h2 className="text-[#ebeed6] text-3xl md:text-4xl font-semibold leading-tight">
                  {t.rich("title", {
                    h: (chunks) => (
                      <span className="text-[#a1c353]">{chunks}</span>
                    ),
                  })}
                </h2>
                <p className="text-[#ebeed6] text-xl md:text-2xl">
                  {t("subtitle")}
                </p>
              </div>
              <a
                href={contactHref}
                className="bg-white border border-[#036546] text-[#024c35] px-6 py-4 rounded-[32px] text-xl md:text-2xl font-medium inline-flex items-center justify-center hover:bg-[#ebeed6] transition-all duration-200 drop-shadow-[0px_4px_2.6px_rgba(0,0,0,0.25)] whitespace-nowrap"
              >
                {t("cta")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
