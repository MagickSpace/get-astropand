import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import million from 'million/compiler'

export default defineConfig({
  site: 'https://ark-ui.com',
  vite: {
    plugins: [
      million.vite({
        mode: "react",
        server: true,
        auto: {
          threshold: 0.05,
          skip: ["useBadHook", /badVariable/g],
        },
      }),
    ],
  },
  integrations: [react(), mdx(), sitemap()],
  markdown: {
    syntaxHighlight: false,
  },
})
