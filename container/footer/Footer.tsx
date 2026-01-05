"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="bg-[#01261A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col  justify-center items-center gap-8">
          <Image
            src="/logo-footer.svg"
            alt="orlegitech logo"
            width={213}
            height={35}
            className="w-auto h-auto"
          />

          <p className="text-sm text-white text-center">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
