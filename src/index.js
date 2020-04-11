const path = require('path')
const fs = require('fs-extra')
const { parse } = require('./parse-config')
const { transform } = require('./transform-config')
const { write: writeMixins } = require('./write-mixins')

async function main({
  input = path.join(__dirname, 'typebeast.yml'),
  output = path.join(__dirname, 'typebeast.css'),
  outdir = path.join(__dirname, 'sass'),
} = {}) {
  const config = await parse(input)
  // TODO: assert validation of config file before attempting merge
  // TODO: merge custom config onto defaults for things like prefixes
  const transformed = await transform(config)
  const mixins = writeMixins({ data: transformed })
  await fs.writeFile(path.join(outdir, 'generated-mixins.scss'), mixins)
}

main()
