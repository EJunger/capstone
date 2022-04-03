"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    development: {
        APIKey: "",
        APISecret: "",
    },
    production: {
        APIKey: "5ObbipMsSsSKxaVY0-9Mjg",
        APISecret: "DLphPA3pQziG2ouSd0ORRFNCukVy1okozKEL",
    },
    env: process.env.NODE_ENV || "production"
};
exports.default = config;
//# sourceMappingURL=config.js.map