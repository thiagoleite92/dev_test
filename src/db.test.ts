import axios from 'axios';
import { createConnection, DataSource } from 'typeorm';

let conn: DataSource;
let userId: number | null;

const testUser = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
};

const testPost = {
  title: 'Some message',
  description: 'Some description',
  userId: null as number | null,
};

describe('create user', () => {
  beforeAll(async () => {
    conn = await createConnection();
    await conn.synchronize(true);
  });

  afterAll(async () => {
    await conn.close();
  });

  it('should create a user', async () => {
    const response = await axios.post('http://localhost:3000/users', testUser);

    userId = response.data.id;

    expect(response.status).toBe(201);
    expect(response.data).toEqual({
      id: expect.any(Number),
      firstName: testUser.firstName,
      lastName: testUser.lastName,
      email: testUser.email,
    });
  });

  it('should create a post', async () => {
    testPost.userId = userId;
    const response = await axios.post('http://localhost:3000/posts', testPost);

    expect(response.status).toBe(201);
    expect(response.data).toEqual({
      id: expect.any(Number),
      title: testPost.title,
      description: testPost.description,
      user: {
        id: userId,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
      },
    });
  });
});
