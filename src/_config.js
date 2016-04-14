var config = {};

config.mongoURI = {
  development: 'mongodb://localhost/hogwarts-mean-app',
  test: 'mongodb://localhost/hogwarts-mean-app-testing',
  production: process.env.MONGODB_URI
};

module.exports = config;
