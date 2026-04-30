export const WHATSAPP_NUMBER = "5569999999999"; // placeholder
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá Multibat! Quero solicitar um orçamento de bateria para meu carro."
);
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const trackCta = (label: string) => {
  // GA4 / Meta Pixel hooks
  // @ts-expect-error gtag injected at runtime
  if (typeof window !== "undefined" && window.gtag) window.gtag("event", "cta_click", { label });
  // @ts-expect-error fbq injected at runtime
  if (typeof window !== "undefined" && window.fbq) window.fbq("track", "Lead", { label });
};
