import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync } from 'node:fs'

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'))

export default defineConfig({
  plugins: [react(), tailwindcss(),],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
  build: {
    cssCodeSplit: false, 
    cssMinify: true, 
    rollupOptions: {
      output: {
        manualChunks: undefined 
      },
    },
  },
  esbuild: {
    drop: ['console', 'debugger']
  },
  server: {
    allowedHosts: [
      '.ngrok-free.app'
    ]
  }
})