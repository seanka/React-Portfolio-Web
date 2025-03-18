import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/React-Portfolio-Web/",
  plugins: [
    tailwindcss(),
  ],
})