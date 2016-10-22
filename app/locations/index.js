var controller = require('./controller')
var express = require('express')
var router = express.Router()

router.use((req, res, next) => {
  console.log('/locations');
  next()
})

router.get('/:user_id', controller.get)
router.post('/', controller.create)

module.exports = router;
