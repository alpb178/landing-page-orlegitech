import Image from "next/image";

export default function AerialReportsContainer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-gray-800">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-[#1a4d3a] mb-4">
          Dron y Análisis Multiespectral: ver lo que el ojo humano no puede
        </h2>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-6">
          <Image
            src="/images/features/aereal-report.jpg"
            alt="Análisis aéreo con dron"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-lg leading-relaxed">
          La sección Dron y Análisis Multiespectral de OrlegiTech lleva la
          gestión del campo a un nivel completamente nuevo. Gracias a vuelos de
          dron y cámaras multiespectrales de alta precisión, el club puede ver,
          medir y entender la salud real del césped con un nivel de detalle
          imposible de conseguir desde el suelo.
        </p>
        <p className="text-lg leading-relaxed">
          No se trata solo de hacer fotos aéreas: se trata de convertir imágenes
          en datos, y datos en decisiones inteligentes. OrlegiTech combina
          vuelos automatizados, procesamiento de imágenes, modelos 3D e
          inteligencia artificial para crear mapas completos del campo y
          detectar problemas antes de que sean visibles para el jugador.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>🚁</span> Vuelos de dron de alta precisión
        </h3>
        <p className="text-lg leading-relaxed">
          El sistema permite realizar vuelos planificados sobre hoyos, greens,
          calles o todo el recorrido, generando ortomosaicos y modelos del
          terreno con precisión centimétrica. Todo queda guardado en el
          histórico del campo para poder comparar la evolución con el paso del
          tiempo.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>🌈</span> Cámara multiespectral: salud real del césped
        </h3>
        <p className="text-lg leading-relaxed">
          La cámara multiespectral permite analizar índices como vigor, estrés
          hídrico, densidad y uniformidad del césped. OrlegiTech transforma
          estas imágenes en mapas de colores fáciles de interpretar, donde se
          identifican:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Zonas con falta o exceso de agua</li>
          <li>Áreas con estrés o enfermedad incipiente</li>
          <li>Problemas de compactación o drenaje</li>
          <li>Diferencias de calidad entre zonas del campo</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>🧠</span> Análisis con inteligencia artificial
        </h3>
        <p className="text-lg leading-relaxed">
          La IA de OrlegiTech interpreta automáticamente las imágenes y señala
          zonas problemáticas, prioriza actuaciones y ayuda al greenkeeper a
          tomar decisiones basadas en datos, no en suposiciones.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>🗺️</span> Topografía, distancias y modelos 3D
        </h3>
        <p className="text-lg leading-relaxed">
          Además del estado del césped, el sistema permite generar mapas
          topográficos, medir distancias reales, pendientes, caídas de green y
          zonas de drenaje, creando una base digital completa del campo.
        </p>
      </div>

      <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold text-[#1a4d3a]">
          Del mantenimiento reactivo al mantenimiento predictivo
        </h3>
        <p className="text-lg leading-relaxed">
          Con Dron y Análisis Multiespectral, el campo pasa de:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Reaccionar a los problemas → a anticiparse a ellos</li>
          <li>
            Trabajar &ldquo;a ojo&rdquo; → a trabajar con datos científicos
          </li>
          <li>Tratar todo por igual → a actuar solo donde hace falta</li>
        </ul>
      </div>
    </div>
  );
}
