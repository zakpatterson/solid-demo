import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  base: '/solid-demo',
  build: {
    target: 'esnext',
    polyfillDynamicImport: false
  }
})
