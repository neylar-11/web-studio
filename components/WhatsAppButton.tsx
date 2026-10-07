import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${site.telefono}?text=${encodeURIComponent(
        "Hola Luis, quiero información sobre una página web."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition hover:scale-105"
    >
      <MessageCircle size={28} />
    </a>
  );
}