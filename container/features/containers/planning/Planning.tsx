export default function PlanningContainer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-gray-800">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-[#1a4d3a] mb-4">
          Planificación: todo el equipo, en el lugar correcto, en el momento
          correcto
        </h2>
        <p className="text-lg leading-relaxed">
          La sección Planificación de OrlegiTech es el centro de control del
          tiempo, las personas y la organización diaria del campo. Permite
          coordinar de forma sencilla y visual quién trabaja, cuándo, dónde y en
          qué, evitando improvisaciones, solapamientos y errores de
          comunicación. Aquí todo el equipo tiene claro su calendario, sus
          turnos y sus responsabilidades, y la dirección del campo tiene una
          visión global y en tiempo real de toda la operativa.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          Calendario
        </h3>
        <p className="text-lg leading-relaxed">
          Vista general de toda la actividad del campo: trabajos programados,
          proyectos, eventos, torneos, labores de mantenimiento y operaciones
          especiales. Todo en un solo calendario compartido y siempre
          actualizado.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          Agenda
        </h3>
        <p className="text-lg leading-relaxed">
          Planificación detallada del día a día: qué tareas se hacen hoy, quién
          las hace y en qué zonas del campo. La agenda convierte el plan en
          acción y asegura que el trabajo fluye de forma ordenada.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          Vacaciones
        </h3>
        <p className="text-lg leading-relaxed">
          Gestión centralizada de vacaciones, días libres y ausencias del
          personal. El sistema permite ver fácilmente:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Quién está disponible</li>
          <li>Quién no</li>
          <li>Y cómo afecta eso a la planificación del trabajo</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Evita problemas de personal y garantiza que siempre haya cobertura
          suficiente.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          Turnos
        </h3>
        <p className="text-lg leading-relaxed">
          Organización de turnos de trabajo por equipos, personas o funciones:
          mantenimiento, riego, maquinaria, recepción, etc. Permite crear
          rotaciones, ajustar horarios y adaptarse a temporadas altas, torneos o
          trabajos especiales.
        </p>
      </div>

      <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold text-[#1a4d3a]">
          De la improvisación a la coordinación total
        </h3>
        <p className="text-lg leading-relaxed">
          Con Planificación, el campo pasa de:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Apagar fuegos → a trabajar con orden y previsión</li>
          <li>
            Tener la información en la cabeza de unos pocos → a tenerla visible
            para todo el equipo
          </li>
          <li>
            Perder tiempo en llamadas y papeles → a tenerlo todo claro en un
            solo sistema
          </li>
        </ul>
        <p className="text-lg leading-relaxed font-semibold text-[#1a4d3a]">
          El resultado: menos estrés, menos errores y un equipo mucho más
          eficiente y coordinado.
        </p>
      </div>
    </div>
  );
}
