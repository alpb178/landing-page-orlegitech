export default function UserCheckInContainer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-gray-800">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-[#1a4d3a] mb-4">
          Control Horario y Fichajes: cumplimiento legal y control total del
          tiempo de trabajo
        </h2>
        <p className="text-lg leading-relaxed">
          OrlegiTech incluye un sistema completo de control de jornada laboral
          que permite al campo de golf cumplir con la normativa vigente y, al
          mismo tiempo, tener un control real y transparente del tiempo de
          trabajo del equipo. El sistema está diseñado para adaptarse al día a
          día del campo: personal de mantenimiento, riego, maquinaria,
          administración o cualquier otro perfil.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>⏱️</span> Fichajes de entrada y salida
        </h3>
        <p className="text-lg leading-relaxed">Cada empleado puede:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Fichar su entrada y salida desde el móvil, tablet u ordenador</li>
          <li>Registrar pausas, descansos o cambios de tarea</li>
          <li>Dejar constancia real de las horas efectivamente trabajadas</li>
        </ul>
        <p className="text-lg leading-relaxed">
          El sistema guarda todos los registros de forma segura, trazable y no
          modificable, tal y como exige la normativa.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>📊</span> Informes automáticos de horas trabajadas
        </h3>
        <p className="text-lg leading-relaxed">
          OrlegiTech genera automáticamente:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Informes diarios, semanales y mensuales</li>
          <li>Horas trabajadas por empleado</li>
          <li>Horas por proyecto o tipo de trabajo</li>
          <li>Horas extra y desviaciones de jornada</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Todo exportable para gestoría, inspecciones o control interno.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>⚖️</span> Cumplimiento de la normativa laboral
        </h3>
        <p className="text-lg leading-relaxed">
          El sistema de control horario de OrlegiTech cumple con:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>La obligación legal de registro de jornada laboral en España</li>
          <li>
            Los requisitos exigidos por la Inspección de Trabajo y la Seguridad
            Social (INSS)
          </li>
          <li>
            La conservación de registros durante el tiempo legalmente
            establecido
          </li>
          <li>La trazabilidad completa de la información</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Esto protege tanto a la empresa como a los trabajadores.
        </p>
      </div>
    </div>
  );
}
