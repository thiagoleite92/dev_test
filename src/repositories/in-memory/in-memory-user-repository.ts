import { User } from '../../database/entity/User';
import { UserType } from '../../utils/zod-schemas';
import { UserInterface } from '../interfaces/user-interface';
export class InMemoryUserRepository implements UserInterface {
  public items: User[] = [];
  private id: number = 1;
  async create(user: UserType): Promise<void> {
    this.items?.push({ ...user, id: this.id, post: [] });

    this.id += 1;

    return;
  }
  async findByEmail(email: string): Promise<User | null> {
    const findUser = this.items?.find((user) => user.email === email);

    return findUser ? findUser : null;
  }
  async findById(id: number): Promise<User | null> {
    const findUser = this.items?.find((user) => user.id === id);

    return findUser ? findUser : null;
  }
}
