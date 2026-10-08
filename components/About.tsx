import {
  ClipboardCheck,
  Code2,
  Database,
  Network,
  ShieldCheck,
  Layers3,
  Handshake,
  Target,
} from "lucide-react";

const strengths = [
  { icon: ClipboardCheck  , label: "Calidad, pruebas y mantenimiento de software"},
  { icon: Code2, label: "Desarrollo web y programación orientada a objetos" },
  { icon: Database, label: "Bases de datos y arquitectura de software" },
  { icon: Handshake, label: "Comunicación directa y atención personalizada" },
];

const areas = [
  { icon: Code2, title: "Desarrollo web" },
  { icon: Layers3, title: "Diseño de interfaces" },
  { icon: Database, title: "Bases de datos" },
  { icon: Network, title: "Redes" },
  { icon: ShieldCheck, title: "Seguridad" },
  { icon: Target, title: "Requerimientos" },
];

export default function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 bg-paper py-24 text-ink">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[2fr_3fr] lg:gap-20">
        {/* Tarjeta visual */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-bg p-8 text-text shadow-xl">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(70% 60% at 20% 20%, rgba(59,130,246,0.28), transparent 70%), radial-gradient(60% 50% at 90% 90%, rgba(34,211,238,0.16), transparent 70%)",
            }}
          />

          <div className="relative">
            <p className="text-sm font-semibold text-accent-2">
              Ingeniería en Software · UAZ
            </p>

            <h3 className="mt-4 text-3xl font-extrabold leading-tight">
              Luis Obed
              <br />
              Aranda Robles
            </h3>

            <p className="mt-3 text-sm text-muted">Desarrollador web</p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {areas.map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="flex items-center gap-2 rounded-xl border border-border bg-surface p-3 text-sm"
                >
                  <Icon size={17} className="shrink-0 text-accent-2" />
                  {title}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Hola, soy Obed
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Me forme en Ingeniería en Software por la Universidad Autónoma de
            Zacatecas; me dedico al desarrollo web porque una
            buena página cambia la forma en que un negocio se presenta y
            atrae clientes.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Antes de crear tu página, busco entender tu negocio: qué quieres lograr, 
            quiénes son y quiénes quieres que sean tus clientes, qué necesitas comunicar 
            y qué funciones realmente te pueden ayudar. Así evitamos complicar el proyecto y 
            construimos una solución clara, funcional y pensada para tu negocio, con atención 
            directa de principio a fin.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Mi visión es mantenerme en constante capacitación y actualización en desarrollo web, 
            bases de datos, arquitectura de software y nuevas tecnologías. Busco fortalecer 
            continuamente mis conocimientos técnicos para aplicar mejores prácticas, adoptar 
            herramientas actuales y desarrollar soluciones cada vez más completas, funcionales y 
            adaptadas a las necesidades reales de cada proyecto.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {strengths.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl border border-line bg-card p-4 font-medium"
              >
                <span className="shrink-0 rounded-lg bg-accent/10 p-2 text-accent">
                  <Icon size={20} />
                </span>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}