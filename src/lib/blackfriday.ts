// Black Multibat 2026 — regras da campanha
// Período: 20/11/2026 a 30/11/2026 → 5% OFF + brinde surpresa
// Somente 27/11/2026 → 10% OFF + brinde surpresa

export interface BlackFridayOffer {
  percent: 5 | 10;
  isSpecialDay: boolean;
}

// Fuso de Rondônia (UTC-4), onde ficam as lojas — evita que o destaque
// vire no horário errado para visitantes de outros fusos.
const TIMEZONE = "America/Porto_Velho";
const SPECIAL_DAY = "2026-11-27";

export const getBlackFridayOffer = (now: Date = new Date()): BlackFridayOffer => {
  const day = new Intl.DateTimeFormat("en-CA", {
    timeZone: TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
  const isSpecialDay = day === SPECIAL_DAY;
  return { percent: isSpecialDay ? 10 : 5, isSpecialDay };
};

export const bfFaqExtras = [
  {
    q: "Como funciona a Black Multibat?",
    a: "De 20 a 30 de novembro de 2026, qualquer produto da campanha terá 5% OFF + brinde surpresa.",
  },
  {
    q: "O que acontece no dia 27 de novembro?",
    a: "Somente em 27/11/2026, a condição será de 10% OFF + brinde surpresa. Depois dessa data, a campanha retorna à condição de 5% OFF até 30/11.",
  },
];
