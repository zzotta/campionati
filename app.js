const Sequelize = require('sequelize');
const path = require('path');

const sequelize = new Sequelize(null, null, null, {
  operatorsAliases: false,
  dialect: 'sqlite',
  storage: path.join(__dirname, 'db/campionati.db')
});

const Campionati = sequelize.define('campionati', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  anno: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Gare = sequelize.define('gare', {
  campionato_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  numero: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  luogo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  data: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

Campionati.sync({force: true});
Gare.sync({force: true});
