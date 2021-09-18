import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/ui': resolve(__dirname, 'src/components'),
      '@/layout': resolve(__dirname, 'src/layout'),
      '@/view': resolve(__dirname, 'src/view'),
      '@/store': resolve(__dirname, 'src/store'),
      '@/assist': resolve(__dirname, 'src/assist'),
    },
  },
  server: {
    open: true,
  },
})
