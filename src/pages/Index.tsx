import { useEffect } from "react";
import { Hero } from "@/components/multibat/Hero";
import { Problem } from "@/components/multibat/Problem";
import { Solution } from "@/components/multibat/Solution";
import { Brands } from "@/components/multibat/Brands";
import { Differentials } from "@/components/multibat/Differentials";
import { ReviewCarousel } from "@/components/multibat/ReviewCarousel";
import { HowItWorks } from "@/components/multibat/HowItWorks";
import { FAQ } from "@/components/multibat/FAQ";
import { Locations } from "@/components/multibat/Locations";
import { FinalCTA } from "@/components/multibat/FinalCTA";
import { Footer } from "@/components/multibat/Footer";
import { StickyWhatsApp } from "@/components/multibat/StickyWhatsApp";

const faqs = [
  { q: "Vocês aceitam a bateria usada como base de troca?", a: "Sim! A entrega da sua bateria usada garante um desconto extra e o descarte ecológico correto." },
  { q: "Qual a garantia das baterias?", a: "Trabalhamos com garantias de 12 a 24 meses, dependendo do modelo e fabricante. Todas as baterias vêm com nota fiscal e garantia de fábrica." },
  { q: "Atendem em quais regiões?", a: "Atendemos toda a região de Vilhena e arredores com frota própria para garantir rapidez. Consulte disponibilidade via WhatsApp." },
  { q: "Como funciona o parcelamento?", a: "Parcelamos em até 10x no cartão de crédito. Consulte as opções disponíveis com nossos especialistas." },
  { q: "Qual é o tempo de entrega?", a: "Nosso compromisso é entregar e instalar em até 50 minutos. Em casos especiais, informamos o tempo exato ao receber sua solicitação." },
];

const Index = () => {
  useEffect(() => {
    document.title = "Multibat | Bateria com Entrega em 50 Minutos";

    const ldStore = document.createElement("script");
    ldStore.type = "application/ld+json";
    ldStore.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AutoPartsStore",
      name: "Multibat Baterias",
      description: "Venda e instalação de baterias automotivas com entrega rápida em Vilhena/RO.",
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
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(ldFaq);

    return () => {
      if (ldStore.parentNode) ldStore.parentNode.removeChild(ldStore);
      if (ldFaq.parentNode) ldFaq.parentNode.removeChild(ldFaq);
    };
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Problem />
      <Solution />
      <Brands />
      <Differentials />
      <ReviewCarousel />
      <HowItWorks />
      <FAQ />
      <Locations />
      <FinalCTA />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
};

export default Index;
