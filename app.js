const Sequelize = require('sequelize');
const path = require('path');

const sequelize = new Sequelize(
  `sqlite:${path.join(__dirname, 'db/campionati.db')}`,
  {operatorsAliases: false}
);

const Championship = sequelize.define('championship', {
  name: {type: Sequelize.STRING },
  year: {type: Sequelize.INTEGER}
});

const Round = sequelize.define('round', {
  number  : {type: Sequelize.INTEGER },
  location: {type: Sequelize.STRING  },
  date    : {type: Sequelize.DATEONLY}
});

const Driver = sequelize.define('driver', {
  firstName: {type: Sequelize.STRING},
  lastName : {type: Sequelize.STRING}
});

const Class = sequelize.define('class', {
  name: {type: Sequelize.STRING}
});
