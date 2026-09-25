import { defineCollection, z } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        appliesTo: z.string().optional(),
        status: z.string().optional(),
        audience: z.string().optional(),
      }),
    }),
  }),
};
