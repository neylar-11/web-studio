import {
  GraduationCap,
  Code2,
  Database,
  Network,
  ShieldCheck,
  Layers3,
  Handshake,
  Target,
} from "lucide-react";

const strengths = [
  {
    icon: GraduationCap,
    label: "7.º semestre de Ingeniería en Software",
  },
  {
    icon: Code2,
    label: "Desarrollo web y programación orientada a objetos",
  },
  {
    icon: Database,
    label: "Bases de datos y arquitectura de software",
  },
  {
    icon: Handshake,
    label: "Comunicación directa y atención personalizada",
  },
];

const areas = [
  {
    icon: Code2,
    title: "Desarrollo web",
  },
  {
    icon: Layers3,
    title: "Diseño de interfaces",
  },
  {
    icon: Database,
    title: "Bases de datos",
  },
  {
    icon: Network,
    title: "Redes",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad",
  },
  {
    icon: Target,
    title: "Requerimientos",
  },
];

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-20 bg-paper py-24 text-ink"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[2fr_3fr] lg:gap-20">
        
        {/* Tarjeta visual */}
        <div className="relative overflow-hidden rounded-3xl border border-line bg-[#0b1220] p-8 text-white shadow-xl">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(70% 60% at 20% 20%, rgba(59,130,246,0.28), transparent 70%), radial-gradient(60% 50% at 90% 90%, rgba(34,211,238,0.16), transparent 70%)",
            }}
          />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-2">
              Ingeniería en Software
            </p>

            <h3 className="mt-4 text-3xl font-extrabold leading-tight">
              Luis Obed
              <br />
              Aranda Robles
            </h3>

            <p className="mt-3 text-sm text-slate-400">
              7.º semestre
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {areas.map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-300"
                >
                  <Icon size={17} className="text-accent-2" />
                  {title}
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm leading-relaxed text-slate-400">
                Formación continua en desarrollo de aplicaciones web,
                arquitectura de software, bases de datos y negocios digitales.
              </p>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Sobre mí
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Tecnología con propósito,
            <br />
            soluciones con visión de negocio
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Soy Luis Obed Aranda Robles, estudiante de séptimo semestre de
            Ingeniería de Software en la Universidad Autonoma de Zacatecas (UAZ). Mi formación me ha permitido desarrollar
            bases en programación, desarrollo web, diseño de interfaces,
            bases de datos, redes, seguridad, arquitectura de software e
            ingeniería de requerimientos.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Lo que más me atrae del desarrollo web es que combina dos mundos:
            tecnología y negocio. Una buena solución digital no solo debe verse
            bien; debe entender lo que una empresa necesita, facilitar la
            experiencia de sus clientes y convertirse en una herramienta que
            aporte valor real.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Por eso, antes de desarrollar, busco comprender a fondo cada
            proyecto: qué quiere lograr el negocio, quiénes son sus clientes y
            qué funciones realmente necesita. Mi objetivo es mantener un
            equilibrio entre calidad, funcionalidad y eficiencia, evitando
            complicar una solución más de lo necesario.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Mi formación continúa creciendo. Actualmente curso materias como
            Arquitecturas de Software y Sistemas de Base de Datos II, y seguiré
            preparándome en áreas como desarrollo avanzado de aplicaciones en
            Internet y negocios electrónicos. Para mí, aprender constantemente
            forma parte del trabajo.
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