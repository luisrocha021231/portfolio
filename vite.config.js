import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  build: {
    cssCodeSplit: false, // desactiva el code splitting de CSS
    cssMinify: true, // habilita la minificación de CSS
    rollupOptions: {
      output: {
        manualChunks: undefined // reduce las solicitudes criticas
      },
    },
  },
  esbuild: {
    drop: ['console', 'debugger'] // elimina console.log y debugger en producción
  }
})
