const {
  convertObjectToSassParams,
  objectKeysToSassParams,
  ensureListOfSelectors,
} = require('./utils')

const SETTINGS_TO_SASS_PARAMS = {
  family: '$family',
  letter: '$letter',
  line: '$line',
  size: '$size',
  style: '$style',
  transform: '$transform',
  weight: '$weight',
}

const writeMixinDefinition = ({ name, settings }) => `
  @mixin ${name}(${convertObjectToSassParams(
  settings,
  SETTINGS_TO_SASS_PARAMS
)}){
    @include typebeast(${objectKeysToSassParams(SETTINGS_TO_SASS_PARAMS)});
  }
`

function createGetBlockDataGenerator(config) {
  return ({ styleName, breakpointName }) => {
    const settings = config.typography[styleName][breakpointName]
    const mixinName = `type-${styleName}-${breakpointName}`
    const mixinDefinition = writeMixinDefinition({ name: mixinName, settings })
    return {
      settings,
      mixin: {
        name: mixinName,
        definition: mixinDefinition,
      },
    }
  }
}

function createSelectorScopeFormatter(scope) {
  return sel => {
    if (sel[0] === '&') {
      return `.${scope}${sel.slice(1)}`
    } else {
      return `.${scope} ${sel}`
    }
  }
}

function createGetListOfSelectors(config) {
  const wizzyScope = config.wysiwyg.scope
  const typePrefix = config.prefixes.typography
  const selectorScopeFormatter = createSelectorScopeFormatter(wizzyScope)
  const getSelectorsByName = name => config.wysiwyg.elements[name]
  return ({ styleName }) => [
    `.${typePrefix}-${styleName}`,
    ...ensureListOfSelectors(getSelectorsByName(styleName)).map(
      selectorScopeFormatter
    ),
  ]
}

function transform(config) {
  // grab the style names from the config ['heading-1', 'my-para']
  const styleNames = Object.keys(config.typography)
  // create mapping of style name to breakpoints with settings
  // { heading-1: ['default', 'large'], ... }
  const styleBreakpointsByName = styleNames.reduce(
    (acc, cur) => ({ ...acc, [cur]: Object.keys(config.typography[cur]) }),
    {}
  )
  // partially apply the config and return the function to create breakpoints key
  const getBlockDataGenerator = createGetBlockDataGenerator(config)
  // partially apply the config and return the function to create selectors key
  const getListOfSelectors = createGetListOfSelectors(config)
  /* generate and return the transformed style data object 
  {
      para: {
        breakpoints: {
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
  return Object.entries(styleBreakpointsByName).reduce(
    (acc, [styleName, breakpointNames]) => ({
      ...acc,
      [styleName]: {
        selectors: getListOfSelectors({ styleName }),
        breakpoints: breakpointNames.reduce(
          (acc, breakpointName) => ({
            ...acc,
            [breakpointName]: getBlockDataGenerator({
              styleName,
              breakpointName,
            }),
          }),
          {}
        ),
      },
    }),
    {}
  )
}

module.exports = { transform }
