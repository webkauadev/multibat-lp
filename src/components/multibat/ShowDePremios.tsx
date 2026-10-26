import { CTAButton } from "./CTAButton";

const prizes = ["2 carros", "5 motos", "4 PlayStation 5", '10 TVs de 50"'];

export const ShowDePremios = () => (
  <section className="bg-background py-16 sm:py-20">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border-2 border-secondary/20 bg-background p-8 text-center shadow-card sm:p-10">
        <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary">
          ACIV 45 anos | Multibat participa
        </span>
        <h2 className="mt-4 font-display text-3xl font-black uppercase text-primary sm:text-4xl">
          Sua bateria nova pode <span className="text-secondary">render mais.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          A Multibat Vilhena está participando do Vilhena Show de Prêmios.
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Comprando a partir de <strong className="text-primary">R$ 300 em baterias de carro ou caminhão</strong>, você recebe seu cupom, faz o cadastro e concorre aos prêmios da campanha.
        </p>

        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {prizes.map((p) => (
            <li key={p} className="rounded-full bg-primary px-4 py-2 font-display text-sm font-bold uppercase text-primary-foreground">
              {p}
            </li>
          ))}
        </ul>

        <p className="mt-5 font-display text-xl font-black uppercase text-secondary">Mais de R$ 300 mil em prêmios.</p>
        <p className="mt-1 text-sm text-muted-foreground">Cupons disponíveis a partir de 01/11/2026 na unidade de Vilhena.</p>

        <div className="mt-7">
          <CTAButton trackingLabel="show-premios-cta" label="PEDIR MINHA BATERIA AGORA" />
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Participação sujeita ao regulamento oficial do Vilhena Show de Prêmios.
        </p>
      </div>
    </div>
  </section>
);
