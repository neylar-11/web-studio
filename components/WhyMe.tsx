import { Reveal, Cascade, CascadeItem } from "./Motion";
import {
  MonitorSmartphone,
  PenTool,
  UserCheck,
  Store,
  Search,
  Clock,
} from "lucide-react";

const benefits = [
  {
    icon: Store,
    title: "Un espacio propio",
    text: "Tu información en un canal que no depende del alcance ni de los cambios de una red social.",
  },
  {
    icon: Search,
    title: "Presencia en buscadores",
    text: "Una web bien estructurada crea una mejor base para que tu negocio pueda aparecer en búsquedas relacionadas.",
  },
  {
    icon: Clock,
    title: "Disponible las 24 horas",
    text: "La información de tu negocio está disponible a cualquier hora, incluso cuando no estás atendiendo.",
  },
  {
    icon: MonitorSmartphone,
    title: "En cualquier pantalla",
    text: "Se ve y funciona bien en celular, tablet y computadora. Puedes tener el mismo diseño en todas o uno distinto para cada pantalla, según lo que prefieras.",
  },
  {
    icon: PenTool,
    title: "Con tu identidad",
    text: "Diseño, colores y contenido de acuerdo con tu marca.",
  },
  {
    icon: UserCheck,
    title: "Trato directo",
    text: "La misma persona que te atiende es quien construye tu página, de principio a fin.",
  },
];

export default function WhyMe() {
  return (
    <section id="beneficios" className="scroll-mt-20 bg-card py-16 sm:py-24 text-ink">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow-silver text-base font-semibold text-accent">
            Más que estar en redes
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Lo que una buena web{" "}
            <br className="hidden md:block" />
            hace por tu negocio
          </h2>
        </Reveal>

        <Cascade className="mt-12 grid gap-x-10 gap-y-10 sm:mt-16 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <CascadeItem key={title}>
            <article className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center silver-tile rounded-2xl text-accent">
                <Icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{text}</p>
              </div>
            </article>
            </CascadeItem>
          ))}
        </Cascade>
      </div>
    </section>
  );
}