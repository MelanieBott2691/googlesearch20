// const router = require('express').Router()
// const bookscontroller = require('../../controllers/bookController.js')
// const axios = require('axios')

// router.route('/search').get(bookController)

// router
//   .route('/')
//   .get(bookController.findAll)
//   .post(bookController.create)

// router
//   .route('/:id')
//   .get(bookController.findById)
//   .put(bookController.update)
//   .delete(bookController.remove)

// module.exports = router

const router = require('express').Router()
const axios = require('axios')
const bookController = require('../../controllers/bookController')

// Matches with "/api/books/search"
router.route('/search').get(bookController.searchBook)

// Matches with "/api/books"
router
  .route('/')
  .get(bookController.findAll)
  .post(bookController.create)

// Matches with "/api/books/:id"
router
  .route('/:id')
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove)

module.exports = router
