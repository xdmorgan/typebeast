const loMerge = require('lodash.merge')

function merge(defaults, config) {
  return loMerge({}, defaults, config)
}

module.exports = { merge }
