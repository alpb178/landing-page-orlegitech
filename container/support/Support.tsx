"use client";

import { useState, type JSX } from "react";
import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import {
  SUPPORT_RECIPIENT_EMAIL,
  buildSupportMailtoHref,
} from "./support-mailto";

const SUCCESS_RESET_DELAY_MS = 6000;

const inputClasses =
  "w-full px-4 py-3 bg-transparent border border-white rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-[#a1c353] focus:border-transparent outline-none";

export const SupportContainer = (): JSX.Element => {
  const t = useTranslations("support");
  const [formData, setFormData] = useState({ subject: "", message: "" });
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    window.location.href = buildSupportMailtoHref(t, formData);
    setHasSubmitted(true);
    setTimeout(() => {
      setFormData({ subject: "", message: "" });
      setHasSubmitted(false);
    }, SUCCESS_RESET_DELAY_MS);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-medium text-white mb-6 font-[family-name:var(--font-plus-jakarta)]">
          {t("title")}
        </h1>

        <p className="text-lg text-[#e6ebe9] leading-relaxed">
          {t("description")}
        </p>

        <div className="mt-8 flex flex-col gap-1 rounded-2xl bg-[rgba(255,255,255,0.1)] backdrop-blur-sm px-6 py-5 sm:flex-row sm:items-center sm:gap-2">
          <span className="flex items-center gap-2 font-semibold text-white">
            <Mail className="w-5 h-5 text-[#a1c353] shrink-0" aria-hidden="true" />
            {t("emailLabel")}
          </span>
          <a
            href={`mailto:${SUPPORT_RECIPIENT_EMAIL}`}
            className="font-semibold text-[#a1c353] underline underline-offset-2 hover:text-white transition-colors"
          >
            {SUPPORT_RECIPIENT_EMAIL}
          </a>
        </div>

        <div className="mt-8 bg-[rgba(3,101,70,0.5)] rounded-[24px] p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {hasSubmitted && (
              <div
                role="status"
                className="p-4 rounded-lg bg-green-900/50 text-green-200 border border-green-700"
              >
                {t("form.success")}
              </div>
            )}

            <div>
              <label
                htmlFor="support-subject"
                className="block text-sm font-medium text-white mb-1"
              >
                {t("form.subject")}
              </label>
              <input
                id="support-subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t("form.subjectPlaceholder")}
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor="support-message"
                className="block text-sm font-medium text-white mb-1"
              >
                {t("form.message")} <span className="text-[#c47e81]">*</span>
              </label>
              <textarea
                id="support-message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder={t("form.messagePlaceholder")}
                className={`${inputClasses} resize-y`}
              />
            </div>

            <button
              type="submit"
              className="bg-white border border-[#036546] text-[#024c35] px-6 py-3 rounded-[32px] text-lg font-medium hover:bg-[#ebeed6] transition-colors"
            >
              {t("form.submit")}
            </button>
          </form>
        </div>

        <p className="mt-6 text-sm text-[#e6ebe9]/70">
          {t("fallback")}{" "}
          <a
            href={`mailto:${SUPPORT_RECIPIENT_EMAIL}`}
            className="text-[#a1c353] underline underline-offset-2 hover:text-white transition-colors"
          >
            {SUPPORT_RECIPIENT_EMAIL}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
