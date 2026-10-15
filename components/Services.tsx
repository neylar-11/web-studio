import { Reveal, Cascade, CascadeItem } from "./Motion";
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
    text: "Sitio informativo con tus servicios, ubicación y contacto. Lo esencial para presentar tu negocio con claridad y facilitar que te contacten.",
  },
  {
    icon: Rocket,
    title: "Landing page",
    text: "Una página enfocada en una promoción, campaña o servicio, diseñada para llevar al visitante hacia una acción concreta.",
  },
  {
    icon: ShoppingCart,
    title: "Tienda en línea",
    text: "Catálogo de productos con pedidos por WhatsApp o pagos en línea, según lo que necesite tu negocio.",
  },
  {
    icon: QrCode,
    title: "Menú o catálogo digital",
    text: "Menús con código QR y catálogos digitales, fáciles de consultar y actualizar.",
  },
  {
    icon: RefreshCw,
    title: "Rediseño de tu sitio actual",
    text: "Tu página actual, con una imagen más moderna y adaptada a cualquier dispositivo.",
  },
  {
    icon: Search,
    title: "SEO y presencia en Google",
    text: "Configuración para mejorar la presencia de tu negocio en buscadores y facilitar que tus clientes lo encuentren.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento y actualizaciones",
    text: "Actualización de textos, imágenes, promociones y contenido cuando tu sitio lo necesite.",
  },
  {
    icon: Code2,
    title: "Proyecto a la medida",
    text: "Sistemas de citas, reservaciones, paneles y otras herramientas web adaptadas a tu idea.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 bg-card py-16 sm:py-24 text-ink">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            ¿Qué necesita tu negocio?
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Desde una página informativa hasta una solución a medida.
          </p>

          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 font-semibold text-accent">
            Cotización a la medida: pagas por lo que tu proyecto realmente necesita.
          </p>
        </Reveal>

        <Cascade className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }) => (
            <CascadeItem key={title} className="h-full">
              <article className="silver-edge-light h-full rounded-2xl p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-6">
                {/* En celular, ícono y título en la misma fila */}
                <div className="flex items-center gap-4 sm:block">
                  <div className="silver-tile inline-flex shrink-0 rounded-xl p-3 text-accent sm:mb-5">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-lg font-bold">{title}</h3>
                </div>

                <p className="mt-3 leading-relaxed text-ink-muted">
                  {text}
                </p>
              </article>
            </CascadeItem>
          ))}
        </Cascade>
      </div>
    </section>
  );
}