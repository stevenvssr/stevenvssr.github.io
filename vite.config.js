import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // user site
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ["src/styles"],
      },
    },
  },
});
