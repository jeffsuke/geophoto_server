var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var User = require('./app/models/user')
var Location = require('./app/models/location')

var users = require('./app/users/index')
var locations = require('./app/locations/index')

var port = process.env.PORT || 3000;
var router = express.Router();

mongoose.connect('mongodb://localhost/geoPhoto');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

router.get('/', function(req, res) {
  res.json({message: 'Hello World!'})
})

app.use('/users', users)
app.use('/locations', locations)

app.listen(port)
console.log('listen on port' + port);
