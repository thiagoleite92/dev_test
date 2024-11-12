import { DataSource } from 'typeorm';
import { Post } from '../entity/Post';
import { User } from '../entity/User';

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'test_db',
  entities: [User, Post],
  synchronize: true,
});

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const initializeDatabase = async () => {
  await wait(20000);
  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');
  } catch (err) {
    console.error('Error during Data Source initialization:', err);
    process.exit(1);
  }
};
