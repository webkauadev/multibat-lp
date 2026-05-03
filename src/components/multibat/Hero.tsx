import { CTAButton } from "./CTAButton";
import { Zap, ShieldCheck, Clock, Check } from "lucide-react";
import logo from "@/assets/multibat-logo.jpeg";
import mascoteHero from "@/assets/mascote-hero.png";

export const Hero = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#1a2a4a" }}
    >
      {/* Desktop/Tablet: flex row | Mobile: flex col */}
      <div className="mx-auto flex min-h-[auto] max-w-7xl flex-col md:min-h-[700px] md:flex-row md:items-center lg:min-h-[600px]">
        {/* ===== LEFT: Copy ===== */}
        <div className="relative z-10 w-full px-6 pb-8 pt-4 md:w-[60%] md:py-12 md:pl-8 md:pr-0 lg:w-[55%] lg:pl-12">
          {/* Top bar */}
          <header className="mb-8 flex items-center justify-between md:mb-10">
            <img
              src={logo}
              alt="Multibat Baterias"
              className="h-12 rounded-md bg-white/95 p-1.5 shadow-elevated sm:h-14"
            />
            <div className="hidden items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md ring-1 ring-white/20 md:flex">
              <Clock className="h-4 w-4 text-secondary-glow" />
              Atendimento 24h
            </div>
          </header>

          {/* Badge */}
          <div className="mb-6 inline-flex animate-fade-up items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold uppercase tracking-wider text-white shadow-cta">
            <Zap className="h-4 w-4" fill="currentColor" />
            Bateria acabou? Não fique parado!
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up font-display text-[28px] font-bold leading-[1.2] text-white sm:text-4xl lg:text-[48px]"
            style={{ animationDelay: "0.1s" }}
          >
            Bateria Nova com{" "}
            <span className="text-secondary-glow">
              Entrega e Instalação Grátis
            </span>{" "}
            em até 50 Minutos.
          </h1>

          {/* Subheadline */}
          <p
            className="mt-4 max-w-xl animate-fade-up text-sm leading-[1.6] text-white/90 sm:text-base"
            style={{ animationDelay: "0.2s" }}
          >
            As melhores marcas do mercado —{" "}
            <strong className="text-white">
              Moura, Heliar, Pioneiro e Maxfor
            </strong>{" "}
            — com o menor preço da região e garantia de fábrica. Levamos a
            bateria até você agora!
          </p>

          {/* CTA */}
          <div
            className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.4s" }}
          >
            <CTAButton
              size="xl"
              trackingLabel="hero-main"
              label="PEDIR MINHA BATERIA AGORA"
            />
          </div>

          <p
            className="mt-4 animate-fade-up text-[13px] text-white/80"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-accent-glow align-middle" />{" "}
            Atendimento imediato via WhatsApp
          </p>

          {/* Badges */}
          <div
            className="mt-8 flex animate-fade-up flex-wrap gap-3"
            style={{ animationDelay: "0.6s" }}
          >
            {[
              { icon: ShieldCheck, label: "Baterias Originais" },
              { icon: Clock, label: "Atendimento 24h" },
              { icon: Zap, label: "Melhor Preço Garantido" },
            ].map((b) => (
              <div
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white/70 backdrop-blur-md"
              >
                <Check
                  className="h-3.5 w-3.5 text-accent-glow"
                  strokeWidth={3}
                />
                {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* ===== RIGHT: Image with gradient ===== */}
        <div className="relative flex w-full items-center justify-center md:w-1/2 md:justify-end">
          {/* Image wrapper for overlay gradient */}
          <div className="relative w-full animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <img
              src={mascoteHero}
              alt="Mascote Multibat e dono - Profissionalismo e confiança"
              className="relative h-auto w-full object-contain"
              style={{
                maxHeight: "600px",
                borderRadius: "16px",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 100% 100% at 70% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "radial-gradient(ellipse 100% 100% at 70% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0) 100%)",
              }}
            />
            {/* Gradient overlay on left edge */}
            <div
              className="pointer-events-none absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(90deg, rgba(26,42,74,1) 0%, rgba(26,42,74,0.6) 20%, rgba(26,42,74,0) 40%)",
                borderRadius: "16px",
              }}
            />
            {/* Mobile: top gradient */}
            <div
              className="pointer-events-none absolute inset-0 md:hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(26,42,74,1) 0%, rgba(26,42,74,0.4) 15%, rgba(26,42,74,0) 30%)",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
