exports.breakpointToMediaQuery = breakpoint =>
  `@media screen and (min-width: ${breakpoint})`

exports.objectToCssProperties = obj =>
  Object.entries(obj)
    .map(([k, v]) => `${k}: ${v};`)
    .join('\n')

exports.getHeadingComment = name =>
  `// ${name} \n// ---------------------------------------------------------`
