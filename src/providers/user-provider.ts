import { DataSource, getRepository, Repository } from 'typeorm';
import { User } from '../database/entity/User';
import { UserRepository } from '../repositories/user-repository';
import { UserType } from '../utils/zod-schemas';
import { AppDataSource } from '../database/db';
import { ResourceNotFoundError } from '../errors/ApiError';

export class UserProvider implements UserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = AppDataSource.getRepository(User);
  }

  async create({ email, firstName, lastName }: UserType) {
    const newUser = new User();

    newUser.email = email;
    newUser.firstName = firstName;
    newUser.lastName = lastName;

    await this.userRepository.save(newUser);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }

  async findById(userId: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id: userId });
  }
}
