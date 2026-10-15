"use client";

/*
 * Ilustración del inicio: una página web y su versión en celular que se van
 * armando solas, en bucle. Es decorativa (aria-hidden) y se pausa cuando no
 * está en pantalla. Con animaciones desactivadas se muestra ya armada.
 */

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const LAST_STEP = 15; // pasos del ciclo (cada uno dura TICK ms)
const TICK = 620;

/* Cada bloque aparece cuando el ciclo llega a su paso */
function Block({
  at,
  step,
  className,
  delay = 0,
}: {
  at: number;
  step: number;
  className: string;
  delay?: number;
}) {
  const on = step >= at && step < LAST_STEP;
  return (
    <motion.div
      className={className}
      initial={false}
      animate={{ opacity: on ? 1 : 0, y: on ? 0 : 10, scale: on ? 1 : 0.96 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: on ? delay : 0 }}
    />
  );
}

export default function HeroMockup() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2 });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reduce || !inView) return;
    const id = setInterval(() => setTick((s) => (s >= LAST_STEP ? 0 : s + 1)), TICK);
    return () => clearInterval(id);
  }, [reduce, inView]);

  // Con animaciones desactivadas se muestra el estado final, sin cursor.
  const step = reduce ? 10 : tick;

  const cursorOn = !reduce && step >= 7 && step < 11;
  const clicked = step >= 8 && step < LAST_STEP;
  const message = step >= 9 && step < LAST_STEP;

  return (
    <div ref={ref} aria-hidden="true" className="relative mx-auto w-full max-w-[400px] select-none">
      {/* Flotación muy suave de todo el conjunto */}
      <div className="mockup-float relative pb-[12%] pr-[14%]">
        {/* ---------- Ventana de navegador ---------- */}
        <div className="silver-edge relative overflow-hidden rounded-2xl shadow-[0_30px_60px_-25px_rgba(0,0,0,0.8)] [--edge-bg:#0d1628]">
          {/* Barra superior */}
          <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2.5">
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="ml-3 h-4 flex-1 rounded-full bg-white/[0.07]" />
          </div>

          {/* Contenido que se arma */}
          <div className="space-y-3 p-4 sm:p-5">
            <div className="flex items-center justify-between">
              <Block at={1} step={step} className="h-2.5 w-14 rounded-full bg-accent/80" />
              <div className="flex gap-2">
                <Block at={1} step={step} delay={0.05} className="h-2 w-7 rounded-full bg-white/20" />
                <Block at={1} step={step} delay={0.1} className="h-2 w-7 rounded-full bg-white/20" />
                <Block at={1} step={step} delay={0.15} className="h-2 w-7 rounded-full bg-white/20" />
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <Block at={2} step={step} className="h-4 w-4/5 rounded-md bg-gradient-to-r from-silver-light/80 to-silver/40" />
              <Block at={3} step={step} className="h-4 w-3/5 rounded-md bg-gradient-to-r from-accent to-accent-2/70" />
              <Block at={3} step={step} delay={0.15} className="h-2 w-2/3 rounded-full bg-white/15" />
            </div>

            {/* Botón con cursor */}
            <div className="relative w-fit pt-1">
              <motion.div
                initial={false}
                animate={{
                  opacity: step >= 4 && step < LAST_STEP ? 1 : 0,
                  scale: step === 8 ? 0.9 : step >= 4 && step < LAST_STEP ? 1 : 0.9,
                }}
                transition={{ duration: 0.35 }}
                className="h-7 w-24 rounded-full bg-accent shadow-[0_6px_18px_-4px_rgba(59,130,246,0.9)]"
              />
              {/* Onda del clic */}
              {clicked && step === 8 && (
                <motion.span
                  initial={{ opacity: 0.6, scale: 0.6 }}
                  animate={{ opacity: 0, scale: 1.8 }}
                  transition={{ duration: 0.7 }}
                  className="absolute left-0 top-1 h-7 w-24 rounded-full border-2 border-accent"
                />
              )}
              {/* Cursor */}
              <motion.svg
                viewBox="0 0 24 24"
                className="absolute h-5 w-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                initial={false}
                animate={
                  cursorOn
                    ? { opacity: 1, left: 64, top: 18 }
                    : { opacity: 0, left: 180, top: 70 }
                }
                transition={{ duration: cursorOn ? 0.9 : 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <path d="M4 2l15 10-7 1.5L8.5 21z" fill="#fff" stroke="#0b1220" strokeWidth="1.2" />
              </motion.svg>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2">
              {[0, 1, 2].map((i) => (
                <Block
                  key={i}
                  at={5}
                  step={step}
                  delay={i * 0.12}
                  className="h-14 rounded-lg border border-white/10 bg-white/[0.06]"
                />
              ))}
            </div>
          </div>
        </div>

        {/* ---------- Celular ---------- */}
        <motion.div
          initial={false}
          animate={{
            opacity: step >= 6 && step < LAST_STEP ? 1 : 0,
            y: step >= 6 && step < LAST_STEP ? 0 : 24,
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 right-0 w-[36%]"
        >
          <div className="mockup-float-alt silver-edge relative aspect-[9/18] overflow-hidden rounded-[1.4rem] shadow-[0_25px_50px_-20px_rgba(0,0,0,0.9)] [--edge-bg:#0b1324]">
            <div className="mx-auto mt-2 h-1.5 w-10 rounded-full bg-white/20" />
            <div className="space-y-2 p-3 pt-4">
              <Block at={6} step={step} delay={0.2} className="h-2 w-10 rounded-full bg-accent/80" />
              <Block at={6} step={step} delay={0.3} className="mt-3 h-3 w-full rounded bg-gradient-to-r from-silver-light/80 to-silver/40" />
              <Block at={6} step={step} delay={0.4} className="h-3 w-3/4 rounded bg-gradient-to-r from-accent to-accent-2/70" />
              <Block at={6} step={step} delay={0.5} className="!mt-3 h-5 w-16 rounded-full bg-accent" />
              <Block at={6} step={step} delay={0.6} className="!mt-3 h-10 rounded-md border border-white/10 bg-white/[0.06]" />
              <Block at={6} step={step} delay={0.7} className="h-10 rounded-md border border-white/10 bg-white/[0.06]" />
            </div>

            {/* Mensaje que llega */}
            <motion.div
              initial={false}
              animate={{ opacity: message ? 1 : 0, y: message ? 0 : -16 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="absolute inset-x-1.5 top-5 flex items-center gap-1.5 rounded-xl bg-white/95 p-1.5 shadow-lg"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="#fff">
                  <path d="M4 4h16v12H7l-3 3z" />
                </svg>
              </span>
              <span className="min-w-0 leading-tight">
                <span className="block text-[9px] font-bold text-ink">Nuevo mensaje</span>
                <span className="block truncate text-[8px] text-ink-muted">Quiero información</span>
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
