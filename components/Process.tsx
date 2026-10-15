"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { Reveal, SlideIn } from "./Motion";
import {
  MessageSquare,
  ClipboardList,
  Code2,
  CheckCircle2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tu idea",
    text: "Definimos qué quieres lograr, qué necesita tu proyecto y qué información debemos tener clara antes de comenzar.",
    result: "Objetivos claros",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "La propuesta",
    text: "Recibes una propuesta con el alcance, funciones, tiempos y cotización de tu proyecto.",
    result: "Propuesta y cotización",
  },
  {
    number: "03",
    icon: Code2,
    title: "Desarrollo",
    text: "Tu página se construye y recibes avances para revisar.",
    result: "Avances para revisar",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Revisión",
    text: "Se hacen los ajustes incluidos hasta que todo funcione como se acordó.",
    result: "Proyecto aprobado",
  },
  {
    number: "05",
    icon: Rocket,
    title: "Entrega",
    text: "Tu página se publica, te explico cómo funciona y revisamos opciones de soporte.",
    result: "Proyecto entregado",
  },
];

export default function Process() {
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);
  const numberRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [track, setTrack] = useState({ top: 24, height: 0 });
  const [reached, setReached] = useState(0); // cuántos números ya tocó el punto
  const progress = useSpring(0, { stiffness: 140, damping: 26, mass: 0.4 });
  const dotTop = useTransform(progress, (v) => `${v * 100}%`);

  // Mide dónde quedan los números para que la línea vaya del primero al último.
  useEffect(() => {
    const measure = () => {
      const list = listRef.current;
      const nums = numberRefs.current.filter(Boolean) as HTMLDivElement[];
      if (!list || nums.length < 2) return;
      const base = list.getBoundingClientRect().top;
      const first = nums[0].getBoundingClientRect();
      const last = nums[nums.length - 1].getBoundingClientRect();
      const top = first.top + first.height / 2 - base;
      const bottom = last.top + last.height / 2 - base;
      setTrack({ top, height: bottom - top });
    };
    measure();
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    if (listRef.current) ro.observe(listRef.current);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  // Mientras el visitante baja, el punto avanza y los números se encienden.
  useEffect(() => {
    if (reduce) {
      progress.jump(1);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const list = listRef.current;
      if (!list || track.height <= 0) return;
      const anchor = window.innerHeight * 0.6;
      const start = list.getBoundingClientRect().top + track.top;
      const p = Math.min(1, Math.max(0, (anchor - start) / track.height));
      progress.set(p);
      const nums = numberRefs.current.filter(Boolean) as HTMLDivElement[];
      let count = 0;
      for (const n of nums) {
        const r = n.getBoundingClientRect();
        if (r.top + r.height / 2 <= anchor + 2) count++;
      }
      setReached(count);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduce, track, progress]);

  return (
    <section
      id="proceso"
      className="scroll-mt-20 bg-card py-16 sm:py-24 text-ink"
    >
      <div className="mx-auto max-w-6xl px-5">
        {/* Encabezado */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow-silver text-sm font-semibold text-accent">
            El proceso
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Así toma forma tu proyecto
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Cinco pasos claros, de la primera plática a la entrega.
          </p>
        </Reveal>

        {/* Línea de tiempo */}
        <ol ref={listRef} className="relative mx-auto mt-12 max-w-4xl space-y-5 sm:mt-16 md:space-y-0">
          {/* Riel de la línea */}
          <div
            aria-hidden="true"
            className="absolute left-6 w-[3px] -translate-x-1/2 rounded-full bg-silver/25 md:left-1/2"
            style={{ top: track.top, height: track.height }}
          >
            {/* Parte que se va llenando */}
            <motion.div
              className="absolute inset-x-0 top-0 h-full origin-top rounded-full bg-gradient-to-b from-accent to-accent-2"
              style={{ scaleY: progress }}
            />
            {/* Punto brillante que baja */}
            {!reduce && (
              <motion.div
                className="absolute left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white ring-4 ring-accent shadow-[0_0_18px_4px_rgba(59,130,246,0.65)]"
                style={{ top: dotTop }}
              />
            )}
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;
            const lit = reduce || index < reached;

            return (
              <li
                key={step.number}
                className={`relative grid grid-cols-[48px_minmax(0,1fr)] gap-4 md:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] md:gap-8 ${
                  index > 0 ? "md:-mt-20" : ""
                }`}
              >
                {/* Número */}
                <div className="relative z-10 col-start-1 row-start-1 flex justify-center md:col-start-2">
                  <div
                    ref={(el) => {
                      numberRefs.current[index] = el;
                    }}
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold ring-4 ring-card transition-all duration-500 ${
                      lit
                        ? "bg-accent text-white shadow-[0_0_22px_-2px_rgba(59,130,246,0.75)]"
                        : "bg-white text-silver outline outline-2 outline-silver/50"
                    }`}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Tarjeta */}
                <SlideIn
                  from={isLeft ? "left" : "right"}
                  className={`col-start-2 row-start-1 min-w-0 ${
                    isLeft ? "md:col-start-1" : "md:col-start-3"
                  }`}
                >
                  <article
                    className={`silver-edge-light rounded-2xl p-5 shadow-sm transition-all duration-500 md:p-6 ${
                      lit ? "shadow-md" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        size={22}
                        className={`shrink-0 transition-colors duration-500 ${
                          lit ? "text-accent" : "text-silver"
                        }`}
                        aria-hidden="true"
                      />
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>

                    <p className="mt-3 leading-relaxed text-ink-muted">
                      {step.text}
                    </p>

                    <div className="mt-4 border-t border-line pt-3">
                      <p className="text-sm font-medium text-ink-muted">
                        Resultado
                      </p>
                      <p className="mt-0.5 font-semibold">{step.result}</p>
                    </div>
                  </article>
                </SlideIn>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
