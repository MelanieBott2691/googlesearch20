// import React, { Router } from 'react'
// import Jumbotron from '../components/Jumbotron'
// import API from '../utils/API'
// import { BookList, BookListItem } from '../components/BookList'
// import { Container, Row, Col } from '../components/Grid'
// import Search from '../components/Search/Search'

// const express = require('express')
// const mongoose = require('mongoose')
// const path = require('path')

// const PORT = process.env.PORT || 3000
// const app = express()

// const routes = require('./routes')

// app.use(express.static(path.join(__dirname, 'build')))
// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'))
// }

// // Define API routes
// app.use(routes)

// Send every request to the React app
// Define any API routes before this runs
// app.get('*', function (req, res) {
//   Router.run(routes, req.path, function (Handler, state) {
//     const element = React.createElement(Handler)
//     const html = React.renderToString(element)
//     res.render('main', { content: html })
// res.sendFile(path.join(__dirname, './client/build/index.html'))
// })
// // })

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlesearch')
// // { useNewUrlParser: true }

// app.listen(PORT, () => {
//   console.log(`App listening on PORT ${PORT}!`)
// })

// // //server.js
// // const express = require('express')
// // // const favicon = require('express-favicon')
// // const path = require('path')
// // const port = process.env.PORT || 8080
// // const app = express()
// app.use(favicon(__dirname + '/build/favicon.ico'))
// // the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname))
// app.use(express.static(path.join(__dirname, 'build')))
// app.get('/ping', function (req, res) {
//   return res.send('pong')
// })
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })
// app.listen(port)
