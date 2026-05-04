import { CTAButton } from "./CTAButton";
import { Zap, ShieldCheck, Clock, Check } from "lucide-react";

import mascoteHero from "@/assets/mascote-hero.png";

export const Hero = () => {
  return (
    <section
      className="relative overflow-hidden min-h-[auto] md:min-h-[700px] lg:min-h-[750px]"
      style={{ backgroundColor: "#1a2a4a" }}
    >
      {/* Desktop/Tablet: image as absolute right half */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute right-0 top-0 bottom-0 w-[45%] overflow-hidden rounded-l-lg">
          <img
            src={mascoteHero}
            alt="Mascote Multibat e dono - Profissionalismo e confiança"
            className="h-full w-full object-cover object-center animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          />
          {/* Gradient overlay left edge */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(26,42,74,1) 0%, rgba(26,42,74,0.7) 25%, rgba(26,42,74,0) 60%)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[auto] max-w-7xl flex-col md:min-h-[700px] lg:min-h-[750px]">
        {/* Copy */}
        <div className="w-full px-6 pb-8 pt-4 md:w-[55%] md:py-12 md:pl-8 md:pr-0 lg:pl-12">

          <div className="flex min-h-0 flex-1 flex-col justify-center md:min-h-[calc(700px-160px)] lg:min-h-[calc(750px-160px)]">
            {/* Badge */}
            <div className="mb-6 inline-flex animate-fade-up items-center gap-2 self-start rounded-full bg-secondary px-4 py-2 text-sm font-bold uppercase tracking-wider text-white shadow-cta">
              <Zap className="h-4 w-4" fill="currentColor" />
              Bateria acabou? Não fique parado!
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-up font-bold leading-[1.2] text-white sm:text-4xl lg:text-[48px] font-sans text-5xl"
              style={{ animationDelay: "0.1s" }}
            >
              Bateria Nova com{" "}
              <br />
              <span className="text-secondary-glow text-7xl text-left px-0 py-[10px] mx-0">
                Entrega e Instalação Grátis
              </span>
              <br />
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
        </div>

        {/* Mobile: image below copy */}
        <div className="relative w-full md:hidden">
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(180deg, rgba(26,42,74,1) 0%, rgba(26,42,74,0.3) 20%, rgba(26,42,74,0) 40%)",
            }}
          />
          <img
            src={mascoteHero}
            alt="Mascote Multibat e dono - Profissionalismo e confiança"
            className="h-[400px] w-full object-cover object-center animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          />
        </div>
      </div>
    </section>
  );
};
