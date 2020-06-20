const { ensureListOfSelectors } = require('./utils')

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

function getProperties(properties) {
  return {
    ...propertyByKey(properties, 'block'),
    ...propertyByKey(properties, 'block-start'),
    ...propertyByKey(properties, 'block-end'),
    ...propertyByKey(properties, 'inline'),
    ...propertyByKey(properties, 'inline-start'),
    ...propertyByKey(properties, 'inline-end'),
  }
}

function getDataByBreakpoint(data) {
  const breakpointNames = Object.keys(data.breakpoints || {})
  return breakpointNames.reduce(
    (all, breakpointName) => ({
      ...all,
      [breakpointName]: {
        selectors: ensureListOfSelectors(data.include),
        properties: getProperties(data.breakpoints[breakpointName]),
      },
    }),
    {}
  )
}

function transform(config) {
  const { spacing = {} } = config
  return Object.keys(spacing).reduce(
    (all, groupName) => ({
      ...all,
      [groupName]: getDataByBreakpoint(spacing[groupName]),
    }),
    {}
  )
}

module.exports = { transform }
