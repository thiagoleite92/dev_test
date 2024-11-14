import { UserRepository } from '../../repositories/user-repository';
import { CreateUserService } from '../create-user-service';

export const makeCreateUserService = () => {
  const userRepository = new UserRepository();
  const createUserService = new CreateUserService(userRepository);

  return createUserService;
};
