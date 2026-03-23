"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Mail, Phone, Clock, MapPin, Send } from "lucide-react";

export default function ContactUs() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const recipientEmail = "mikel@errasbi.com";

    const subject = encodeURIComponent(
      `Contacto Orlegitech - ${formData.service || "General"}`
    );

    const emailBody = encodeURIComponent(
      `Nombre: ${formData.name} ${formData.lastName}\n` +
        `Email: ${formData.email}\n` +
        (formData.phone ? `Teléfono: ${formData.phone}\n` : "") +
        (formData.service ? `Servicio de interés: ${formData.service}\n` : "") +
        `\nMensaje:\n${formData.message}`
    );

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${emailBody}`;

    setSubmitStatus({
      type: "success",
      message: t("form.success"),
    });

    setTimeout(() => {
      setFormData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      setSubmitStatus({ type: null, message: "" });
    }, 3000);
  };

  return (
    <section id="contact-us" className="py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-5xl md:text-[60px] font-medium text-center text-white mb-16 font-[family-name:var(--font-plus-jakarta)]">
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
              <h3 className="text-white text-2xl font-semibold mb-6">
                {t("form.title")}
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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

                {/* Row 1: Name + Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white tracking-wide">
                      {t("form.name")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t("form.namePlaceholder")}
                      className="w-full mt-1 px-4 py-2 bg-transparent border border-white rounded-lg text-sm text-white placeholder-white/50 focus:ring-2 focus:ring-[#a1c353] focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white tracking-wide">
                      {t("form.lastName")}
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder={t("form.lastNamePlaceholder")}
                      className="w-full mt-1 px-4 py-2 bg-transparent border border-white rounded-lg text-sm text-white placeholder-white/50 focus:ring-2 focus:ring-[#a1c353] focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Service */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-white tracking-wide">
                      {t("form.phone")}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("form.phonePlaceholder")}
                      className="w-full mt-1 px-4 py-2 bg-transparent border border-white rounded-lg text-sm text-white placeholder-white/50 focus:ring-2 focus:ring-[#a1c353] focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white tracking-wide">
                      {t("form.service")}
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full mt-1 px-4 py-2 bg-transparent border border-white rounded-lg text-sm text-white focus:ring-2 focus:ring-[#a1c353] focus:border-transparent outline-none"
                    >
                      <option value="" className="bg-[#012319]">{t("form.servicePlaceholder")}</option>
                      <option value="app" className="bg-[#012319]">App</option>
                      <option value="drone" className="bg-[#012319]">Drone</option>
                      <option value="irrigation" className="bg-[#012319]">{t("form.serviceOptions.irrigation")}</option>
                      <option value="other" className="bg-[#012319]">{t("form.serviceOptions.other")}</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Email */}
                <div>
                  <label className="text-xs text-white tracking-wide">
                    {t("form.email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t("form.emailPlaceholder")}
                    className="w-full mt-1 px-4 py-2 bg-transparent border border-white rounded-lg text-sm text-white placeholder-white/50 focus:ring-2 focus:ring-[#a1c353] focus:border-transparent outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs text-white tracking-wide">
                    {t("form.message")}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder={t("form.messagePlaceholder")}
                    className="w-full mt-1 px-4 py-2 bg-transparent border border-white rounded-lg text-sm text-white placeholder-white/50 focus:ring-2 focus:ring-[#a1c353] focus:border-transparent outline-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-white text-[#024c35] px-6 py-3 rounded-[32px] font-semibold hover:bg-[#ebeed6] transition-colors flex items-center gap-2"
                  >
                    {t("form.submit")}
                    <Send className="w-5 h-5" />
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
