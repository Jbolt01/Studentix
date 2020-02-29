var express = require('express');
var router = express.Router();
var db = require("../db")
/* GET home page. */
router.get('/', function(req, res, next) {

  res.send("<h1>Your Class is now in session");
});

module.exports = router;
