// Dependency require orm functions
const {
    selectAll,
    insertOne,
    updateOne,
    deleteOne
 } = require('../config/orm');

 //promise stream of data
 selectAll('', '').then(function (result) {
     let data = result;
     console.log(data);
 });

 insertOne('', '').then(function (result) {
    let data = result;
    console.log(data);
});

 updateOne('', '').then(function (result) {
    let data = result;
    console.log(data);
});

 deleteOne('', '').then(function (result) {
    let data = result;
    console.log(data);
});

module.exports = burgers;