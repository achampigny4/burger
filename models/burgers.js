// Dependency require orm functions
const burgers = require('../config/orm');

 //Promise stream of data
 burgers.selectAll('burgers').then(function (result) {
     let data = result;
     console.log(data);
 });

//  insertOne('', '').then(function (result) {
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

module.exports = burgers;