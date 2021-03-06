"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const User_1 = require("./models/User");
const user_1 = require("./resolvers/user");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("./config"));
const request_promise_1 = __importDefault(require("request-promise"));
const ioredis_1 = __importDefault(require("ioredis"));
const express_session_1 = __importDefault(require("express-session"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const env_const_1 = require("./env.const");
const PORT = 4000;
const HOST = 'localhost';
const main = async () => {
    await (0, typeorm_1.createConnection)({
        type: 'postgres',
        database: 'capstone',
        username: 'postgres',
        password: 'postgres',
        logging: true,
        synchronize: true,
        entities: [User_1.User],
    });
    const app = (0, express_1.default)();
    const RedisStore = (0, connect_redis_1.default)(express_session_1.default);
    const redis = new ioredis_1.default();
    app.use((0, cors_1.default)({
        origin: 'http://localhost:3000',
        credentials: true,
    }));
    app.use((0, express_session_1.default)({
        name: env_const_1.COOKIE_NAME,
        store: new RedisStore({
            client: redis,
            disableTouch: true,
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365,
            httpOnly: true,
            sameSite: 'lax',
            secure: env_const_1.__prod__,
        },
        saveUninitialized: false,
        secret: 'randostring',
        resave: false,
    }));
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({
        limit: '50mb',
        extended: true,
    }));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [user_1.UserResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({ req, res }),
    });
    await apolloServer.applyMiddleware({
        app,
        cors: false,
    });
    app.get('/', (_, response) => {
        response.json({ info: 'Node.js, Express and Zoom API' });
    });
    var email;
    const payload = {
        iss: config_1.default.production.APIKey,
        exp: new Date().getTime() + 5000,
    };
    const token = jsonwebtoken_1.default.sign(payload, config_1.default.production.APISecret);
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
        (0, request_promise_1.default)(options)
            .then(function (response) {
            console.log('response is: ', response.join_url);
            let dataRes = {
                join_url: response.join_url,
            };
            res.status(200).json(dataRes);
        })
            .catch(function (err) {
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
//# sourceMappingURL=server.js.map