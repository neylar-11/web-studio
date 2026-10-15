import { SlideIn, Words } from "./Motion";
import PlateShine from "./PlateShine";
import {
  Code2,
  Database,
  Network,
  ShieldCheck,
  Layers3,
  Target,
} from "lucide-react";


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
    <section id="sobre-mi" className="scroll-mt-20 bg-card py-16 sm:py-24 text-ink">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[2fr_3fr] lg:gap-20">
        {/* Tarjeta visual: placa de plata */}
        <SlideIn from="left">
        <div className="silver-plate relative overflow-hidden rounded-3xl p-8 text-ink">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 50% at 15% 10%, rgba(255,255,255,0.75), transparent 70%), radial-gradient(55% 50% at 95% 95%, rgba(59,130,246,0.2), transparent 70%)",
            }}
          />

          <PlateShine />

          <div className="relative">
            <p className="text-sm font-semibold text-accent">
              Ingeniería en Software · UAZ
            </p>

            <h3 className="mt-4 text-3xl font-extrabold leading-tight text-ink">
              Luis Obed
              <br />
              Aranda Robles
            </h3>

            <p className="mt-3 text-sm font-medium text-ink-muted">Desarrollador web</p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {areas.map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="flex items-center gap-2 rounded-xl border border-white/80 bg-white/55 p-3 text-sm font-medium text-ink shadow-sm"
                >
                  <Icon size={17} className="shrink-0 text-accent" />
                  {title}
                </div>
              ))}
            </div>
          </div>
        </div>

        </SlideIn>

        {/* Contenido */}
        <SlideIn from="right" delay={0.1}>
          <Words
            lines={["Hola, soy Obed"]}
            className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
          />

          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            Mi formación en Ingeniería en Software en la Universidad Autónoma
            de Zacatecas me ha dado una base técnica para desarrollar
            soluciones web. Me dedico al desarrollo web porque una buena
            página puede cambiar la forma en que un negocio se presenta y
            conecta con sus clientes.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-ink-muted">
            Antes de crear tu página, busco entender qué quieres lograr, a
            quién quieres llegar y qué necesita realmente tu proyecto. Así
            puedo construir una solución clara, funcional y sin
            complicaciones innecesarias.
          </p>

          <blockquote className="mt-6 border-l-2 border-silver pl-5 text-lg leading-relaxed text-ink">
            Zacatecas es tierra de plata, y la plata se trabaja con paciencia
            hasta revelar su brillo. De esa idea nace{" "}
            <span className="font-semibold">
              i<span className="text-accent">z</span>t<span className="text-accent">ac</span>
            </span>
            , inspirado en la expresión náhuatl{" "}
            <em className="font-medium">iztac teocuitlatl</em>,
            utilizada para referirse a la plata. Cada sitio se construye con
            detalle hasta convertirse en una presencia digital con identidad
            propia, hecha para destacar.
          </blockquote>
        </SlideIn>
      </div>
    </section>
  );
}