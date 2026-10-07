"use client";

import { useActionState } from "react";
import { enviarPregunta, type EstadoEnvio } from "@/app/actions";

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
        <input
          name="nombre"
          placeholder="Tu nombre"
          required
          maxLength={60}
          className="rounded-xl border border-line bg-card px-4 py-3 outline-none focus:border-accent"
        />
        <textarea
          name="pregunta"
          placeholder="Escribe tu pregunta"
          required
          minLength={10}
          maxLength={500}
          rows={3}
          className="rounded-xl border border-line bg-card px-4 py-3 outline-none focus:border-accent"
        />
      </div>

      <button
        type="submit"
        disabled={enviando}
        className="mt-5 rounded-full bg-accent px-6 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:opacity-60"
      >
        {enviando ? "Enviando..." : "Enviar pregunta"}
      </button>

      {estado && (
        <p className={`mt-4 text-sm font-medium ${estado.ok ? "text-green-600" : "text-red-600"}`}>
          {estado.mensaje}
        </p>
      )}
    </form>
  );
}