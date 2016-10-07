var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Category = mongoose.model('Category');

var placeSchema = new Schema({
  name: { type: String },
  address: { type: String },
  latitude: {type: String},
  longitude: {type: String},
  description: { type: String},
  date: {type: String},
  category: {type: Schema.ObjectId, ref: "Category" },
});

module.exports = mongoose.model('Place', placeSchema);
