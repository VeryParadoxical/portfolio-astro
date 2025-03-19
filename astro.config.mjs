// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://www.adammilner.co.uk',
});