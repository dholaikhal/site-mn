// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// Every page is prerendered. Only /api/interest runs on the server, so the
// interest list is collected on our own box rather than a third-party form service.
export default defineConfig({
  site: 'https://mukto.net',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  i18n: {
    locales: ['en', 'bn'],
    defaultLocale: 'en',
  },
});
