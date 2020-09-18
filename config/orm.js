// Import MySQL connection.
class ORM {
    connection;

    constructor(connection) {
        this.connection = connection;
    }

    query = (queryString, vals) => {
        return new Promise((resolve, reject) => {
            this.connection.query(queryString, vals, function (err, result) {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        })
    };
    // Helper function
    printQuestionMarks(num) {
        const arr = [];
        for (let i = 0; i < num; i++) {
            arr.push("?");
        }
        return arr.toString();
    }
    // Helper function to convert object key/value pairs to SQL syntax
    objToSql(ob) {
        const arr = [];
        // loop through the keys and push the key/value as a string int arr
        for (let key in ob) {
            const value = ob[key];
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
    }

    // Object for all SQL statement functions.
    selectAll(tableInput) {
        return this.query("SELECT * FROM " + tableInput + ";");
    }

    createOne(table, cols, vals) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += this.printQuestionMarks(vals.length);
        queryString += ");";

        console.log(queryString);

        return this.query(queryString, vals);
    }
    updateOne(table, objColVals, condition) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += this.objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        return this.query(queryString);
    }

    deleteOne(table, condition) {
        let queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        return this.query(queryString);
    }

}

// Export the orm object for the model
module.exports = ORM;

//Reference: cats app class activity