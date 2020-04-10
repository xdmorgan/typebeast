const settingsToParams = settings =>
  Object.entries(settings)
    .map(([k, v]) => `$${k}: ${v}`)
    .join(',')

const settingsToVars = settings =>
  Object.keys(settings)
    .map(k => `$${k}`)
    .join(',')

const writeMixinDefinition = ({ name, settings }) => `
  @mixin ${name}(${settingsToParams(settings)}){
    @include typebeast(${settingsToVars(settings)});
  }
`

const writeCSSBlock = ({ breakpoint, mixin, selectors }) => `
${mixin.definition}

${selectors.join(', ')} {
  @include ${mixin.name};
}`

/*
{
    para: {
      breakpoints: {
        // pre-render
        default: {
          settings: { size: 14, line: 18, weight: 'bold' },
          mixin: {
            name: 'type-para-default',
            definition: 'writeDefinition(...)',
          },
        },
        // post render
        large: {
          settings: { size: 18 },
          mixin: {
            name: 'type-para-default',
            definition: `
               @mixin type-para-large($size: 18){
                 @include typebeast($size);
               }
             `,
          },
        },
        selectors: ['.type-para', '.wysiwyg p', '.wysiwyg ol', '.wysiwyg ul'],
      },
    },
  }
*/

function getBlockDataGenerator(config) {
  return ({ styleName, breakpointName }) => {
    const settings = config.typography[styleName][breakpointName]
    const mixinName = `type-${styleName}-${breakpointName}`
    const mixinDefinition = writeMixinDefinition({ name: styleName, settings })
    console.log(styleName, breakpointName, settings)
    return {
      settings,
      mixin: {
        name: mixinName,
        definition: mixinDefinition,
      },
    }
  }
}

function transform(config) {
  let out
  // grab the style names from the config ['heading-1', 'my-para']
  const styleNames = Object.keys(config.typography)
  // create mapping of style name to breakpoints with settings
  // { heading-1: ['default', 'large'], ... }
  const styleBreakpointsByName = styleNames.reduce(
    (acc, cur) => ({ ...acc, [cur]: Object.keys(config.typography[cur]) }),
    {}
  )
  const blockDataGenerator = getBlockDataGenerator(config)
  const styleDataByName = Object.entries(styleBreakpointsByName).reduce(
    (acc, [styleName, breakpointNames]) => ({
      ...acc,
      [styleName]: {
        selectors: [], //config.wysiwyg.elements[styleName]
        breakpoints: breakpointNames.reduce(
          (acc, breakpointName) => ({
            ...acc,
            [breakpointName]: blockDataGenerator({ styleName, breakpointName }),
          }),
          {}
        ),
      },
    }),
    {}
  )
  out = styleDataByName
  return out
}

module.exports = { transform }
