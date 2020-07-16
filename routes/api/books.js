const router = require('express').Router()
const bookscontroller = require('../../controllers/bookscontrollers')

router
  .route('/')
  .get(bookscontroller.findAll)
  .post(bookscontroller.create)

router
  .route('/:id')
  .get(bookscontroller.findById)
  .put(bookscontroller.update)
  .delete(bookscontroller.remove)

module.exports = router
