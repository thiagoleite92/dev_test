import { ConflictError, ResourceNotFoundError } from '../errors/ApiError';
import { InMemoryPostRepository } from '../repositories/in-memory/in-memory-post-repository';
import { InMemoryUserRepository } from '../repositories/in-memory/in-memory-user-repository';
import { CreatePostService } from './create-post-service';

let postRepository: InMemoryPostRepository;
let userRepository: InMemoryUserRepository;
let sut: CreatePostService;
describe('Service - Create Post', () => {
  beforeEach(() => {
    postRepository = new InMemoryPostRepository();
    userRepository = new InMemoryUserRepository();
    sut = new CreatePostService(postRepository, userRepository);
  });

  it('should be able to create a post', async () => {
    const user = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    };

    await userRepository.create(user);

    const newPost = {
      title: 'New Post',
      description: 'This is a new post',
      userId: 1,
    };

    await sut.execute(newPost);

    expect(postRepository.items).toHaveLength(1);
    expect(postRepository.items[0].id).toEqual(1);
  });

  it('should throw an error when create post with not found user', async () => {
    const user = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    };

    await userRepository.create(user);

    const newPost = {
      title: 'New Post',
      description: 'This is a new post',
      userId: 12321,
    };

    await expect(sut.execute(newPost)).rejects.toThrow(ResourceNotFoundError);
  });
});
