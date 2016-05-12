var mongoose = require('mongoose');
var Category = mongoose.model('Category');

//GET - Return all Categories in the DB Visit Sucre
exports.findAllCategories = function(req, res){
  Category.find(function(err, categories){
    if(err) res.send(500, err.message);

    console.log('GET /categories');
    res.status(200).jsonp(categories);
  });
};

//ADD a category in the DB
exports.addCategory = function(req, res){
  console.log('POST /addCategory/');
  console.log(req.body);
   var category = new Category({
     code: req.body.code,
     name: req.body.name
   });

   category.save(function(err, category){
     if(err) return res.status(500).send(err.message);
     res.status(200).jsonp(category);
   });
};