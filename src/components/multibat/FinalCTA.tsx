import { CTAButton } from "./CTAButton";
import { AlertTriangle } from "lucide-react";
import type { ReactNode } from "react";

const defaultHeadline = (
  <>
    Não arrisque a <span className="text-secondary-glow">segurança</span> do seu veículo.
  </>
);

const defaultDescription =
  "Temos técnicos de plantão agora prontos para te atender. Garanta sua bateria original com o melhor preço antes que o estoque da promoção acabe.";

interface FinalCTAProps {
  eyebrow?: string;
  headline?: ReactNode;
  description?: ReactNode;
  ctaLabel?: string;
}

export const FinalCTA = ({
  eyebrow = "Técnicos de plantão agora",
  headline,
  description = defaultDescription,
  ctaLabel = "SOLICITAR ORÇAMENTO AGORA",
}: FinalCTAProps) => (
  <section className="relative overflow-hidden gradient-urgency py-20 sm:py-28">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--secondary)) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--accent)) 0%, transparent 50%)" }} />
    <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-sm font-bold uppercase tracking-wider text-secondary-glow ring-1 ring-secondary/40 backdrop-blur-sm">
        <AlertTriangle className="h-4 w-4 animate-pulse" fill="currentColor" />
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl font-black uppercase leading-tight text-white sm:text-5xl md:text-6xl">
        {headline ?? defaultHeadline}
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">
        {description}
      </p>
      <div className="mt-10">
        <CTAButton size="xl" variant="whatsapp" trackingLabel="final-cta" label={ctaLabel} />
      </div>
    </div>
  </section>
);
