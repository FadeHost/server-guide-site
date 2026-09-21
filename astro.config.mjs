import { defineConfig } from "astro/config";

export default defineConfig({
  // Every page is built to plain HTML at build time. There is no server to
  // run: FadeHost serves the files in dist/.
  output: "static",
  // Put your own address here once the site is live. It is used for canonical
  // links and for the sitemap.
  site: "https://example.fadehost.app",
  build: { format: "directory" },
});
