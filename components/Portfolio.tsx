import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "Restaurante",
    badge: "Proyecto demo",
    title: "Taquería La Esquina",
    description:
      "El menú en papel se desactualizaba constantemente. La propuesta digital centraliza el menú, facilita su consulta desde cualquier dispositivo y permite contacto directo para pedidos.",
    tags: ["Menú digital", "QR", "Pedidos"],
    url: "",
    gradient: "from-orange-500/20 via-red-500/10 to-transparent",
  },
  {
    category: "Despacho contable",
    badge: "Proyecto demo",
    title: "Ramírez & Asociados",
    description:
      "Un despacho necesitaba presentar sus servicios de forma más clara y profesional. La propuesta organiza la información y facilita el contacto con nuevos clientes.",
    tags: ["Sitio corporativo", "Servicios", "Contacto"],
    url: "",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
  },
  {
    category: "Tienda en línea",
    badge: "Proyecto demo",
    title: "Artesanías Mezquite",
    description:
      "Las ventas dependían principalmente de mensajes en redes sociales. La propuesta reúne productos, categorías y pedidos en una experiencia de compra más organizada.",
    tags: ["Catálogo", "Carrito", "Pedidos"],
    url: "",
    gradient: "from-violet-500/20 via-blue-500/10 to-transparent",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portafolio"
      className="scroll-mt-20 bg-bg py-24 text-text"
    >
      <div className="mx-auto max-w-6xl px-5">
        {/* Encabezado */}
        <div className="max-w-3xl">
          <p className="eyebrow-silver text-sm font-semibold text-accent-2">
            Portafolio
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Algunos proyectos
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-muted">
            Proyectos demostrativos creados para mostrar distintas soluciones web
            y explorar necesidades comunes de diferentes tipos de negocio.
          </p>
        </div>

        {/* Proyectos */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="silver-edge group overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
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

                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-medium text-muted">
                      Demo
                    </span>
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
          ))}
        </div>
      </div>
    </section>
  );
}