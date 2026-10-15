"use client";

import { useActionState } from "react";
import { enviarPregunta, type EstadoEnvio } from "@/app/actions";

const campo =
  "rounded-xl border border-line bg-card px-4 py-3 outline-none focus:border-accent";

export default function QuestionForm() {
  const [estado, accion, enviando] = useActionState<EstadoEnvio, FormData>(
    enviarPregunta,
    null
  );

  return (
    <form action={accion} className="mt-8 rounded-2xl border border-line bg-paper p-6">
      <h3 className="text-xl font-bold">¿Tienes otra pregunta?</h3>
      <p className="mt-1 text-ink-muted">
        Déjala aquí. La respondo y se publica para que le sirva a más personas.
      </p>

      <div className="mt-5 grid gap-4">
        {/* Campo trampa anti-spam: invisible para personas */}
        <input
          type="text"
          name="sitio_web"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <input
          name="nombre"
          aria-label="Tu nombre"
          placeholder="Tu nombre"
          required
          maxLength={60}
          className={campo}
        />
        <textarea
          name="pregunta"
          aria-label="Tu pregunta"
          placeholder="Escribe tu pregunta"
          required
          minLength={10}
          maxLength={500}
          rows={3}
          className={campo}
        />
      </div>

      <button
        type="submit"
        disabled={enviando}
        className="glow-cta mt-5 rounded-full bg-accent px-6 py-3 font-semibold text-white hover:bg-blue-500 disabled:opacity-60"
      >
        {enviando ? "Enviando..." : "Enviar pregunta"}
      </button>

      {estado && (
        <p
          className={`mt-4 text-sm font-medium ${
            estado.ok ? "text-green-600" : "text-red-600"
          }`}
        >
          {estado.mensaje}
        </p>
      )}
    </form>
  );
}