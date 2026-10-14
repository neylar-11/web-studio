import {
  MonitorSmartphone,
  MessagesSquare,
  BadgeCheck,
  UserCheck,
  PenTool,
  SlidersHorizontal,
} from "lucide-react";

const benefits = [
  {
    icon: MonitorSmartphone,
    title: "Adaptada a cualquier dispositivo",
    text: "Tu sitio se diseña para ofrecer una experiencia clara y cómoda en celular, tablet y computadora.",
  },
  {
    icon: PenTool,
    title: "Diseño pensado para tu negocio",
    text: "La estructura, imagen y contenido se desarrollan de acuerdo con tu marca, tus servicios y lo que quieres comunicar.",
  },
  {
    icon: MessagesSquare,
    title: "Canales de contacto a tu medida",
    text: "Podemos integrar WhatsApp, redes sociales, formularios u otros medios de contacto según las necesidades de tu negocio.",
  },
  {
    icon: SlidersHorizontal,
    title: "Funciones según tus necesidades",
    text: "Cada proyecto puede incorporar las herramientas y funciones que realmente necesites, sin agregar elementos innecesarios.",
  },
  {
    icon: BadgeCheck,
    title: "Presencia profesional y confiable",
    text: "Cada detalle se trabaja para que tu negocio proyecte una imagen profesional y genere confianza desde el primer contacto.",
  },
  {
    icon: UserCheck,
    title: "Atención personalizada",
    text: "Trabajamos directamente durante el proceso para entender tu idea, resolver dudas y desarrollar una solución acorde a tus objetivos.",
  },
];

export default function WhyMe() {
  return (
    <section id="ventajas" className="scroll-mt-20 bg-card py-24 text-ink">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow-silver text-base font-semibold text-accent">
            Tecnología pensada para tu negocio
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Una solución construida alrededor de tus necesidades
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            No se trata solamente de crear una página bonita. Cada proyecto
            parte de entender tu negocio, tus objetivos y la experiencia que
            quieres ofrecer a tus clientes.
          </p>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article key={title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center silver-tile rounded-2xl text-accent">
                <Icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}