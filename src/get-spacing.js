const { transform } = require('./transform-spacing')
const { write } = require('./write-spacing')

function get(merged) {
  return write({
    transformed: transform(merged),
    config: merged,
  })
}

module.exports = { get }
