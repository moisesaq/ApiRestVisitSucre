var mongoose = require('mongoose');
var Place = mongoose.model('Place');

//GET - Return all places in the DB Visit Sucre
exports.findAllPlaces = function(req, res){
  Place.find(function(err, places){
    if(err) res.send(500, err.message);

    console.log('GET /places');
    res.status(200).jsonp(places);
  });
};

//ADD a place in the DB
exports.addPlace = function(req, res){
  console.log('POST /addPlace/');
  console.log(req.body);
   var place = new Place({
     code: req.body.code,
     name: req.body.name,
     address: req.body.address,
     latitude: req.body.latitude,
     longitude: req.body.longitude,
     description: req.body.description,
     pathImage: req.body.pathImage,
     category: req.body.category
   });

   place.save(function(err, place){
     if(err) return res.status(500).send(err.message);
     res.status(200).jsonp(place);
   });
};
