const express = require('express');
const burger = require('../models/burgers');
const router = express.Router();

router.get("/", async function(req, res) {
  const hbsObject = { burgers: await burger.selectAll() };
  console.log(hbsObject);
  res.render("index", hbsObject);
});

// Export routes for server.js to use.
module.exports = router;