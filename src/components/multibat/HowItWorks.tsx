import { MessageCircle, FileText, Truck, CarFront, ChevronRight, type LucideIcon } from "lucide-react";

const steps: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: MessageCircle, title: "Chame no WhatsApp", desc: "Informe o modelo do seu carro." },
  { icon: FileText, title: "Receba o Orçamento", desc: "Enviamos as melhores opções de marcas e preços." },
  { icon: Truck, title: "Receba o Técnico", desc: "Em poucos minutos, nossa equipe chega para a instalação." },
  { icon: CarFront, title: "Siga sua Viagem", desc: "Pagamento feito na hora, com segurança e rapidez." },
];

export const HowItWorks = () => (
  <section className="bg-background py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary">Processo</span>
        <h2 className="mt-4 font-display text-3xl font-black uppercase text-primary sm:text-4xl md:text-5xl">
          Como <span className="text-secondary">funciona</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-4 md:gap-3">
        {steps.map((s, i) => (
          <div key={s.title} className="relative">
            <div className="rounded-2xl border-2 border-border bg-background p-6 text-center shadow-card transition-smooth hover:-translate-y-1 hover:border-secondary hover:shadow-card-hover">
              <div className="relative mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl gradient-cta text-white shadow-cta">
                <s.icon className="h-8 w-8" strokeWidth={2.2} />
                <span className="absolute -right-2 -top-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary font-display text-sm font-black text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold uppercase text-primary">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <ChevronRight className="absolute -right-4 top-1/2 hidden h-8 w-8 -translate-y-1/2 text-secondary md:block" strokeWidth={2.5} />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);
