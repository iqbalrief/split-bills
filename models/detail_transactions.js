'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  detail_transactions.init({
    id: DataTypes.INTEGER,
    transactions_id: DataTypes.INTEGER,
    items: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Detail_Transactions',
  });
  return detail_transactions;
};