const { format } = require('./prettier-format')
const {
  getHeadingComment,
  ensureListOfSelectors,
  convertObjectToSassParams,
} = require('./utils')

const SETTINGS_TO_SASS_PARAMS = {
  color: '$color',
  hover: '$hover',
  active: '$active',
  visited: '$visited',
  style: '$style',
}

function transform(config) {
  const { settings = {}, include = '' } = config['inline-elements'].a
  const sanitizedInclude = ensureListOfSelectors(include)
  return {
    selectors: ['a'].concat(sanitizedInclude).join(', '),
    mixin: `@include typebeast-link-style(${convertObjectToSassParams(
      settings,
      SETTINGS_TO_SASS_PARAMS
    )})`,
  }
}

function write(data) {
  return format(`
    ${getHeadingComment('Link')}
    ${data.selectors} {
      ${data.mixin}
    }
  `)
}

function get(config) {
  if (!(config['inline-elements'] || {}).a) return ''
  const transformed = transform(config)
  return write(transformed)
}

module.exports = { get, transform, write }
