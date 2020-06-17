const { transform } = require('./transform-wysiwyg-spacing')
const { write } = require('./write-wysiwyg-spacing')

function get(merged) {
  return write(transform(merged))
}

module.exports = { get }
