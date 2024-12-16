// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://damienrj.github.io',
  base: 'walterljohnson',
  // output: 'hybrid',
  integrations: [tailwind()],
  // adapter: vercel(),
  experimental: { contentLayer: true }
});

