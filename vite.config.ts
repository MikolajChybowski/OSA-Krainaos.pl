import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import htmlMinifier from 'vite-plugin-html-minifier'

export default defineConfig({
    plugins: [
      htmlMinifier({
        minify: true,
      }),
      ViteImageOptimizer({
          png: { quality: 80 },
          jpeg: { quality: 75 },
          webp: { quality: 80 },
          avif: { quality: 70 },
      }),
    ],
});
