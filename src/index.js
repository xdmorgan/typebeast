const path = require('path')
const fs = require('fs-extra')
const sass = require('node-sass')

const { parse } = require('./parse-config')
const { sanitize } = require('./sanitize-config')
const { transform } = require('./transform-config')
const { merge } = require('./merge-objects')
const { write: writeMixins } = require('./write-mixins')
const { write: writeStyles } = require('./write-styles')
const { validate } = require('./validate-config')
const { get: getSassSettingsMap } = require('./get-sass-settings-map')
const { transform: transformSpacing } = require('./transform-spacing')
const { write: writeSpacing } = require('./write-spacing')

const { CURRENT_FORMAT_VERSION = 1 } = process.env

async function main({ config, output, compression } = {}) {
  // messy entry paths — TODO: tidy/structure
  const srcDir = path.join(__dirname, 'sass')
  const tmpDir = path.join(__dirname, '../build')
  const defaultsPath = path.join(__dirname, './defaults.yml')
  const tmpDirJson = path.join(tmpDir, 'config.json')
  const tmpDirSass = path.join(tmpDir, 'sass')
  const generatedSassSettingsPath = path.join(
    tmpDirSass,
    'core/_generated-settings.scss'
  )
  const generatedSassMixinsPath = path.join(
    tmpDirSass,
    'core/_generated-mixins.scss'
  )
  const generatedSassTypographyPath = path.join(
    tmpDirSass,
    'styles/_generated-typography.scss'
  )
  const generatedSassSpacingPath = path.join(
    tmpDirSass,
    'styles/_generated-spacing.scss'
  )
  const sassRenderEntryPoint = path.join(tmpDirSass, 'main.scss')
  const sassRenderOutFile = path.join(tmpDir, 'typebeast.css')
  // parse the custom config
  const parsed = await parse(config)
  // parse the deafults (internal shadow config file)
  const defaults = await parse(defaultsPath)
  // merge custom config onto necessary but optional defaults (e.g.
  // prefixes and vertical rhythm settings)
  const merged = merge(defaults, parsed)
  // Validate combined config to ensure any assumed values are set
  const [valid, { message }] = validate(merged, CURRENT_FORMAT_VERSION)
  if (!valid) throw new Error(message)
  // since config is valid, clean intermediate target for built files
  await fs.remove(tmpDir)
  // convert config settings to a sass map
  const settings = getSassSettingsMap(merged)
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
  // write the generated settings to the temp sass dir
  await fs.writeFile(tmpDirJson, JSON.stringify(merged, null, 2))
  // write the generated settings to the temp sass dir
  await fs.writeFile(generatedSassSettingsPath, settings)
  // write the generated mixins to the temp sass dir
  await fs.writeFile(generatedSassMixinsPath, mixins)
  // write the classes that refer to the generated mixins (as string)
  const typography = writeStyles({ data: transformed, config: sanitized })
  const spacing = writeSpacing({
    transformed: transformSpacing(sanitized),
    config: sanitized,
  })
  // write the styles to the temp dir
  await fs.writeFile(generatedSassTypographyPath, typography)
  await fs.writeFile(generatedSassSpacingPath, spacing)
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
