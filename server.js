// const express = require('express')
// const routes = require('./routes')
// const path = require('path')

// const app = express()
// const PORT = process.env.PORT || 3000

// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// // Connect to MongoDB
// const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlesearch')
// // { useNewUrlParser: true }

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/public'))
// }

// // Define API routes
// app.use(routes)

// // Send every request to the React app
// // Define any API routes before this runs
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, './client/public/index.html'))
// })

// app.listen(PORT, () => {
//   console.log(`App listening on PORT ${PORT}!`)
// })

//server.js
const express = require('express')
// const favicon = require('express-favicon')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()
app.use(favicon(__dirname + '/build/favicon.ico'))
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'build')))
app.get('/ping', function (req, res) {
  return res.send('pong')
})
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})
app.listen(port)
