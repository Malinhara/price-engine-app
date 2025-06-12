import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    host: '127.0.0.1', 
    port: 3000,        // can also change this if needed
  },
})
