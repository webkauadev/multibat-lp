import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    const previousTitle = document.title;
    document.title = "Página não encontrada (404) | Multibat";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      const created = !el;
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      const previous = el.content;
      el.content = content;
      return () => {
        if (created) el!.remove();
        else el!.content = previous;
      };
    };

    const setProperty = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      const created = !el;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      const previous = el.content;
      el.content = content;
      return () => {
        if (created) el!.remove();
        else el!.content = previous;
      };
    };

    const restoreDescription = setMeta(
      "description",
      "A página que você procura não existe. Volte para o início e fale com a Multibat para baterias automotivas em Vilhena/RO."
    );
    const restoreOgTitle = setProperty("og:title", "Página não encontrada (404) | Multibat");
    const restoreOgDescription = setProperty(
      "og:description",
      "A página que você procura não existe. Volte para o início e fale com a Multibat."
    );
    const restoreOgUrl = setProperty(
      "og:url",
      `https://multibat.com.br${location.pathname}`
    );

    return () => {
      document.title = previousTitle;
      restoreDescription();
      restoreOgTitle();
      restoreOgDescription();
      restoreOgUrl();
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Página não encontrada</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Voltar para o início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
