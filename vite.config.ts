import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), wasm(), topLevelAwait()],
  resolve: {
    alias: {
      'node-fetch': 'node-fetch-polyfill',
      'buffer': 'buffer',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
    exclude: ['lucid-cardano'],
  },
  build: {
    target: 'es2020',
  },
  define: {
    'process.env': {},
  },
  server: {
    host: '0.0.0.0', // Cho phép truy cập từ bên ngoài
    port: process.env.PORT ? Number(process.env.PORT) : 3000, // Sử dụng cổng do Render chỉ định
  },
})
