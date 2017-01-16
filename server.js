
var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan')('dev'),
    mongoose = require('mongoose'),
    Routes = require('./routes'),
    PORT = process.env.PORT || 1411;

mongoose.connect('mongodb://localhost/i-ching-api');

var app = express();

app.use(
  express.static('public'),
  morgan,
  bodyParser.json(),
  bodyParser.urlencoded({extended : true})
);

Routes(app);

app.listen(PORT, ()=>{
  console.log(`Server is Running on port ${PORT}`);
});
