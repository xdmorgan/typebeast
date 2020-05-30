function validate(config, currentFormatVersion) {
  if (!config['format-version']) {
    return [
      false,
      {
        message: `Your config file is missing a "format-version". Try adding "format-version: ${currentFormatVersion}" to the top if your config file and running this script again.`,
        version: null,
      },
    ]
  }
  version = config['format-version']
  return [true, { message: null, version }]
}

module.exports = { validate }
