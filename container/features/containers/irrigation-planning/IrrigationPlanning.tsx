import Image from "next/image";

export default function IrrigationPlanningContainer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-gray-800">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-[#1a4d3a] mb-4">
          Riego Inteligente: precisión, ahorro y control total
        </h2>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-6">
          <Image
            src="/images/features/irrigation.jpg"
            alt="Riego inteligente"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-lg leading-relaxed">
          La sección Riego Inteligente de OrlegiTech transforma por completo la
          forma en que un campo de golf gestiona el agua, la energía y la salud
          del césped. Ya no se trata solo de regar: se trata de regar mejor, en
          el momento justo y con la cantidad exacta.
        </p>
        <p className="text-lg leading-relaxed">
          OrlegiTech combina sensores de humedad, datos climáticos, análisis de
          costes eléctricos e inteligencia artificial para tomar decisiones
          precisas y automáticas que optimizan el consumo, reducen costes y
          mejoran la calidad del campo. Todo queda centralizado en un único
          panel, claro y fácil de usar.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>💧</span> Humedad de green
        </h3>
        <p className="text-lg leading-relaxed">
          Control en tiempo real de la humedad de los greens y zonas clave del
          campo. El sistema permite detectar estrés hídrico, exceso de agua o
          zonas problemáticas antes de que aparezcan daños visibles, asegurando
          superficies más homogéneas y estables.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>🌤️</span> Clima
        </h3>
        <p className="text-lg leading-relaxed">
          Integración de datos meteorológicos actuales y previsiones. El sistema
          tiene en cuenta lluvia, temperatura, viento, radiación solar y
          evapotranspiración para ajustar automáticamente las decisiones de
          riego.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>⚡️</span> Tarifas de luz
        </h3>
        <p className="text-lg leading-relaxed">
          OrlegiTech analiza las tarifas eléctricas para regar en las horas más
          baratas, reduciendo significativamente el coste energético del campo
          sin comprometer la calidad del césped.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          <span>🤖</span> Recomendación de riego
        </h3>
        <p className="text-lg leading-relaxed">
          El corazón del sistema: la inteligencia artificial cruza todos los
          datos (humedad, clima, tipo de césped, época del año, consumo
          histórico y coste eléctrico) y genera recomendaciones precisas de
          riego por zonas, indicando cuánto regar, cuándo y durante cuánto
          tiempo.
        </p>
      </div>

      <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold text-[#1a4d3a]">
          Un nuevo estándar en eficiencia y sostenibilidad
        </h3>
        <p className="text-lg leading-relaxed">
          Con Riego Inteligente, OrlegiTech permite a los campos de golf:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Ahorrar agua y energía</li>
          <li>Reducir costes operativos</li>
          <li>Mejorar la calidad y uniformidad del césped</li>
          <li>Tomar decisiones basadas en datos, no en intuición</li>
          <li>Trabajar de forma más cómoda, precisa y profesional</li>
        </ul>
        <p className="text-lg leading-relaxed font-semibold text-[#1a4d3a]">
          Menos desperdicio. Más control. Mejor campo.
        </p>
      </div>
    </div>
  );
}
