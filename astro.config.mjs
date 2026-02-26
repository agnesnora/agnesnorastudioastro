// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://agnesnorastudio.hu',
  integrations: [
    react(),
    icon(),
    sitemap(),
    sanity({
      projectId: 'a6fqp12a',
      dataset: 'production',
      useCdn: false, // for static builds
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
