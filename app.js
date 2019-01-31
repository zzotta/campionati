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


const commands = [
  'addChampionship',
  'addChampionshipRound',
  'addDriver',
  'addClass'
];

const completerFunction = (line) => {
  const completions = commands;
  const hits = completions.filter((c) => c.startsWith(line));
  return [hits.length ? hits : completions, line];
};

const rl = readline.createInterface({
  input : process.stdin ,
  output: process.stdout,
  completer: completerFunction,
  prompt: 'championships$ '

});

const proceedQuestion = () => {
  rl.question('Proceed? (y,N): ', answer => {
    if(answer === 'y') {
      console.log('Added.');
    }
    else {
      console.log('Aborted.');
    }
    rl.prompt();
  });
};

const onCommand = () => console.log('WARNING: command not implemented!');

const onAddChampionship = () => {
  rl.question('Championship name: ', name => {
    rl.question('Championship year: ', year => {
      console.log(`Adding "${name}, ${year}"`);
      proceedQuestion();
    });
  });
};

const onCommands = {
  addChampionship: onAddChampionship,
  addChampionshipRound: onCommand,
  addDriver: onCommand,
  addClass: onCommand
};

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
      if(commands.includes(input)) {
        onCommands[input]();
      }
      else {
        console.log('WARNING: Unknown command!');
      }
      rl.prompt();
      break;
  }
});
