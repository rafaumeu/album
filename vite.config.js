import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    outDir: './public',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests__/setup.js',
    include: ['./src/__tests__/*.test.jsx'],
    exclude: ['src/coverage/**'],
    css: false,
    server: {
      deps: {
        fallbackCJS: true,
      },
    },
  },
})
