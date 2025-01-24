const dotenv = require('dotenv-safe');

dotenv.config();

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
  production: {
    url: process.env.DATABASE_URL, // Ou outra variável de ambiente específica
    dialect: 'postgres',
  },
};
