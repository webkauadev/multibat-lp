import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL, trackCta } from "@/lib/multibat";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  label?: string;
  variant?: "orange" | "whatsapp";
  size?: "lg" | "xl";
  className?: string;
  trackingLabel?: string;
  showIcon?: boolean;
}

export const CTAButton = ({
  label = "PEDIR MINHA BATERIA AGORA",
  variant = "orange",
  size = "lg",
  className,
  trackingLabel = "cta-default",
  showIcon = true,
}: CTAButtonProps) => {
  const base = "inline-flex items-center justify-center gap-3 font-display font-bold uppercase tracking-wide text-white rounded-xl transition-smooth hover:scale-[1.02] active:scale-[0.99]";
  const sizes = {
    lg: "px-7 py-4 text-base sm:text-lg",
    xl: "px-8 py-5 text-lg sm:text-xl",
  };
  const variants = {
    orange: "gradient-cta shadow-cta animate-pulse-cta",
    whatsapp: "gradient-whatsapp shadow-whatsapp animate-pulse-whatsapp",
  };

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCta(trackingLabel)}
      className={cn(base, sizes[size], variants[variant], className)}
      aria-label={label}
    >
      {showIcon && <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} />}
      <span>{label}</span>
    </a>
  );
};
