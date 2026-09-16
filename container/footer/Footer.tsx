"use client";

import type { JSX } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const footerLinks = [
  { href: "/support", key: "support" },
  { href: "/privacy", key: "privacy" },
  { href: "/terms", key: "terms" },
] as const;

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

          <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            {footerLinks.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-[#ebeed6] underline underline-offset-4 hover:text-white transition-colors"
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          <p className="max-w-3xl text-sm text-[#f4f4f4] text-center leading-relaxed font-[family-name:var(--font-poppins)]">
            {t("legal")}
          </p>
        </div>
      </div>
    </footer>
  );
}
