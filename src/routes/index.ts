import { Router } from 'express';
import { healthController } from '../controllers/health';
import { createUserController } from '../controllers/create-user';
import { createPostController } from '../controllers/create-post';
import { resolver } from '../middleware/resolver';

export const router = Router();

router.get('/health', healthController);

// users
router.post('/users', resolver(createUserController));

//posts
router.post('/posts', resolver(createPostController));
