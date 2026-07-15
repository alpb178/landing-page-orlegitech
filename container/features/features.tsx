"use client";
import type { JSX } from "react";
import { useTranslations } from "next-intl";
import { FeatureIcon } from "@/components/icons/FeatureIcon";
import { AnimatedCard } from "@/components/AnimatedCard";
import { useParams } from "next/navigation";
import Link from "next/link";

const ANIMATION_DELAY_STEP_MS = 100;

// Card design mirrors the static landing (orlegitech-landing-static):
// frosted glass surface, circular leaf-green icon badge, centered text.
export const Features = (): JSX.Element => {
  const t = useTranslations("about");
  const { locale } = useParams();
  const features = [
    {
      icon: "drone",
      title: t("features.aerialReports.title"),
      description: t("features.aerialReports.description"),
      slug: "aerial-reports",
    },
    {
      icon: "tasks",
      title: t("features.assistantIA.title"),
      description: t("features.assistantIA.description"),
      slug: "assistant-ia",
    },
    {
      icon: "vehicle",
      title: t("features.vehicleFleet.title"),
      description: t("features.vehicleFleet.description"),
      slug: "vehicle-fleet",
    },
    {
      icon: "water",
      title: t("features.irrigationPlanning.title"),
      description: t("features.irrigationPlanning.description"),
      slug: "irrigation-planning",
    },
    {
      icon: "projects",
      title: t("features.projectControl.title"),
      description: t("features.projectControl.description"),
      slug: "project-control",
    },
    {
      icon: "team",
      title: t("features.operatorManagement.title"),
      description: t("features.operatorManagement.description"),
      slug: "operator-management",
    },
    {
      icon: "euro",
      title: t("features.budgets.title"),
      description: t("features.budgets.description"),
      slug: "budgets",
    },
    {
      icon: "clock",
      title: t("features.userCheckIn.title"),
      description: t("features.userCheckIn.description"),
      slug: "user-check-in",
    },
  ];

  return (
    <section className="mx-auto max-w-[1080px] px-6 py-12">
      <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {features.map((feature, index) => (
          <AnimatedCard key={feature.slug} delay={index * ANIMATION_DELAY_STEP_MS}>
            <Link
              href={`/${locale}/${feature.slug}`}
              className="flex h-full flex-col items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/5 px-5 py-7 text-center backdrop-blur-[8px] transition hover:border-[#a1c353]/40"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#a1c353]/15 text-[#a1c353]">
                <FeatureIcon name={feature.icon} className="h-7 w-7" />
              </span>
              <h3 className="text-sm font-semibold text-white sm:text-base">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-[#e6f0ed]/70">
                {feature.description}
              </p>
            </Link>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
};
