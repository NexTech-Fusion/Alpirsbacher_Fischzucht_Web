import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Vite configuration specifically for shop development and build
export default defineConfig(({ mode }) => ({
  // Use shop.html as the main entry point
  root: ".",
  publicDir: "public",
  server: {
    host: "::",
    port: 8081, // Different port to avoid conflicts
    open: "/shop.html", // Open shop.html directly
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        shop: path.resolve(__dirname, 'shop.html'),
      },
      output: {
        entryFileNames: 'assets/shop-[hash].js',
        chunkFileNames: 'assets/shop-[hash].js',
        assetFileNames: 'assets/shop-[hash][extname]'
      }
    },
  },
})); 