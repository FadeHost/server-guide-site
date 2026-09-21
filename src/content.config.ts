import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Every .md file in src/content/pages becomes a page. Add one, and it shows
// up in the menu; delete one, and it is gone.
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
  }),
});

export const collections = { pages };
