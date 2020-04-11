const { format } = require('./prettier-format')

function writeHeadingComment(name) {
  return `// ${name} \n// ---------------------------------------------------------`
}

function getWriteMixinDefinition(data) {
  return (styleName, breakpointName) =>
    data[styleName].breakpoints[breakpointName].mixin.definition
}

function getWriteMixinDefinitions(data) {
  const writeMixinDefinition = getWriteMixinDefinition(data)
  return styleName =>
    Object.keys(data[styleName].breakpoints).map(breakpointName =>
      writeMixinDefinition(styleName, breakpointName, data)
    )
}

function getWriteMixinDeclaration(data) {
  const writeMixinDefinitions = getWriteMixinDefinitions(data)
  return styleName =>
    [writeHeadingComment(styleName)]
      .concat(writeMixinDefinitions(styleName))
      .join('\n')
}

function write({ data }) {
  const writeMixinDeclaration = getWriteMixinDeclaration(data)
  const mixinDeclarations = Object.keys(data).map(writeMixinDeclaration)
  return format(mixinDeclarations.join('\n'))
}

module.exports = { write }
