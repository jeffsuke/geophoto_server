var mongoose = require('mongoose')
var Location = mongoose.model('Location')
var fs = require('fs')
var path = require('path')
var NodeGeocoder = require('node-geocoder')
var multer = require('multer')
var upload = multer({dest: 'uploads/'})
var geoCoderOptions = {
  provier:'openstreetmap'
}
var geocoder = NodeGeocoder(geoCoderOptions)
var controller = {}

controller.get = [
  function(req,res,next) {
    var userId = req.param('user_id')
    Location.find({'user_id': userId}).
    exec(function(err, locations){
      if(err) res.send(err)
      res.json(locations)
    })
  }
]

controller.create = [upload.single('image'), function(req, res) {
  var originalPath = req.file.path;
  var ext = path.extname(req.file.filename);
  var newPath = originalPath + ext;

  fs.rename(originalPath, newPath, function(err) {
    if (err) res.send(err)

    var location = new Location()
    location.user_id = req.body.user_id
    location.latitude = req.body.latitude
    location.longitude = req.body.longitude
    location.imageUrl = req.file.path

    geocoder.reverse({lat:location.latitude, lon:location.longitude})
        .then(function(geoData) {
          if (geoData.length > 0) {
            geoData = geoData[0]

            location.formattedAddress = geoData.formattedAddress
            location.city = geoData.city
            location.country = geoData.country
            location.zipcode = geoData.zipcode

            location.save(function(err) {
              if (err) res.send(err)
              res.json(location)
            })
          }
        })
        .catch(function(err) {
          console.log(err);
        })
  })
}]

module.exports = controller;
