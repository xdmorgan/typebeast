const path = require('path')
const fs = require('fs').promises
const { parse } = require('./parse-config')
const { generate } = require('./generate')

async function main({
  input = path.join(__dirname, 'typebeast.yml'),
  output = path.join(__dirname, 'typebeast.css'),
} = {}) {
  const config = await parse(input)
  // TODO: assert validation of config file before proceeding
  const generated = await generate(config)
  await fs.writeFile(output, generated)
}

main()
