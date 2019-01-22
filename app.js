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

const Piloti = sequelize.define('piloti', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cognome: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Categorie = sequelize.define('Categorie', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

const Partecipazioni  = sequelize.define('partecipazioni');

Gare.belongsTo(Campionati, { as: 'campionato'});

Campionati.sync({force: true});
Gare.sync({force: true});
Partecipazioni.sync({force: true});
Piloti.sync({force: true});
Categorie.sync({force: true});