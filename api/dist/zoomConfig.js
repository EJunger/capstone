const env = process.env.NODE_ENV || "production";

const config = {
  development: {
    APIKey: "",
    APISecret: "",
  },
  production: {
    APIKey: "5ObbipMsSsSKxaVY0-9Mjg",
    APISecret: "DLphPA3pQziG2ouSd0ORRFNCukVy1okozKEL",
  },
};

module.exports = config[env];