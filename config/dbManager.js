const ORM = require("./ORM");
let connection = require("./connection");

module.exports = new ORM(connection);