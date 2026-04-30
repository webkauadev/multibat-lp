import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Vocês aceitam a bateria usada como base de troca?", a: "Sim! A entrega da sua bateria usada garante um desconto extra e o descarte ecológico correto." },
  { q: "Qual a garantia das baterias?", a: "Trabalhamos com garantias de 12 a 24 meses, dependendo do modelo e fabricante. Todas as baterias vêm com nota fiscal e garantia de fábrica." },
  { q: "Atendem em quais regiões?", a: "Atendemos toda a região de Vilhena e arredores com frota própria para garantir rapidez. Consulte disponibilidade via WhatsApp." },
  { q: "Como funciona o parcelamento?", a: "Parcelamos em até 10x no cartão de crédito. Consulte as opções disponíveis com nossos especialistas." },
  { q: "Qual é o tempo de entrega?", a: "Nosso compromisso é entregar e instalar em até 50 minutos. Em casos especiais, informamos o tempo exato ao receber sua solicitação." },
];

export const FAQ = () => (
  <section className="bg-muted py-20 sm:py-24">
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">FAQ</span>
        <h2 className="mt-4 font-display text-3xl font-black uppercase text-primary sm:text-4xl md:text-5xl">
          Dúvidas <span className="text-secondary">Frequentes</span>
        </h2>
      </div>

      <Accordion type="single" collapsible className="mt-10 space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="overflow-hidden rounded-xl border-2 border-border bg-background px-5 shadow-card data-[state=open]:border-secondary"
          >
            <AccordionTrigger className="py-5 text-left font-display text-base font-bold uppercase text-primary hover:no-underline sm:text-lg [&[data-state=open]>svg]:text-secondary">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
