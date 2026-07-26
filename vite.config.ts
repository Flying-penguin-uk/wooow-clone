import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

// GitHub Pages serves project sites from /<repo>/ and has no SPA rewrite,
// so we set a base path and ship a 404.html copy of index.html.
export default defineConfig({
  base: '/wooow-clone/',
  plugins: [
    react(),
    {
      name: 'spa-404-fallback',
      closeBundle() {
        const out = resolve(__dirname, 'dist')
        copyFileSync(resolve(out, 'index.html'), resolve(out, '404.html'))
      },
    },
  ],
})
