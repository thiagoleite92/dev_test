import { PostProvider } from '../../providers/post-provider';
import { UserProvider } from '../../providers/user-provider';
import { CreatePostService } from '../create-post-service';

export const makeCreatePostService = () => {
  const postProvider = new PostProvider();
  const userProvider = new UserProvider();
  const createPostService = new CreatePostService(postProvider, userProvider);

  return createPostService;
};
