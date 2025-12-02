import Image from "next/image";
import { ReportsFlyIcon } from "@/components/icons/ReportsFly";
import { TasksIcon } from "@/components/icons/Task";
import { VehicleIcon } from "@/components/icons/Vehicle";
import { PlannerIcon } from "@/components/icons/Planner";
import { ProjectsIcon } from "@/components/icons/Projects";
import { EmployeeIcon } from "@/components/icons/Employee";
import { BudgetIcon } from "@/components/icons/Budget";
import { UserIcon } from "@/components/icons/User";

export default function AboutUs() {
  const features = [
    {
      Icon: UserIcon,
      title: "Aplicación móvil",
      description: "Reserva de campos y gestión de partidas",
    },
    {
      Icon: ReportsFlyIcon,
      title: "Más de 150 campos",
      description: "Disponibles en 10 países diferentes",
    },
    {
      Icon: TasksIcon,
      title: "Seguimiento de partidas",
      description: "Estadísticas y análisis de tu juego",
    },
    {
      Icon: VehicleIcon,
      title: "Alquiler de buggies",
      description: "Reserva online de vehículos",
    },
    {
      Icon: PlannerIcon,
      title: "Servicios de drone",
      description: "Análisis aéreo y mapeo de campos",
    },
    {
      Icon: ProjectsIcon,
      title: "Monitoreo de condiciones",
      description: "Informes detallados del campo",
    },
    {
      Icon: EmployeeIcon,
      title: "Múltiples ubicaciones",
      description: "Flota disponible en varios campos",
    },
    {
      Icon: BudgetIcon,
      title: "Experiencia completa",
      description: "Todo lo que necesitas para jugar golf",
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
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8">
              <p className="text-white leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-white leading-relaxed mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p className="text-white leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
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
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <IconComponent />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
