import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    ogTitle: z.string(),
    ogDescription: z.string(),
    ogImage: z.string(),
    ogType: z.string(),
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()).optional(),
  }),
})

export const collections = { blog }
