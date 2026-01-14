import Image from "next/image";

export default function FieldContainer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-gray-800">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-[#1a4d3a] mb-4">
          Campo: el corazón operativo del club, en tiempo real
        </h2>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-6">
          <Image
            src="/images/features/field.jpg"
            alt="Gestión del campo"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-lg leading-relaxed">
          La sección Campo de OrlegiTech es el centro neurálgico donde se
          controla, comunica y optimiza todo lo que ocurre en el recorrido día a
          día. No es solo un panel de información: es una herramienta viva que
          conecta al club con sus socios y al equipo de mantenimiento con la
          realidad del campo, en tiempo real.
        </p>
        <p className="text-lg leading-relaxed">
          Desde aquí se gestionan y comunican los torneos, se controla la
          velocidad de juego, se publica la posición de banderas, se informa del
          estado del campo y se registran y resuelven incidencias. Todo
          unificado en un solo lugar, claro, visual y siempre actualizado.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          Torneos
        </h3>
        <p className="text-lg leading-relaxed">
          El club puede publicar, organizar y comunicar torneos de forma
          centralizada. Los socios ven qué competiciones hay, cuándo se juegan y
          cómo afectan al campo, mejorando la planificación y evitando
          confusiones.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          Velocidad de juego
        </h3>
        <p className="text-lg leading-relaxed">
          Uno de los grandes problemas de cualquier campo de golf: las rondas
          lentas. OrlegiTech permite monitorizar y visualizar el ritmo de juego
          para detectar cuellos de botella, mejorar la experiencia del jugador y
          optimizar la gestión de salidas y turnos.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          Banderas
        </h3>
        <p className="text-lg leading-relaxed">
          Cada día, los socios pueden consultar fácilmente la posición de
          banderas sin necesidad de carteles físicos ni fotos en WhatsApp.
          Información clara, directa y siempre accesible desde el móvil.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          Estado del campo
        </h3>
        <p className="text-lg leading-relaxed">
          Comunicación transparente sobre el estado del recorrido: trabajos de
          mantenimiento, pinchados, resiembras, cortes de green, zonas en
          recuperación o cualquier actuación relevante. El socio entiende el
          porqué de cada cosa y valora más el trabajo del club.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          Incidencias
        </h3>
        <p className="text-lg leading-relaxed">
          Tanto el personal como los socios pueden notificar problemas:
          aspersores rotos, caminos en mal estado, árboles caídos, señales
          dañadas o cualquier incidencia en el campo. Todo queda registrado,
          organizado y con seguimiento.
        </p>
      </div>
    </div>
  );
}
