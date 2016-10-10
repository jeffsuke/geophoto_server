var controller = require('./controller')
var express = require('express')
var router = express.Router()

router.use((req, res, next) => {
  console.log('/locations');
  next()
})

router.get('/', controller.getAll)
router.post('/', controller.create)

module.exports = router;
