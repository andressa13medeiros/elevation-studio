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

Salve as fotos em `public/images/` com os nomes exatos listados em
`public/images/README.txt` (`hero.jpg`, `sobre.jpg`, `retrato-01.jpg` … `retrato-06.jpg`).
Não é preciso editar código: `src/lib/photos.ts` verifica no build se o arquivo existe e o
componente mostra a foto; enquanto ela não chega, aparece o placeholder.

Fotos ideais: pelo menos 1600 px no lado maior, JPG, e arquivos originais (não capturas de
tela) — capturas perdem nitidez e ficam moles em telas grandes.

## Deploy no Cloudflare Pages

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node:** 20 ou superior

Também funciona em qualquer host estático (Netlify, Vercel, GitHub Pages).

## Pendências antes de publicar

- [ ] Fotos reais na galeria, no hero e na seção sobre
- [ ] Depoimentos reais (os atuais são ilustrativos) — com autorização de uso
- [x] Endereço do estúdio no rodapé (`src/consts.ts`)
- [ ] `PUBLIC_GTM_ID` configurado e acionador criado no GTM
- [ ] Domínio final em `site` no `astro.config.mjs`
