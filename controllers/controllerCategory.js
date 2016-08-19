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

exports.findByNameCategory = function(req, res){
  var find_name = req.headers['name'];
  console.log("Find cateory by " + find_name);
  Category.find({"name": find_name}).exec(function(err, categories){
    if(err) res.send(500, err.message);
    res.status(200).jsonp(categories);
  });
};

//ADD a category in the DB
exports.addCategory = function(req, res){
  console.log('POST /addCategory/');
  console.log(req.body);
   var category = new Category({
     logo: req.body.logo,
     name: req.body.name,
     date: req.body.date,
     description: req.body.description
   });

   category.save(function(err, category){
     if(err) return res.status(500).send(err.message);
     res.status(200).jsonp(category);
   });
};
