const dotenv = require('dotenv-safe');

dotenv.config();

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
  // outras configurações (test, production) se necessário
};
