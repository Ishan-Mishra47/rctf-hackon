
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

const DEV_API_URL = 'http://127.0.0.1:3000'
// const DEV_API_URL = 'https://demo.rctf.osec.io'

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    allowedHosts: ['c225-103-211-18-22.ngrok-free.app'],
    proxy: {
      '/api': {
        target: DEV_API_URL,
        changeOrigin: true,
      },
      '/uploads': {
        target: DEV_API_URL,
        changeOrigin: true,
      },
    },
  },
})
