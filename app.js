var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//Connection to DB
mongoose.connect('mongodb://localhost/DBVisitSucre', function(err, res){
  if(err){
    console.log('ERROR: connecting to DataBase. ' + err);
  }else{
    console.log('Connected to DataBase Visit Sucre');
  }
});

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var Category = require('./models/category');
var CategoryController = require('./controllers/controllerCategory');

var Place = require('./models/place');
var PlaceController = require('./controllers/controllerPlace');

var Image = require('./models/image');
var ImageController = require('./controllers/controllerImage');

//API router for handling Data Base
var controller = express.Router();
controller.route('/categories')
.get(CategoryController.findAllCategories)
.post(CategoryController.addCategory);

controller.route('/category/find')
.post(CategoryController.findByNameCategory);
//var controllerPlace = express.Router();

controller.route('/places')
.get(PlaceController.findAllPlaces)
.post(PlaceController.addPlace);

controller.route('/place/find')
.post(PlaceController.findByNamePlace);

controller.route('/places/:id')
.get(PlaceController.findByIdPlace);

controller.route('/images')
.get(ImageController.findAllImages)
.post(ImageController.addImage);

app.use('/api', controller);

//Start server in IP: 192.168.1.42 in the PORT: 3000
app.listen(3000, '192.168.1.43',function(){
    console.log('Node server running on localhost in port 3000');
});
