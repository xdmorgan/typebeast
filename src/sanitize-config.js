const DEFAULT_PARAMS = {
  family: null,
  letter: null,
  line: null,
  size: null,
  style: null,
  transform: null,
  weight: null,
}

function setNullPropertyDefaults(config, params) {
  Object.entries(config.typography).forEach(([styleName, breakpointData]) =>
    Object.entries(breakpointData).forEach(
      ([breakpointName, propertySettings]) => {
        config.typography[styleName][breakpointName] = {
          ...DEFAULT_PARAMS,
          ...propertySettings,
        }
      }
    )
  )
  return config
}

function sanitize(config) {
  config = setNullPropertyDefaults(config, DEFAULT_PARAMS)
  return config
}

module.exports = { sanitize }
