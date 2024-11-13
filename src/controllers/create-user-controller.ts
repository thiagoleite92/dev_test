import { RequestHandler } from 'express';
import { z } from 'zod';
import { createUserSchema } from '../utils/zod-schemas';
import { CreateUserService } from '../services/create-user-service';
import { UserProvider } from '../providers/user-provider';
import { makeCreateUserService } from '../services/factories/make-create-user-service';

export const createUserController: RequestHandler = async (req, res) => {
  const user = createUserSchema.parse(req.body);

  const createUserService = makeCreateUserService();

  await createUserService.execute(user);

  return res.send(user);
};
