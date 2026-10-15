"use client";

/*
 * Animaciones al deslizar. Son tres, cada una con un uso fijo:
 *  - Reveal:   títulos y textos que suben suavemente.
 *  - Cascade:  grupos de tarjetas que aparecen una tras otra.
 *  - SlideIn:  elementos que entran desde un lado (Sobre mí).
 * En celular el movimiento es un poco más marcado.
 * Si el visitante tiene desactivadas las animaciones, todo se muestra fijo.
 */

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

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

type Props = { children: ReactNode; className?: string; delay?: number };

export function Reveal({ children, className, delay = 0 }: Props) {
  const reduce = useReducedMotion();
  const mobile = useIsMobile();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: mobile ? 36 : 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: mobile ? 0.75 : 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Cascade({ children, className }: Props) {
  const reduce = useReducedMotion();
  const mobile = useIsMobile();
  if (reduce) return <div className={className}>{children}</div>;
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: mobile ? 0.12 : 0.08 } },
  };
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
    >
      {children}
    </motion.div>
  );
}

export function CascadeItem({ children, className }: Props) {
  const reduce = useReducedMotion();
  const mobile = useIsMobile();
  if (reduce) return <div className={className}>{children}</div>;
  const item: Variants = {
    hidden: { opacity: 0, y: mobile ? 32 : 24, scale: 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: mobile ? 0.65 : 0.55, ease: EASE },
    },
  };
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}

export function SlideIn({
  children,
  className,
  from = "left",
  delay = 0,
}: Props & { from?: "left" | "right" }) {
  const reduce = useReducedMotion();
  const mobile = useIsMobile();
  if (reduce) return <div className={className}>{children}</div>;
  const initial = mobile
    ? { opacity: 0, y: 28, scale: from === "left" ? 0.94 : 1 }
    : { opacity: 0, x: from === "left" ? -48 : 48 };
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
