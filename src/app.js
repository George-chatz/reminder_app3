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
const unitsRomeMeele =[ 
    {type:'checkbox', name: 'options', choices:['Legeonaries','Praetorians','Principes' ] }
]

const app = async () => {
    const faction = await inquirer.prompt(firstQuestion);
    if (faction.options == "Rome") {
      const type = await inquirer.prompt(factions);
      if(type.options == "Meele"){
          const selected = await inquirer.prompt(unitsRomeMeele);
          addUnitsRome();
      }
      app();
  };
};
main();