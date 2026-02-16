"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Clock, MessageCircle, Gift, CheckCircle2 } from "lucide-react";

export default function DemoContainer() {
  const t = useTranslations("demoPage");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    industry: "",
    challenges: "",
    additional: "",
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
    const recipientEmail = "info@orlegitech.com";
    const subject = encodeURIComponent("OrlegiTech - Solicitud de demo");
    const emailBody = encodeURIComponent(
      `Nombre: ${formData.fullName}\n` +
        `Email: ${formData.email}\n` +
        (formData.phone ? `Teléfono: ${formData.phone}\n` : "") +
        `Club/Empresa: ${formData.company}\n` +
        (formData.role ? `Cargo: ${formData.role}\n` : "") +
        (formData.industry ? `Tipo: ${formData.industry}\n` : "") +
        `Necesidades: ${formData.challenges}\n` +
        (formData.additional ? `Otros: ${formData.additional}\n` : "")
    );
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${emailBody}`;
    setSubmitStatus({ type: "success", message: t("form.success") });
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        role: "",
        industry: "",
        challenges: "",
        additional: "",
      });
      setSubmitStatus({ type: null, message: "" });
    }, 3000);
  };

  const benefits = [
    { key: "personalized", icon: CheckCircle2 },
    { key: "expert", icon: CheckCircle2 },
    { key: "liveDemo", icon: CheckCircle2 },
    { key: "roi", icon: CheckCircle2 },
    { key: "roadmap", icon: CheckCircle2 },
    { key: "support", icon: CheckCircle2 },
  ] as const;

  return (
    <main className="min-h-screen bg-[#013322]">
      {/* Hero */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            {t("description")}
          </p>
        </div>

        {/* Stats */}
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/20">
            <Clock className="h-10 w-10 text-white mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{t("stats.duration")}</p>
            <p className="text-white/80 text-sm">{t("stats.durationLabel")}</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/20">
            <MessageCircle className="h-10 w-10 text-white mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{t("stats.response")}</p>
            <p className="text-white/80 text-sm">{t("stats.responseLabel")}</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/20">
            <Gift className="h-10 w-10 text-white mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{t("stats.free")}</p>
            <p className="text-white/80 text-sm">{t("stats.freeLabel")}</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {t("form.title")}
            </h2>
            <p className="text-gray-600 mb-6">{t("form.intro")}</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("form.fullName")}
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent"
                  placeholder={t("form.fullNamePlaceholder")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("form.email")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent"
                  placeholder={t("form.emailPlaceholder")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("form.phone")}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent"
                  placeholder={t("form.phonePlaceholder")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("form.company")}
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent"
                  placeholder={t("form.companyPlaceholder")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("form.role")}
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent"
                  placeholder={t("form.rolePlaceholder")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("form.industry")}
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent"
                >
                  <option value="">{t("form.industryPlaceholder")}</option>
                  <option value={t("form.industryOptions.golf")}>
                    {t("form.industryOptions.golf")}
                  </option>
                  <option value={t("form.industryOptions.sports")}>
                    {t("form.industryOptions.sports")}
                  </option>
                  <option value={t("form.industryOptions.landscape")}>
                    {t("form.industryOptions.landscape")}
                  </option>
                  <option value={t("form.industryOptions.other")}>
                    {t("form.industryOptions.other")}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("form.challenges")}
                </label>
                <textarea
                  name="challenges"
                  value={formData.challenges}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent"
                  placeholder={t("form.challengesPlaceholder")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("form.additional")}
                </label>
                <textarea
                  name="additional"
                  value={formData.additional}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent"
                  placeholder={t("form.additionalPlaceholder")}
                />
              </div>

              <p className="text-sm text-gray-500">{t("form.requiredFields")}</p>

              <button
                type="submit"
                className="w-full bg-[#1a4d3a] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2d6b52] transition-colors"
              >
                {t("form.submit")}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("whatYouGet.title")}
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              {t("whatYouGet.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ key, icon: Icon }) => (
              <div
                key={key}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
              >
                <Icon className="h-8 w-8 text-[#1a4d3a] mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {t(`whatYouGet.${key}`)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t(`whatYouGet.${key}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {t("process.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#1a4d3a] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {t("process.step1Title")}
              </h3>
              <p className="text-white/80 text-sm">
                {t("process.step1Desc")}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#1a4d3a] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {t("process.step2Title")}
              </h3>
              <p className="text-white/80 text-sm">
                {t("process.step2Desc")}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#1a4d3a] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {t("process.step3Title")}
              </h3>
              <p className="text-white/80 text-sm">
                {t("process.step3Desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            {t("faq.title")}
          </h2>
          <div className="space-y-6">
            {([1, 2, 3, 4, 5] as const).map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t(`faq.q${i}`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`faq.a${i}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
