// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// Two build targets:
//   DEPLOY_TARGET=node (default): static pages plus the /api/interest endpoint,
//     served by the standalone Node server (see Dockerfile).
//   DEPLOY_TARGET=pages: static pages only, for GitHub Pages. The join form then
//     posts to PUBLIC_INTEREST_ENDPOINT, a Node deployment running elsewhere.
const target = process.env.DEPLOY_TARGET === 'pages' ? 'pages' : 'node';
process.env.PUBLIC_INTEREST_ENDPOINT ??= target === 'node' ? '/api/interest' : '';

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
