"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin } from "lucide-react";

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

    // Email de destino (puedes cambiarlo)
    const recipientEmail = "info@orlegitech.com"; // Cambia este email por el que quieras recibir los mensajes

    // Construir el asunto del email
    const subject = encodeURIComponent(
      `Contacto Orlegitech - ${formData.service || t("form.services.general")}`
    );

    // Construir el cuerpo del email
    const emailBody = encodeURIComponent(
      `Nombre: ${formData.name} ${formData.lastName}\n` +
        `Email: ${formData.email}\n` +
        (formData.phone ? `Teléfono: ${formData.phone}\n` : "") +
        (formData.service ? `Servicio de interés: ${formData.service}\n` : "") +
        `\nMensaje:\n${formData.message}`
    );

    // Crear el enlace mailto
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${emailBody}`;

    // Abrir el cliente de correo
    window.location.href = mailtoLink;

    // Mostrar mensaje de éxito
    setSubmitStatus({
      type: "success",
      message: t("form.success"),
    });

    // Limpiar el formulario después de un breve delay
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
    <section id="contact-us" className="bg-[#013322] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center bg-white rounded-2xl p-8 shadow-md mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="flex flex-col gap-8 justify-between space-y-8 items-center">
            <div className="bg-white w-full rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t("contactInfo.title")}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#1a4d3a]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {t("contactInfo.email")}
                    </h4>
                    <p className="text-gray-600">info@orlegitech.com</p>
                    <p className="text-gray-600">soporte@orlegitech.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#1a4d3a]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {t("contactInfo.phone")}
                    </h4>
                    <p className="text-gray-600">+34 900 123 456</p>
                    <p className="text-gray-600">{t("contactInfo.hours")}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#1a4d3a]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {t("contactInfo.office")}
                    </h4>
                    <p className="text-gray-600 whitespace-pre-line">
                      {t("contactInfo.officeAddress")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white w-full rounded-2xl p-6 shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                {t("services.title")}
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• {t("services.1")}</li>
                <li>• {t("services.2")}</li>
                <li>• {t("services.3")}</li>
                <li>• {t("services.4")}</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t("form.title")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("form.name")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent"
                    placeholder={t("form.namePlaceholder")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("form.lastName")}
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent"
                    placeholder={t("form.lastNamePlaceholder")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("form.service")}
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent"
                >
                  <option value="">{t("form.servicePlaceholder")}</option>
                  <option value={t("form.services.app")}>
                    {t("form.services.app")}
                  </option>
                  <option value={t("form.services.drone")}>
                    {t("form.services.drone")}
                  </option>
                  <option value={t("form.services.buggy")}>
                    {t("form.services.buggy")}
                  </option>
                  <option value={t("form.services.premium")}>
                    {t("form.services.premium")}
                  </option>
                  <option value={t("form.services.complete")}>
                    {t("form.services.complete")}
                  </option>
                  <option value={t("form.services.general")}>
                    {t("form.services.general")}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("form.message")}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent"
                  placeholder={t("form.messagePlaceholder")}
                ></textarea>
              </div>

              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-3" required />
                <p className="text-sm text-gray-600">
                  {t("form.privacy")}{" "}
                  <a href="#" className="text-[#1a4d3a] hover:underline">
                    {t("form.privacyLink")}
                  </a>{" "}
                  {t("form.terms")}{" "}
                  <a href="#" className="text-[#1a4d3a] hover:underline">
                    {t("form.termsLink")}
                  </a>
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#1a4d3a] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2d6b52] transition-colors"
                >
                  {t("form.submit")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
