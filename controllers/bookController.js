const db = require('../models')
const axios = require('axios')

module.exports = {
  searchApi: function (req, res) {
    axios
      .get('https://www.googleapis.com/books/v1/volumes?q=' + req.query.q)
      .then(response => res.json(response.data))
      .catch(err => res.status(422).json(err))
  },
  findAll: function (req, res) {
    db.Book.find(req.query)

      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.error(err)
        res.status(422).json(err)
      })
  },
  findById: function (req, res) {
    db.Book.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  save: (req, res) => {
    db.Book.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },

  update: (req, res) => {
    db.Book.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(422).json(err))
  },

  // create: function (req, res) {
  //   db.Book.create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => {
  //       console.error(err)
  //       res.status(422).json(err)

  // },

  remove: function (req, res) {
    db.Book.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
