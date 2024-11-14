import { ConflictError } from '../errors/ApiError';
import { UserRepository } from '../repositories/interfaces/user-interface';
import { UserType } from '../utils/zod-schemas';

export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(user: UserType) {
    const existingUser = await this.userRepository.findByEmail(user?.email);

    if (existingUser) {
      throw new ConflictError('E-mail already in use');
    }

    return this.userRepository.create(user);
  }
}
