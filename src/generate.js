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

// const toMediaQuery = (breakpoint, entries) => `
// @media screen and (min-width: ${(breakpoint, entries)}){
//   ${entries.join('')}
// }
// `

const findBreakpoints = config => {
  const keys = Object.values(config)
    .map(obj => Object.keys(obj))
    .flatMap(key => key)
  return [...new Set(keys)]
}

function generate(config) {
  const { typography } = config
  const entries = Object.entries(typography)
    .map(([key, val]) => [key, val.default])
    .map(toDeclaration)
    .join('')
  return entries
}

module.exports = { generate, toDeclaration, sortProperties, findBreakpoints }
