import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: 'index.html',
        privacy: 'privacy.html',
        support: 'support.html'
      }
    }
  }
});
