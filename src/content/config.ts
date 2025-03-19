import { z, defineCollection, reference } from 'astro:content'

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      image: image(),
      imageAlt: z.string(),
      date: z.date(),
      description: z.string().optional()
    //   tags: z.array(reference('tags')),
    }),
});

export const collections = {
  projects,
}