import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Firebase Hosting is a static host. This separate build keeps Lovable's
// regular Nitro deployment untouched while prerendering every website route.
export default defineConfig({
  nitro: false,
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: true,
    },
  },
});
