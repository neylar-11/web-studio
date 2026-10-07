"use client";

import { site } from "@/data/site";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contacto", label: "Cotización" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-12 text-text">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-extrabold">
            web<span className="text-accent">studio</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            Páginas web y tiendas en línea para negocios que quieren crecer.
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted transition hover:text-text">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="mx-auto mt-10 max-w-6xl px-5 text-xs text-muted">
        © {new Date().getFullYear()} {site.autor}. Todos los derechos reservados.
      </p>
    </footer>
  );
}