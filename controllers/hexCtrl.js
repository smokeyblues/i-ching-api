var Hexagram = require('../models/Hexagram');

module.exports = {

  get : (req, res) =>{
    // get one
    if (req.params.id) {
      Hexagram.findOne({_id : req.params.id}).exec((err, hexagram)=>{
        if (err) {
          return res.send(err)
        }

        if (hexagram) {
          res.send(hexagram)
        } else {
          res.send({badThing : 'No hexagram found'})
        }
      });
    }
    //get many
    else {
      var query = {};

      //loop over the req.query object and pass the key:value pairs onto the query object
      for (var param in req.query) {
        query[param] = req.query[param]
      }

      Hexagram
        .find(query)
        .exec((err, hexagrams)=>{
          if (err) {
            return res.send(err)
          }
          res.send(hexagrams)
        });
    }
  }
}
