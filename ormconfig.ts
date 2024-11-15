import 'dotenv/config';

export default {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'test_db',
  synchronize: true,
  logging: false,
  entities: ['src/database/entity/**/*.ts'],
};
