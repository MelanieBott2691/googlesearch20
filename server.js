const express = require('express');
const mongoose = require('mongoose');
// const path = require('path')

const PORT = process.env.PORT || 3000;
const app = express();

const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Define API routes
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, './client/build/index.html'))
// })

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/googlesearch',
  {
    useNewUrlParser: true
  }
);

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}!`);
});
