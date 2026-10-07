import { Suspense } from "react";
import { ChevronDown } from "lucide-react";
import { faq } from "@/data/faq";
import CommunityQuestions from "./CommunityQuestions";
import QuestionForm from "./QuestionForm";

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 bg-card py-24 text-ink">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Preguntas frecuentes
        </h2>
        <p className="mt-4 text-lg text-ink-muted">
          Las dudas más comunes antes de empezar un proyecto.
        </p>

        {/* Preguntas fijas */}
        <div className="mt-10 divide-y divide-line border-y border-line">
          {faq.map(({ question, answer }) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                {question}
                <ChevronDown
                  size={22}
                  className="shrink-0 text-accent transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="mt-3 leading-relaxed text-ink-muted">{answer}</p>
            </details>
          ))}
        </div>

        {/* Preguntas de visitantes (desde Supabase) */}
        <Suspense fallback={null}>
          <CommunityQuestions />
        </Suspense>

        {/* Formulario para enviar una pregunta */}
        <QuestionForm />
      </div>
    </section>
  );
}