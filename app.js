const Sequelize = require('sequelize');
const path = require('path');

const sequelize = new Sequelize(null, null, null, {
  operatorsAliases: false,
  dialect: 'sqlite',
  storage: path.join(__dirname, 'db/campionati.db')
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  