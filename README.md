# Andressa Medeiros — Retrato Corporativo

Landing page em **Astro** (100% estática, sem framework JS adicional), tema escuro com
destaque dourado. Todo o CSS é escopado por componente.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve o build
```

## Estrutura

```
src/
  consts.ts                 dados do estúdio (nome, WhatsApp, Instagram, endereço)
  layouts/Layout.astro      head, SEO, GTM e rastreamento de clique no WhatsApp
  components/
    Header.astro            topbar fixa + menu mobile
    Hero.astro              nome em destaque + CTA "Quer fotos incríveis? Fale conosco"
    About.astro             seção sobre
    Services.astro          cards de serviços
    Gallery.astro           grade de fotos (placeholders)
    Testimonials.astro      depoimentos
    Faq.astro               perguntas frequentes
    FinalCta.astro          "Agende seu ensaio"
    Footer.astro            Instagram + WhatsApp + endereço
    WhatsAppButton.astro    botão flutuante verde (position: fixed)
  pages/index.astro         composição da página
  styles/global.css         tokens de cor, tipografia e utilitários
public/
  favicon.svg
  images/                   coloque aqui as fotos reais
```

## WhatsApp e GTM

Todos os CTAs de WhatsApp usam `https://wa.me/351933433551?text=...` e têm o atributo
`data-whatsapp` mais `data-cta` com o texto do botão. O script no layout dispara:

```js
dataLayer.push({ event: 'click_whatsapp', cta_text: 'FALE CONOSCO' });
```

O GTM só é carregado se `PUBLIC_GTM_ID` estiver definido (o `dataLayer` existe sempre):

```bash
# .env na raiz do projeto
PUBLIC_GTM_ID=GTM-XXXXXXX
```

No painel do GTM, crie um acionador **Evento personalizado** com o nome `click_whatsapp`
e, se quiser separar por botão, use a variável `cta_text`.

## Trocar as fotos

1. Salve os arquivos em `public/images/` (nomes sugeridos em `public/images/README.txt`).
2. Em `src/components/Gallery.astro`, substitua cada `<div class="shot__media">` por:

   ```html
   <img src="/images/headshot-01.jpg" alt="Headshot corporativo em fundo neutro" loading="lazy" />
   ```

3. No `Hero.astro` e no `About.astro`, faça o mesmo com `.frame__ph` e `.about__ph`.

## Deploy no Cloudflare Pages

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node:** 20 ou superior

Também funciona em qualquer host estático (Netlify, Vercel, GitHub Pages).

## Pendências antes de publicar

- [ ] Fotos reais na galeria, no hero e na seção sobre
- [ ] Depoimentos reais (os atuais são ilustrativos) — com autorização de uso
- [ ] Endereço completo do estúdio no rodapé (`src/consts.ts`)
- [ ] `PUBLIC_GTM_ID` configurado e acionador criado no GTM
- [ ] Domínio final em `site` no `astro.config.mjs`
