const { Model, DataTypes } = require("sequelize");

class ProductType extends Model {
  static init(connection) {
    super.init({
        typeName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
    }, {
      tableName: 'cards',
      timestamps: true,
      sequelize: connection,
    })
  }
};

module.exports = ProductType;