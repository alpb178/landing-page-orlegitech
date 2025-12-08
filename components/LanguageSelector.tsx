"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

interface LanguageSelectorProps {
  variant?: "desktop" | "mobile";
}

export default function LanguageSelector({
  variant = "desktop",
}: LanguageSelectorProps) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".language-menu-container")) {
        setIsLanguageMenuOpen(false);
      }
    };

    if (isLanguageMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLanguageMenuOpen]);

  const changeLanguage = (locale: string) => {
    router.replace(pathname, { locale });
    setIsLanguageMenuOpen(false);
  };

  const languages = [
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  const currentLocale = locale;
  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];

  return (
    <>
      <div className="relative language-menu-container">
        <button
          onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            variant === "desktop"
              ? "text-white hover:text-green-300"
              : "bg-gray-200/90 backdrop-blur-sm text-gray-800 hover:bg-gray-300"
          }`}
        >
          <span className="text-xl">{currentLanguage.flag}</span>
          <span className="font-semibold uppercase text-sm md:-mt-1 mt-0">
            {currentLocale}
          </span>
        </button>
        {isLanguageMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
            <ul className="py-2">
              {languages.map((lang) => (
                <li key={lang.code}>
                  <button
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center gap-2 ${
                      currentLocale === lang.code
                        ? "bg-[#1a4d3a] text-white"
                        : "text-gray-800"
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
