const mongoose = require("mongoose");

const armySchema = new mongoose.Schema({
  name: { type: String },
});

const Army = mongoose.model("Army", armySchema);

module.exports = {
  Army,
};