'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Transactions', [{
     users_id: 1,
     total_price: 100000,
     createdAt: new Date(),
     updatedAt: new Date(),
     }], {});
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Transactions', null, {});
     
  }
};
