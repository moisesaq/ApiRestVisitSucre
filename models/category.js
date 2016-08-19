var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
  logo: {type: String},
  name: {type: String},
  date: {type: String},
  description: {type: String}
});

module.exports = mongoose.model('Category', categorySchema);
