const { format } = require('./prettier-format')
const {
  getHeadingComment,
  ensureListOfSelectors,
  convertObjectToSassParams,
} = require('./utils')

const SETTINGS_TO_SASS_PARAMS = {
  color: '$color',
  background: '$background',
  radius: '$radius',
  size: '$size',
  inset: '$inset',
}

const SASS_PARAM_DEFAULTS = {
  size: '0.9em',
  inset: '0.2em 0.3em 0.3em',
}

function transform(config) {
  const { settings = {}, include = '' } = config['inline-elements'].code
  const sanitizedInclude = ensureListOfSelectors(include)
  return {
    selectors: ['code'].concat(sanitizedInclude).join(', '),
    mixin: `@include typebeast-code-style(${convertObjectToSassParams(
      settings,
      SETTINGS_TO_SASS_PARAMS,
      SASS_PARAM_DEFAULTS
    )})`,
  }
}

function write(data) {
  return format(`
    ${getHeadingComment('Code')}
    ${data.selectors} {
      ${data.mixin}
    }
  `)
}

function get(config) {
  if (!(config['inline-elements'] || {}).code) return ''
  const transformed = transform(config)
  return write(transformed)
}

module.exports = { get, transform, write }
