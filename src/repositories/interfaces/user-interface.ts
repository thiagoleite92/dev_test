import { User } from '../../database/entity/User';
import { UserType } from '../../utils/zod-schemas';

export interface UserInterface {
  create(user: UserType): Promise<User>;

  findByEmail(email: string): Promise<User | null>;

  findById(id: number): Promise<User | null>;
}
