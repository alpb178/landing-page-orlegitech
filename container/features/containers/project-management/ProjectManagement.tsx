import Image from "next/image";

export default function ProjectManagementContainer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-gray-800">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-[#1a4d3a] mb-4">
          Gestión de Proyectos: orden, control y eficiencia en cada actuación
        </h2>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-6">
          <Image
            src="/images/features/project-management.jpg"
            alt="Gestión de proyectos"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-lg leading-relaxed">
          La sección Gestión de Proyectos de OrlegiTech convierte el trabajo
          diario del campo en un sistema organizado, medible y totalmente bajo
          control. Desde pequeñas reparaciones hasta grandes reformas o planes
          de mantenimiento estacionales, todo queda perfectamente estructurado y
          documentado.
        </p>
        <p className="text-lg leading-relaxed">
          Aquí no se improvisa: cada actuación es un proyecto, cada proyecto
          tiene tareas, tiempos, responsables y costes, y todo queda registrado
          para poder analizar, mejorar y optimizar la operativa del campo.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>📁</span> Proyectos
        </h3>
        <p className="text-lg leading-relaxed">
          Cada intervención del campo puede convertirse en un proyecto:
          renovación de un green, mejora de drenajes, resiembra de una calle,
          instalación de riego, reforestación, reparación de caminos o cualquier
          actuación especial.
        </p>
        <p className="text-lg leading-relaxed">Cada proyecto incluye:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Objetivos claros</li>
          <li>Responsables asignados</li>
          <li>Fechas de inicio y fin</li>
          <li>Presupuesto estimado</li>
          <li>Seguimiento del progreso en tiempo real</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>✅</span> Tareas
        </h3>
        <p className="text-lg leading-relaxed">
          Dentro de cada proyecto, el trabajo se divide en tareas concretas,
          asignadas a personas o equipos. Se puede ver quién hace qué, cuándo y
          en qué estado está cada parte del trabajo.
        </p>
        <p className="text-lg leading-relaxed">Esto permite:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Evitar olvidos</li>
          <li>Coordinar equipos</li>
          <li>Mejorar la productividad</li>
          <li>Tener una visión clara del avance real del proyecto</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>🧾</span> Checklist
        </h3>
        <p className="text-lg leading-relaxed">
          Cada tipo de trabajo puede tener su lista de verificación: preparación
          del terreno, revisión de maquinaria, control de materiales, pasos de
          seguridad o controles de calidad.
        </p>
        <p className="text-lg leading-relaxed">El checklist asegura que:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Nada importante se queda sin hacer</li>
          <li>Todos los trabajos se hacen siempre con el mismo estándar</li>
          <li>El conocimiento del equipo queda documentado y reutilizable</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>⏱️</span> Chrono (control de tiempos)
        </h3>
        <p className="text-lg leading-relaxed">
          OrlegiTech permite medir el tiempo real invertido en cada proyecto y
          cada tarea. Así el club sabe exactamente:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Cuántas horas cuesta cada tipo de trabajo</li>
          <li>Dónde se va el tiempo del equipo</li>
          <li>Qué procesos se pueden optimizar</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>💰</span> Gastos
        </h3>
        <p className="text-lg leading-relaxed">
          Cada proyecto puede llevar su control de costes: materiales,
          maquinaria, horas de personal, servicios externos, etc.
        </p>
        <p className="text-lg leading-relaxed">Esto permite:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Comparar presupuesto vs coste real</li>
          <li>Saber cuánto cuesta realmente cada tipo de actuación</li>
          <li>Tomar mejores decisiones económicas en el futuro</li>
        </ul>
      </div>

      <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold text-[#1a4d3a]">
          De trabajar &ldquo;a ojo&rdquo; a gestionar como una empresa moderna
        </h3>
        <p className="text-lg leading-relaxed">
          Con Gestión de Proyectos, el campo pasa de:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Apagar fuegos → a planificar y optimizar</li>
          <li>Tener información dispersa → a tener todo centralizado</li>
          <li>No saber costes reales → a controlar cada euro invertido</li>
        </ul>
        <p className="text-lg leading-relaxed font-semibold text-[#1a4d3a]">
          El resultado es un equipo más organizado, más eficiente y un campo
          mejor mantenido con menos estrés, menos errores y más control.
        </p>
      </div>
    </div>
  );
}
