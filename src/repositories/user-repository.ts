import { User } from '../database/entity/User';
import { UserType } from '../utils/zod-schemas';

export interface UserRepository {
  create(user: UserType): Promise<void>;

  findByEmail(email: string): Promise<User | null>;

  // findAll(): Promise<User[]>;

  // findById(id: number): Promise<User | null>;
}
