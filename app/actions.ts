"use server";

import { supabase } from "@/lib/supabase";

export type EstadoEnvio = { ok: boolean; mensaje: string } | null;

const MENSAJE_OK = "¡Gracias! Tu pregunta se publicará en cuanto la responda.";

export async function enviarPregunta(
  _estado: EstadoEnvio,
  formData: FormData
): Promise<EstadoEnvio> {
  const nombre = String(formData.get("nombre") ?? "").trim();
  const pregunta = String(formData.get("pregunta") ?? "").trim();
  const trampa = String(formData.get("sitio_web") ?? "");

  // Campo oculto: si trae algo, lo llenó un bot. Fingimos éxito y no guardamos.
  if (trampa) {
    return { ok: true, mensaje: MENSAJE_OK };
  }

  if (nombre.length < 2 || pregunta.length < 10) {
    return {
      ok: false,
      mensaje: "Escribe tu nombre y una pregunta un poco más completa.",
    };
  }
  if (nombre.length > 60 || pregunta.length > 500) {
    return { ok: false, mensaje: "El texto es demasiado largo." };
  }

  const { error } = await supabase
    .from("preguntas")
    .insert({ nombre, pregunta });

  if (error) {
    console.error("Error Supabase:", error.message);
    return { ok: false, mensaje: "No se pudo enviar. Intenta de nuevo." };
  }

  return { ok: true, mensaje: MENSAJE_OK };
}