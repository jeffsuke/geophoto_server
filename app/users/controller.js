var mongoose = require('mongoose')
var User = mongoose.model('User')

var controller = {}

controller.create = [
  function(req, res, next) {
    var user = new User()

    user.name = req.body.name
    user.email = req.body.email
    user.password = req.body.password

    user.save(function(err, data) {
      if (err) res.send(err)
      res.json({user_id: data._id})
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

      user.name = req.body.name
      user.email = req.body.email

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
