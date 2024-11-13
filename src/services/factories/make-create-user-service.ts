import { UserProvider } from '../../providers/user-provider';
import { CreateUserService } from '../create-user-service';

export const makeCreateUserService = () => {
  const userProvider = new UserProvider();
  const createUserService = new CreateUserService(userProvider);

  return createUserService;
};
