const Sequelize = require('sequelize');
const path = require('path');
const readline = require('readline');

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


const onCommand = input => console.log(input);

const commands = {
  addChampionship: onCommand,
  addChampionshipRound: onCommand,
  addDriver: onCommand,
  addClass: onCommand
};

const completerFunction = (line) => {
  const completions = Object.keys(commands);
  const hits = completions.filter((c) => c.startsWith(line));
  return [hits.length ? hits : completions, line];
};

const rl = readline.createInterface({
  input : process.stdin ,
  output: process.stdout,
  completer: completerFunction
});

rl.setPrompt('championships$ ');

rl.prompt();

rl.on('line', input => {
  switch(input)
  {
    case 'exit':
      rl.close();
      break;
    case '':
      rl.prompt();
      break;
    default:
      if(input in commands) {
        commands[input](input);
      }
      else {
        console.log('Unknown command');
      }
      rl.prompt();
      break;
  }
});
