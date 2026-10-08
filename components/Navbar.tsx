"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#ventajas", label: "Compromiso" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "Preguntas" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
                {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-3 text-lg font-extrabold tracking-tight text-text"
        >
          <img
            src="/logo.png"
            alt="Logo de Luis Obed"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg"
          />
          <span>
            web<span className="text-accent">studio</span>
          </span>
        </a>

        {/* Menú de escritorio */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted transition-colors duration-200 hover:text-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón escritorio */}
        <a
          href="#contacto"
          className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-accent/25 md:inline-flex"
        >
          Cotizar mi proyecto
        </a>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center justify-center rounded-lg p-2 text-text transition hover:bg-white/5 md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-mobile"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menú móvil */}
      {open && (
        <div
          id="menu-mobile"
          className="border-t border-white/10 bg-bg/95 px-5 py-5 backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-muted transition-colors hover:bg-white/5 hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li className="mt-3">
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-accent px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-500"
              >
                Cotizar mi proyecto
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}