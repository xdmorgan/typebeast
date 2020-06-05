const { format } = require('./prettier-format')
const { objectToCssProperties } = require('./utils')

function getDelcarationByBreakpoint({ groupName, selectors, properties }) {
  return `
    // group: ${groupName}

    ${selectors} {
      ${objectToCssProperties(properties)}
    }
  `
}

function getDelcarationsByBreakpoint({ breakpointName, groups }) {
  return Object.keys(groups)
    .filter(groupName => groups[groupName].breakpoints[breakpointName])
    .map(groupName =>
      getDelcarationByBreakpoint({
        groupName,
        selectors: groups[groupName].selectors,
        properties: groups[groupName].breakpoints[breakpointName],
      })
    )
    .join('\n')
}

function getBlocksByBreakpoint({ breakpoints, groups }) {
  return Object.keys(breakpoints).map(breakpointName =>
    breakpoints[breakpointName](`
      
      // ----------------------------------------
      // breakpoint: ${breakpointName}
      // ----------------------------------------

      ${getDelcarationsByBreakpoint({ breakpointName, groups })}
    `)
  )
}

function write(transformed) {
  if (!transformed) return ''
  const breakpoints = getBlocksByBreakpoint(transformed)
  return format(`${transformed.scope} { ${breakpoints.join('\n')} }`)
}

module.exports = { write }
