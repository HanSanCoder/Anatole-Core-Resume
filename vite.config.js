import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    emptyOutDir: true
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  resolve: {
    alias: {
      '@fortawesome/fontawesome-free': '/node_modules/@fortawesome/fontawesome-free/js/all.js'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss";`
      }
    }
  }
});