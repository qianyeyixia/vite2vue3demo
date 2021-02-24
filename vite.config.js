import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { babel } from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import path from 'path'
// console.log(path)
import { viteMockServe } from "vite-plugin-mock";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx(), viteMockServe({ supportTs: false })],
  build: {
    rollupOptions: {
      plugins: [
        replace({
            'process.platform': JSON.stringify('win32')
        }), 
        babel({ babelHelpers: 'bundled' })
      ]
    },
  },
  server: {
    hmr: {
      overlay: false
    }
  },
  resolve: {
    alias:{
      "@": path.resolve(__dirname, "src"),
      "comps": path.resolve(__dirname, "src/components"),
      "styles": path.resolve(__dirname, "src/styles"),
      "views": path.resolve(__dirname, "src/views"),
      "plugins": path.resolve(__dirname, "src/plugins"),
      "layouts": path.resolve(__dirname, "src/layouts"),
      "utils": path.resolve(__dirname, "src/utils"),
      "apis": path.resolve(__dirname, "src/apis"),
      "dirs": path.resolve(__dirname, "src/directives"),
    }
  }
}) 
