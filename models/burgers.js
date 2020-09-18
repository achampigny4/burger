//Dependency connection and ORM
const dbManager = require("../config/dbManager");

let burgers = {
    selectAll: function() {
        return dbManager.selectAll("burgers");
    },
    // The variables cols and vals are arrays.
  createOne: function(cols, vals) {
    return dbManager.createOne("burgers", cols, vals);
  },
  updateOne: function(objColVals, condition) {
    return dbManager.updateOne("burgers", objColVals, condition);
  },
  deleteOne: function(condition) {
    return dbManager.deleteOne("burgers", condition);
  }
}

module.exports = burgers;

