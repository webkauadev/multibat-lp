import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import reviewLuigi from "@/assets/review-luigi.png";
import reviewDoane from "@/assets/review-doane.png";
import reviewJuliane from "@/assets/review-juliane.png";
import reviewKaren from "@/assets/review-karen.png";
import reviewValquiria from "@/assets/review-valquiria.png";
import reviewCarretinha from "@/assets/review-carretinha.png";

const reviews = [
  {
    name: "Luigi Zompero",
    photo: reviewLuigi,
    time: "um ano atrás",
    text: "Tive uma excelente experiência com a Multibat! Precisei trocar a bateria da minha caminhonete e o atendimento foi rápido, profissional e muito eficiente. A equipe foi super atenciosa, tirou todas as minhas dúvidas e realizou a troca com agilidade. Além disso, o preço foi justo e a qualidade do serviço impecável. Recomendo a todos que buscam um serviço de confiança e de alta qualidade. Com certeza voltarei quando precisar!",
  },
  {
    name: "Doane JK",
    photo: reviewDoane,
    time: "5 meses atrás",
    text: "Multibat excelência em baterias e principalmente no atendimento. Tive problema de bateria no meu carro a noite, em contato a empresa foram rápidos em me atender e resolver o meu problema, atendentes e técnicos muito educados, fazem os testes de baterias e explicam para o cliente tudo certinho. Recomendo de olhos fechados.",
  },
  {
    name: "Juliane Paiva",
    photo: reviewJuliane,
    time: "7 meses atrás",
    text: "Excelente, muito obrigada pelo atendimento adomicílio, só faltou o desconto 😊 mais vcs estão de parabéns pelo excelente trabalho",
  },
  {
    name: "Karen Thifany",
    photo: reviewKaren,
    time: "4 meses atrás",
    text: "Vendedor Vinicius Costa atendimento excelente. Muito educado, atencioso e prestativo do início ao fim. Tirou todas as dúvidas e conduziu a venda com profissionalismo. Recomendo.",
  },
  {
    name: "Valquiria Soares",
    photo: reviewValquiria,
    time: "4 meses atrás",
    text: "Excelente atendimento, muita presteza, e agilidade, sem falar na educação e explicações.",
  },
  {
    name: "Carretinha Atrevida",
    photo: reviewCarretinha,
    time: "4 meses atrás",
    text: "exelente atendimento recomendo a todos pode confiar obrigado alan e sua equipe atendimento nota 10!!",
  },
];

export const ReviewCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    // Auto-play
    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="gradient-dark py-20 sm:py-24" aria-label="Avaliações de clientes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-[#ffc107] text-[#ffc107]" />
            ))}
          </div>
          <h2 className="font-display text-3xl font-black uppercase text-white sm:text-4xl md:text-5xl">
            Quem já precisou, <span className="text-secondary-glow">recomenda.</span>
          </h2>
          <p className="mt-3 text-base text-white/70 sm:text-lg">
            Veja o que nossos clientes dizem sobre a Multibat
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-14">
          {/* Arrows – desktop outside, mobile overlaid */}
          <button
            onClick={scrollPrev}
            aria-label="Anterior"
            className="absolute -left-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-secondary/60 bg-secondary/20 text-secondary transition-smooth hover:bg-secondary hover:text-white md:flex lg:-left-5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Próxima"
            className="absolute -right-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-secondary/60 bg-secondary/20 text-secondary transition-smooth hover:bg-secondary hover:text-white md:flex lg:-right-5"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Mobile arrows */}
          <div className="absolute inset-y-0 left-2 z-10 flex items-center md:hidden">
            <button onClick={scrollPrev} aria-label="Anterior" className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/80 text-white">
              <ChevronLeft className="h-4 w-4" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-2 z-10 flex items-center md:hidden">
            <button onClick={scrollNext} aria-label="Próxima" className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/80 text-white">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((r, idx) => (
                <div
                  key={r.name}
                  className="min-w-0 shrink-0 grow-0 basis-full px-4 sm:basis-4/5 lg:basis-[65%]"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Avaliação ${idx + 1} de ${reviews.length}`}
                >
                  <div className="min-h-[280px] rounded-lg border border-secondary/50 bg-primary-dark/80 p-4 shadow-elevated transition-smooth hover:shadow-[0_20px_50px_-12px_hsl(22_95%_54%/0.25)] sm:p-6">
                    {/* Top row */}
                    <div className="flex items-start gap-3">
                      <img
                        src={r.photo}
                        alt={`Foto de ${r.name}`}
                        loading="lazy"
                        className="h-12 w-12 shrink-0 rounded-full object-cover"
                      />
                      <div className="min-w-0">
                        <p className="font-display text-base font-bold text-white">{r.name}</p>
                        <div className="mt-1 flex items-center gap-2">
                          <div className="flex gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className="h-[18px] w-[18px] fill-[#ffc107] text-[#ffc107]" />
                            ))}
                          </div>
                          <span className="text-xs text-white/50">{r.time}</span>
                        </div>
                      </div>
                    </div>
                    {/* Review body */}
                    <p className="mt-4 text-[13px] leading-relaxed text-white/90 sm:text-sm sm:leading-[1.65]">
                      "{r.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2" role="tablist" aria-label="Avaliações">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                aria-label={`Avaliação ${idx + 1} de ${reviews.length}`}
                role="tab"
                aria-selected={selectedIndex === idx}
                className={`h-2.5 w-2.5 rounded-full transition-smooth sm:h-3 sm:w-3 ${
                  selectedIndex === idx
                    ? "scale-125 bg-secondary"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
