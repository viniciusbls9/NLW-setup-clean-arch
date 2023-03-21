/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['test/setup.ts'],
    include: ['**/*(*.)?{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache']
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/presentation/assets'),
      '@components': path.resolve(__dirname, './src/presentation/components'),
      '@infra': path.resolve(__dirname, './src/infra'),
      '@gateways': path.resolve(__dirname, './src/gateways'),
      '@context': path.resolve(__dirname, './src/context'),
      '@presentation': path.resolve(__dirname, './src/presentation')
    }
  }
});
