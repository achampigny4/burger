//Connection Dependency
let connection = require('./connection');

// * In the `orm.js` file, create the methods
//that will execute the necessary MySQL commands
//in the controllers. These are the methods you
//will need to use in order to retrieve and store
//data in your database.
// ​
//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`
//      * `deleteOne()`

//object of mySQL functions
orm = {
    //Read All Burgers
    //these will be called in burger.js
    selectAll: function (table, col, valOfCol) {
        return new Promise((resolve, reject) => {
            let queryString = "SELECT * FROM ?? ;";
            connection.query(queryString, [table, col, valOfCol], function (err, result) {
                if (err) reject(err);
                resolve(result);
                //////////////////
                console.log(result);
                /////////////////
            });
        });
    },
    //Create Burger
//     insertOne: function () {
//         let queryString = "";
//     },
//     //Update Burger
//     updateOne: function () {
//         let queryString = "";
//     },
//     //Delete Burger
//     deleteOne: function () {
//         let queryString = "";
//     }
};

// Export the orm object for the model
module.exports = orm;