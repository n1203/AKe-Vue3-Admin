import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
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
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
  // hostname: '0.0.0.0', // 默认是 localhost
  // port: '8000', // 默认是 3000 端口
  // open: true, // 浏览器自动打开
  // https: false, // 是否开启 https
  // ssr: false, // 服务端渲染
  base: './', // 生产环境下的公共路径
  build: {
    outDir: 'docs', // 打包构建输出路径，默认 dist ，如果路径存在，构建之前会被删除
  }
})
