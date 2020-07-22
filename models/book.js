const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  authors: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now },
  thumbnail: String,
  link: String
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book
