// server.js

// BASE SETUP
// ==============================================

// call the packages I need
var express = require('express') //call express
var app = express()
var bodyParser = require ('body-parser');
var mongoose = require('mongoose');
var Panel = require('./app/models/panel.js')
var controllers = require('./controllers')

// configure the app to use bodyParser()
// this will allow us to get the data from POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// connection to database
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o')


// ROUTES FOR OUR API
// ================================

// get and instance of the express Router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next){
  // do the logging
  console.log('Something is happening.');
  // this makes sure we move to the next route and not stop here.
  next();
});

// test route to make sure everything is working (accessed at GET http:localhost:8080/api)
router.get('/', function(req, res) {
  res.json({"panels":"lots of them"});
});

// available at http://localhost:8080/api/products
router.route('/products')
  .all(controllers.getItems)
// more routes for our API here


// REGISTER OUR ROUTES -----------------
// all our routes will be prefied with /api
app.use('/api', router);


// START THE SERVER
// =================================
app.listen(port);
console.log('Magic happening on port ' + port);