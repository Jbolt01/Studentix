var express = require('express');
var router = express.Router();
var db = require('../db');
var bcrypt = require('bcrypt-node');

/* GET home page. */
router.get('/', function(req, res){
    res.render('login');
});
router.post('/student', async function(req, res){
    const {username, password} = req.body;
    const user = await db.Student.findOne({username});
    const verified = user.password === password;
    // const verified = await bcrypt.compare(password, user.password);
    if(!verified) return res.send("Error!");
    req.session.user = username;
    req.session.student = true;
    return res.redirect("/student");
});
router.post('/teacher', async function(req, res){
    const {username, password} = req.body;
    const user = await db.Teacher.findOne({username});
    const verified = user.password === password;
    // const verified = await bcrypt.compare(password, user.password);
    if(!verified) return res.send("Error!");
    req.session.user = username;
    req.session.teacher = true;
    return res.redirect("/teacher");
});
module.exports = router;
