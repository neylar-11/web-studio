"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

/* El botón aparece hasta que el visitante pasa el inicio, para no tapar los botones principales. */
export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          key="whatsapp"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          href={`https://wa.me/${site.telefono}?text=${encodeURIComponent(
            "Hola Luis, quiero información sobre una página web."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribir por WhatsApp"
          className="glow-wa fixed bottom-4 right-4 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-105 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
        >
          {/* Logo de WhatsApp */}
          <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
            <path d="M16.04 3C9 3 3.27 8.7 3.27 15.72c0 2.25.6 4.45 1.72 6.38L3 29l7.1-1.86a12.8 12.8 0 0 0 5.93 1.47h.01c7.04 0 12.77-5.7 12.77-12.72S23.08 3 16.04 3Zm0 23.4h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.21 1.1 1.12-4.1-.25-.42a10.5 10.5 0 0 1-1.63-5.6c0-5.84 4.77-10.6 10.65-10.6 2.84 0 5.51 1.1 7.52 3.1a10.5 10.5 0 0 1 3.12 7.5c0 5.85-4.78 10.6-10.52 10.6Zm5.84-7.94c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.51-.16-.72.16-.21.32-.83 1.04-1.02 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58a9.6 9.6 0 0 1-1.78-2.2c-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.99-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.44 5.47 4.83.77.33 1.36.53 1.83.67.77.24 1.47.21 2.02.13.62-.09 1.89-.77 2.16-1.51.27-.75.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
