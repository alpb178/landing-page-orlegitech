import Image from "next/image";

export default function VehiclesFleetContainer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-gray-800">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-[#1a4d3a] mb-4">
          Movilidad: control total de vehículos, maquinaria y desplazamientos
        </h2>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-6">
          <Image
            src="/images/features/vehicles-fleet.jpg"
            alt="Control de flota de vehículos"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-lg leading-relaxed">
          La sección Movilidad de OrlegiTech permite al campo de golf tener un
          control completo y en tiempo real de todos los vehículos y maquinaria
          móvil: buggies, tractores, cortacéspedes, utilitarios, quads y
          cualquier otro equipo en movimiento. No solo sirve para saber dónde
          está cada vehículo, sino para gestionar su uso, su mantenimiento y su
          eficiencia.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>🚜</span> Vehículos
        </h3>
        <p className="text-lg leading-relaxed">
          OrlegiTech centraliza todo el parque móvil del campo en un solo lugar:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Registro de cada vehículo y máquina</li>
          <li>Tipo, modelo, uso y responsable</li>
          <li>Historial de utilización</li>
          <li>Control de costes asociados</li>
        </ul>
        <p className="text-lg leading-relaxed">
          El campo sabe exactamente qué tiene, quién lo usa y para qué.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>🛠️</span> Mantenimiento
        </h3>
        <p className="text-lg leading-relaxed">
          Cada vehículo y máquina tiene su historial de mantenimiento:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Revisiones</li>
          <li>Reparaciones</li>
          <li>Cambios de piezas</li>
          <li>Costes acumulados</li>
          <li>Avisos automáticos de revisiones pendientes</li>
        </ul>
        <p className="text-lg leading-relaxed">Esto permite:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Evitar averías graves</li>
          <li>Alargar la vida útil de la maquinaria</li>
          <li>Reducir paradas imprevistas</li>
          <li>Tener control total de costes reales por máquina</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>📍</span> Rastrear (geolocalización en tiempo real)
        </h3>
        <p className="text-lg leading-relaxed">
          OrlegiTech permite rastrear por geolocalización todos los vehículos
          del campo en tiempo real. El sistema muestra:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Dónde está cada vehículo en cada momento</li>
          <li>Qué recorridos hace</li>
          <li>Cuánto tiempo pasa en cada zona</li>
          <li>Cómo se distribuye realmente el trabajo en el campo</li>
        </ul>
        <p className="text-lg leading-relaxed">Esto permite:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Mejorar la organización del trabajo</li>
          <li>Optimizar rutas y tiempos</li>
          <li>Evitar usos indebidos o ineficientes</li>
          <li>Tener trazabilidad completa de la operativa diaria</li>
        </ul>
      </div>

      <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold text-[#1a4d3a]">
          De no saber dónde está nada… a tener el campo bajo control total
        </h3>
        <p className="text-lg leading-relaxed">
          Con Movilidad, el campo pasa de:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>
            No saber dónde están los vehículos → a ver todo en tiempo real
          </li>
          <li>
            No controlar bien el uso → a tener datos objetivos de utilización
          </li>
          <li>
            Sufrir averías inesperadas → a hacer mantenimiento preventivo y
            planificado
          </li>
        </ul>
        <p className="text-lg leading-relaxed font-semibold text-[#1a4d3a]">
          El resultado: menos costes, más control, más eficiencia y una
          operativa mucho más profesional.
        </p>
      </div>
    </div>
  );
}
