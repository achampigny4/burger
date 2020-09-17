//Connection Dependency
const connection = require('./connection');

////////////////
// update seed.sql to have boolean values for devoured not null 
//////////////////

// create an array of question marks and turns it into a string.
function printQuestionMarks(num) {
    let arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};

// convert object key/value pairs to SQL syntax
function objToSql(ob) {
    let arr = [];
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        let value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
};

//object of mySQL functions
orm = {
    //All Burgers
    //these will be called in burger.js
    selectAll: function (table, cols, valOfCol) {
        return new Promise((resolve, reject) => {
            let queryString = "SELECT * FROM " + table + ";";
            connection.query(queryString, [table, cols, valOfCol], function (err, result) {
                if (err) reject(err);
                resolve(result);
                //////////////////
                console.log("selectAll queryString here :" + result);
                /////////////////
            });
        });
    },
    //Create Burger
    insertOne: function (table, cols, valOfCol, cb) {
        return new Promise((resolve, reject) => {
            let queryString = "INSERT INTO " + table;
            queryString += " (";
            queryString += cols.toString();
            queryString += ") ";
            queryString += "VALUES (";
            queryString += printQuestionMarks(valOfCol.length);
            queryString += ") ";
            connection.query(queryString, function (err, result) {
                if (err) reject(err);
                resolve(result);
                //////////////////
                console.log("insertOne queryString here :" + result);
                /////////////////
            });
        })
    },
    //Update Burger
    updateOne: function (table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        ////////////////////////
        console.log("updateOne queryString here:" + queryString);
        ////////////////////////
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // Delete Burger
    deleteOne: function (table, condition, cb) {
        let queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
        ////////////////////////
        console.log("deleteOne queryString here:" + queryString);
        ////////////////////////
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

// Export the orm object for the model
module.exports = orm;