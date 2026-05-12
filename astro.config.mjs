// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  image: {
    service: { entrypoint: "astro/assets/services/noop" },
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
