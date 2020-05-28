const path = require('path')
const fs = require('fs-extra')
const sass = require('node-sass')

const { parse } = require('./parse-config')
const { sanitize } = require('./sanitize-config')
const { transform } = require('./transform-config')
const { merge } = require('./merge-objects')
const { write: writeMixins } = require('./write-mixins')
const { write: writeStyles } = require('./write-styles')

async function main({ config, output, compression } = {}) {
  // messy entry paths — TODO: tidy/structure
  const srcDir = path.join(__dirname, 'sass')
  const tmpDir = path.join(__dirname, '../build')
  const defaultsPath = path.join(__dirname, './defaults.yml')
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
  // parse the custom config
  const parsed = await parse(config)
  // parse the deafults (internal shadow config file)
  const defaults = await parse(defaultsPath)
  // TODO: assert validation of config file before attempting merge
  // validateConfigorThrow(parsed)
  // since config is valid, clean intermediate target for built files
  await fs.remove(tmpDir)
  // merge custom config onto necessary but optional defaults (e.g.
  // prefixes and vertical rhythm settings)
  const merged = merge(defaults, parsed)
  // fill in blanks for styles (i.e. use null instead of undefined for
  // omitted mixin properties)
  const sanitized = await sanitize(merged)
  // convert raw values into a sass-ready format
  const transformed = await transform(sanitized)
  // with our transformed data structure now containing sass, write
  // the mixin definitions to a single ready-to-save string
  const mixins = writeMixins({ data: transformed })
  // copy the source sass dir to its temp destination before we start
  // to mutate it with custom generated code
  await fs.copy(srcDir, tmpDirSass)
  // write the generated mixins to the temp sass dir
  await fs.writeFile(generatedSassMixinsPath, mixins)
  // write the classes that refer to the generated mixins (as string)
  const styles = writeStyles({ data: transformed, config: sanitized })
  // write the styles to the temp dir
  await fs.writeFile(generatedSassStylesPath, styles)
  // render the temp dir with the main entry point
  const result = sass.renderSync({
    file: sassRenderEntryPoint,
    outFile: sassRenderOutFile,
    outputStyle: compression,
    sourceMap: true, // or an absolute or relative (to outFile) path
  })
  // write the resultant css to the temp dir
  await fs.writeFile(sassRenderOutFile, result.css)
  // if we made it this far without throwing, copy the finalized temp
  // dir to the final output destination
  await fs.copy(tmpDir, output)
  // remove the temp dir, that's a wrap. If the process threw and we
  // didn't make it here, it doesn't really matter. this would also
  // get cleaned up above (after asserting on valid config and before
  // copying the source content to temp location)
  await fs.remove(tmpDir)
}

module.exports = main
