import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias para src/
      '@assets': path.resolve(__dirname, 'src/assets'), // Alias específico para assets
    },
  },
  server: {
    port: 5173, // Define a porta do dev server
    open: true, // Abre automaticamente no navegador
  },
})
