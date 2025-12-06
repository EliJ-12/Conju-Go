import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  
  // Para Vercel, usa raíz
  base: '/',
  
  resolve: {
    alias: {
      "@shared": path.resolve(process.cwd(), "shared"),
      "@": path.resolve(process.cwd(), "src"),
    },
  },
  
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});