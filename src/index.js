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
const {
  transform: transformWysiwygSpacing,
} = require('./transform-wysiwyg-spacing')
const { write: writeWysiwygSpacing } = require('./write-wysiwyg-spacing')
const { get: getInlineLinks } = require('./get-inline-links')
const { get: getInlineCode } = require('./get-inline-code')
const { get: getInlineKBD } = require('./get-inline-kbd')
const { get: getBlockImages } = require('./get-block-images')

const { CURRENT_FORMAT_VERSION = 1 } = process.env

async function main(opts = {}) {
  console.log(opts)

  // messy entry paths — TODO: tidy/structure
  const srcDir = path.join(__dirname, 'sass')
  const tmpDir = path.join(__dirname, '../tmp')
  const defaultsPath = path.join(__dirname, './defaults.yml')
  const tmpDirJson = path.join(tmpDir, 'config.json')
  const tmpDirSass = path.join(tmpDir, 'sass')
  const generatedSassPaths = {
    settings: path.join(tmpDirSass, 'core/_generated-settings.scss'),
    mixins: path.join(tmpDirSass, 'core/_generated-mixins.scss'),
    index: path.join(tmpDirSass, 'styles/_index.scss'),
    typography: path.join(tmpDirSass, 'styles/_generated-typography.scss'),
    spacing: path.join(tmpDirSass, 'styles/_generated-spacing.scss'),
    wysiwygSpacing: path.join(
      tmpDirSass,
      'styles/_generated-wysiwyg-spacing.scss'
    ),
    inlineLinks: path.join(tmpDirSass, 'styles/_generated-inline-links.scss'),
    inlineCode: path.join(tmpDirSass, 'styles/_generated-inline-code.scss'),
    inlineKBD: path.join(tmpDirSass, 'styles/_generated-inline-kbd.scss'),
    blockImages: path.join(tmpDirSass, 'styles/_generated-block-images.scss'),
  }

  const sassRenderPaths = {
    entryPoint: path.join(tmpDirSass, 'main.scss'),
    outCSSFile: path.join(tmpDir, 'typebeast.css'),
    outMapFile: path.join(tmpDir, 'typebeast.css.map'),
  }

  // parse the custom config
  const parsed = await parse(opts.config)
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
  const typography = writeStyles({ data: transformed, config: sanitized })
  const spacing = writeSpacing({
    transformed: transformSpacing(merged),
    config: merged,
  })
  const wysiwygSpacing = writeWysiwygSpacing(transformWysiwygSpacing(merged))
  const inlineLinks = getInlineLinks(merged)
  const inlineCode = getInlineCode(merged)
  const inlineKBD = getInlineKBD(merged)
  const blockImages = getBlockImages(merged)

  // copy the source sass dir to its temp destination before we start
  // to mutate it with custom generated code
  await fs.copy(srcDir, tmpDirSass)
  if (opts.json) {
    // write the generated settings to the temp sass dir
    await fs.writeFile(tmpDirJson, JSON.stringify(merged, null, 2))
  }
  // write the generated settings to the temp sass dir
  await fs.writeFile(generatedSassPaths.settings, settings)
  // write the generated mixins to the temp sass dir
  await fs.writeFile(generatedSassPaths.mixins, mixins)
  // write the classes that refer to the generated mixins (as string)
  await fs.writeFile(generatedSassPaths.typography, typography)
  await fs.writeFile(generatedSassPaths.spacing, spacing)
  await fs.writeFile(generatedSassPaths.wysiwygSpacing, wysiwygSpacing)
  await fs.writeFile(generatedSassPaths.inlineLinks, inlineLinks)
  await fs.writeFile(generatedSassPaths.inlineCode, inlineCode)
  await fs.writeFile(generatedSassPaths.inlineKBD, inlineKBD)
  await fs.writeFile(generatedSassPaths.blockImages, blockImages)
  // render the temp dir with the main entry point
  const result = sass.renderSync({
    file: sassRenderPaths.entryPoint,
    outFile: sassRenderPaths.outCSSFile,
    outputStyle: opts.compression,
    sourceMap: true, // or an absolute or relative (to outFile) path
  })
  // write the resultant css to the temp dir
  await fs.writeFile(sassRenderPaths.outCSSFile, result.css)
  if (opts.sourcemap) {
    // write a sourcemap if desired
    await fs.writeFile(sassRenderPaths.outMapFile, result.map)
  }
  if (!opts.sass) {
    // we needed the sass dir for rendering purposes, but if we aren't
    // publishing it, remove before we copy the tmp dir to its output
    await fs.remove(tmpDirSass)
  }
  // if we made it this far without throwing, copy the finalized temp
  // dir to the final output destination
  await fs.copy(tmpDir, opts.output)
  // remove the temp dir, that's a wrap. If the process threw and we
  // didn't make it here, it doesn't really matter. this would also
  // get cleaned up above (after asserting on valid config and before
  // copying the source content to temp location)
  await fs.remove(tmpDir)
}

module.exports = main
