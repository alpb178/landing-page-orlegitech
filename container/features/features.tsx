"use client";
import { useTranslations } from "next-intl";
import { ReportsFlyIcon } from "@/components/icons/ReportsFly";
import { TasksIcon } from "@/components/icons/Task";
import { VehicleIcon } from "@/components/icons/Vehicle";
import { PlannerIcon } from "@/components/icons/Planner";
import { ProjectsIcon } from "@/components/icons/Projects";
import { EmployeeIcon } from "@/components/icons/Employee";
import { BudgetIcon } from "@/components/icons/Budget";
import { UserIcon } from "@/components/icons/User";
import { PlanningIcon } from "@/components/icons/Planning";
import { FieldIcon } from "@/components/icons/Field";
import { ProjectManagementIcon } from "@/components/icons/ProjectManagement";
import AnimatedCard from "@/components/AnimatedCard";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Features() {
  const t = useTranslations("about");
  const { locale } = useParams();
  const features = [
    {
      Icon: ReportsFlyIcon,
      title: t("features.aerialReports.title"),
      description: t("features.aerialReports.description"),
      slug: "aerial-reports",
    },
    {
      Icon: TasksIcon,
      title: t("features.assistantIA.title"),
      description: t("features.assistantIA.description"),
      slug: "assistant-ia",
    },
    {
      Icon: VehicleIcon,
      title: t("features.vehicleFleet.title"),
      description: t("features.vehicleFleet.description"),
      slug: "vehicle-fleet",
    },
    {
      Icon: PlannerIcon,
      title: t("features.irrigationPlanning.title"),
      description: t("features.irrigationPlanning.description"),
      slug: "irrigation-planning",
    },
    {
      Icon: ProjectsIcon,
      title: t("features.projectControl.title"),
      description: t("features.projectControl.description"),
      slug: "project-control",
    },
    {
      Icon: UserIcon,
      title: t("features.operatorManagement.title"),
      description: t("features.operatorManagement.description"),
      slug: "operator-management",
    },
    {
      Icon: BudgetIcon,
      title: t("features.budgets.title"),
      description: t("features.budgets.description"),
      slug: "budgets",
    },
    {
      Icon: EmployeeIcon,
      title: t("features.userCheckIn.title"),
      description: t("features.userCheckIn.description"),
      slug: "user-check-in",
    },

    {
      Icon: PlanningIcon,
      title: t("features.planning.title"),
      description: t("features.planning.description"),
      slug: "planning",
    },
    {
      Icon: FieldIcon,
      title: t("features.field.title"),
      description: t("features.field.description"),
      slug: "field",
    },
    {
      Icon: ProjectManagementIcon,
      title: t("features.projectManagement.title"),
      description: t("features.projectManagement.description"),
      slug: "project-management",
    },
  ];

  return (
    <div className="bg-[#036546] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.Icon;
            return (
              <AnimatedCard
                key={index}
                delay={index * 100}
                className="text-center"
              >
                <Link href={`/${locale}/${feature.slug}`}>
                  <div className="flex justify-center mb-4">
                    <IconComponent />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </Link>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
