import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@libs": path.resolve(__dirname, "src/libs"),
      "@types": path.resolve(__dirname, "src/types"),
      "@theme": path.resolve(__dirname, "src/theme"),
      "@store": path.resolve(__dirname, "src/store"),
      "@data": path.resolve(__dirname, "src/data"),
      "@context": path.resolve(__dirname, "src/context"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    hmr: true,
  },
});
