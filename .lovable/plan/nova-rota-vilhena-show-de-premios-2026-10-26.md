# Nova rota /vilhena-show-de-premios

Mesma landing page da rota `/`, com três acréscimos discretos. As rotas `/` e `/black-friday` não mudam.

## O que muda só na nova rota
1. **Hero**: a headline, o texto, a imagem, o botão e os selos continuam iguais. Abaixo dos selos entra uma nota pequena: "MULTIBAT VILHENA PARTICIPA DO SHOW DE PRÊMIOS" e o texto sobre compras a partir de R$ 300.
2. **Novo bloco compacto** entre "Baterias para todos os perfis" e "Por que a Multibat...": selo "ACIV 45 ANOS | MULTIBAT PARTICIPA", título "SUA BATERIA NOVA PODE RENDER MAIS.", descrição, prêmios (2 carros | 5 motos | 4 PS5 | 10 TVs de 50"), "Mais de R$ 300 mil em prêmios", cupons a partir de 01/11/2026, botão "PEDIR MINHA BATERIA AGORA" (o mesmo WhatsApp e o mesmo rastreamento) e a observação sobre o regulamento. As cores e os cards são os atuais. Não entra contador, formulário nem logo da ACIV.
3. **FAQ**: todas as perguntas atuais continuam e entra uma pergunta nova sobre o Show de Prêmios.
4. **Título e descrição para o Google** usam o texto sugerido no briefing. A rota também entra no sitemap.

## Detalhes técnicos
- `Hero` ganha a prop opcional `promoNote?: ReactNode`, que aparece depois dos selos. Sem essa prop, a Hero aparece como hoje.
- Novo componente `src/components/multibat/ShowDePremios.tsx`, que usa o `CTAButton` com `trackingLabel="show-premios-cta"`.
- Nova página `src/pages/VilhenaShowDePremios.tsx`, que monta as seções da mesma forma que `Index.tsx`, inclui o novo bloco e passa `baseFaqs` mais a pergunta extra para o `FAQ`. O JSON-LD e o título ficam só nessa página e voltam ao normal quando o visitante sai dela.
- A rota é registrada em `App.tsx`, acima da rota curinga, e incluída no `sitemap.xml`.
- Verificação: abrir `/`, `/black-friday` e a nova rota no Playwright, conferir uma nota, um bloco e uma pergunta extra, e testar em desktop e mobile.
