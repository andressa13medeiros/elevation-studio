import { defineConfig } from 'astro/config';

// Ao expor o dev server num hostname externo (túnel, preview), informe-o em
// PREVIEW_HOST. Sem isso, apenas localhost é aceito — nada de liberar hosts em geral.
const allowedHosts = process.env.PREVIEW_HOST ? [process.env.PREVIEW_HOST] : [];

export default defineConfig({
  // Ajuste para o domínio final (Cloudflare Pages) quando publicar.
  site: 'https://andressamedeiros.pages.dev',
  output: 'static',
  server: { host: true, port: 4321 },
  vite: { server: { allowedHosts } },
});
