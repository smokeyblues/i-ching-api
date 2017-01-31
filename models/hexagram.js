var mongoose = require('mongoose');

// define hexagram schema
var hexagramSchema = mongoose.Schema({
  title: String,
  unicodeCharacter: String,
  interpretation: String,
  lines: {
    1: String,
    2: String,
    3: String,
    4: String,
    5: String,
    6: String
  }
});

//Export the model
module.exports = mongoose.model('Hexagram', hexagramSchema);
