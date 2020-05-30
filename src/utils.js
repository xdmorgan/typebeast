const breakpointToMediaQuery = breakpoint =>
  `@media screen and (min-width: ${breakpoint})`

const objectToCssProperties = obj =>
  Object.entries(obj)
    .map(([k, v]) => `${k}: ${v};`)
    .join('\n')

module.exports = { breakpointToMediaQuery, objectToCssProperties }
