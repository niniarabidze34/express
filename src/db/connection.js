const { Sequelize } = require('sequelize');
const config = require('./config');
const { Products, ProductType, Transactions, Users } = require('./models');
const User = require('./models/user.model');

const connection = new Sequelize(
  config.name,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: 'postgres',
  }
);

(async () => {
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();


Products.init(connection);
ProductType.init(connection);
Transactions.init(connection);
Users.init(connection);

User.hasMany( Products , {
  as : 'product',
  foreignKey : {
    name : 'userId',
    allowNull: false
  }
})

ProductType.hasMany( Products , {
  as : 'product',
  foreignKey : {
    name : 'typeId',
    allowNull: false
  }
})

(async () => {

  const syncPromises = [
    User.sync({ force: false }).catch((e) => console.error('User', e)),
    Card.sync({ force: false }).catch((e) => console.error('Card', e)),
  ];

  await Promise.all(syncPromises);
})()

module.exports = connection;
