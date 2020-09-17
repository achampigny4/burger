// Dependency require orm functions
const burger = require('../config/orm');

let burgers = {
    selectAll: function() {
        return burger.selectAll("burgers");
    }
}

module.exports = burgers;