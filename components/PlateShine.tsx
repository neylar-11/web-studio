"use client";

/*
 * Reflejo de luz que cruza la placa de plata mientras el visitante baja,
 * como cuando se inclina una pieza de metal.
 */

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function PlateShine() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0.15, 0.85], ["-130%", "130%"]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
    >
      {!reduce && (
        <motion.div
          style={{ x }}
          className="absolute inset-y-[-20%] left-0 w-full rotate-12"
        >
          <div className="h-full w-full bg-[linear-gradient(100deg,transparent_30%,rgba(255,255,255,0.0)_38%,rgba(255,255,255,0.75)_50%,rgba(255,255,255,0.0)_62%,transparent_70%)] mix-blend-soft-light" />
        </motion.div>
      )}
    </div>
  );
}
