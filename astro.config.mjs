// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// Where the join form and terminal send sign-ups. Formboost by default; set
// PUBLIC_INTEREST_ENDPOINT=/api/interest to use the self-hosted endpoint instead.
const FORMBOOST_ENDPOINT = 'https://formboost.app/f/4t1nqc0j';

// Two build targets:
//   DEPLOY_TARGET=node (default): static pages plus the optional /api/interest
//     endpoint, served by the standalone Node server (see Dockerfile).
//   DEPLOY_TARGET=pages: static pages only, for GitHub Pages.
const target = process.env.DEPLOY_TARGET === 'pages' ? 'pages' : 'node';
process.env.PUBLIC_INTEREST_ENDPOINT ||= FORMBOOST_ENDPOINT;

/** @type {import('astro').AstroIntegration} */
const interestApi = {
  name: 'interest-api',
  hooks: {
    'astro:config:setup': ({ injectRoute }) => {
      injectRoute({ pattern: '/api/interest', entrypoint: './src/api/interest.ts', prerender: false });
    },
  },
};

export default defineConfig({
  site: 'https://mukto.net',
  output: 'static',
  adapter: target === 'node' ? node({ mode: 'standalone' }) : undefined,
  integrations: target === 'node' ? [interestApi] : [],
  // Astro's origin check would reject posts from GitHub Pages. The endpoint
  // enforces its own origin allowlist instead (src/api/interest.ts).
  security: { checkOrigin: false },
  i18n: {
    locales: ['en', 'bn'],
    defaultLocale: 'en',
  },
});
