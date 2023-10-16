import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/components',
      ui: '/ui',
      hooks: '/hooks',
      types: '/types',
      services: '/services',
    },
  },
});
