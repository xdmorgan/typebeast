const { format } = require('./prettier-format')

const toMediaQuery = breakpoint =>
  `@media screen and (min-width: ${breakpoint})`

const writeStyleDeclaration = ({ mixinName, selectors }) => {
  return `
  ${selectors.join(', ')} {
    @include ${mixinName};
  }`
}

function createDeclarationWriter({ data }) {
  return breakpointName =>
    Object.keys(data)
      .filter(styleName => data[styleName].breakpoints[breakpointName])
      .map(styleName => ({
        selectors: data[styleName].selectors,
        mixinName: data[styleName].breakpoints[breakpointName].mixin.name,
      }))
      .map(writeStyleDeclaration)
}

function write({ data, config }) {
  const declarationWriter = createDeclarationWriter({ data })
  const defaultDeclarations = declarationWriter('default')
  const breakpointDeclarations = Object.keys(config.breakpoints).reduce(
    (acc, name) => [
      ...acc,
      '\n',
      toMediaQuery(config.breakpoints[name]) + '{',
      ...declarationWriter(name),
      '}',
    ],
    []
  )
  return format(defaultDeclarations.concat(breakpointDeclarations).join('\n'))
}

module.exports = { write }
