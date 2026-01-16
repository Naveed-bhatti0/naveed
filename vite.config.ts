import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/naveed/", // GitHub Pages ke liye important
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ✅ Alias fix
    },
  },
  server: {
    host: "::",
    port: 8080,
  }
});
