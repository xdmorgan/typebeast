const { format } = require('./prettier-format')
const { breakpointToMediaQuery, objectToCssProperties } = require('./utils')

const writeStyleDeclaration = ({ body, selectors, group }) => {
  return `
  // ${group}
  ${selectors.join(', ')} {
    ${body};
  }`
}

function createDeclarationWriter({ transformed }) {
  return breakpointName =>
    Object.keys(transformed)
      .filter(styleName => transformed[styleName][breakpointName])
      .map(styleName => ({
        group: styleName,
        selectors: transformed[styleName][breakpointName].selectors,
        body: objectToCssProperties(
          transformed[styleName][breakpointName].properties
        ),
      }))
      .map(writeStyleDeclaration)
}

function write({ transformed, config }) {
  const declarationWriter = createDeclarationWriter({ transformed })
  const defaultDeclarations = declarationWriter('default')
  const breakpointDeclarations = Object.keys(config.breakpoints).reduce(
    (acc, name) => [
      ...acc,
      '\n',
      breakpointToMediaQuery(config.breakpoints[name]) + '{',
      ...declarationWriter(name),
      '}',
    ],
    []
  )
  return format(defaultDeclarations.concat(breakpointDeclarations).join('\n'))
}

module.exports = { write }
