var express = require('express'),
app = express(),
port = process.env.PORT || 3005,
mongoose = require('mongoose'),
User = require('./models/user'), //created model loading here
configDB = require('./config/database.js'),
bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(configDB.url); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/SpiritHunterRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
