const { transform } = require('./transform-wysiwyg-spacing')

test('empty input : empty output', () => {
  // these can be omitted from a minimally viable config, but if they're
  // removed from the defaults.yml settings file this code will throw
  const defaults = {
    wysiwyg: { scope: 'wysiwyg' },
  }
  expect(transform({ ...defaults })).toEqual({})
  expect(transform({ ...defaults, 'format-version': 1 })).toEqual({})
  expect(transform({ ...defaults, wysiwyg: null })).toEqual({})
  expect(transform({ ...defaults, wysiwyg: {} })).toEqual({})
})

test('supports custom scope class', () => {
  expect(
    transform({
      wysiwyg: { scope: 'wysiwyg', spacing: { rhythm: {} } },
    })
  ).toMatchInlineSnapshot(`
    Object {
      "breakpoints": Object {
        "default": [Function],
      },
      "groups": Object {
        "rhythm": Object {
          "breakpoints": Object {},
          "selectors": "",
        },
      },
      "scope": ".wysiwyg",
    }
  `)
  expect(
    transform({
      wysiwyg: { scope: 'wizzy-wig', spacing: { rhythm: {} } },
    })
  ).toMatchInlineSnapshot(`
    Object {
      "breakpoints": Object {
        "default": [Function],
      },
      "groups": Object {
        "rhythm": Object {
          "breakpoints": Object {},
          "selectors": "",
        },
      },
      "scope": ".wizzy-wig",
    }
  `)
})

test('supports block logical property shorthand', () => {
  expect(
    transform({
      wysiwyg: {
        scope: 'wysiwyg',
        spacing: {
          rhythm: {
            include: 'h1',
            breakpoints: {
              default: {
                block: 1,
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    Object {
      "breakpoints": Object {
        "default": [Function],
      },
      "groups": Object {
        "rhythm": Object {
          "breakpoints": Object {
            "default": Object {
              "margin-block-end": 1,
              "margin-block-start": 1,
            },
          },
          "selectors": "h1",
        },
      },
      "scope": ".wysiwyg",
    }
  `)
})

test('supports inline logical property shorthand', () => {
  expect(
    transform({
      wysiwyg: {
        scope: 'wysiwyg',
        spacing: {
          rhythm: {
            include: 'h1',
            breakpoints: {
              default: {
                inline: 1,
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    Object {
      "breakpoints": Object {
        "default": [Function],
      },
      "groups": Object {
        "rhythm": Object {
          "breakpoints": Object {
            "default": Object {
              "margin-inline-end": 1,
              "margin-inline-start": 1,
            },
          },
          "selectors": "h1",
        },
      },
      "scope": ".wysiwyg",
    }
  `)
})

test('supports directional logical properties', () => {
  expect(
    transform({
      wysiwyg: {
        scope: 'wysiwyg',
        spacing: {
          rhythm: {
            include: 'h1',
            breakpoints: {
              default: {
                'block-start': 1,
                'block-end': 2,
                'inline-start': 3,
                'inline-end': 4,
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    Object {
      "breakpoints": Object {
        "default": [Function],
      },
      "groups": Object {
        "rhythm": Object {
          "breakpoints": Object {
            "default": Object {
              "margin-block-end": 2,
              "margin-block-start": 1,
              "margin-inline-end": 4,
              "margin-inline-start": 3,
            },
          },
          "selectors": "h1",
        },
      },
      "scope": ".wysiwyg",
    }
  `)
})

test('supports responsive logical properties', () => {
  expect(
    transform({
      wysiwyg: {
        scope: 'wysiwyg',
        spacing: {
          rhythm: {
            include: 'h1',
            breakpoints: {
              default: {
                'block-start': 1,
                'block-end': 2,
                'inline-start': 3,
                'inline-end': 4,
              },
              large: {
                block: 5,
                inline: 6,
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    Object {
      "breakpoints": Object {
        "default": [Function],
      },
      "groups": Object {
        "rhythm": Object {
          "breakpoints": Object {
            "default": Object {
              "margin-block-end": 2,
              "margin-block-start": 1,
              "margin-inline-end": 4,
              "margin-inline-start": 3,
            },
            "large": Object {
              "margin-block-end": 5,
              "margin-block-start": 5,
              "margin-inline-end": 6,
              "margin-inline-start": 6,
            },
          },
          "selectors": "h1",
        },
      },
      "scope": ".wysiwyg",
    }
  `)
})

test('supports responsive logical properties', () => {
  expect(
    transform({
      wysiwyg: {
        scope: 'wysiwyg',
        spacing: {
          rhythm: {
            include: 'h1',
            breakpoints: {
              default: {
                'block-start': 1,
                'block-end': 2,
                'inline-start': 3,
                'inline-end': 4,
              },
              large: {
                block: 5,
                inline: 6,
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    Object {
      "breakpoints": Object {
        "default": [Function],
      },
      "groups": Object {
        "rhythm": Object {
          "breakpoints": Object {
            "default": Object {
              "margin-block-end": 2,
              "margin-block-start": 1,
              "margin-inline-end": 4,
              "margin-inline-start": 3,
            },
            "large": Object {
              "margin-block-end": 5,
              "margin-block-start": 5,
              "margin-inline-end": 6,
              "margin-inline-start": 6,
            },
          },
          "selectors": "h1",
        },
      },
      "scope": ".wysiwyg",
    }
  `)
})

test('directional properties take precendence over shorthand', () => {
  expect(
    transform({
      wysiwyg: {
        scope: 'wysiwyg',
        spacing: {
          rhythm: {
            include: 'h1',
            breakpoints: {
              default: {
                block: 1,
                'block-start': 2,
              },
              large: {
                inline: 5,
                'inline-start': 6,
              },
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    Object {
      "breakpoints": Object {
        "default": [Function],
      },
      "groups": Object {
        "rhythm": Object {
          "breakpoints": Object {
            "default": Object {
              "margin-block-end": 1,
              "margin-block-start": 2,
            },
            "large": Object {
              "margin-inline-end": 5,
              "margin-inline-start": 6,
            },
          },
          "selectors": "h1",
        },
      },
      "scope": ".wysiwyg",
    }
  `)
})

test('supports selector list', () => {
  expect(
    transform({
      wysiwyg: {
        scope: 'wysiwyg',
        spacing: {
          rhythm: {
            include: ['h1', 'h2', '.test', '&:first-child *'],
            breakpoints: {},
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    Object {
      "breakpoints": Object {
        "default": [Function],
      },
      "groups": Object {
        "rhythm": Object {
          "breakpoints": Object {},
          "selectors": "h1, h2, .test, &:first-child *",
        },
      },
      "scope": ".wysiwyg",
    }
  `)
})

test('creates breakpoint writers for defined breakpoints', () => {
  const { breakpoints } = transform({
    breakpoints: {
      sm: '420px',
      xl: '50em',
    },
    wysiwyg: {
      scope: 'wysiwyg',
      spacing: {},
    },
  })
  // do not wrap default in a media query
  expect(breakpoints.default('body')).toMatchInlineSnapshot(`"body"`)
  // wrap non-default breakpoints in media queries
  expect(breakpoints.sm('body')).toMatchInlineSnapshot(
    `"@include typebeast-break-min(420px){ body }"`
  )
  expect(breakpoints.xl('body')).toMatchInlineSnapshot(
    `"@include typebeast-break-min(50em){ body }"`
  )
})
