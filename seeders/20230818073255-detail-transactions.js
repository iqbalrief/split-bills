'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Detail_Transactions', [{
     transactions_id: 1,
     items: 1,
     quantity: 2,
     amount: 5000,
     createdAt: new Date(),
     updatedAt: new Date(),
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Detail_Transactions', null, {});
     
  }
};
