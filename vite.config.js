import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // Important for user sites on GitHub Pages
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ["src/styles"],
      },
    },
  },
});
