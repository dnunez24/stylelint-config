const path = require('path')
const fs = require('fs')

global.config = require('../..')
global.stylelint = require('stylelint')

global.fixture = function(filename) {
  file = path.resolve(__dirname, '../fixtures', filename)
  data = fs.readFileSync(file)
  return data.toString()
}
