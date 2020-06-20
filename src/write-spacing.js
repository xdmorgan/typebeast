const { format } = require('./prettier-format')
const { breakpointToMediaQuery, objectToCssProperties } = require('./utils')

const writeStyleDeclaration = ({ body, selectors, group }) => {
  return `
  // group: ${group}
  ${selectors.join(', ')} {
    ${body};
  }`
}

function createDeclarationWriter(spacing) {
  return breakpointName =>
    Object.keys(spacing)
      .filter(styleName => spacing[styleName][breakpointName])
      .map(styleName => ({
        group: styleName,
        selectors: spacing[styleName][breakpointName].selectors,
        body: objectToCssProperties(
          spacing[styleName][breakpointName].properties
        ),
      }))
      .map(writeStyleDeclaration)
}

function write(transformed) {
  const declarationWriter = createDeclarationWriter(transformed.spacing)
  const defaultDeclarations = declarationWriter('default')
  const breakpointDeclarations = Object.keys(transformed.breakpoints).reduce(
    (acc, name) => [
      ...acc,
      '\n',
      breakpointToMediaQuery(transformed.breakpoints[name]) + '{',
      ...declarationWriter(name),
      '}',
    ],
    []
  )
  return format(defaultDeclarations.concat(breakpointDeclarations).join('\n'))
}

module.exports = { write }
