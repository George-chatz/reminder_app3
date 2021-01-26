const fs = require('fs');

const addUnits = (units) => {
    const Units = loadUnits ();
    Units.push({units});
    saveUnits(Units);
}

const loadUnits = () => {
    try {
      const dataBuffer = fs.readFileSync("src/Units.json");
      const UnitsJson = dataBuffer.toString();
      return JSON.parse(UnitsJson);
    } catch (error) {
      return [];
    }
  };

  const saveUnits = (units) => {
    const UnitsJson = JSON.stringify(units);
    fs.writeFileSync("src/Units.json", UnitsJson);
  };


module.exports = {
    addUnits,
}