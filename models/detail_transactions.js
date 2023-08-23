'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detail_Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Detail_Transactions.hasMany(models.Transactions, {
        foreignKey: 'transactions_id',
      });
    }
  }
  Detail_Transactions.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    transactions_id:  {
      type: DataTypes.INTEGER,
      primaryKey:true,
    },
    items: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Detail_Transactions',
  });
  return Detail_Transactions;
};