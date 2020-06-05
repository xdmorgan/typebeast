function getScopeFromConfig(config) {
  return '.' + config.wysiwyg.scope
}

// TODO: copied from transform-spacing, condense at some point
function getSpacingPropertyByKey(props, key) {
  if (props[key] === undefined) return {}
  if (key === 'block') {
    return {
      'margin-block-start': props[key],
      'margin-block-end': props[key],
    }
  }
  if (key === 'inline') {
    return {
      'margin-inline-start': props[key],
      'margin-inline-end': props[key],
    }
  }
  return { [`margin-${key}`]: props[key] }
}

function getSpacingProperties(properties) {
  return {
    ...getSpacingPropertyByKey(properties, 'block'),
    ...getSpacingPropertyByKey(properties, 'block-start'),
    ...getSpacingPropertyByKey(properties, 'block-end'),
    ...getSpacingPropertyByKey(properties, 'inline'),
    ...getSpacingPropertyByKey(properties, 'inline-start'),
    ...getSpacingPropertyByKey(properties, 'inline-end'),
  }
}

function getBreakpointWritersFromConfig(config) {
  return Object.entries(config.breakpoints).reduce(
    (all, [name, size]) => ({
      ...all,
      [name]: body => `@include typebeast-break-min(${size}){ ${body} }`,
    }),
    {
      default: body => body,
    }
  )
}

function getGroupsFromConfig(config) {
  return Object.entries(config.wysiwyg.spacing).reduce(
    (allGroups, [groupName, groupData]) => ({
      ...allGroups,
      [groupName]: {
        selectors: groupData.include.join(', '),
        breakpoints: Object.entries(groupData.breakpoints).reduce(
          (allBreaks, [breakName, breakData]) => ({
            ...allBreaks,
            [breakName]: getSpacingProperties(breakData),
          }),
          {}
        ),
      },
    }),
    {}
  )
}

function transform(config) {
  if (!config.wysiwyg) return null
  return {
    // '.classname'
    scope: getScopeFromConfig(config),
    // breakpoints: {
    //   default: body => body,
    //   large: body => `@include typebeast-break-min(768px){ ${body} }`,
    // },
    breakpoints: getBreakpointWritersFromConfig(config),
    // groups: {
    //   'vertical-rhythm': {
    //     selectors: `h1, h2, h3, h4, h5, h6, p, ul, ol, dl, blockquote, figure, pre`,
    //     breakpoints: {
    //       default: {
    //         'margin-block-end': '1rem',
    //       },
    //     },
    //   },
    // },
    groups: getGroupsFromConfig(config),
  }
}

module.exports = { transform }
