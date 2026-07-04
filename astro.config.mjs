import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://do-mapa-del-sabor.vercel.app',
  integrations: [sitemap()],
});
