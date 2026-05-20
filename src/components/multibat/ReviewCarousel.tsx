import { useEffect } from "react";

export const ReviewCarousel = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.trustindex.io/loader.js?854e5ad72462432d1d167ea4a13";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="gradient-dark py-20 sm:py-24" aria-label="Avaliações de clientes">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-black uppercase text-white sm:text-4xl md:text-5xl">
            Quem já precisou, <span className="text-secondary-glow">recomenda.</span>
          </h2>
          <p className="mt-3 text-base text-white/70 sm:text-lg">
            Avaliações reais dos nossos clientes
          </p>
        </div>
        <div className="mt-12" />
      </div>
    </section>
  );
};
