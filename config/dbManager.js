const ORM = require("./orm");
let connection = require("./connection");

module.exports = new ORM(connection);