const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Define API routes
app.use(routes)

// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/googlesearch',
  { useNewUrlParser: true }
)

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}!`)
})
