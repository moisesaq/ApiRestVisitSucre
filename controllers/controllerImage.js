var mongoose = require('mongoose');
var Image = mongoose.model('Image');

exports.findAllImages = function(req, res){
	Image.find(function(err, images){
		if(err) res.send(500, err.message);

		console.log('GET /images');
		res.status(200).jsonp({status: 1, images: images});
	});
}

exports.addImage = function(req, res){
	console.log('POST /addImage/');
	console.log(req.body);
	var image = new Image({
		path: req.body.path,
		description: req.body.description,
		place: req.body.place
	});

	image.save(function(err, image){
		if(err) return res.status(500).send(err.message);
		res.status(200).jsonp({status: 1, image: image});
	});
}