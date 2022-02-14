import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';
import { User } from './models/User';
import { UserResolver } from './resolvers/user';
import cors from 'cors';
import { StudentResolver } from './resolvers/student';
import { Student } from './models/Student';

const PORT = 4000;
const HOST = 'localhost';

const main = async () => {
  await createConnection({
    type: 'postgres',
    database: 'capstone',
    username: 'postgres',
    password: 'postgres',
    logging: true,
    synchronize: true,
    entities: [User, Student],
  });

  const app = express();

  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver, StudentResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  await apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(PORT, () => {
    console.log(`Server listening on http://${HOST}:${PORT}`);
  });
};

main().catch((err) => {
  console.log(err);
});
