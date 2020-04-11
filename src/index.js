const path = require('path')
const fs = require('fs').promises
const { parse } = require('./parse-config')
const { transform } = require('./transform-config')
const { write } = require('./write-styles')

async function main({
  input = path.join(__dirname, 'typebeast.yml'),
  output = path.join(__dirname, 'typebeast.scss'),
} = {}) {
  const config = await parse(input)
  // TODO: assert validation of config file before attempting merge
  // TODO: merge custom config onto defaults for things like prefixes
  const transformed = await transform(config)
  const written = await write({ data: transformed, config })
  await fs.writeFile(output, written)
}

main()
