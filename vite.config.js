import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // или используйте другой путь, если структура другая
      public: path.resolve(__dirname, "./public"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[hash][extname]",
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
      },
    },
  },
  server: {
    open: true,
  },
  base: "./",
});

