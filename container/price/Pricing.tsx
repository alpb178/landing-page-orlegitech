"use client";

import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import AnimatedCard from "@/components/AnimatedCard";

export default function Pricing() {
  const t = useTranslations("pricing");

  const plans = [
    {
      name: t("plans.basic.name"),
      monthlyPrice: "9,99",
      annualPrice: "8,99",
      currency: "€",
      period: "mes",
      minMonthly: "9,99 €",
      minAnnual: "107,88 €",
      features: [
        t("plans.basic.features.1"),
        t("plans.basic.features.2"),
        t("plans.basic.features.3"),
        t("plans.basic.features.4"),
        t("plans.basic.features.5"),
        t("plans.basic.features.6"),
        t("plans.basic.features.7"),
        t("plans.basic.features.8"),
        t("plans.basic.features.9"),
      ],
      popular: false,
    },
    {
      name: t("plans.premium.name"),
      monthlyPrice: "19,99",
      annualPrice: "17,99",
      currency: "€",
      period: "mes",
      minMonthly: "19,99 €",
      minAnnual: "215,88 €",
      features: [
        t("plans.premium.features.1"),
        t("plans.premium.features.2"),
        t("plans.premium.features.3"),
        t("plans.premium.features.4"),
        t("plans.premium.features.5"),
        t("plans.premium.features.6"),
        t("plans.premium.features.7"),
        t("plans.premium.features.8"),
        t("plans.premium.features.9"),
      ],
      popular: true,
    },
    {
      name: t("plans.complete.name"),
      monthlyPrice: "29,99",
      annualPrice: "26,99",
      currency: "€",
      period: "mes",
      minMonthly: "29,99 €",
      minAnnual: "323,88 €",
      features: [
        t("plans.complete.features.1"),
        t("plans.complete.features.2"),
        t("plans.complete.features.3"),
        t("plans.complete.features.4"),
        t("plans.complete.features.5"),
        t("plans.complete.features.6"),
        t("plans.complete.features.7"),
        t("plans.complete.features.8"),
        t("plans.complete.features.9"),
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
          {t("title")}
        </h1>
      </div>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <AnimatedCard
              key={index}
              delay={index * 200}
              className={`relative bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 ease-out hover:scale-105 ${
                plan.popular ? "ring-2 ring-[#1a4d3a] scale-105" : ""
              }`}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.name}
                </h3>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-[#1a4d3a] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
