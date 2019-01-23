const Sequelize = require('sequelize');
const path = require('path');

const sequelize = new Sequelize(
  `sqlite:${path.join(__dirname, 'db/campionati.db')}`,
  {operatorsAliases: false}
);

const Campionati = sequelize.define('campionati', {
  nome: {type: Sequelize.STRING },
  anno: {type: Sequelize.INTEGER}
});

const Gare = sequelize.define('gare', {
  numero: {type: Sequelize.INTEGER},
  luogo:  {type: Sequelize.STRING },
  data:   {type: Sequelize.DATE   }
});

const Piloti = sequelize.define('piloti', {
  nome:    {type: Sequelize.STRING},
  cognome: {type: Sequelize.STRING}
});

const Categorie = sequelize.define('Categorie', {
  nome: {type: Sequelize.STRING}
});

const Partecipazioni  = sequelize.define('partecipazioni');

Gare.belongsTo(Campionati, { as: 'campionato'});

sequelize.sync();
