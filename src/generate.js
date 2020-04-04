const prettier = require('prettier')

const sortProperties = obj =>
  Object.entries(obj).sort(([a], [b]) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })

const toDeclaration = ([key, obj]) => `.${key} {
${sortProperties(obj)
  .map(([key, val]) => `  ${key}: ${val};`)
  .join('\n')}
}`

const propertyDeclaration = ([property, val]) => `${property}: ${val};`

const propertyDeclarations = properties => properties.map(propertyDeclaration)

const toMediaQuery = breakpoint =>
  `@media screen and (min-width: ${breakpoint})`

const findBreakpoints = typography => [
  // ensure unique
  ...new Set(
    // each type style
    Object.values(typography)
      // get all the breakpoints referenced
      .map(obj => Object.keys(obj))
      // flatten across multiple type styles
      .flat(Infinity)
  ),
]

const findBreakpointValueInConfigByName = (config, name) =>
  config.breakpoints[name]

const format = (str, opts = { parser: 'scss' }) => prettier.format(str, opts)

function generate(config) {
  // find all the breakpoints that are actually used
  const foundBreakpoints = findBreakpoints(config.typography)
  // cross refernce used breakpoints with sorted list and
  // filter out the special-case 'default' key
  const breakpoints = Object.keys(config.breakpoints).filter(bp =>
    foundBreakpoints.includes(bp)
  )

  const defaultDeclarations = Object.entries(
    config.typography
  ).map(([key, val]) => toDeclaration([key, val.default]))
  const responsiveOverrides = breakpoints.map(breakpoint => {
    return [
      toMediaQuery(config.breakpoints[breakpoint]),
      '{',
      ...Object.entries(config.typography)
        .filter(([key, val]) => (val[breakpoint] ? true : false))
        .map(([key, val]) => toDeclaration([key, val[breakpoint]])),
      '}',
    ].join('\n')
  })
  // console.log(breakpoints, defaultDeclarations, responsiveOverrides)
  return format(defaultDeclarations.concat(responsiveOverrides).join('\n'))
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
