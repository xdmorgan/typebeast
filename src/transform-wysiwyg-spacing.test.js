const { transform } = require('./transform-wysiwyg-spacing')

test('empty input : empty output', () => {
  // these can be omitted from a minimally viable config, but if they're
  // removed from the defaults.yml settings file this code will throw
  const defaults = {
    wysiwyg: { scope: 'wysiwyg' },
    prefixes: { typography: 'type' },
  }
  expect(transform({ ...defaults })).toEqual({})
  expect(transform({ ...defaults, 'format-version': 1 })).toEqual({})
  expect(transform({ ...defaults, wysiwyg: null })).toEqual({})
  expect(transform({ ...defaults, wysiwyg: {} })).toEqual({})
})

test('supports custom scope class', () => {
  expect(
    transform({
      prefixes: { typography: 'type' },
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
      prefixes: { typography: 'type' },
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
