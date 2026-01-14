import Image from "next/image";

export default function ProjectControlContainer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-gray-800">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-[#1a4d3a] mb-4">
          Control de Proyectos: gestión integral de proyectos y documentación
        </h2>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-6">
          <Image
            src="/images/features/control-projects.jpg"
            alt="Control de proyectos"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-lg leading-relaxed">
          OrlegiTech permite gestionar todos los proyectos del campo de golf de
          forma centralizada, desde la planificación hasta la ejecución y el
          seguimiento.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>📁</span> Un repositorio documental inteligente
        </h3>
        <p className="text-lg leading-relaxed">
          En OrlegiTech puedes guardar y consultar:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Planos del campo</li>
          <li>Informes técnicos</li>
          <li>Informes de dron y análisis multiespectral</li>
          <li>Manuales de maquinaria</li>
          <li>Facturas y presupuestos</li>
          <li>Contratos y documentos laborales</li>
          <li>Fotos de incidencias y trabajos realizados</li>
          <li>Procedimientos, protocolos y checklists</li>
          <li>Cualquier documento relevante del campo</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Todo queda centralizado, ordenado y con histórico.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>🔗</span> Documentos vinculados a lo que realmente importa
        </h3>
        <p className="text-lg leading-relaxed">
          Lo potente de OrlegiTech es que los adjuntos no están sueltos: están
          conectados a:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Empleados</li>
          <li>Proyectos</li>
          <li>Tareas</li>
          <li>Vehículos y maquinaria</li>
          <li>Zonas del campo (greens, hoyos, calles)</li>
          <li>Incidencias y actuaciones concretas</li>
        </ul>
        <p className="text-lg leading-relaxed">Así puedes, por ejemplo:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Ver todos los documentos de un proyecto concreto</li>
          <li>Ver el historial de informes de un green</li>
          <li>Ver las revisiones y manuales de una máquina</li>
          <li>Ver las fotos y documentos de una incidencia pasada</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>🕒</span> Historial y trazabilidad completa
        </h3>
        <p className="text-lg leading-relaxed">Cada documento queda:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Fechado</li>
          <li>Asociado a una actuación o elemento</li>
          <li>Guardado en el histórico del campo</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Esto crea una memoria documental del campo que no se pierde con el
          tiempo ni con los cambios de personal.
        </p>
      </div>

      <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold text-[#1a4d3a]">
          Del caos de carpetas al archivo digital del campo
        </h3>
        <p className="text-lg leading-relaxed">
          Con Adjuntos, el campo pasa de:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Tener documentos desperdigados → a tenerlo todo centralizado</li>
          <li>
            Perder información importante → a tener histórico y trazabilidad
          </li>
          <li>
            Depender de personas concretas → a tener el conocimiento documentado
          </li>
        </ul>
        <p className="text-lg leading-relaxed font-semibold text-[#1a4d3a]">
          El resultado: más orden, más seguridad, más profesionalidad y una
          gestión mucho más sólida del campo.
        </p>
      </div>
    </div>
  );
}
