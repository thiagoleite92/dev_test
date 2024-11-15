import { RequestHandler } from 'express';
import { z } from 'zod';
import { createPostSchema } from '../utils/zod-schemas';
import { makeCreatePostService } from '../services/factories/make-create-post-service';

export const createPostController: RequestHandler = async (req, res) => {
  const post = createPostSchema.parse(req.body);

  const postCreateService = makeCreatePostService();

  const newPost = await postCreateService.execute(post);

  return res.status(201).send(newPost);
};
