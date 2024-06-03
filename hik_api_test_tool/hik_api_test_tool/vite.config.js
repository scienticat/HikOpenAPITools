import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath,URL} from 'node:url'
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),basicSsl()],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('.', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    https:true,
    proxy: {
      '/dev-api': {
        target: 'https://*.*.*.*:1443',
        changeOrigin: true,
        secure:false,
        rewrite: (p) => p.replace(/^\/dev-api/, '')
      },
      '/sign-api': {
        target: 'http://*.*.*.*:3000',
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/sign-api/, '')
      }
    }
  }
})


