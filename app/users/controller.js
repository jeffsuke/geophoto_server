var mongoose = require('mongoose')
var User = mongoose.model('User')

var controller = {}

controller.create = [
  function(req, res, next) {
    var user = new User()

    user.twitter_id = req.body.twitter_id;
    user.name = req.body.name
    user.age = req.body.age

    user.save(function(err) {
      if (err) res.send(err)
      res.json({message: 'Succeed'})
    })
  }
]

controller.getAll = [
  function(req,res,next) {
    User.find(function(err, users){
      if(err) res.send(err)
      res.json(users)
    })
  }
]

controller.get = [
  (req, res, next) => {
    User.findById(req.params.user_id, (err, user) => {
      if (err) res.send(err)
      res.json(user)
    })
  }
]

controller.update = [
  (req, res) => {
    User.findById(req.params.user_id, (err, user) => {
      if (err) res.send(err)

      user.twitter_id = req.body.twitter_id
      user.name = req.body.name
      user.age = req.body.age

      user.save((err) => {
        if (err) res.send(err)
        res.send(200)
      })
    })
  }
]

controller.delete = [
  (req, res) => {
    User.remove({
      _id:req.params.user_id
    },
    (err, user) => {
      if (err) res.send(err)
      res.send(200)
    })
  }
]

module.exports = controller;
