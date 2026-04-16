// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://thz-renovierung.de',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    format: 'directory'
  },
  compressHTML: true,
  prefetch: true
});
