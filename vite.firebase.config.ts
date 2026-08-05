import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Firebase Hosting is a static host. This separate build keeps Lovable's
// regular Nitro deployment untouched while prerendering every website route.
export default defineConfig({
  nitro: false,
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) =>
            assetInfo.names.some((name) => name.endsWith(".css"))
              ? "assets/styles-[hash][extname]"
              : "assets/[name]-[hash][extname]",
        },
      },
    },
  },
  tanstackStart: {
    client: { entry: "firebase-client" },
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: true,
    },
  },
});
