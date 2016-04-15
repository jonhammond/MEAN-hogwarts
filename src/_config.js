var config = {};
// var flask = require('flask');

config.mongoURI = {
  development: 'mongodb://localhost/hogwarts-mean-app',
  test: 'mongodb://localhost/hogwarts-mean-app-testing',
  production: process.env.MONGODB_URI
};

// config.SALT_WORK_FACTOR = {
//   development: 10,
//   test: 10,
//   production: 12
// };

config.SALT_WORK_FACTOR = 10;

config.TOKEN_SECRET = 'g\x9c\xbb\xc4\xe6\xf9\xd9\xe1V\x99\x0f\xfc\xbe\xa1=E\x8b7\xe4\xff\x87\x07XI\xcc';

module.exports = config;
