// Dependency require orm functions
// const burgers = require('../config/orm');

 //Promise stream of data
//  burgers.selectAll("burgers", "burger_name", "devoured").then(function (result) {
//      let data = result;
//      console.log(data);
//  });

//  burgers.insertOne(cols, valOfCol).then(function (result) {
//     let data = result;
//     console.log(data);
// });

//  updateOne('', '').then(function (result) {
//     let data = result;
//     console.log(data);
// });

//  deleteOne('', '').then(function (result) {
//     let data = result;
//     console.log(data);
// });

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

