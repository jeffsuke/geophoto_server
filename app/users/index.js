var controller = require('./controller');
var express = require('express');
var router = express.Router();

router.use((req,res,next) => {
  console.log("/User called");
  next()
})

// router.get('/', controller.getAll);
// router.get('/:user_id', controller.get)
// router.put('/', controller.update)
router.post('/', controller.create);
// router.delete('/:user_id', controller.delete)

module.exports = router;
