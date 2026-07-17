"use client";

import { useState, type JSX } from "react";
import { useTranslations } from "next-intl";
import { Mail, Phone, Clock, MapPin, ArrowRight } from "lucide-react";
import { buildContactMailtoHref } from "./contact-mailto";

export const ContactUs = (): JSX.Element => {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    club: "",
    email: "",
  });
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    window.location.href = buildContactMailtoHref(t, formData);

    setSubmitStatus({
      type: "success",
      message: t("form.success"),
    });

    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        club: "",
        email: "",
      });
      setSubmitStatus({ type: null, message: "" });
    }, 3000);
  };

  return (
    <section id="contact-us" className="py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-5xl md:text-[64px] text-center text-white mb-16 font-[family-name:var(--font-great-vibes)]">
          {t("title")}
        </h2>

        <div className="bg-[rgba(3,101,70,0.5)] rounded-[24px] px-8 py-16 max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Side - Contact Info */}
            <div className="lg:w-[40%] flex flex-col gap-6">
              <h3 className="text-white text-2xl font-semibold">
                {t("info.title")}
              </h3>

              <div className="flex flex-col gap-4">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-6 h-6 text-[#a1c353] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-semibold">{t("info.emailLabel")}</p>
                    <p className="text-[#d4dcef]">{t("info.email")}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-[#a1c353] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-semibold">{t("info.phoneLabel")}</p>
                    <p className="text-[#d4dcef]">{t("info.phone")}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-[#a1c353] shrink-0 mt-0.5" />
                  <p className="text-[#d4dcef] whitespace-pre-line">{t("info.hours")}</p>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-[#a1c353] shrink-0 mt-0.5" />
                  <p className="text-[#d4dcef] whitespace-pre-line">{t("info.address")}</p>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:w-[60%]">
              <h3 className="text-white text-2xl font-semibold">
                {t("form.title")}
              </h3>
              <p className="text-[#d4dcef] text-base mt-2 mb-6">
                {t("form.subtitle")}
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-900/50 text-green-200 border border-green-700"
                        : "bg-red-900/50 text-red-200 border border-red-700"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                {/* Nombre */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="contact-name"
                    className="text-xs text-white tracking-wide"
                  >
                    {t("form.name")} <span className="text-[#c47e81]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t("form.namePlaceholder")}
                    className="w-full px-4 py-2 bg-transparent border border-white rounded-[24px] text-sm text-white placeholder-[#d4dcef] focus:ring-2 focus:ring-[#a1c353] focus:border-transparent outline-none"
                  />
                </div>

                {/* Teléfono */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="contact-phone"
                    className="text-xs text-white tracking-wide"
                  >
                    {t("form.phone")} <span className="text-[#c47e81]">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder={t("form.phonePlaceholder")}
                    className="w-full px-4 py-2 bg-transparent border border-white rounded-[24px] text-sm text-white placeholder-[#d4dcef] focus:ring-2 focus:ring-[#a1c353] focus:border-transparent outline-none"
                  />
                </div>

                {/* Nombre del club */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="contact-club"
                    className="text-xs text-white tracking-wide"
                  >
                    {t("form.club")} <span className="text-[#c47e81]">*</span>
                  </label>
                  <input
                    id="contact-club"
                    type="text"
                    name="club"
                    value={formData.club}
                    onChange={handleChange}
                    required
                    placeholder={t("form.clubPlaceholder")}
                    className="w-full px-4 py-2 bg-transparent border border-white rounded-[24px] text-sm text-white placeholder-[#d4dcef] focus:ring-2 focus:ring-[#a1c353] focus:border-transparent outline-none"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="contact-email"
                    className="text-xs text-white tracking-wide"
                  >
                    {t("form.email")} <span className="text-[#c47e81]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t("form.emailPlaceholder")}
                    className="w-full px-4 py-2 bg-transparent border border-white rounded-[24px] text-sm text-white placeholder-[#d4dcef] focus:ring-2 focus:ring-[#a1c353] focus:border-transparent outline-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end mt-2">
                  <button
                    type="submit"
                    className="bg-white border border-[#036546] text-[#024c35] px-6 py-4 rounded-[32px] text-xl font-medium hover:bg-[#ebeed6] transition-colors flex items-center gap-2.5 drop-shadow-[0px_4px_2.6px_rgba(0,0,0,0.25)]"
                  >
                    {t("form.submit")}
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
