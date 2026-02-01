// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://your_domain.com', // Required for sitemap
    output: 'static',

    image: {
        // service: { entrypoint: 'astro/assets/services/noop' } // Removed to enable default Sharp service
    },

    vite: {
        build: {
            minify: 'esbuild', // Ensure minification is enabled
        },
    },

    prefetch: true,

    markdown: {
        shikiConfig: {
            themes: {
                light: 'github-light',
                dark: 'github-dark',
            },
        },
    },

    integrations: [sitemap()],
});