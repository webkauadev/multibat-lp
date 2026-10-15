import { ShieldCheck, BadgePercent, Zap, CreditCard, type LucideIcon } from "lucide-react";

interface DifferentialItem {
  title: string;
  desc: string;
}

const icons: LucideIcon[] = [ShieldCheck, BadgePercent, Zap, CreditCard];

const defaultItems: DifferentialItem[] = [
  { title: "Garantia Blindada", desc: "Troca imediata em caso de defeito de fabricação." },
  { title: "Melhor Preço Garantido", desc: "Cobrimos orçamentos comprovados das mesmas marcas." },
  { title: "Checkout Elétrico Grátis", desc: "Ao trocar sua bateria, testamos seu alternador sem custo adicional." },
  { title: "Facilidade no Pagamento", desc: "Parcelamos em até 10x no cartão de crédito." },
];

interface DifferentialsProps {
  items?: DifferentialItem[];
}

export const Differentials = ({ items = defaultItems }: DifferentialsProps) => (
  <section className="bg-background py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">Diferenciais</span>
        <h2 className="mt-4 font-display text-3xl font-black uppercase text-primary sm:text-4xl md:text-5xl">
          Por que a Multibat é a <span className="text-secondary">escolha nº 1</span> dos motoristas exigentes?
        </h2>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={item.title}
              className="group rounded-2xl border-2 border-accent/20 bg-background p-6 shadow-card transition-smooth hover:-translate-y-1.5 hover:border-accent hover:shadow-card-hover"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl gradient-whatsapp text-white shadow-whatsapp transition-smooth group-hover:scale-110">
                <Icon className="h-7 w-7" strokeWidth={2.2} />
              </div>
              <h3 className="font-display text-xl font-bold uppercase text-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
