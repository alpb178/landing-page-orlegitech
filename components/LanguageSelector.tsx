"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";

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
    <div className="relative language-menu-container">
      <button
        onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
        className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
          variant === "desktop"
            ? "text-white hover:text-[#ebeed6]"
            : "text-white hover:text-[#ebeed6]"
        }`}
      >
        <span className="text-sm">{currentLanguage.flag}</span>
        <span className="font-medium uppercase text-sm">{currentLocale}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      {isLanguageMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#012319] border border-white/20 rounded-xl shadow-lg z-50 overflow-hidden backdrop-blur-md">
          <ul className="py-1">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full text-left px-4 py-2.5 transition-colors flex items-center gap-2 ${
                    currentLocale === lang.code
                      ? "bg-white/20 text-white font-semibold"
                      : "text-[#ebeed6] hover:bg-white/10"
                  }`}
                >
                  <span className="text-sm">{lang.flag}</span>
                  <span className="text-sm">{lang.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
