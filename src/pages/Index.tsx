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

const Index = () => {
  useEffect(() => {
    document.title = "Multibat | Bateria com Entrega e Instalação em até 50 Minutos";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta(
      "description",
      "Baterias Moura, Heliar e Pioneiro com entrega e instalação grátis em Vilhena/RO. Atendimento 24h via WhatsApp. Melhor preço garantido."
    );

    // JSON-LD
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
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
    document.head.appendChild(ld);
    return () => {
      document.head.removeChild(ld);
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
