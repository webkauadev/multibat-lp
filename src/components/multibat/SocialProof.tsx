import { Star, Quote } from "lucide-react";

const stats = [
  { num: "10K+", label: "Baterias instaladas" },
  { num: "12+", label: "Anos de tradição" },
  { num: "100%", label: "Marcas originais" },
  { num: "24h", label: "Atendimento direto" },
];

const testimonials = [
  { name: "João M.", text: "Chegou em 40 minutos e resolveu meu problema. Muito profissional!" },
  { name: "Maria S.", text: "Melhor preço que encontrei e ainda instalou na hora. Recomendo!" },
  { name: "Pedro R.", text: "Atendimento rápido e técnico competente. Voltarei com certeza!" },
];

export const SocialProof = () => (
  <section className="gradient-dark py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />
          ))}
        </div>
        <h2 className="font-display text-3xl font-black uppercase text-white sm:text-4xl md:text-5xl">
          Quem já precisou, <span className="text-secondary-glow">recomenda.</span>
        </h2>
      </div>

      {/* Stats */}
      <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
            <div className="font-display text-4xl font-black text-secondary-glow sm:text-5xl">{s.num}</div>
            <div className="mt-2 text-sm font-medium uppercase tracking-wider text-white/80">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <div key={t.name} className="relative rounded-2xl border-2 border-secondary/40 bg-background p-6 shadow-elevated">
            <Quote className="absolute right-4 top-4 h-8 w-8 text-secondary/20" />
            <div className="mb-3 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-base italic text-primary">"{t.text}"</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-cta font-display font-bold text-white">
                {t.name.charAt(0)}
              </div>
              <div className="font-display font-bold uppercase text-primary">{t.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
