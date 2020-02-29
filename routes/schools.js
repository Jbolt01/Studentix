var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.School.find({}, function(err, schoolObjs) {
    var schoolMap= [];

    schoolObjs.forEach(function(s) {
      console.log(s);
      schoolMap.push(s);
    });
    console.log(schoolMap);
    res.render("schools", {r:schoolMap} )
  });
});
module.exports = router;
