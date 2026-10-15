import { describe, it, expect } from "vitest";
import { getBlackFridayOffer, bfFaqExtras } from "@/lib/blackfriday";

// Fuso da campanha: America/Porto_Velho (UTC-4, sem horário de verão)

describe("getBlackFridayOffer", () => {
  it("retorna 5% antes do dia especial (26/11)", () => {
    const offer = getBlackFridayOffer(new Date("2026-11-26T23:59:59-04:00"));
    expect(offer.percent).toBe(5);
    expect(offer.isSpecialDay).toBe(false);
  });

  it("retorna 10% durante todo o dia 27/11/2026 no fuso de Rondônia", () => {
    expect(getBlackFridayOffer(new Date("2026-11-27T00:00:01-04:00")).percent).toBe(10);
    expect(getBlackFridayOffer(new Date("2026-11-27T12:00:00-04:00")).percent).toBe(10);
    expect(getBlackFridayOffer(new Date("2026-11-27T23:59:59-04:00")).percent).toBe(10);
    expect(getBlackFridayOffer(new Date("2026-11-27T12:00:00-04:00")).isSpecialDay).toBe(true);
  });

  it("volta para 5% a partir da meia-noite de 28/11", () => {
    const offer = getBlackFridayOffer(new Date("2026-11-28T00:00:00-04:00"));
    expect(offer.percent).toBe(5);
    expect(offer.isSpecialDay).toBe(false);
  });

  it("usa o fuso de Rondônia, não o do visitante (27/11 23h30 em PV ainda é dia especial)", () => {
    // 2026-11-28T03:30:00Z == 2026-11-27T23:30:00-04:00 em Porto Velho
    expect(getBlackFridayOffer(new Date("2026-11-28T03:30:00Z")).percent).toBe(10);
  });
});

describe("FAQ da campanha", () => {
  it("informa 5% OFF de 20 a 30/11 e 10% OFF somente em 27/11/2026", () => {
    expect(bfFaqExtras).toHaveLength(2);
    expect(bfFaqExtras[0].a).toContain("20 a 30 de novembro de 2026");
    expect(bfFaqExtras[0].a).toContain("5% OFF");
    expect(bfFaqExtras[1].a).toContain("27/11/2026");
    expect(bfFaqExtras[1].a).toContain("10% OFF");
  });
});
