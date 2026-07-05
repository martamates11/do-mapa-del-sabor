import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://do-mapa-del-sabor.vercel.app',
  integrations: [sitemap()],
  adapter: vercel(),
});
