import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, trackCta } from "@/lib/multibat";

export const StickyWhatsApp = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => trackCta("sticky-whatsapp")}
    aria-label="Falar no WhatsApp"
    className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full gradient-whatsapp text-white shadow-whatsapp transition-smooth hover:scale-110 animate-pulse-whatsapp sm:h-16 sm:w-16"
  >
    <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.2} fill="currentColor" fillOpacity={0.15} />
  </a>
);
