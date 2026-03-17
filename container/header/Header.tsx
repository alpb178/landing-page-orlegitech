"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import LanguageSelector from "@/components/LanguageSelector";
import { usePathname } from "next/navigation";

const Logo = () => {
  return <svg width="153" height="26" viewBox="0 0 153 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.82347 14.8801C4.72176 14.8015 4.79135 14.6389 4.91876 14.658C6.12646 14.8451 9.18533 15.234 11.3673 15.234C13.7795 15.234 16.2431 14.8907 17.3769 14.6878C17.5097 14.6644 17.5804 14.8344 17.4701 14.9109C16.3609 15.6792 13.62 17.5707 12.6414 18.2009C12.6061 18.2243 12.5879 18.2604 12.5879 18.3029V24.512C12.5879 24.5693 12.5483 24.6193 12.4926 24.632L10.0494 25.2335C9.97012 25.2526 9.89411 25.1931 9.89411 25.1134V18.3369C9.89411 18.2933 9.87055 18.253 9.83308 18.2306C9.41874 17.9873 6.97871 16.5389 4.82347 14.8801Z" fill="white"/>
  <path d="M11.6043 13.9451C11.6043 13.9451 15.0454 13.4446 16.6043 12.5764C18.01 11.7933 20.7392 9.08032 21.5871 7.39921C23.1439 4.31009 23.0978 2.6513 23.1439 1.95952C23.191 1.26774 23.055 0 23.055 0C23.055 0 19.8291 0.184901 15.525 3.98705C10.8613 8.10906 11.6043 13.944 11.6043 13.944V13.9451Z" fill="white"/>
  <path d="M0 2.55064C0 2.55064 0.413274 5.45061 0.926119 6.83205C1.40792 8.12848 3.09099 10.8882 4.43681 11.8095C6.91003 13.5023 8.34471 13.6617 8.93464 13.7849C9.52457 13.9082 10.6327 13.9454 10.6327 13.9454C10.6327 13.9454 10.8618 11.1857 8.10381 7.07539C5.1156 2.62078 0 2.55064 0 2.55064Z" fill="white"/>
  <path d="M33.3245 12.9376C33.3245 9.20982 36.105 6.56808 39.8844 6.56808C43.6638 6.56808 46.4207 9.20982 46.4207 12.9376C46.4207 16.6654 43.6638 19.3305 39.8844 19.3305C36.105 19.3305 33.3245 16.6643 33.3245 12.9376ZM44.1156 12.9376C44.1156 10.2714 42.3094 8.54992 39.8844 8.54992C37.4593 8.54992 35.6296 10.2725 35.6296 12.9376C35.6296 15.6027 37.4593 17.3486 39.8844 17.3486C42.3094 17.3486 44.1156 15.6027 44.1156 12.9376Z" fill="white"/>
  <path d="M56.3559 6.56808V8.76245C56.1653 8.73907 55.9993 8.73907 55.8334 8.73907C53.3848 8.73907 51.8645 10.2257 51.8645 12.962V19.1902H49.5829V6.6871H51.7692V8.78689C52.5775 7.32469 54.146 6.56915 56.3569 6.56915L56.3559 6.56808Z" fill="white"/>
  <path d="M59.1596 15.5085V1.68456H61.4412V15.3204C61.4412 16.6647 62.0825 17.4202 63.3898 17.4202C63.8181 17.4202 64.2453 17.3023 64.5065 17.1843L64.6254 19.0482C64.1029 19.2374 63.5322 19.3309 62.9851 19.3309C60.5365 19.3309 59.1586 17.9154 59.1586 15.5096L59.1596 15.5085Z" fill="white"/>
  <path d="M75.8725 15.8385L77.108 17.3007C75.9913 18.6216 74.2558 19.3293 72.1637 19.3293C68.0995 19.3293 65.3896 16.6631 65.3896 12.9364C65.3896 9.20971 68.0513 6.56691 71.7119 6.56691C75.1583 6.56691 77.8446 8.97274 77.9153 12.7005L67.9089 14.6345C68.5502 16.3571 70.1198 17.3475 72.2344 17.3475C73.7076 17.3475 74.9442 16.8523 75.8714 15.8374L75.8725 15.8385ZM67.6006 12.8195V13.0554L75.6583 11.5454C75.2547 9.75272 73.7568 8.47861 71.713 8.47861C69.3125 8.47861 67.6006 10.2012 67.6006 12.8195Z" fill="white"/>
  <path d="M93.1513 6.68604V17.491C93.1513 21.9021 90.8932 23.9073 86.6149 23.9073C84.3098 23.9073 81.98 23.2708 80.601 22.0434L81.6941 20.2975C82.859 21.2879 84.6888 21.9255 86.5432 21.9255C89.5142 21.9255 90.8686 20.5568 90.8686 17.7259V16.7355C89.7755 18.033 88.1352 18.6695 86.329 18.6695C82.692 18.6695 79.9351 16.2159 79.9351 12.6071C79.9351 8.99836 82.692 6.56808 86.329 6.56808C88.207 6.56808 89.9179 7.25243 90.9875 8.62006V6.68604H93.1502H93.1513ZM90.9168 12.6071C90.9168 10.1768 89.1106 8.54992 86.5913 8.54992C84.0721 8.54992 82.2413 10.1779 82.2413 12.6071C82.2413 15.0363 84.0475 16.6887 86.5913 16.6887C89.1352 16.6887 90.9168 15.014 90.9168 12.6071Z" fill="white"/>
  <path d="M97.0966 2.81699C97.0966 1.99131 97.7625 1.33035 98.6415 1.33035C99.5205 1.33035 100.186 1.96687 100.186 2.76917C100.186 3.61822 99.5452 4.27919 98.6415 4.27919C97.7379 4.27919 97.0966 3.64266 97.0966 2.81699ZM97.5013 6.68608H99.7828V19.1892H97.5013V6.68608Z" fill="white"/>
  <path d="M110.762 18.4572C110.073 19.047 109.027 19.3296 108.006 19.3296C105.463 19.3296 104.012 17.9375 104.012 15.4138V3.94887H106.294V6.68518H109.906V8.54906H106.294V15.3192C106.294 16.6634 106.983 17.419 108.267 17.419C108.933 17.419 109.574 17.2064 110.049 16.8292L110.762 18.4572Z" fill="white"/>
  <path d="M122.41 15.8385L123.646 17.3007C122.529 18.6216 120.794 19.3293 118.702 19.3293C114.637 19.3293 111.928 16.6631 111.928 12.9364C111.928 9.20971 114.589 6.56691 118.25 6.56691C121.696 6.56691 124.383 8.97274 124.453 12.7005L114.447 14.6345C115.088 16.3571 116.658 17.3475 118.772 17.3475C120.246 17.3475 121.482 16.8523 122.409 15.8374L122.41 15.8385ZM114.139 12.8195V13.0554L122.196 11.5454C121.793 9.75272 120.295 8.47861 118.251 8.47861C115.85 8.47861 114.139 10.2012 114.139 12.8195Z" fill="white"/>
  <path d="M126.474 12.9376C126.474 9.20982 129.254 6.56808 133.129 6.56808C135.387 6.56808 137.265 7.48834 138.263 9.23427L136.527 10.3426C135.719 9.11631 134.484 8.54992 133.105 8.54992C130.632 8.54992 128.779 10.2725 128.779 12.9376C128.779 15.6027 130.633 17.3486 133.105 17.3486C134.484 17.3486 135.719 16.7822 136.527 15.5559L138.263 16.6409C137.265 18.3868 135.387 19.3305 133.129 19.3305C129.254 19.3305 126.474 16.6643 126.474 12.9376Z" fill="white"/>
  <path d="M153 11.9944V19.1895H150.719V12.2536C150.719 9.79999 149.483 8.59707 147.319 8.59707C144.895 8.59707 143.326 10.0359 143.326 12.7488V19.1895H141.044V1.68456H143.326V8.45468C144.276 7.25176 145.845 6.56742 147.77 6.56742C150.836 6.56742 152.999 8.31335 152.999 11.9933L153 11.9944Z" fill="white"/>
  </svg>
  
};

export default function Header() {
  const t = useTranslations("header.nav");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  const isHome = pathname === `/${locale}`;
  const servicesHref = isHome ? "#services" : `/${locale}/#services`;
  const aboutUsHref = isHome ? "#about-us" : `/${locale}/#about-us`;
  const pricingHref = isHome ? "#pricing" : `/${locale}/#pricing`;
  const contactHref = isHome ? "#contact-us" : `/${locale}/#contact-us`;
  const logoHref = isHome ? "#home" : `/${locale}`;

  const navLinks = [
    { href: servicesHref, label: t("services") },
    { href: aboutUsHref, label: t("about") },
    { href: pricingHref, label: t("pricing") },
  ];

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="flex items-center justify-between gap-6 px-6 py-2 rounded-[120px] bg-[rgba(235,238,214,0.2)] backdrop-blur-md shadow-[0px_7px_14px_rgba(0,0,0,0.25)] max-w-5xl w-full">
          <a href={logoHref}>
            <Logo />
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
