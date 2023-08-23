'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transactions.belongsTo(models.Users, {
        foreignKey: "users_id",
      });
      Transactions.hasMany(models.Detail_Transactions, {
        foreignKey: 'transactions_id',
      });
    }
  }
  Transactions.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    users_id:  {
      type: DataTypes.INTEGER,
    },
    total_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0,
    }
  },
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};