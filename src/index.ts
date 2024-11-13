import 'reflect-metadata';
import express from 'express';
import { initializeDatabase } from './database/db';
import { router } from './routes';
import errorMiddleware from './middleware/error-middleware';
import { createConnections } from 'typeorm';

const app = express();
app.use(express.json());

initializeDatabase();

app.use('/', router);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
