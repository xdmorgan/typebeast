const { transform } = require('./transform-spacing')
const { write } = require('./write-spacing')

function get(merged) {
  return write(transform(merged))
}

module.exports = { get }
