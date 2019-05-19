const express = require('express');
var path = require('path')
const bodyParser = require('body-parser')


const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./src/config/config')
mongoose.Promise = global.Promise
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const Post = require('./src/models/post-model')
const User = require('./src/models/user-model')

mongoose.connect(config.dbURL, { useNewUrlParser: true })
app.listen(process.env.PORT || config.port,
  () => console.log(`Server start on port ${config.port} ...`))

mongoose.connection
  .once('open', () => {
    console.log(`Mongoose - successful connection ...`)
  })
  .on('error', error => console.warn(error))

app.get('/companies', (req, res) => {
  Post.find({}, 'name price type', (err, posts) => {
    if (err) {
      res.sendStatus(500)
    } else {
      res.send({ posts: posts })
    }
  }).sort({ _id: -1 })
})


app.post('/companies', (req, res) => {
  const post = new Post({
    name: req.body.name,
    price: req.body.price,
    type: req.body.type,
  })
  post.save((err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send({
        success: true,
        message: `Company with ID_${data._id} saved successfully!`,
      })
    }
  })
})


app.post('/sign_in', (req, res) => {
  const user = User({
    email: req.body.email,
    role: req.body.role,
    password: req.body.password,
  })
  user.save((err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send({
        success: true,
        message: `User with ID_${data.id} saved successfully!`,
      })
    }
  })
})

app.get('/sign_in', (req, res) => {
  User.find({}, 'email role password', (err, users) => {
    if (err) {
      res.sendStatus(500)
    } else {
      res.send({ users: users })
    }
  }).sort({ _id: -1 })
})

// const history = require('connect-history-api-fallback');
//
// app.use(staticFileMiddleware);
// app.use(history({
//   disableDotRule: true,
//   verbose: true
// }));
// app.use(staticFileMiddleware);
//
// var server = app.listen(process.env.PORT || 8080, function () {
//   var port = server.address().port;
//   console.log("App now running on port", port);
// });
