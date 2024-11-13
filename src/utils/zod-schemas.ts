import { z } from 'zod';

export const createUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
});

export type UserType = z.infer<typeof createUserSchema>;
