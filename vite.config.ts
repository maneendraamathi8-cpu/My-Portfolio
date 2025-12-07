import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/My-Portfolio/',   // REQUIRED FOR GITHUB PAGES
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
