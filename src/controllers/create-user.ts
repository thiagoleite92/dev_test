import { RequestHandler } from 'express';
import { z } from 'zod';

const createUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
});

export const createUserController: RequestHandler = async (req, res) => {
  const user = createUserSchema.parse(req.body);

  return res.send(user);
};
