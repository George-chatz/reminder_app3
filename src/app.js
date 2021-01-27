const inquirer = require ('inquirer');
const {addUnits} = require('../utils/army.js');
const {Army} = require('../utils/armydb.js')
require('./db/connection.js');

let sizeR=0;

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
    {type:'rawlist', name: 'Rome', choices:['Legeonaries','Praetorians','Principes' ] }
]
const unitsRomeRanged =[ 
    {type:'rawlist', name: 'Rome', choices:['Velites','Leves','Auxiliary Peltasts' ] }
]
const unitsRomeCavarly =[ 
    {type:'rawlist', name: 'Rome', choices:['Legionary Cavarly','Equites','Auxiliary Parthian Horse Archers' ] }
]

const app = async () => {
    const faction = await inquirer.prompt(firstQuestion);
    if (faction.options == "Rome") {
        if (sizeR < 10) {
            const type = await inquirer.prompt(factions);
            if(type.options == "Meele"){
                const selected = await inquirer.prompt(unitsRomeMeele);
                addUnits(selected);
                const armyR = new Army({selected})
                await armyR.save();
                console.log(armyR);
            }else if (type.options == "Ranged"){
                const selected = await inquirer.prompt(unitsRomeRanged)
                addUnits(selected);
            }else if (type.options == "Cavarly"){
                const selected = await inquirer.prompt(unitsRomeCavarly)
                addUnits(selected);
            }
        }else {
            console.log("You reached max army size for Rome")
        }
    }
    sizeR = sizeR + 1 ;
    app();
}
main();



