var mongoose = require('mongoose');
var schema = mongoose.Schema;
var Place = mongoose.model('Place');

var imageSchema = new Schema({
	path: {type: String},
	description: {type: String},
	place: {type: Schema.ObjectId, ref: "Place" }
});

module.exports = mongoose.model('Image', imageSchema);