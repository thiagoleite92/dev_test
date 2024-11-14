import { PostRepository } from '../../repositories/post-repository';
import { UserRepository } from '../../repositories/user-repository';
import { CreatePostService } from '../create-post-service';

export const makeCreatePostService = () => {
  const postRepository = new PostRepository();
  const userRepository = new UserRepository();
  const createPostService = new CreatePostService(
    postRepository,
    userRepository
  );

  return createPostService;
};
