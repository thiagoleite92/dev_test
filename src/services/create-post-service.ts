import { ResourceNotFoundError } from '../errors/ApiError';
import { PostRepository } from '../repositories/interfaces/post-interface';
import { UserRepository } from '../repositories/interfaces/user-interface';
import { PostType } from '../utils/zod-schemas';

export class CreatePostService {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly userRepository: UserRepository
  ) {}
  async execute(post: PostType) {
    const { userId } = post;

    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new ResourceNotFoundError('User not found');
    }

    await this.postRepository.create(post, user);
  }
}