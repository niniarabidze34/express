const { Model, DataTypes } = require("sequelize");

class Transactions extends Model {
  static init(connection) {
    super.init({
        sellerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          buyerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
          },
    }, {
      tableName: 'cards',
      timestamps: true,
      sequelize: connection,
    })
  }
};

module.exports = Transactions;