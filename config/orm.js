//Connection Dependency
let connection = require('./connection');

////////////////
// update seed.sql to have boolean values for devoured not null 
//////////////////

//object of mySQL functions
orm = {
    //All Burgers
    //these will be called in burger.js
    selectAll: function (table) {
        return new Promise((resolve, reject) => {
            let queryString = "SELECT * FROM " + table + ";";
            connection.query(queryString, function (err, result) {
                if (err) reject(err);
                resolve(result);
                //////////////////
                console.log("selectAll" + result);
                /////////////////
            });
        });
    },
    //Create Burger

};

// Export the orm object for the model
module.exports = orm;