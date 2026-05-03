import { CTAButton } from "./CTAButton";
import { ShieldCheck } from "lucide-react";
import brandMoura from "@/assets/brand-moura.png";
import brandHeliar from "@/assets/brand-heliar.jpg";
import brandPioneiro from "@/assets/brand-pioneiro.png";
import brandMaxfor from "@/assets/brand-maxfor.png";

const brands = [
  { name: "Moura", desc: "Referência em durabilidade e desempenho premium", logo: brandMoura },
  { name: "Heliar", desc: "Alta confiabilidade e tecnologia reconhecida", logo: brandHeliar },
  { name: "Pioneiro", desc: "Equilíbrio entre performance e custo", logo: brandPioneiro },
  { name: "Maxfor", desc: "Excelente custo-benefício para solução inteligente", logo: brandMaxfor },
];

export const Brands = () => (
  <section className="bg-muted py-20 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">Marcas Originais</span>
        <h2 className="mt-4 font-display text-3xl font-black uppercase text-primary sm:text-4xl md:text-5xl">
          Baterias para <span className="text-secondary">todos os perfis</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
          A Multibat oferece soluções para todos os perfis de motorista. Todas originais, com procedência e instalação no local.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {brands.map((b) => (
          <div
            key={b.name}
            className="group relative flex flex-col items-center rounded-2xl bg-background p-6 text-center shadow-card transition-smooth hover:-translate-y-1 hover:shadow-card-hover"
          >
            <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent">
              <ShieldCheck className="h-3 w-3" /> Original
            </div>
            <div className="flex h-24 w-full items-center justify-center rounded-xl bg-white p-4">
              <img src={b.logo} alt={`Logo ${b.name}`} className="h-full max-w-full object-contain" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold uppercase text-primary">{b.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="mx-auto mb-5 max-w-2xl text-base text-primary sm:text-lg">
          <strong>Temos opções premium e econômicas.</strong> Fale no WhatsApp e descubra a melhor bateria para o seu carro e orçamento.
        </p>
        <CTAButton variant="whatsapp" trackingLabel="brands-cta" label="FALAR COM ESPECIALISTA" />
      </div>
    </div>
  </section>
);
