exports.breakpointToMediaQuery = breakpoint =>
  `@media screen and (min-width: ${breakpoint})`

exports.objectToCssProperties = obj =>
  Object.entries(obj)
    .map(([k, v]) => `${k}: ${v};`)
    .join('\n')

exports.objectToCssProperties = obj =>
  Object.entries(obj)
    .map(([k, v]) => `${k}: ${v};`)
    .join('\n')

exports.getHeadingComment = name =>
  `// ${name} \n// ---------------------------------------------------------`

exports.convertObjectToSassParams = (settings, map, defaults = {}) =>
  Object.entries(map)
    .map(
      ([key, param]) => `${param}: ${settings[key] || defaults[key] || null}`
    )
    .filter(Boolean)
    .join(', ')

exports.objectKeysToSassParams = settings =>
  Object.keys(settings)
    .map(k => `$${k}`)
    .join(',')

// might be string or array, convert to an array then
// filter(Boolean) to strip ['']
exports.ensureListOfSelectors = sel =>
  (Array.isArray(sel) ? sel : [sel]).filter(Boolean)
