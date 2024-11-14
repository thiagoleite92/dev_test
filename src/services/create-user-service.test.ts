import { ConflictError } from '../errors/ApiError';
import { InMemoryUserRepository } from '../repositories/in-memory/in-memory-user-repository';
import { UserRepository } from '../repositories/user-repository';
import { CreateUserService } from './create-user-service';

let userRepository: InMemoryUserRepository;
let sut: CreateUserService;
describe('Service - Create User', () => {
  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    sut = new CreateUserService(userRepository);
  });

  it('should be able to create a user', async () => {
    const newUser = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    };

    await sut.execute(newUser);
    expect(userRepository.items).toHaveLength(1);
    expect(userRepository.items[0].id).toEqual(1);
  });

  it('should throw an error when create user with duplicate email', async () => {
    const newUser1 = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    };

    const newUser2 = {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    };

    await sut.execute(newUser1);
    await expect(sut.execute(newUser2)).rejects.toThrow(ConflictError);
  });
});
