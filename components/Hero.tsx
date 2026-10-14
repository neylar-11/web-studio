"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-bg pt-16 text-text"
    >
      {/* Iluminación tecnológica de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 30%, rgba(59,130,246,0.28), transparent 70%), radial-gradient(40% 40% at 20% 80%, rgba(34,211,238,0.15), transparent 70%), radial-gradient(30% 25% at 85% 10%, rgba(213,219,227,0.08), transparent 70%)",
        }}
      />

      {/* Cuadrícula decorativa */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Contenido principal */}
      <div className="relative mx-auto w-full max-w-6xl px-5 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Etiqueta superior */}
          <p className="silver-edge mb-5 inline-block rounded-full px-4 py-1.5 text-sm font-medium text-silver-light [--edge-bg:#0f1a30]">
            Desarrollo web y soluciones digitales
          </p>

          {/* Título principal */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-chrome">Impulsa tu negocio con</span>{" "}
            <span className="text-accent">
              tecnología e innovación.
            </span>
          </h1>

          {/* Descripción */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Diseño y desarrollo páginas web, tiendas en línea y
            soluciones digitales modernas que ayudan a los negocios
            a crecer, conectar con nuevos clientes y destacar
            en internet.
          </p>

          {/* Botones */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-white shadow-lg shadow-accent/30 transition hover:bg-blue-500"
            >
              <MessageCircle size={20} />
              Solicitar cotización
            </a>

            <a
              href="#portafolio"
              className="inline-flex items-center justify-center gap-2 silver-edge rounded-full px-7 py-4 text-base font-semibold text-white transition [--edge-bg:var(--color-bg)] hover:[--edge-bg:#131d33]"
            >
              Ver proyectos
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}