const { format } = require('./prettier-format')

function get(config, name = 'TYPEBEAST_SETTINGS') {
  const { settings = {} } = config
  return format(`
    $${name}: (
      ${Object.keys(settings)
        .sort()
        .map(key => `'${key}': ${settings[key]}`)
        .join(', ')}
    )
  `)
}

module.exports = { get }
