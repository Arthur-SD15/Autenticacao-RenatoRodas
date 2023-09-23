'use strict';
const crypto = require('../crypto')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      { usuario: 'John Doe', senha: crypto.encrypt('123') },
      { usuario: 'Fulano', senha: crypto.encrypt('456') }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
