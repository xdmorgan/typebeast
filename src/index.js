const path = require('path')
const fs = require('fs-extra')
const sass = require('node-sass')

const { parse } = require('./parse-config')
const { sanitize } = require('./sanitize-config')
const { transform } = require('./transform-config')
const { write: writeMixins } = require('./write-mixins')
const { write: writeStyles } = require('./write-styles')

async function main({ config, output, compression } = {}) {
  const srcDir = path.join(__dirname, 'sass')
  const tmpDir = path.join(__dirname, '../build')
  const tmpDirSass = path.join(tmpDir, 'sass')
  const generatedSassMixinsPath = path.join(
    tmpDirSass,
    'core/_generated-mixins.scss'
  )
  const generatedSassStylesPath = path.join(
    tmpDirSass,
    'styles/_generated-styles.scss'
  )
  const sassRenderEntryPoint = path.join(tmpDirSass, 'main.scss')
  const sassRenderOutFile = path.join(tmpDir, 'typebeast.css')
  // parse config
  const parsed = await parse(config)
  // TODO: assert validation of config file before attempting merge
  // validateConfigorThrow(parsed)
  // since config is valid, clean intermediate target for built files
  await fs.remove(tmpDir)

  // TODO: merge custom config onto defaults for things like prefixes
  const sanitized = await sanitize(parsed)
  const transformed = await transform(sanitized)
  // write mixin definitions
  const mixins = writeMixins({ data: transformed })
  await fs.copy(srcDir, tmpDirSass)
  await fs.writeFile(generatedSassMixinsPath, mixins)
  // write classes that refer to the mixins
  const styles = writeStyles({ data: transformed, config: sanitized })
  await fs.writeFile(generatedSassStylesPath, styles)
  const result = sass.renderSync({
    file: sassRenderEntryPoint,
    outFile: sassRenderOutFile,
    outputStyle: compression,
    sourceMap: true, // or an absolute or relative (to outFile) path
  })
  await fs.writeFile(sassRenderOutFile, result.css)
  await fs.copy(tmpDir, output)
  await fs.remove(tmpDir)
}

module.exports = main
