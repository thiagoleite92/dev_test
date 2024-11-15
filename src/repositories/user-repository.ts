import { Repository } from 'typeorm';
import { User } from '../database/entity/User';
import { UserType } from '../utils/zod-schemas';
import { AppDataSource } from '../database/db';
import { UserInterface } from './interfaces/user-interface';

export class UserRepository implements UserInterface {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async create({ email, firstName, lastName }: UserType): Promise<User> {
    const newUser = this.userRepository.create({ email, firstName, lastName });

    return this.userRepository.save(newUser);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }

  async findById(userId: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id: userId });
  }
}
