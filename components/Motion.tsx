"use client";

/*
 * Animaciones ligadas al scroll.
 * El movimiento sigue al dedo (o a la rueda del mouse): al bajar, el elemento
 * entra; si regresas hacia arriba, se retira solo cuando ya está llegando al
 * borde inferior de la pantalla, nunca mientras se está leyendo.
 *
 *  - Reveal:      bloques de texto que suben.
 *  - Words:       títulos que aparecen palabra por palabra.
 *  - SlideIn:     elementos que entran desde un lado.
 *  - CascadeItem: tarjetas de una cuadrícula. En celular cada grupo tiene su
 *                 propia entrada (alternada, levantándose o subiendo).
 *
 * Si el visitante tiene desactivadas las animaciones, todo se muestra fijo.
 */

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* Suavizado del movimiento para que no se sienta brusco */
const SPRING = { stiffness: 170, damping: 28, mass: 0.35 };

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(max-width: 639px)");
    const update = () => setMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return mobile;
}

/*
 * Progreso de entrada: 0 cuando el borde superior del elemento apenas asoma
 * por abajo, 1 cuando ya subió hasta el 75 % de la pantalla.
 */
function useEnterProgress(ref: React.RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.75"],
  });
  return useSpring(scrollYProgress, SPRING);
}

type Props = { children: ReactNode; className?: string; delay?: number };

/* ---------- Bloques de texto ---------- */
export function Reveal({ children, className, delay = 0 }: Props) {
  const reduce = useReducedMotion();
  const mobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const p = useEnterProgress(ref);
  const start = Math.min(delay, 0.4);
  const y = useTransform(p, [start, 1], [mobile ? 56 : 36, 0]);
  const opacity = useTransform(p, [start, start + 0.55], [0, 1]);

  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div ref={ref} className={className} style={{ y, opacity }}>
      {children}
    </motion.div>
  );
}

/* ---------- Títulos palabra por palabra ---------- */
function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const y = useTransform(progress, range, ["105%", "0%"]);
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
      <motion.span className="inline-block" style={{ y, opacity }}>
        {word}
      </motion.span>
    </span>
  );
}

/*
 * `lines`: cada elemento es un renglón. En computadora cada renglón va en su
 * propia línea; en celular el texto fluye normalmente.
 */
export function Words({
  lines,
  className,
}: {
  lines: string[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLHeadingElement>(null);
  const p = useEnterProgress(ref);
  const total = lines.join(" ").split(" ").length;
  const step = Math.min(0.09, 0.5 / total);
  let index = 0;

  return (
    <h2 ref={ref} className={className}>
      {lines.map((line, li) => (
        <span key={li} className="md:block">
          {line.split(" ").map((word, wi) => {
            const i = index++;
            const last = wi === line.split(" ").length - 1;
            return (
              <span key={wi}>
                {reduce ? (
                  word
                ) : (
                  <Word
                    word={word}
                    progress={p}
                    range={[i * step, i * step + 0.5]}
                  />
                )}
                {!last || li < lines.length - 1 ? " " : ""}
              </span>
            );
          })}
        </span>
      ))}
    </h2>
  );
}

/* ---------- Entradas laterales ---------- */
export function SlideIn({
  children,
  className,
  from = "left",
  mobileFrom,
  delay = 0,
}: Props & { from?: "left" | "right"; mobileFrom?: "left" | "right" }) {
  const reduce = useReducedMotion();
  const mobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const p = useEnterProgress(ref);
  const side = mobile ? (mobileFrom ?? from) : from;
  const distance = mobile ? 70 : 110;
  const start = Math.min(delay, 0.4);
  const x = useTransform(p, [start, 1], [side === "left" ? -distance : distance, 0]);
  const opacity = useTransform(p, [start, start + 0.6], [0, 1]);
  const scale = useTransform(p, [start, 1], [mobile ? 0.94 : 0.97, 1]);

  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div ref={ref} className={className} style={{ x, opacity, scale }}>
      {children}
    </motion.div>
  );
}

/* ---------- Tarjetas en cuadrícula ---------- */
export function Cascade({ children, className }: Props) {
  return <div className={className}>{children}</div>;
}

type CascadeVariant = "alternate" | "tilt" | "rise";

export function CascadeItem({
  children,
  className,
  index = 0,
  columns = 3,
  mobile: mobileVariant = "rise",
}: Props & { index?: number; columns?: number; mobile?: CascadeVariant }) {
  const reduce = useReducedMotion();
  const mobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const p = useEnterProgress(ref);

  // En computadora las tarjetas de una misma fila entran una tras otra.
  // En celular (una columna) el propio scroll las va escalonando; en un
  // carrusel horizontal se escalonan por posición.
  const lag = mobile
    ? mobileVariant === "rise"
      ? Math.min(index, 2) * 0.14
      : 0
    : (index % columns) * 0.1;
  const range: [number, number] = [lag, lag + 0.75];

  const fromX =
    mobile && mobileVariant === "alternate" ? (index % 2 === 0 ? -80 : 80) : 0;
  const fromY = mobile ? (mobileVariant === "alternate" ? 16 : 48) : 44;
  const fromRotateX = mobile && mobileVariant === "tilt" ? 38 : 0;
  const fromScale = mobile ? 0.92 : 0.94;

  const x = useTransform(p, range, [fromX, 0]);
  const y = useTransform(p, range, [fromY, 0]);
  const rotateX = useTransform(p, range, [fromRotateX, 0]);
  const scale = useTransform(p, range, [fromScale, 1]);
  const opacity = useTransform(p, [lag, lag + 0.5], [0, 1]);

  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        x,
        y,
        rotateX,
        scale,
        opacity,
        transformPerspective: 900,
        transformOrigin: "50% 100%",
      }}
    >
      {children}
    </motion.div>
  );
}
