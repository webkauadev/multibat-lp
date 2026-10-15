import { useEffect } from "react";
import { Hero } from "@/components/multibat/Hero";
import { Problem } from "@/components/multibat/Problem";
import { Solution } from "@/components/multibat/Solution";
import { Brands } from "@/components/multibat/Brands";
import { Differentials } from "@/components/multibat/Differentials";
import { ReviewCarousel } from "@/components/multibat/ReviewCarousel";
import { HowItWorks } from "@/components/multibat/HowItWorks";
import { FAQ, baseFaqs } from "@/components/multibat/FAQ";
import { Locations } from "@/components/multibat/Locations";
import { FinalCTA } from "@/components/multibat/FinalCTA";
import { Footer } from "@/components/multibat/Footer";
import { StickyWhatsApp } from "@/components/multibat/StickyWhatsApp";
import { getBlackFridayOffer, bfFaqExtras } from "@/lib/blackfriday";

const allFaqs = [...baseFaqs, ...bfFaqExtras];

const BlackFriday = () => {
  const offer = getBlackFridayOffer();

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Black Multibat | 5% OFF + Brinde Surpresa em Baterias";

    const ldStore = document.createElement("script");
    ldStore.type = "application/ld+json";
    ldStore.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AutoPartsStore",
      name: "Multibat Baterias",
      description: "Black Multibat 2026: 5% OFF + brinde surpresa de 20 a 30/11, e 10% OFF + brinde surpresa no dia 27/11. Venda e instalação de baterias automotivas em Vilhena/RO.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avenida Marechal Rondon, 5054",
        addressLocality: "Vilhena",
        addressRegion: "RO",
        addressCountry: "BR",
      },
      openingHours: "Mo-Su 00:00-23:59",
    });
    document.head.appendChild(ldStore);

    const ldFaq = document.createElement("script");
    ldFaq.type = "application/ld+json";
    ldFaq.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: allFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(ldFaq);

    return () => {
      document.title = previousTitle;
      if (ldStore.parentNode) ldStore.parentNode.removeChild(ldStore);
      if (ldFaq.parentNode) ldFaq.parentNode.removeChild(ldFaq);
    };
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Hero
        badgeText={offer.isSpecialDay ? "BLACK MULTIBAT | HOJE: 10% OFF + BRINDE SURPRESA" : "BLACK MULTIBAT | 20 A 30 DE NOVEMBRO"}
        titleLine1="Precisou de bateria?"
        titleHighlight="Aproveite a Black Multibat."
        titleLine2=""
        subheadline={
          offer.isSpecialDay ? (
            <>
              Hoje, 27/11, qualquer produto com{" "}
              <strong className="text-white">10% OFF + brinde surpresa</strong>.
              Condição exclusiva do dia — aproveite agora!
            </>
          ) : (
            <>
              De 20 a 30 de novembro, qualquer produto com{" "}
              <strong className="text-white">5% OFF + brinde surpresa</strong>.
              E no dia 27/11, são{" "}
              <strong className="text-white">10% OFF + brinde surpresa</strong>.
            </>
          )
        }
        supportText="Escolha sua bateria, fale com a Multibat e receba com entrega e instalação no local."
        ctaLabel="QUERO APROVEITAR A BLACK"
      />
      <Problem
        description="Se sua bateria já está dando sinais, a Black Multibat é a oportunidade para resolver agora com uma condição especial."
        items={[
          "O carro demora ou apresenta dificuldade para ligar?",
          "A bateria já não mantém a mesma carga?",
          "Você precisa trocar e quer resolver sem perder tempo?",
        ]}
        supportText="De 20 a 30/11, resolva com 5% OFF + brinde surpresa."
      />
      <Solution
        steps={[
          { title: "Diagnóstico Rápido", desc: "Conte pra gente seu veículo e o que está acontecendo." },
          { title: "Escolha da Bateria", desc: "Indicamos opções compatíveis com seu veículo, necessidade e orçamento." },
          { title: "Entrega e Instalação", desc: "Você escolhe e a Multibat leva e instala no local." },
        ]}
        supportText="E durante a Black Multibat, você ainda aproveita a condição especial da campanha."
      />
      <Brands
        eyebrow="Escolha a sua"
        description="Moura, Heliar, Pioneiro e Maxfor: opções para diferentes veículos, necessidades e orçamentos."
        preCtaText={
          <>
            Precisou trocar? De 20 a 30 de novembro, aproveite{" "}
            <strong>5% OFF em qualquer produto + brinde surpresa</strong>.
          </>
        }
        highlightText="Só no dia 27/11: 10% OFF + brinde surpresa."
        ctaLabel="FALAR COM UM ESPECIALISTA"
      />
      <Differentials
        items={[
          { title: "Garantia e Qualidade", desc: "Baterias originais, com procedência e garantia." },
          { title: "Melhor Preço e Agilidade", desc: "Opções para diferentes necessidades e orçamentos, com atendimento rápido." },
          { title: "Checkout Elétrico Grátis", desc: "Verificação para ajudar você a identificar a solução adequada para o veículo." },
          { title: "Facilidade no Pagamento", desc: "Condições para facilitar sua compra." },
        ]}
      />
      <ReviewCarousel subtitle="Avaliações reais de quem confiou na Multibat para não ficar na mão." />
      <HowItWorks
        intro="Fale com a Multibat pelo WhatsApp, encontre a bateria certa para o seu veículo e aproveite a condição da Black."
        steps={[
          { title: "Chame no WhatsApp", desc: "Fale com nosso atendimento." },
          { title: "Receba o Orçamento", desc: "Encontre a opção ideal para seu veículo e orçamento." },
          { title: "Receba o Produto", desc: "A Multibat leva a bateria até você." },
          { title: "Receba a Instalação", desc: "Nossa equipe realiza a instalação no local." },
        ]}
      />
      <FAQ extraFaqs={bfFaqExtras} />
      <Locations subtitle="Encontre a Multibat mais próxima e aproveite a Black de 20 a 30 de novembro." />
      <FinalCTA
        eyebrow={offer.isSpecialDay ? "BLACK MULTIBAT | SÓ HOJE: 10% OFF" : "BLACK MULTIBAT | ATÉ 30/11"}
        headline={
          <>
            Precisa de bateria? <span className="text-secondary-glow">Este é o momento de resolver.</span>
          </>
        }
        description={
          offer.isSpecialDay ? (
            <>
              Hoje, 27/11: <strong className="text-white">10% OFF em qualquer produto + brinde surpresa</strong>. Fale agora com a Multibat e encontre a bateria certa para o seu veículo.
            </>
          ) : (
            <>
              De 20 a 30 de novembro: <strong className="text-white">5% OFF em qualquer produto + brinde surpresa</strong>. Dia 27/11: <strong className="text-white">10% OFF + brinde surpresa</strong>. Fale agora com a Multibat e encontre a bateria certa para o seu veículo.
            </>
          )
        }
        ctaLabel="QUERO APROVEITAR A BLACK"
      />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
};

export default BlackFriday;
