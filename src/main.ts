import './styles/style.css'

import { defineConfig } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
    plugins: [
        ViteImageOptimizer({
            png: { quality: 80 },
            jpeg: { quality: 75 },
            webp: { quality: 80 },
            avif: { quality: 70 },
            svg: {
                plugins: [
                    { name: 'sortAttrs' },
                ],
            },
        }),
    ],
});