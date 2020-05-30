const cloneDeep = require('lodash.clonedeep')

const DEFAULT_PARAMS = {
  family: null,
  letter: null,
  line: null,
  size: null,
  style: null,
  transform: null,
  weight: null,
}

const DEFAULT_PREFIXES = {
  typography: 'type',
  'custom-properties': 'type',
  'sass-mixins': 'type',
  'sass-tokens': 'type',
}

function setNullPropertyDefaults(config, params) {
  Object.entries(config.typography).forEach(([styleName, breakpointData]) =>
    Object.entries(breakpointData).forEach(
      ([breakpointName, propertySettings]) => {
        config.typography[styleName][breakpointName] = {
          ...params,
          ...propertySettings,
        }
      }
    )
  )
  return config
}

function setDefaultPrefixes(config, prefixes) {
  config.prefixes = {
    ...prefixes,
    ...(config.prefixes || {}),
  }
  return config
}

function sanitize(original) {
  config = cloneDeep(original)
  config = setNullPropertyDefaults(config, DEFAULT_PARAMS)
  config = setDefaultPrefixes(config, DEFAULT_PREFIXES)
  return config
}

module.exports = { sanitize }
