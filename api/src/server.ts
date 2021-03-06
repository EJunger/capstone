import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';
import { User } from './models/User';
import { UserResolver } from './resolvers/user';
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import config from './config';
import rp from 'request-promise';

//Session start
import Redis from 'ioredis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import { COOKIE_NAME, __prod__ } from './env.const';

//must have postgres running on port 4000
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
    entities: [User],
  });

  const app = express();

  const RedisStore = connectRedis(session);
  const redis = new Redis();

  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365, //1 year
        httpOnly: true,
        sameSite: 'lax', //csrf
        secure: __prod__, //Cookie only works in https
      },
      saveUninitialized: false, //create an empty session, false for no
      secret: 'randostring', //! change me
      resave: false,
    })
  );

  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      limit: '50mb',
      extended: true,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  await apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  //Zoom
  app.get('/', (_, response) => {
    response.json({ info: 'Node.js, Express and Zoom API' });
  });

  var email;
  const payload = {
    iss: config.production.APIKey,
    exp: new Date().getTime() + 5000,
  };

  const token = jwt.sign(payload, config.production.APISecret);

  app.post('/meeting', (req, res) => {
    email = req.body.email;
    var options = {
      method: 'POST',
      uri: 'https://api.zoom.us/v2/users/' + email + '/meetings',
      body: {
        topic: 'Meeting',
        type: 1,
        settings: {
          host_video: 'true',
          participant_video: 'true',
        },
      },
      auth: {
        bearer: token,
      },
      headers: {
        'User-Agent': 'Zoom-api-Jwt-Request',
        'content-type': 'application/json',
      },
      json: true,
    };

    rp(options)
      .then(function (response: { join_url: any }) {
        console.log('response is: ', response.join_url);
        let dataRes = {
          join_url: response.join_url,
        };
        res.status(200).json(dataRes);
      })
      .catch(function (err: any) {
        console.log('API call failed, reason ', err);
      });
  });

  app.listen(PORT, () => {
    console.log(`Server live on http://${HOST}:${PORT}`);
  });
};

main().catch((err) => {
  console.log(err);
});
