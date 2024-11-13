import { User } from '../database/entity/User';
import { PostType } from '../utils/zod-schemas';

export interface PostRepository {
  create(post: PostType, user: User): Promise<void>;

  // findAll(): Promise<User[]>;

  // findById(id: number): Promise<User | null>;
}
