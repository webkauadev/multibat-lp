# Plano — Rota /black-friday (Black Multibat 2026)

## Objetivo

Criar a rota `/black-friday` como uma **variação da LP atual**, reutilizando exatamente a mesma estrutura visual, componentes, imagens, logos, cores, animações e responsividade. Apenas a **copy** muda, e somente na rota nova. A página principal (`/`) permanece 100% intacta.

## Campanha

- **Black Multibat 2026**: 20/11 a 30/11/2026
- Período: **5% OFF + brinde surpresa** em qualquer produto
- Somente 27/11: **10% OFF + brinde surpresa**
- Com a automação aprovada: no dia 27/11 o hero e o CTA final destacam 10% OFF sozinhos; à meia-noite do dia 28 voltam a destacar 5% (fuso horário de Rondônia, UTC-4). A copy estática continua explicando as duas condições.

## Estratégia técnica (sem redesenho)

Cada componente de seção recebe **props opcionais de texto** cujos valores padrão são exatamente a copy atual. A página principal não passa nenhuma prop — logo, nada muda nela. A nova página `/black-friday` passa apenas os textos da campanha. Nenhum estilo, grid, imagem ou layout é alterado.

## Alterações de copy por seção (rota /black-friday)

1. **Hero** — Badge: "BLACK MULTIBAT | 20 A 30 DE NOVEMBRO"; Headline: "Precisou de bateria? Aproveite a Black Multibat."; Subheadline com as condições 5%/10%; apoio: "Escolha sua bateria, fale com a Multibat e receba com entrega e instalação no local."; CTA: "QUERO APROVEITAR A BLACK". Badges de confiança preservados. **No dia 27/11, destaque automático do 10% OFF.**
2. **Problema** — Título mantido; nova descrição ("Se sua bateria já está dando sinais..."); 3 cards reformulados em formato de pergunta; texto de apoio "De 20 a 30/11, resolva com 5% OFF + brinde surpresa." usando a tipografia já existente na seção.
3. **3 Passos** — Título mantido; novos textos dos cards (Diagnóstico Rápido / Escolha da Bateria / Entrega e Instalação); apoio sobre a condição da campanha.
4. **Portfólio (Marcas)** — Eyebrow "ESCOLHA A SUA"; cards e logos intactos; nova descrição; texto pré-CTA com 5% OFF + destaque "Só no dia 27/11: 10% OFF + brinde surpresa."; CTA: "FALAR COM UM ESPECIALISTA".
5. **Diferenciais** — Título mantido; textos dos 4 cards atualizados (sem desconto dentro dos cards).
6. **Prova social** — Título mantido; subheadline "Avaliações reais de quem confiou na Multibat para não ficar na mão."; sem mensagem promocional; widget Trustindex intacto.
7. **Como Funciona** — Nova introdução mencionando a Black; textos dos 4 passos atualizados.
8. **FAQ** — Mesmas 5 perguntas atuais + 2 novas da campanha ("Como funciona a Black Multibat?" e "O que acontece no dia 27 de novembro?") no mesmo accordion. JSON-LD FAQPage atualizado na rota nova.
9. **Unidades** — Título mantido; subheadline "Encontre a Multibat mais próxima e aproveite a Black de 20 a 30 de novembro."; mapa, cards e endereços intactos.
10. **CTA Final** — Eyebrow "BLACK MULTIBAT | ATÉ 30/11"; headline "PRECISA DE BATERIA? ESTE É O MOMENTO DE RESOLVER."; descrição com 5%/10% (destaque automático do 10% no dia 27); CTA "QUERO APROVEITAR A BLACK".

Footer, StickyWhatsApp, links de WhatsApp, GTM, eventos de conversão e parâmetros UTM: **inalterados**.

## Arquivos

- **Novos**: `src/pages/BlackFriday.tsx` (página da campanha com título/meta/JSON-LD próprios), `src/lib/blackfriday.ts` (copy da campanha + helper de data que retorna a oferta do dia: 5% ou 10%).
- **Editados (só recebem props opcionais, sem mudança visual por padrão)**: `Hero.tsx`, `Problem.tsx`, `Solution.tsx`, `Brands.tsx`, `Differentials.tsx`, `HowItWorks.tsx`, `ReviewCarousel.tsx`, `FAQ.tsx`, `Locations.tsx`, `FinalCTA.tsx`.
- **Rota**: `src/App.tsx` ganha `<Route path="/black-friday" element={<BlackFriday />} />`.
- **SEO**: `public/sitemap.xml` passa a incluir `/black-friday`; título da página: "Black Multibat | 5% OFF + Brinde Surpresa em Baterias".

## Verificação

- Comparar `/` e `/black-friday` no preview (desktop e mobile): mesma estrutura, mesmas imagens, mesma responsividade; só a copy difere.
- Confirmar que `/` continua com a copy original em todas as seções.
- Testar botões WhatsApp nas duas rotas.
- Testar o helper de data com datas simuladas (26/11 → 5%, 27/11 → 10%, 28/11 → 5%).
- Conferir build sem erros.
