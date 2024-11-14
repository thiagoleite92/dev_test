import { ConflictError } from '../errors/ApiError';
import { UserInterface } from '../repositories/interfaces/user-interface';
import { UserRepository } from '../repositories/user-repository';
import { UserType } from '../utils/zod-schemas';

export class CreateUserService {
  constructor(private readonly userRepository: UserInterface) {}

  async execute(user: UserType) {
    const existingUser = await this.userRepository.findByEmail(user?.email);

    if (existingUser) {
      throw new ConflictError('E-mail already in use');
    }

    return this.userRepository.create(user);
  }
}
