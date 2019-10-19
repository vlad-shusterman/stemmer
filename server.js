const express = require('express');
var path = require('path')
const bodyParser = require('body-parser')
const axios = require('axios');

const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./src/config/config')
mongoose.Promise = global.Promise
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(config.dbURL, { useNewUrlParser: true })
const stemmer = require('./src/config/StemmerClass')
const Parser = require('./src/config/Parser')

const FileWriter = require('./src/models/FileWriter')

const fs = require('fs')

mongoose.connection
  .once('open', () => {
    console.log(`Mongoose - successful connection ...`)
    app.listen(process.env.PORT || config.port,
      () => console.log(`Server start on port ${config.port} ...`))
  })
  .on('error', error => console.warn(error))

app.get('/search', (req, res) => {
  const parser = new Parser(req.query.query)
  let finalDataToClient = []
  parser.parse().then((result) => {
    if (result.lang === 'ru') {
      getCyrillicBase(result.data).then((finalData) => {
        const fileWriter = new FileWriter('./src/resources/words.txt', finalData)
        fileWriter.writeData();
        res.send(finalData);
      })
    } else {
      const fileWriter = new FileWriter('./src/resources/words.txt', result.data)
      fileWriter.writeData();
      res.send(result.data)
    }
  });
})

function getCyrillicBase(array) {
  const str = array.join()
  const promise = new Promise((resolve, reject) => {
    axios.get(encodeURI(`http://165.22.208.187:8081/stem/ru?words=${str}`)).then((result) => {
      resolve(result.data)
    })
  })
  return promise
}


