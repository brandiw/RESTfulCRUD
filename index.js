//Requirements and app variable
var express = require("express");
var bodyParser = require('body-parser'); //Needed for POST action
var app = express();

//Use and Set Statements
app.use("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.get('/', function(req, res) {
  res.render('home');
});

//Listen
app.listen(3000);
