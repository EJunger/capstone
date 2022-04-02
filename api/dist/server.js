"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const User_1 = require("./models/User");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("./config"));
const request_promise_1 = __importDefault(require("request-promise"));
const redis_1 = __importDefault(require("redis"));
const express_session_1 = __importDefault(require("express-session"));
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
    const RedisStore = connectRedis(express_session_1.default);
    const redisClient = redis_1.default.createClient();
    app.use((0, express_session_1.default)({
        name: 'sessId',
        store: new RedisStore({ client: redisClient }),
        secret: 'hsazerltaugh',
        resave: false,
    }));
    app.use((0, cors_1.default)({
        origin: 'http://localhost:3000',
        credentials: true,
    }));
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({
        limit: '50mb',
        extended: true,
    }));
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