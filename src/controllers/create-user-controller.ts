import { RequestHandler } from 'express';
import { z } from 'zod';
import { createUserSchema } from '../utils/zod-schemas';
import { makeCreateUserService } from '../services/factories/make-create-user-service';

export const createUserController: RequestHandler = async (req, res) => {
  const user = createUserSchema.parse(req.body);

  const createUserService = makeCreateUserService();

  const newUser = await createUserService.execute(user);

  return res.status(201).send(newUser);
};
