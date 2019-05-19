const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./config/config')
mongoose.Promise = global.Promise
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
const Post = require('./models/post-model')
const User = require('./models/user-model')
//
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Credentials', true)
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
//   res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json')
//   next()
// })

mongoose.connect(config.dbURL, { useNewUrlParser: true })

mongoose.connection
  .once('open', () => {
    console.log(`Mongoose - successful connection ...`)
    app.listen(process.env.PORT || config.port,
      () => console.log(`Server start on port ${config.port} ...`))
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
