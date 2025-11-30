import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.danbildad.my.id',
        changeOrigin: true,
        secure: false,
        // Remove the rewrite rule so /api is preserved when forwarding to the backend
      }
    }
  }
});