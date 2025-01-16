import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@entites": path.resolve(__dirname, "./src/entities"),
    }
  },

  server: {
    port: 5000
  }
})


