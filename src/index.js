const path = require('path')
const { parse } = require('./parse-config')

async function main({ input = path.join(__dirname, 'typebeast.yml') } = {}) {
  const config = await parse(input)
  // TODO: assert validation of config file before proceeding
  console.log(config)
}

main()
