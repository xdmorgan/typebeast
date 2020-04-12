const path = require('path')
const fs = require('fs-extra')
const sass = require('node-sass')

const { parse } = require('./parse-config')
const { sanitize } = require('./sanitize-config')
const { transform } = require('./transform-config')
const { write: writeMixins } = require('./write-mixins')
const { write: writeStyles } = require('./write-styles')

async function main({
  input = path.join(__dirname, 'typebeast.yml'),
  outFile = 'typebeast.css',
  outDir = path.join(__dirname, '../public/typebeast'),
  sassOutputStyle = 'compact',
} = {}) {
  const srcDir = path.join(__dirname, 'sass')
  const tempDir = path.join(__dirname, 'temp')
  const generatedSassMixinsPath = path.join(tempDir, 'generated-mixins.scss')
  const generatedSassStylesPath = path.join(tempDir, 'generated-styles.scss')
  const sassRenderEntryPoint = path.join(tempDir, 'main.scss')
  const sassRenderOutFile = path.join(tempDir, outFile)

  // parse config
  const config = await parse(input)
  // TODO: assert validation of config file before attempting merge
  // validateConfigorThrow(config)
  // since config is valid, clean intermediate target for built files
  await fs.remove(tempDir)

  // TODO: merge custom config onto defaults for things like prefixes
  const sanitized = await sanitize(config)
  const transformed = await transform(sanitized)
  // write mixin definitions
  const mixins = writeMixins({ data: transformed })
  await fs.copy(srcDir, tempDir)
  await fs.writeFile(generatedSassMixinsPath, mixins)
  // write classes that refer to the mixins
  const styles = writeStyles({ data: transformed, config })
  await fs.writeFile(generatedSassStylesPath, styles)
  const result = sass.renderSync({
    file: sassRenderEntryPoint,
    outFile: sassRenderOutFile,
    outputStyle: sassOutputStyle,
    sourceMap: true, // or an absolute or relative (to outFile) path
  })
  await fs.writeFile(sassRenderOutFile, result.css)
  await fs.copy(tempDir, outDir)
  await fs.remove(tempDir)
}

main()
