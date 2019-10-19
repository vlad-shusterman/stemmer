const fs = require('fs')

class FileWriter {
  constructor (file, data) {
    this.file = file
    this.data = data
  }

  writeData() {
    const file = fs.createWriteStream(this.file)
    file.on('error', function(err) { /* error handling */ });
    fs.writeFileSync(this.file, JSON.stringify(this.data))
    file.end();
  }

  getFile() {

  }
}

module.exports = FileWriter
