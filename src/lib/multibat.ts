export const WHATSAPP_URL = "https://wa.me/5569993874206?text=Ol%C3%A1%21+%F0%9F%91%8B%0AVim+atrav%C3%A9s+da+landing+page+da+Multibat+e+gostaria+de+solicitar+um+atendimento+sobre+baterias+automotivas+%F0%9F%9A%97%F0%9F%94%8B&utm_source=chatgpt.com";

export const trackCta = (label: string) => {
  // GA4 / Meta Pixel hooks
  // @ts-expect-error gtag injected at runtime
  if (typeof window !== "undefined" && window.gtag) window.gtag("event", "cta_click", { label });
  // @ts-expect-error fbq injected at runtime
  if (typeof window !== "undefined" && window.fbq) window.fbq("track", "Lead", { label });
};
