import express from 'express';
import { createConnection } from 'typeorm';
import { User } from './models/User';
import cors from 'cors';

const PORT = 4000;
const HOST = 'localhost';

const main = async () => {
  const conn = await createConnection({
    type: 'postgres',
    database: 'capstone',
    username: 'postgres',
    password: 'postgres',
    logging: true,
    synchronize: true,
    entities: [User],
  });

  const app = express();

  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

  app.listen(PORT, () => {
    console.log(`Server listening on http://${HOST}:${PORT}`);
  });
};

main().catch((err) => {
  console.log(err);
});
