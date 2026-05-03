import { CTAButton } from "./CTAButton";
import { Zap, ShieldCheck, Clock, Check } from "lucide-react";
import logo from "@/assets/multibat-logo.jpeg";
import mascoteHero from "@/assets/mascote-hero.png";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden h-[800px] md:h-[700px] lg:h-[600px]">
      {/* Background image - right side */}
      <div className="absolute inset-0">
        <img
          src={mascoteHero}
          alt="Mascote Multibat e dono - Profissionalismo e confiança"
          className="h-full w-full object-cover object-center md:object-right"
          width={1024}
          height={1024}
        />
      </div>

      {/* Gradient overlay - left to right on desktop, top to bottom on mobile */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(26,42,74,1) 0%, rgba(26,42,74,0.85) 40%, rgba(26,42,74,0.3) 70%, rgba(26,42,74,0) 100%)",
        }}
      />
      {/* Desktop/tablet gradient override */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(26,42,74,1) 0%, rgba(26,42,74,0.95) 30%, rgba(26,42,74,0.6) 50%, rgba(26,42,74,0) 70%)",
        }}
      />

      {/* Top bar */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <img
          src={logo}
          alt="Multibat Baterias"
          className="h-12 sm:h-14 rounded-md bg-white/95 p-1.5 shadow-elevated"
        />
        <div className="hidden items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md ring-1 ring-white/20 md:flex">
          <Clock className="h-4 w-4 text-secondary-glow" />
          Atendimento 24h
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-[calc(100%-80px)] max-w-7xl items-center px-6 lg:px-8">
        <div className="w-full md:w-[60%] lg:w-1/2">
          {/* Badge */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold uppercase tracking-wider text-white shadow-cta animate-fade-up"
          >
            <Zap className="h-4 w-4" fill="currentColor" />
            Bateria acabou? Não fique parado!
          </div>

          {/* Headline */}
          <h1
            className="font-display text-[28px] font-bold leading-[1.2] text-white sm:text-4xl lg:text-[48px] animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Bateria Nova com{" "}
            <span className="text-secondary-glow">Entrega e Instalação Grátis</span>{" "}
            em até 50 Minutos.
          </h1>

          {/* Subheadline */}
          <p
            className="mt-4 max-w-xl text-sm text-white/90 sm:text-base lg:text-[16px] leading-[1.6] animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            As melhores marcas do mercado —{" "}
            <strong className="text-white">Moura, Heliar, Pioneiro e Maxfor</strong>{" "}
            — com o menor preço da região e garantia de fábrica. Levamos a bateria
            até você agora!
          </p>

          {/* CTA */}
          <div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <CTAButton
              size="xl"
              trackingLabel="hero-main"
              label="PEDIR MINHA BATERIA AGORA"
            />
          </div>

          <p
            className="mt-4 text-[13px] text-white/80 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-accent-glow align-middle" />{" "}
            Atendimento imediato via WhatsApp
          </p>

          {/* Badges */}
          <div
            className="mt-8 flex flex-wrap gap-3 animate-fade-up"
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
                <Check className="h-3.5 w-3.5 text-accent-glow" strokeWidth={3} />
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
