import { XCircle } from "lucide-react";

const items = [
  "Chega de pedir \"chupeta\" para desconhecidos.",
  "Não corra o risco de danificar a parte elétrica do seu carro.",
  "Evite esperar horas por um guincho.",
];

export const Problem = () => (
  <section className="bg-muted py-20 sm:py-24">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-center font-display text-3xl font-black uppercase text-primary sm:text-4xl md:text-5xl">
        Não deixe um imprevisto <span className="text-secondary">estragar o seu dia.</span>
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground">
        Ligou o carro e... o motor não vira. A frustração é enorme, mas a solução não precisa ser demorada.
      </p>

      <ul className="mx-auto mt-10 grid max-w-3xl gap-4">
        {items.map((t) => (
          <li
            key={t}
            className="flex items-start gap-4 rounded-xl bg-background p-5 shadow-card transition-smooth hover:shadow-card-hover"
          >
            <XCircle className="mt-0.5 h-7 w-7 flex-shrink-0 text-destructive" strokeWidth={2.5} />
            <span className="text-base font-medium text-primary sm:text-lg">{t}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
