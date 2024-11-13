import { Router } from 'express';
import { healthController } from '../controllers/health-controller';
import { createUserController } from '../controllers/create-user-controller';
import { resolver } from '../middleware/resolver';
import { createPostController } from '../controllers/create-post- controller';

export const router = Router();

router.get('/health', healthController);

// users
router.post('/users', resolver(createUserController));

//posts
router.post('/posts', resolver(createPostController));
