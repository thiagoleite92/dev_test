import { Post } from '../../database/entity/Post';
import { User } from '../../database/entity/User';
import { PostType } from '../../utils/zod-schemas';
import { PostInterface } from '../interfaces/post-interface';

export class InMemoryPostRepository implements PostInterface {
  public items: Post[] = [];
  private id: number = 1;
  async create(post: PostType, user: User): Promise<Post> {
    this.items.push({ ...post, id: this.id, user });

    return this.items[this.items.length - 1];
  }
}
