//Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller");

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Server access to routes
app.use(routes);

// Start our server
app.listen(PORT, function() {
  // Log when server has started
  console.log("Server listening on: http://localhost:" + PORT);
});