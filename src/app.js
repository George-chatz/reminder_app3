const inquirer = require ('inquirer')

const main = () => {
    app();
}

const firstQuestion = [
    {type: 'list',name: 'options', message: 'Choose a faction', choices:['Rome','Macedons','Carthage']}
];

const factions = [
    {type: 'list', name: 'options', message: 'Select type of unit', choices:['Meele','Ranged','Cavarly']}
];
const unitsRome

const app = async () => {
    const selected = await inquirer.prompt(firstQuestion);
    if (selected.options == "Rome") {
      const select = await inquirer.prompt(factions);
      app();
  };
};
main();