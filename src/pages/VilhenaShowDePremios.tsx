import { useEffect } from "react";
import { Hero } from "@/components/multibat/Hero";
import { Problem } from "@/components/multibat/Problem";
import { Solution } from "@/components/multibat/Solution";
import { Brands } from "@/components/multibat/Brands";
import { ShowDePremios } from "@/components/multibat/ShowDePremios";
import { Differentials } from "@/components/multibat/Differentials";
import { ReviewCarousel } from "@/components/multibat/ReviewCarousel";
import { HowItWorks } from "@/components/multibat/HowItWorks";
import { FAQ, baseFaqs, type FaqItem } from "@/components/multibat/FAQ";
import { Locations } from "@/components/multibat/Locations";
import { FinalCTA } from "@/components/multibat/FinalCTA";
import { Footer } from "@/components/multibat/Footer";
import { StickyWhatsApp } from "@/components/multibat/StickyWhatsApp";

const showFaq: FaqItem[] = [
  {
    q: "Comprando na Multibat, posso participar do Vilhena Show de Prêmios?",
    a: "Sim! A Multibat Vilhena participa da campanha. Nas compras elegíveis a partir de R$ 300 em baterias de carro ou caminhão, você pode receber seu cupom e realizar o cadastro para concorrer aos prêmios, conforme o regulamento oficial.",
  },
];

const TITLE = "Baterias em Vilhena com Entrega e Instalação | Multibat";
const DESCRIPTION =
  "Compre sua bateria na Multibat Vilhena com entrega e instalação. Em compras elegíveis a partir de R$ 300, participe do Vilhena Show de Prêmios.";

const VilhenaShowDePremios = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = TITLE;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prevDesc = meta?.content;
    if (meta) meta.content = DESCRIPTION;

    const ldFaq = document.createElement("script");
    ldFaq.type = "application/ld+json";
    ldFaq.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [...baseFaqs, ...showFaq].map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(ldFaq);

    return () => {
      document.title = prevTitle;
      if (meta && prevDesc !== undefined) meta.content = prevDesc;
      if (ldFaq.parentNode) ldFaq.parentNode.removeChild(ldFaq);
    };
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Hero
        promoNote={
          <>
            <strong className="block text-[11px] font-bold uppercase tracking-wider text-secondary-glow">
              Multibat Vilhena participa do Show de Prêmios
            </strong>
            Nas compras a partir de R$ 300 em baterias de carro ou caminhão, você também pode receber seu cupom para concorrer a mais de R$ 300 mil em prêmios.
          </>
        }
      />
      <Problem />
      <Solution />
      <Brands />
      <ShowDePremios />
      <Differentials />
      <ReviewCarousel />
      <HowItWorks />
      <FAQ extraFaqs={showFaq} />
      <Locations />
      <FinalCTA />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
};

export default VilhenaShowDePremios;
