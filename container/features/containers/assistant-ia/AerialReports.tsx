import Image from "next/image";

export default function AssistantIAContainer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-gray-800">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-[#1a4d3a] mb-4">
          Asistente Virtual del Greenkeeper: la memoria inteligente del campo
        </h2>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-6">
          <Image
            src="/images/features/ia.jpg"
            alt="Asistente Virtual del Greenkeeper"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-lg leading-relaxed">
          El Asistente Virtual del Greenkeeper de OrlegiTech es mucho más que un
          simple chatbot: es un ayudante digital con memoria, diseñado para
          conocer el campo, aprender de su historial y ayudar al equipo a tomar
          mejores decisiones cada día. Este asistente se convierte en una base
          de conocimiento viva del campo de golf: recuerda lo que se ha hecho,
          cuándo se hizo, qué resultados dio y qué problemas han aparecido en
          cada zona.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          Un asistente que aprende con el tiempo
        </h3>
        <p className="text-lg leading-relaxed">
          El sistema va acumulando información de:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Trabajos realizados en cada hoyo, green o calle</li>
          <li>Historial de riegos, tratamientos, resiembras y actuaciones</li>
          <li>Incidencias repetidas y cómo se solucionaron</li>
          <li>Resultados de análisis de dron, sensores y clima</li>
          <li>Decisiones pasadas y sus consecuencias</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Todo eso forma la memoria digital del campo. Con el tiempo, el
          asistente conoce el campo casi como el propio greenkeeper.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          Pregunta al campo, literalmente
        </h3>
        <p className="text-lg leading-relaxed">
          El greenkeeper y su equipo pueden hablar con el asistente en lenguaje
          natural, por ejemplo:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>
            &ldquo;¿Qué problemas hemos tenido en este green el último
            verano?&rdquo;
          </li>
          <li>
            &ldquo;¿Cuándo fue la última vez que se pinchó esta zona?&rdquo;
          </li>
          <li>
            &ldquo;¿Qué zonas suelen tener más estrés hídrico en agosto?&rdquo;
          </li>
          <li>
            &ldquo;¿Qué hicimos la última vez que apareció este problema?&rdquo;
          </li>
        </ul>
        <p className="text-lg leading-relaxed">
          El asistente busca en el histórico del campo y responde con datos
          reales del propio club.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          Recomendaciones basadas en la historia real del campo
        </h3>
        <p className="text-lg leading-relaxed">
          No solo responde: también ayuda a decidir:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Sugiere actuaciones basadas en lo que ya funcionó antes</li>
          <li>Advierte de patrones repetidos</li>
          <li>Ayuda a planificar trabajos según la experiencia acumulada</li>
          <li>Conecta datos de riego, clima, dron y mantenimiento</li>
        </ul>
      </div>

      <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold text-[#1a4d3a]">
          Del conocimiento en la cabeza de una persona… al conocimiento del club
        </h3>
        <p className="text-lg leading-relaxed">
          Con el Asistente Virtual del Greenkeeper, el campo pasa de:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>
            Tener el conocimiento solo en la experiencia de una persona → a
            tenerlo guardado y accesible para todo el equipo
          </li>
          <li>
            Perder información cuando cambia el personal → a conservar la
            memoria histórica del campo
          </li>
          <li>
            Decidir &ldquo;por intuición&rdquo; → a decidir con datos y
            experiencia acumulada
          </li>
        </ul>
        <p className="text-lg leading-relaxed font-semibold text-[#1a4d3a]">
          El resultado: mejores decisiones, menos errores repetidos y un campo
          cada vez mejor gestionado con el paso de los años.
        </p>
      </div>
    </div>
  );
}
