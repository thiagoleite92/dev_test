import { z } from 'zod';

export const createUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
});

export type UserType = z.infer<typeof createUserSchema>;

export const createPostSchema = z.object({
  title: z.string(),
  description: z.string(),
  userId: z.number(),
});

export type PostType = z.infer<typeof createPostSchema>;
