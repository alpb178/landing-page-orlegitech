"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import LanguageSelector from "@/components/LanguageSelector";
import { usePathname } from "next/navigation";

export default function Header() {
  const t = useTranslations("header.nav");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  const servicesHref = pathname === `/${locale}` ? "#services" : `/${locale}/#services`;
  const aboutUsHref = pathname === `/${locale}` ? "#about-us" : `/${locale}/#about-us`;
  const pricingHref = pathname === `/${locale}` ? "#pricing" : `/${locale}/#pricing`;
  const contactHref = pathname === `/${locale}` ? "#contact-us" : `/${locale}/#contact-us`;

  const navLinks = [
    { href: servicesHref, label: t("services") },
    { href: aboutUsHref, label: t("about") },
    { href: pricingHref, label: t("pricing") },
  ];

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="flex items-center justify-between gap-6 px-6 py-2 rounded-[120px] bg-[rgba(235,238,214,0.2)] backdrop-blur-md shadow-[0px_7px_14px_rgba(0,0,0,0.25)] max-w-5xl w-full">
          <a href={`/${locale}/#home`}>
            <Image
              src="/logo-navbar.svg"
              alt="orlegitech logo"
              width={203}
              height={64}
              className="w-auto h-auto"
            />
          </a>

          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6 items-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white text-base font-medium hover:text-[#ebeed6] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={contactHref}
              className="bg-white text-[#024c35] px-6 py-2.5 rounded-[32px] text-base font-semibold hover:bg-[#ebeed6] transition-colors"
            >
              {t("contact")}
            </a>
            <LanguageSelector />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector variant="mobile" />
            <button
              onClick={toggleDrawer}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isDrawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {isDrawerOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={closeDrawer} />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#012319] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Image src="/icons.svg" alt="orlegitech logo" width={24} height={24} className="w-6 h-6" />
              <span className="text-white text-lg font-semibold">Orlegitech</span>
            </div>
            <button onClick={closeDrawer} className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors" aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 p-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={closeDrawer} className="block text-[#ebeed6] text-lg py-3 px-4 rounded-lg hover:bg-white/10 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={contactHref} onClick={closeDrawer} className="block text-center bg-white text-[#024c35] text-lg py-3 px-4 rounded-[32px] font-semibold mt-4">
                  {t("contact")}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
