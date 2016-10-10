var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  twitter_id: {type: String, required: true, unique: true},
  name: String,
  email: {type: String}
})

module.exports = mongoose.model('User', UserSchema);
