const { format } = require('./prettier-format')
const { getHeadingComment, objectToCssProperties } = require('./utils')

function transform(config) {
  return {
    scope: config.wysiwyg.scope,
    styles: {
      display: 'block',
      'max-width': '100%',
      height: 'auto',
    },
  }
}

function write(transformed) {
  return `
  ${getHeadingComment('WYSIWYG Block Images')}
  .${transformed.scope} > img {
    ${objectToCssProperties(transformed.styles)}
  }
`
}

function get(config) {
  if (!config.settings || !config.settings['wysiwyg-block-images']) return ''
  const transformed = transform(config)
  const written = write(transformed)
  return format(written)
}

module.exports = { get }
