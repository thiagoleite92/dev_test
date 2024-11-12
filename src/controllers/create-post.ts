import { RequestHandler } from 'express';
import { z } from 'zod';

const createPostSchema = z.object({
  title: z.string(),
  description: z.string(),
  userId: z.number(),
});

export const createPostController: RequestHandler = async (req, res) => {
  const post = createPostSchema.parse(req.body);

  return res.send(post);
};
