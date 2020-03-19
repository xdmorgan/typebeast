const sortProperties = obj =>
  Object.entries(obj).sort(([a], [b]) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })

const toDeclaration = ([key, obj]) => `
.${key} {
${sortProperties(obj)
  .map(([key, val]) => `  ${key}: ${val};`)
  .join('\n')}
}
`

const propertyDeclaration = ([property, val]) => `${property}: ${val};`

const propertyDeclarations = properties => properties.map(propertyDeclaration)

const toMediaQuery = breakpoint =>
  `@media screen and (min-width: ${breakpoint})`

const findBreakpoints = typographyOptions => {
  const keys = Object.values(typographyOptions)
    .map(obj => Object.keys(obj))
    .flatMap(key => key)
  return [...new Set(keys)]
}

const findBreakpointValueInConfigByName = (config, name) =>
  config.breakpoints[name]

function generate(config) {
  const { typography } = config
  const breakpoints = findBreakpoints(typography)
  const mediaQueries = breakpoints
    .filter(breakpoint => breakpoint !== 'default')
    .map(breakpoint =>
      toMediaQuery(findBreakpointValueInConfigByName[breakpoint])
    )
  const defaultRules = Object.entries(typography)
    .map(([key, val]) => [key, val.default])
    .map(([key, properties]) => sortProperties(properties))
    .map(propertyDeclaration)
  console.log(breakpoints, mediaQueries, defaultRules)
  return null
}

module.exports = {
  generate,
  toDeclaration,
  sortProperties,
  propertyDeclarations,
  findBreakpoints,
  toMediaQuery,
  findBreakpointValueInConfigByName,
}
