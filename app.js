const Sequelize = require('sequelize');

const sequelize = new Sequelize(null, null, null, {
  operatorsAliases: false,
  dialect: 'sqlite',
  storage: '/home/marlin/Documents/dev/node/projects/campionati/db/campionati.db'
});
