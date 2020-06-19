const fs = require('fs-extra')

async function write(map = {}) {
  // async for of entries in map, write files key => path, val => contents
  for await ([filePath, fileContents] of Object.entries(map)) {
    await fs.writeFile(filePath, fileContents)
  }
  return true
}
module.exports = { write }
