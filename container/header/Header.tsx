"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import LanguageSelector from "@/components/LanguageSelector";
import { usePathname } from "next/navigation";

export default function Header() {
  const t = useTranslations("header.nav");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isInHero, setIsInHero] = useState(true);
  const [isInSection2, setIsInSection2] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  useEffect(() => {
    const heroSection = document.getElementById("home");
    const servicesSection = document.getElementById("services");

    if (!heroSection || !servicesSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "home") {
            setIsInHero(entry.isIntersecting);
          } else if (entry.target.id === "services") {
            setIsInSection2(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-100px 0px 0px 0px",
      }
    );

    observer.observe(heroSection);
    observer.observe(servicesSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };


  const aboutUsHref = pathname === `/${locale}` ? "#about-us" : `/${locale}/#about-us`;
  const servicesHref = pathname === `/${locale}` ? "#services" : `/${locale}/#services`;
  const pricingHref = pathname === `/${locale}` ? "#pricing" : `/${locale}/#pricing`;
  const contactHref = pathname === `/${locale}` ? "#contact-us" : `/${locale}/#contact-us`;

  const navLinks = [
    { href: aboutUsHref, label: t("about") },
    { href: servicesHref, label: t("services") },
    { href: pricingHref, label: t("pricing") },
    { href: contactHref, label: t("contact") },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isInHero
            ? "bg-transparent text-white"
            : isInSection2
            ? "bg-white/80 backdrop-blur-sm text-gray-800 shadow-md"
            : "bg-white text-gray-800 shadow-md"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between">
          <a href={`/${locale}/#home`}>
            <Image
              src="/logo-navbar.svg"
              alt="orlegitech logo"
              width={203}
              height={64}
              className="w-auto h-auto"
            />
          </a>

          <div className="hidden md:flex items-center gap-4">
            <div className="bg-[#01261A] px-6 py-2 rounded-full">
              <ul className="flex gap-6 items-center">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="transition text-lg text-[#EADFD1] hover:text-green-300 font-bold"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="mt-1">
                  <LanguageSelector />
                </li>
              </ul>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector variant="mobile" />
            <button
              onClick={toggleDrawer}
              className="bg-[#1a4d3a] p-2 rounded-lg text-white hover:bg-[#2d6b52] transition-colors"
              aria-label="Toggle menu"
            >
              {isDrawerOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeDrawer}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#1a4d3a] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-green-700">
            <div className="flex items-center gap-2">
              <Image
                src="/icons.svg"
                alt="orlegitech logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-white text-lg font-semibold">
                Orlegitech
              </span>
            </div>

            <button
              onClick={closeDrawer}
              className="p-2 text-white hover:bg-green-700 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <nav className="flex-1 p-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeDrawer}
                    className="block text-[#E2ECCA] text-lg py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
