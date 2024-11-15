import { Repository } from 'typeorm';
import { User } from '../database/entity/User';
import { PostType } from '../utils/zod-schemas';
import { AppDataSource } from '../database/db';
import { Post } from '../database/entity/Post';
import { PostInterface } from './interfaces/post-interface';

export class PostRepository implements PostInterface {
  private postRepository: Repository<Post>;

  constructor() {
    this.postRepository = AppDataSource.getRepository(Post);
  }

  async create({ description, title }: PostType, user: User): Promise<Post> {
    const newPost = this.postRepository.create({ description, title });

    newPost.user = user;

    return await this.postRepository.save(newPost);
  }
}
