import { supabase } from "@/lib/supabase";

export default async function CommunityQuestions() {
  const { data } = await supabase
    .from("preguntas")
    .select("id, nombre, pregunta, respuesta, creada_en")
    .not("respuesta", "is", null)
    .neq("respuesta", "")
    .order("creada_en", { ascending: false });

  if (!data || data.length === 0) return null;

  return (
    <div className="mt-14">
      <h3 className="text-2xl font-bold">Preguntas de visitantes</h3>
      <ul className="mt-6 space-y-6">
        {data.map((p) => (
          <li key={p.id} className="rounded-2xl border border-line bg-paper p-5">
            <p className="font-semibold">{p.pregunta}</p>
            <p className="mt-1 text-sm text-ink-muted">
              {p.nombre} ·{" "}
              {new Date(p.creada_en).toLocaleDateString("es-MX", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
            <p className="mt-3 leading-relaxed">{p.respuesta}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}