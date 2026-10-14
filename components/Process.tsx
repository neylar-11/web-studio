import {
  MessageSquare,
  ClipboardList,
  Code2,
  CheckCircle2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Conocemos tu proyecto",
    text: "Identificamos tus objetivos, necesidades y requerimientos principales para establecer una base clara antes de comenzar el desarrollo.",
    result: "Objetivos y necesidades definidos",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Planeamos la solución",
    text: "Transformo tus necesidades en una propuesta visual y funcional que nos permite definir cómo se verá y cómo funcionará tu proyecto.",
    result: "Propuesta y cotización personalizada",
  },
  {
    number: "03",
    icon: Code2,
    title: "Desarrollo y seguimiento",
    text: "Comienzo a construir tu proyecto y te comparto avances para que conozcas cómo va tomando forma.",
    result: "Avances para revisar",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Revisión y ajustes",
    text: "Revisamos que todo funcione como acordamos y realizamos los ajustes incluidos en tu proyecto.",
    result: "Proyecto revisado y aprobado",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Lanzamiento y acompañamiento",
    text: "Preparamos la entrega o publicación de tu proyecto. Te explico cómo funciona y revisamos las opciones de soporte que puedas necesitar.",
    result: "Proyecto entregado",
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      className="scroll-mt-20 bg-paper py-24 text-ink"
    >
      <div className="mx-auto max-w-6xl px-5">

        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow-silver text-sm font-semibold text-accent">
            Nuestro proceso
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Así trabajamos juntos
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Un proceso claro y organizado para transformar tus ideas
            en soluciones digitales. Cada etapa se adapta a las
            necesidades de tu proyecto.
          </p>
        </div>

        {/* Línea de tiempo */}
        <div className="relative mx-auto mt-16 max-w-4xl">

          {/* Línea vertical */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-6 top-6 w-px bg-gradient-to-b from-transparent via-silver to-transparent md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="space-y-10 md:space-y-14">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <li
                  key={step.number}
                  className="relative grid grid-cols-[48px_minmax(0,1fr)] gap-5 md:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] md:gap-8"
                >
                  {/* Indicador */}
                  <div
                    className="
                      relative z-10 col-start-1 row-start-1
                      flex justify-center
                      md:col-start-2
                    "
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-lg shadow-accent/20 ring-4 ring-paper outline outline-2 outline-offset-4 outline-silver/70">
                      {step.number}
                    </div>
                  </div>

                  {/* Tarjeta única, responsive */}
                  <article
                    className={`
                      col-start-2 row-start-1 min-w-0
                      silver-edge-light rounded-2xl p-6
                      shadow-sm transition-all duration-300
                      hover:shadow-lg
                      md:p-7
                      ${
                        isLeft
                          ? "md:col-start-1"
                          : "md:col-start-3"
                      }
                    `}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <Icon
                        size={23}
                        className="shrink-0 text-accent"
                        aria-hidden="true"
                      />

                      <span className="text-sm font-medium text-accent">
                        Paso {step.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-relaxed text-ink-muted">
                      {step.text}
                    </p>

                    <div className="mt-6 border-t border-line pt-4">
                      <p className="text-sm font-medium text-ink-muted">
                        Resultado
                      </p>

                      <p className="mt-1 font-semibold">
                        {step.result}
                      </p>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}