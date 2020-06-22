const { transform } = require('./transform-typography')
const { write: writeMixins } = require('./write-mixins')
const { write: writeStyles } = require('./write-styles')

function get(merged) {
  // convert raw values into a sass-ready format
  const transformed = transform(merged)
  const mixins = writeMixins({ data: transformed })
  const typography = writeStyles({ data: transformed, config: merged })
  return { mixins, typography }
}

module.exports = { get }
