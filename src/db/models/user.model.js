const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(connection) {
    super.init(
      {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          lastName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          balance: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0.00,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          userType: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          deletedAt: {
            type: DataTypes.DATE,
          },
          isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
          },
      },
      {
        sequelize: connection,
        timestamps: true,
        tableName: 'users'
      }
    )
  }
};

module.exports = User;