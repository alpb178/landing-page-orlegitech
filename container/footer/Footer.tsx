"use client";

import type { JSX } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const Footer = (): JSX.Element => {
  const t = useTranslations("footer");
  return (
    <footer className="bg-[#01261a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center gap-8">
          <Image
            src="/logo-footer.svg"
            alt="orlegitech logo"
            width={213}
            height={35}
            className="w-auto h-auto"
          />

          <p className="max-w-3xl text-sm text-[#f4f4f4] text-center leading-relaxed font-[family-name:var(--font-poppins)]">
            {t("legal")}
          </p>
        </div>
      </div>
    </footer>
  );
}
