const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static init(connection) {
    super.init({
        title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
          price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
          },
          soldAt: {
            type: DataTypes.DATE,
          },
          deletedAt: {
            type: DataTypes.DATE,
          },
    }, {
      tableName: 'cards',
      timestamps: true,
      sequelize: connection,
    })
  }
};

module.exports = Product;