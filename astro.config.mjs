// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://serdna.dev",
  image: {
    service: { entrypoint: "astro/assets/services/noop" },
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
