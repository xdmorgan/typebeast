const { format } = require('./prettier-format')

/*
const abstract = {
  [group]: {
    [breakpoint]: {
      selectors: 'h1, h2, h3, h4',
      properties: { 'property': value }      
    }
  }
}
*/

function wrapInSelectors(selectors, body) {
  return `${selectors.join(', ')} {
    ${body}
  }
  `
}

function propertyByKey(props, key) {
  if (props[key] === undefined) return {}
  if (key === 'block') {
    return {
      'margin-block-start': props[key],
      'margin-block-end': props[key],
    }
  }
  if (key === 'inline') {
    return {
      'margin-inline-start': props[key],
      'margin-inline-end': props[key],
    }
  }
  return { [`margin-${key}`]: props[key] }
}

function writeProperties(properties) {
  const obj = {
    ...propertyByKey(properties, 'block'),
    ...propertyByKey(properties, 'block-start'),
    ...propertyByKey(properties, 'block-end'),
    ...propertyByKey(properties, 'inline'),
    ...propertyByKey(properties, 'inline-start'),
    ...propertyByKey(properties, 'inline-end'),
  }
  return Object.entries(obj)
    .map(([property, value]) => `${property}: ${value};`)
    .join('\n')
}

function writeGroupDeclaration(name, data, properties) {
  return `// ${name}
  ${wrapInSelectors(data.include, writeProperties(properties))}
  `
}

function getDeclarationsByBreakpoint(groupName, data) {
  const breakpointNames = Object.keys(data.breakpoints || {})
  return breakpointNames.reduce(
    (all, breakpointName) => ({
      ...all,
      [breakpointName]: writeGroupDeclaration(
        groupName,
        data,
        data.breakpoints[breakpointName]
      ),
    }),
    {}
  )
}

function write(config) {
  let str = ''
  const { spacing } = config
  if (!spacing) return str
  const groups = Object.keys(spacing).map(group =>
    getDeclarationsByBreakpoint(group, spacing[group])
  )
  console.log(groups)
  return format(str)
}

module.exports = { write }
