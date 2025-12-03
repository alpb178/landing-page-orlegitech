"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
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
      `Contacto Orlegitech - ${formData.service || "Información general"}`
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
      message: "Se abrirá tu cliente de correo. Completa el envío desde allí.",
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
            Contacta con Nosotros
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte. Ponte en
            contacto con nuestro equipo y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="flex flex-col gap-8 justify-between space-y-8 items-center">
            <div className="bg-white w-full rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#1a4d3a]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Email
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
                      Teléfono
                    </h4>
                    <p className="text-gray-600">+34 900 123 456</p>
                    <p className="text-gray-600">
                      Lunes a Viernes: 9:00 - 18:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#1a4d3a]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      Oficina
                    </h4>
                    <p className="text-gray-600">
                      Calle del Golf, 123
                      <br />
                      28001 Madrid, España
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white w-full rounded-2xl p-6 shadow-md">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Servicios Disponibles
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Aplicación móvil para golf</li>
                <li>• Servicios de drone</li>
                <li>• Alquiler de buggies</li>
                <li>• Más de 150 campos en 10 países</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envíanos un Mensaje
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
                    Nombre*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Apellidos*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent"
                    placeholder="Tus apellidos"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent"
                  placeholder="+34 600 000 000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Servicio de Interés
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Aplicación móvil (APP)">
                    Aplicación móvil (APP)
                  </option>
                  <option value="Servicios de drone">Servicios de drone</option>
                  <option value="Alquiler de buggies">
                    Alquiler de buggies
                  </option>
                  <option value="Plan Premium">Plan Premium</option>
                  <option value="Plan Completo">Plan Completo</option>
                  <option value="Información general">
                    Información general
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a4d3a] focus:border-transparent"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                ></textarea>
              </div>

              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-3" required />
                <p className="text-sm text-gray-600">
                  Al enviar este formulario, acepto la{" "}
                  <a href="#" className="text-[#1a4d3a] hover:underline">
                    Política de privacidad
                  </a>{" "}
                  y las{" "}
                  <a href="#" className="text-[#1a4d3a] hover:underline">
                    Condiciones de uso
                  </a>
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#1a4d3a] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2d6b52] transition-colors"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
