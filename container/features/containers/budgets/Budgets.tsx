import Image from "next/image";

export default function BudgetsContainer() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-gray-800">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-[#1a4d3a] mb-4">
          Presupuestos y Productos: control total de costes y materiales
        </h2>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg mb-6">
          <Image
            src="/images/features/budgets.jpg"
            alt="Presupuestos y productos"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-lg leading-relaxed">
          La sección Presupuestos y Productos de OrlegiTech permite al campo de
          golf llevar un control preciso, organizado y real de todo lo que se
          compra, se utiliza y se invierte en el mantenimiento y mejora de las
          instalaciones. Esta área conecta directamente la planificación técnica
          con la realidad económica, permitiendo tomar decisiones basadas en
          datos y no en estimaciones aproximadas.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          Presupuestos
        </h3>
        <p className="text-lg leading-relaxed">
          Con OrlegiTech, cada actuación, proyecto o intervención puede tener su
          presupuesto detallado antes de empezar. El sistema permite:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Crear presupuestos por proyecto, zona o tipo de trabajo</li>
          <li>
            Desglosar costes por materiales, mano de obra, maquinaria y
            servicios externos
          </li>
          <li>Comparar presupuesto previsto vs coste real</li>
          <li>
            Guardar histórico de presupuestos para análisis y planificación
            futura
          </li>
        </ul>
        <p className="text-lg leading-relaxed">
          Esto da al club una visión clara y anticipada del impacto económico de
          cada decisión.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-[#1a4d3a] flex items-center gap-2">
          Productos
        </h3>
        <p className="text-lg leading-relaxed">
          OrlegiTech incluye un sistema completo de gestión de productos y
          materiales: semillas, fertilizantes, fitosanitarios, arena, piezas de
          repuesto, combustible, herramientas y cualquier consumible del campo.
        </p>
        <p className="text-lg leading-relaxed">Permite:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>Tener un catálogo organizado de productos</li>
          <li>Ver qué se usa más y en qué se gasta el dinero</li>
          <li>Asociar productos a proyectos y trabajos concretos</li>
          <li>
            Analizar costes reales por tipo de actuación o por zona del campo
          </li>
        </ul>
      </div>

      <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold text-[#1a4d3a]">
          De la intuición al control financiero real
        </h3>
        <p className="text-lg leading-relaxed">
          Con Presupuestos y Productos, el campo pasa de:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4 text-lg">
          <li>
            No saber exactamente en qué se va el dinero → a tener trazabilidad
            total del gasto
          </li>
          <li>
            Comprar &ldquo;por costumbre&rdquo; → a comprar con criterio y datos
          </li>
          <li>
            No poder comparar campañas → a optimizar presupuestos año tras año
          </li>
        </ul>
        <p className="text-lg leading-relaxed font-semibold text-[#1a4d3a]">
          El resultado: más control, menos desperdicio y una gestión económica
          mucho más profesional y rentable.
        </p>
      </div>
    </div>
  );
}
