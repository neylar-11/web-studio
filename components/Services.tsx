import {
  Globe,
  Rocket,
  ShoppingCart,
  RefreshCw,
  QrCode,
  Wrench,
  Search,
  Code2,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Página web para tu negocio",
    text: "Sitio informativo con tus servicios, ubicación y contacto. Lo esencial para que te encuentren y confíen en ti.",
  },
  {
    icon: Rocket,
    title: "Landing page",
    text: "Una página enfocada en una promoción, campaña o servicio, diseñada para convertir visitas en clientes.",
  },
  {
    icon: ShoppingCart,
    title: "Tienda en línea",
    text: "Catálogo de productos con pedidos por WhatsApp o pagos en línea, según las necesidades de tu negocio.",
  },
  {
    icon: QrCode,
    title: "Menú o catálogo digital",
    text: "Menús con código QR para restaurantes y catálogos digitales para negocios, fáciles de consultar y actualizar.",
  },
  {
    icon: RefreshCw,
    title: "Rediseño de tu sitio actual",
    text: "Modernizo páginas antiguas para mejorar su apariencia, velocidad y funcionamiento en celulares.",
  },
  {
    icon: Search,
    title: "SEO y presencia en Google",
    text: "Configuración básica para mejorar la forma en que tu negocio aparece en buscadores y facilitar que tus clientes te encuentren.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento y actualizaciones",
    text: "Actualización de textos, imágenes, promociones y contenido para mantener tu sitio siempre al día.",
  },
  {
    icon: Code2,
    title: "Proyecto a la medida",
    text: "Sistemas de citas, reservaciones, paneles, herramientas internas y otras soluciones web adaptadas a tu idea.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 bg-paper py-24 text-ink">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
         

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            ¿Qué puedo hacer por tu negocio?
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Soluciones digitales claras y adaptadas a negocios que quieren
            crecer en internet, mejorar su presencia y conectar con más
            clientes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-line bg-card p-6 transition hover:border-accent/50"
            >
              <div className="silver-tile mb-5 inline-flex rounded-xl p-3 text-accent">
                <Icon size={26} />
              </div>

              <h3 className="text-lg font-bold">{title}</h3>

              <p className="mt-3 leading-relaxed text-ink-muted">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}