import { Post } from '../../database/entity/Post';
import { User } from '../../database/entity/User';
import { PostType } from '../../utils/zod-schemas';

export interface PostInterface {
  create(post: PostType, user: User): Promise<Post>;
}
