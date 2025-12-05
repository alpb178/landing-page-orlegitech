"use client";

import Image from "next/image";
import { ReportsFlyIcon } from "@/components/icons/ReportsFly";
import { TasksIcon } from "@/components/icons/Task";
import { VehicleIcon } from "@/components/icons/Vehicle";
import { PlannerIcon } from "@/components/icons/Planner";
import { ProjectsIcon } from "@/components/icons/Projects";
import { EmployeeIcon } from "@/components/icons/Employee";
import { BudgetIcon } from "@/components/icons/Budget";
import { UserIcon } from "@/components/icons/User";
import AnimatedCard from "./AnimatedCard";

export default function AboutUs() {
  const features = [
    {
      Icon: ReportsFlyIcon,
      title: "Informes aéreos",
      description:
        "Mapas multiespectrales de vigor, estrés y densidad del césped.",
    },
    {
      Icon: TasksIcon,
      title: "Gestión de tareas",
      description:
        "Planificación inteligente para greenkeepers y personal del campo.",
    },
    {
      Icon: VehicleIcon,
      title: "Flota de vehículos",
      description: "Control GPS de buggies, maquinaria y rutas operativas.",
    },
    {
      Icon: PlannerIcon,
      title: "Planificación de riego",
      description: "Optimiza agua y tiempo con recomendaciones automáticas.",
    },
    {
      Icon: ProjectsIcon,
      title: "Control de proyectos",
      description:
        "Obras, mejoras y trabajos estacionales bajo seguimiento real.",
    },
    {
      Icon: UserIcon,
      title: "Gestión de operarios",
      description: "Roles, horarios, partes de trabajo y productividad.",
    },
    {
      Icon: BudgetIcon,
      title: "Presupuestos",
      description:
        "Costes reales del mantenimiento del campo en un solo panel.",
    },
    {
      Icon: EmployeeIcon,
      title: "Fichaje de usuarios",
      description: "Control horario digital integrado con la app del club.",
    },
  ];

  return (
    <section id="about-us" className="relative">
      {/* Top Section with Background Image */}
      <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Blur Effect */}
        <div className="absolute inset-0">
          <Image
            src="/images/about/background.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-blue-900/60 via-purple-900/40 to-green-900/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-12">
            Nosotros
          </h2>

          {/* Image and Text Cards with Glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Image Card */}
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/about/personal.png"
                alt="Operador con drone"
                fill
                className="object-cover"
              />
            </div>

            {/* Text Card */}
            <div className="bg-white/20 text-xl backdrop-blur-md rounded-2xl p-8">
              <p className="text-white leading-relaxed mb-4">
                Expertos en tecnología aplicada al golf
              </p>
              <p className="text-white leading-relaxed mb-4">
                En OrlegiTech combinamos agronomía, inteligencia artificial y
                análisis aéreo para mejorar el rendimiento de cada campo.
                Nuestro objetivo es ayudarte a mantener el césped en su estado
                óptimo, reducir costes operativos y facilitar la planificación
                diaria del personal.
              </p>
              <p className="text-white leading-relaxed">
                Trabajamos con greenkeepers, directores de club y equipos de
                mantenimiento para transformar datos complejos en decisiones
                claras. Nuestro sistema se adapta a cada campo según
                presupuesto, categoría, climatología y recursos disponibles.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with Dark Green Background */}
      <div className="bg-[#013322] py-16">
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
                  <div className="flex justify-center mb-4">
                    <IconComponent />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
