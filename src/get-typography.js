const { sanitize } = require('./sanitize-config')
const { transform } = require('./transform-config')
const { write: writeMixins } = require('./write-mixins')
const { write: writeStyles } = require('./write-styles')

function get(merged) {
  // fill in blanks for styles (i.e. use null instead of undefined for
  // omitted mixin properties)
  const sanitized = sanitize(merged)
  // convert raw values into a sass-ready format
  const transformed = transform(sanitized)
  const mixins = writeMixins({ data: transformed })
  const typography = writeStyles({ data: transformed, config: merged })
  return { mixins, typography }
}

module.exports = { get }
