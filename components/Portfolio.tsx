import { Reveal, Cascade, CascadeItem } from "./Motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "Restaurante",
    badge: "Proyecto demo",
    title: "Taquería La Esquina",
    description:
      "El menú en papel se desactualizaba constantemente. La propuesta digital lo centraliza, se consulta desde cualquier dispositivo y permite pedir directamente.",
    tags: ["Menú digital", "QR", "Pedidos"],
    url: "",
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
  },
  {
    category: "Despacho contable",
    badge: "Proyecto demo",
    title: "Ramírez & Asociados",
    description:
      "Un despacho necesitaba presentar sus servicios de forma más clara y profesional. La propuesta organiza la información y facilita el contacto.",
    tags: ["Sitio corporativo", "Servicios", "Contacto"],
    url: "",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
  },
  {
    category: "Tienda en línea",
    badge: "Proyecto demo",
    title: "Artesanías Mezquite",
    description:
      "Las ventas dependían de mensajes en redes sociales. La propuesta reúne productos, categorías y pedidos en una compra más organizada.",
    tags: ["Catálogo", "Carrito", "Pedidos"],
    url: "",
    gradient: "from-violet-500/20 via-blue-500/10 to-transparent",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portafolio"
      className="scroll-mt-20 bg-bg py-16 sm:py-24 text-text"
    >
      <div className="mx-auto max-w-6xl px-5">
        {/* Encabezado */}
        <Reveal className="max-w-3xl">
          <p className="eyebrow-silver text-sm font-semibold text-accent-2">
            Portafolio
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Algunos proyectos
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-muted">
            Ejemplos de soluciones para distintos tipos de negocio.
          </p>
        </Reveal>

        {/* Proyectos */}
        {/* En celular las tarjetas se deslizan de lado; en computadora, 3 columnas */}
        <Cascade className="no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mt-14 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
          {projects.map((project) => (
            <CascadeItem
              key={project.title}
              className="w-[86%] shrink-0 snap-center sm:w-[62%] lg:w-auto"
            >
            <article className="silver-edge group h-full overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              {/* Vista previa temporal */}
              <div
                className={`relative h-64 bg-gradient-to-br ${project.gradient}`}
              >
                <div className="absolute inset-5 rounded-2xl border border-white/10 bg-bg/80 p-5 shadow-2xl backdrop-blur-sm">
                  {/* Barra superior del mockup */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    </div>
                  </div>

                  {/* Contenido simulado */}
                  <div className="mt-7 h-4 w-1/2 rounded-full bg-white/15" />
                  <div className="mt-3 h-3 w-3/4 rounded-full bg-white/10" />
                  <div className="mt-2 h-3 w-2/3 rounded-full bg-white/10" />

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="h-20 rounded-xl border border-white/5 bg-white/[0.06]" />
                    <div className="h-20 rounded-xl border border-white/5 bg-white/[0.06]" />
                  </div>
                </div>
              </div>

              {/* Información */}
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-semibold text-accent-2">
                    {project.category}
                  </p>

                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-muted">
                    {project.badge}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 leading-relaxed text-muted">
                  {project.description}
                </p>

                {/* Etiquetas */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Enlace o estado */}
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-text transition-colors hover:text-accent-2"
                  >
                    Ver proyecto
                    <ArrowUpRight size={18} />
                  </a>
                ) : (
                  <p className="mt-6 text-sm font-medium text-muted">
                    Próximamente
                  </p>
                )}
              </div>
            </article>
            </CascadeItem>
          ))}
        </Cascade>
      </div>
    </section>
  );
}