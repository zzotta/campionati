const Sequelize = require('sequelize');
const path = require('path');
const readline = require('readline');

const sequelize = new Sequelize(
  `sqlite:${path.join(__dirname, 'db/campionati.db')}`,
  {operatorsAliases: false}
);


const Championship = sequelize.define('championship', {
  name: {type: Sequelize.STRING,  unique: 'uniqueIndex'},
  year: {type: Sequelize.INTEGER, unique: 'uniqueIndex'}
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

sequelize.sync().then(() => {

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


const onCommand = () => console.log('WARNING: command not implemented!');

const insert = (row, table) => {
  console.log(`Adding ${JSON.stringify(row)} to ${table.name}`);
  rl.question('Proceed? (y,N): ', proceed => {
    if(proceed === 'y') {
      table.create(row).then(() => {
        rl.prompt();
      }).catch(error => {
        console.log(`====> ERROR: ${error.name} [${error.fields}]`);
        rl.prompt();
      });
    }
    else {
      console.log('Aborted.');
      rl.prompt();
    }
  });
};


const onAddChampionship = () => {
  let answer = {name: undefined, year: undefined};
  let table = Championship;
  
  rl.question('Championship name: ', name_answer => {
    rl.question('Championship year: ', year_answer => {
      answer.name = name_answer;
      answer.year = year_answer;
      insert(answer, table);
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

});
