import Image from "next/image";

export default function OperatorManagementContainer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-gray-800">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-[#1a4d3a] mb-4">
          Gestión Organizacional y Empleados: control total del equipo humano
        </h2>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-6">
          <Image
            src="/images/features/operator-managment.jpg"
            alt="Gestión de operadores y empleados"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-lg leading-relaxed">
          La sección Gestión Organizacional de OrlegiTech permite al campo de
          golf tener una visión completa, ordenada y en tiempo real de todo el
          equipo humano: quién es cada persona, qué hace, en qué trabaja, cuánto
          tiempo dedica y cómo se organiza el trabajo. El sistema convierte al
          personal en una parte integrada, medible y organizada de la operativa
          del campo.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>👥</span> Empleados: la ficha completa de cada persona
        </h3>
        <p className="text-lg leading-relaxed">
          Cada empleado tiene su perfil completo dentro de OrlegiTech, donde se
          centraliza toda su información y su actividad diaria. Desde la ficha
          de cada empleado se puede ver:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>En qué proyectos está trabajando</li>
          <li>Qué tareas tiene asignadas</li>
          <li>Su calendario y agenda</li>
          <li>Sus turnos de trabajo</li>
          <li>Sus fichajes de entrada y salida</li>
          <li>Las horas trabajadas por día, semana o mes</li>
          <li>El tiempo dedicado a cada proyecto o tipo de trabajo (Chrono)</li>
          <li>Sus documentos y adjuntos</li>
          <li>Sus checklists y procedimientos</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Todo en un solo sitio, de forma clara y ordenada.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>📊</span> Control real del trabajo y del tiempo
        </h3>
        <p className="text-lg leading-relaxed">
          La dirección del campo puede ver en cada empleado:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Qué está haciendo hoy</li>
          <li>En qué ha trabajado esta semana</li>
          <li>Cuántas horas lleva acumuladas</li>
          <li>Dónde se está invirtiendo realmente el tiempo del equipo</li>
          <li>Quién está sobrecargado y quién tiene más disponibilidad</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Esto permite organizar mejor los recursos humanos y tomar decisiones
          con datos reales.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>🏗️</span> Conexión directa con proyectos y trabajos del campo
        </h3>
        <p className="text-lg leading-relaxed">
          Cada empleado está conectado con:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Proyectos</li>
          <li>Tareas</li>
          <li>Actuaciones de mantenimiento</li>
          <li>Incidencias</li>
          <li>Trabajos especiales</li>
        </ul>
        <p className="text-lg leading-relaxed">
          De esta forma, OrlegiTech crea una trazabilidad completa: Quién hizo
          qué, cuándo, cuánto tiempo llevó y en qué zona del campo.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>🗂️</span> Departamentos y organización interna
        </h3>
        <p className="text-lg leading-relaxed">
          El sistema permite organizar el personal por:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>
            Departamentos (mantenimiento, riego, maquinaria, administración,
            etc.)
          </li>
          <li>Equipos de trabajo</li>
          <li>Responsables y roles</li>
        </ul>
      </div>
    </div>
  );
}
