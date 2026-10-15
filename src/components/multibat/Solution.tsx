import { Search, BadgeCheck, Wrench, type LucideIcon } from "lucide-react";

interface SolutionStep {
  title: string;
  desc: string;
}

const icons: LucideIcon[] = [Search, BadgeCheck, Wrench];

const defaultSteps: SolutionStep[] = [
  { title: "Diagnóstico Rápido", desc: "Nossos especialistas confirmam se o problema é realmente a bateria ou alternador." },
  { title: "Escolha da Marca", desc: "Trabalhamos apenas com as líderes mundiais e baterias seladas originais." },
  { title: "Instalação Profissional", desc: "Técnico especializado vai até o local, realiza a troca e testa todo o sistema elétrico." },
];

interface SolutionProps {
  steps?: SolutionStep[];
  supportText?: string;
}

export const Solution = ({ steps = defaultSteps, supportText }: SolutionProps) => (
  <section className="bg-background py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary">A Solução</span>
        <h2 className="mt-4 font-display text-3xl font-black uppercase text-primary sm:text-4xl md:text-5xl">
          A Multibat resolve para você em <span className="text-secondary">3 passos simples.</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={s.title}
              className="group relative rounded-2xl border-2 border-secondary/20 bg-background p-8 shadow-card transition-smooth hover:-translate-y-1 hover:border-secondary hover:shadow-card-hover"
            >
              <div className="absolute -top-4 left-8 inline-flex h-9 w-9 items-center justify-center rounded-full gradient-cta font-display text-base font-black text-white shadow-cta">
                {i + 1}
              </div>
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl gradient-cta text-white shadow-cta">
                <Icon className="h-7 w-7" strokeWidth={2.2} />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-primary">{s.title}</h3>
              <p className="mt-3 text-base text-muted-foreground">{s.desc}</p>
            </div>
          );
        })}
      </div>

      {supportText && (
        <p className="mx-auto mt-10 max-w-2xl text-center text-lg text-muted-foreground">
          <strong className="text-primary">{supportText}</strong>
        </p>
      )}
    </div>
  </section>
);
