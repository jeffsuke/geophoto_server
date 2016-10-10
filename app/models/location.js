var mongoose = require('mongoose')
var Schema = mongoose.Schema

var LocationSchema = new Schema({
  latitude: {type: String, required: true},
  longitude: {type: String, required: true},
  imageUrl: {type: String, required: true},
  formattedAddress: String,
  city: String,
  country: String,
  zipcode: String
})

module.exports = mongoose.model('Location', LocationSchema)
