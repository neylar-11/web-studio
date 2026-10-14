"use client";

import { useState } from "react";
import { MessageCircle, Mail, Phone } from "lucide-react";
import { site } from "@/data/site";

const campo =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-text outline-none placeholder:text-muted focus:border-accent";

export default function Contact() {
  const [nombre, setNombre] = useState("");
  const [negocio, setNegocio] = useState("");
  const [tipo, setTipo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [medio, setMedio] = useState<"whatsapp" | "correo">("whatsapp");

  function armarMensaje() {
    return [
      "Solicitud de cotización",
      "",
      `Nombre: ${nombre}`,
      negocio ? `Negocio: ${negocio}` : null,
      `Necesito: ${tipo}`,
      "",
      mensaje,
    ]
      .filter((l) => l !== null)
      .join("\n");
  }

  function enviar(e: React.FormEvent) {
    e.preventDefault();
    const texto = armarMensaje();

    if (medio === "whatsapp") {
      window.open(
        `https://wa.me/${site.telefono}?text=${encodeURIComponent(texto)}`,
        "_blank"
      );
    } else {
      window.location.href = `mailto:${site.correo}?subject=${encodeURIComponent(
        "Solicitud de cotización"
      )}&body=${encodeURIComponent(texto)}`;
    }
  }

  return (
    <section
      id="contacto"
      className="relative scroll-mt-20 overflow-hidden bg-bg py-24 text-text"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 20% 40%, rgba(59,130,246,0.22), transparent 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-2 lg:gap-20">
        {/* Texto y accesos directos */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Cada negocio es distinto. Tu cotización también.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Cuéntame qué necesitas y te envío una propuesta clara, con alcance,
            tiempos y costo. Sin compromiso.
          </p>

          <p className="mt-10 text-sm font-semibold text-muted">
            ¿Prefieres escribirme directo?
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`https://wa.me/${site.telefono}?text=${encodeURIComponent(
                "Hola Luis, quiero cotizar una página web."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-border bg-surface/60 px-5 py-4 transition hover:border-accent/60"
            >
              <MessageCircle className="text-accent" />
              <span>
                <span className="block font-semibold">WhatsApp</span>
                <span className="text-sm text-muted">Mensaje, audio o llamada</span>
              </span>
            </a>
            <a
              href={`tel:+${site.telefono}`}
              className="inline-flex items-center gap-3 rounded-2xl border border-border bg-surface/60 px-5 py-4 transition hover:border-accent/60"
            >
              <Phone className="text-accent" />
              <span>
                <span className="block font-semibold">Llamar</span>
                <span className="text-sm text-muted">{site.telVisible}</span>
              </span>
            </a>
            <a
              href={`mailto:${site.correo}`}
              className="inline-flex items-center gap-3 rounded-2xl border border-border bg-surface/60 px-5 py-4 transition hover:border-accent/60"
            >
              <Mail className="text-accent" />
              <span>
                <span className="block font-semibold">Correo</span>
                <span className="text-sm text-muted">{site.correo}</span>
              </span>
            </a>
          </div>
        </div>

        {/* Formulario que arma el mensaje */}
        <form
          onSubmit={enviar}
          className="silver-edge grid gap-4 rounded-3xl p-6 sm:p-8"
        >
          <div>
            <h3 className="text-xl font-bold">Cuéntame de tu proyecto</h3>
            <p className="mt-1 text-muted">
              Con esto preparo el mensaje y tú solo lo envías.
            </p>
          </div>

          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            aria-label="Tu nombre"
            placeholder="Tu nombre"
            required
            maxLength={60}
            className={campo}
          />
          <input
            value={negocio}
            onChange={(e) => setNegocio(e.target.value)}
            aria-label="Nombre de tu negocio"
            placeholder="Nombre de tu negocio (opcional)"
            maxLength={80}
            className={campo}
          />
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            aria-label="Qué necesitas"
            required
            className={campo}
          >
            <option value="" disabled>¿Qué necesitas?</option>
            <option>Página web para mi negocio</option>
            <option>Tienda en línea</option>
            <option>Rediseño de mi página actual</option>
            <option>Otro proyecto</option>
          </select>
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            aria-label="Descripción de tu proyecto"
            placeholder="Describe brevemente tu negocio y lo que tienes en mente"
            required
            minLength={10}
            maxLength={1000}
            rows={4}
            className={campo}
          />

          <fieldset className="grid grid-cols-2 gap-3">
            <legend className="mb-2 text-sm font-semibold text-muted">
              ¿Por dónde lo enviamos?
            </legend>
            {(["whatsapp", "correo"] as const).map((m) => (
              <label
                key={m}
                className={`flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-3 font-medium transition ${
                  medio === m
                    ? "border-accent bg-accent/15 text-text"
                    : "border-border text-muted hover:border-accent/50"
                }`}
              >
                <input
                  type="radio"
                  name="medio"
                  value={m}
                  checked={medio === m}
                  onChange={() => setMedio(m)}
                  className="sr-only"
                />
                {m === "whatsapp" ? <MessageCircle size={18} /> : <Mail size={18} />}
                {m === "whatsapp" ? "WhatsApp" : "Correo"}
              </label>
            ))}
          </fieldset>

          <button
            type="submit"
            className="mt-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
          >
            {medio === "whatsapp" ? "Abrir en WhatsApp" : "Abrir en mi correo"}
          </button>
        </form>
      </div>
    </section>
  );
}