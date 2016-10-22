var mongoose = require('mongoose')
var Schema = mongoose.Schema

var LocationSchema = new Schema({
  user_id: {type: String, required: true},
  latitude: {type: String, required: true},
  longitude: {type: String, required: true},
  imageUrl: {type: String, required: true},
  formattedAddress: String,
  city: String,
  country: String,
  zipcode: String,
  createdAt:{type:Date, default:Date.now}
})

module.exports = mongoose.model('Location', LocationSchema)
