import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Plan Básico",
      monthlyPrice: "9,99",
      annualPrice: "8,99",
      currency: "€",
      period: "mes",
      minMonthly: "9,99 €",
      minAnnual: "107,88 €",
      features: [
        "Acceso a la aplicación móvil",
        "Reserva de campos de golf",
        "Más de 150 campos disponibles",
        "Seguimiento de partidas",
        "Estadísticas básicas de juego",
        "Historial de reservas",
        "Notificaciones de recordatorios",
        "Soporte por email",
        "Actualizaciones de la app",
      ],
      popular: false,
    },
    {
      name: "Plan Premium",
      monthlyPrice: "19,99",
      annualPrice: "17,99",
      currency: "€",
      period: "mes",
      minMonthly: "19,99 €",
      minAnnual: "215,88 €",
      features: [
        "Todo lo incluido en Plan Básico, además de:",
        "Servicios de drone incluidos",
        "Análisis aéreo de campos",
        "Mapeo detallado de recorridos",
        "Informes de condiciones del campo",
        "Estadísticas avanzadas",
        "Análisis de rendimiento",
        "Reserva prioritaria de campos",
        "Soporte prioritario 24/7",
      ],
      popular: true,
    },
    {
      name: "Plan Completo",
      monthlyPrice: "29,99",
      annualPrice: "26,99",
      currency: "€",
      period: "mes",
      minMonthly: "29,99 €",
      minAnnual: "323,88 €",
      features: [
        "Todo lo incluido en Plan Premium, además de:",
        "Alquiler de buggies incluido",
        "Reserva de buggies online",
        "Descuentos en alquileres",
        "Acceso a flota premium",
        "Múltiples ubicaciones",
        "Programa de fidelización",
        "Eventos exclusivos",
        "Asistente personal de golf",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="bg-[#F5F5F0] flex flex-col justify-center items-center  py-20  mx-auto"
    >
      <div className="max-w-7xl text-center px-4 sm:px-6  lg:px-8 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Precios y Planes
        </h1>
      </div>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular ? "ring-2 ring-[#1a4d3a] scale-105" : ""
              }`}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.annualPrice}
                    </span>
                    <span className="text-2xl text-gray-600 ml-1">
                      {plan.currency}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.monthlyPrice}
                    </span>
                    <span className="text-2xl text-gray-600 ml-1">
                      {plan.currency}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.period}</p>
                </div>
                <div className="text-sm text-gray-500 mb-4">
                  <p>Importe mínimo {plan.minAnnual}</p>
                  <p>Importe mínimo {plan.minMonthly}</p>
                </div>
              </div>

              <div className="text-center mb-8">
                <button className="bg-[#1a4d3a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2d6b52] transition-colors mb-4">
                  Pruébalo gratis 14 días
                </button>
                <p className="text-sm text-gray-500">
                  Sin compromiso y sin tarjeta de crédito
                </p>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-[#1a4d3a] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
