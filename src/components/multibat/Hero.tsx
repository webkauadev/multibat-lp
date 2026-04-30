import { CTAButton } from "./CTAButton";
import { Zap, ShieldCheck, Clock, Check } from "lucide-react";
import heroImg from "@/assets/hero-battery.jpg";
import logo from "@/assets/multibat-logo.jpeg";

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Técnico instalando bateria automotiva"
          className="h-full w-full object-cover"
          width={1536}
          height={1024}
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Top bar */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <img src={logo} alt="Multibat Baterias" className="h-12 sm:h-14 rounded-md bg-white/95 p-1.5 shadow-elevated" />
        <div className="hidden items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md ring-1 ring-white/20 md:flex">
          <Clock className="h-4 w-4 text-secondary-glow" />
          Atendimento 24h
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-4 pb-20 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-20">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-cta">
            <Zap className="h-4 w-4" fill="currentColor" />
            Bateria acabou? Não fique parado!
          </div>

          <h1 className="font-display text-4xl font-black uppercase leading-[0.95] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Bateria nova com{" "}
            <span className="text-secondary-glow">entrega e instalação grátis</span>{" "}
            em até <span className="underline decoration-secondary decoration-[6px] underline-offset-4">50 minutos.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg md:text-xl">
            As melhores marcas do mercado — <strong className="text-white">Moura, Heliar, Pioneiro e Maxfor</strong> — com o menor preço da região e garantia de fábrica. Levamos a bateria até você agora!
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton size="xl" trackingLabel="hero-main" label="PEDIR MINHA BATERIA AGORA" />
            <p className="text-sm text-white/80 sm:ml-2">
              <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-accent-glow align-middle" />{" "}
              Atendimento imediato via WhatsApp.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              { icon: ShieldCheck, label: "Baterias Originais" },
              { icon: Clock, label: "Atendimento 24h" },
              { icon: Zap, label: "Entrega Rápida" },
            ].map((b) => (
              <div
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md"
              >
                <Check className="h-4 w-4 text-accent-glow" strokeWidth={3} />
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
