const { transform } = require('./transform-typography')

test('empty input : empty output', () => {
  // these can be omitted from a minimall yviable config, but if they're
  // removed from the defaults.yml settings file this code will throw
  const defaults = {
    wysiwyg: { scope: 'wysiwyg' },
    prefixes: { typography: 'type' },
  }
  expect(transform({ ...defaults })).toEqual({})
  expect(transform({ ...defaults, 'format-version': 1 })).toEqual({})
  expect(transform({ ...defaults, typography: null })).toEqual({})
  expect(transform({ ...defaults, typography: {} })).toEqual({})
})

test('supports customizable prefixes', () => {
  expect(
    transform({
      wysiwyg: { scope: 'wysiwyg' },
      prefixes: { typography: 'type' },
      typography: {
        paragraph: {},
      },
    })
  ).toMatchInlineSnapshot(`
    Object {
      "paragraph": Object {
        "breakpoints": Object {},
        "selectors": Array [
          ".type-paragraph",
        ],
      },
    }
  `)
  expect(
    transform({
      wysiwyg: { scope: 'wizzy-wig', elements: { paragraph: ['h1'] } },
      prefixes: { typography: 'typebeast' },
      typography: {
        paragraph: {},
      },
    })
  ).toMatchInlineSnapshot(`
    Object {
      "paragraph": Object {
        "breakpoints": Object {},
        "selectors": Array [
          ".typebeast-paragraph",
          ".wizzy-wig h1",
        ],
      },
    }
  `)
})

test('supports wysiwyg aliasing', () => {
  expect(
    transform({
      wysiwyg: {
        scope: 'wysiwyg',
        elements: {
          paragraph: ['p', 'ul', 'ol'],
          lede: '&.wysiwyg--with-lede p:first-child',
          heading: 'h1',
          caption: ['figcaption', 'small'],
        },
      },
      prefixes: { typography: 'type' },
      typography: {
        paragraph: {},
        lede: {},
        heading: {},
        caption: {},
      },
    })
  ).toMatchInlineSnapshot(`
    Object {
      "caption": Object {
        "breakpoints": Object {},
        "selectors": Array [
          ".type-caption",
          ".wysiwyg figcaption",
          ".wysiwyg small",
        ],
      },
      "heading": Object {
        "breakpoints": Object {},
        "selectors": Array [
          ".type-heading",
          ".wysiwyg h1",
        ],
      },
      "lede": Object {
        "breakpoints": Object {},
        "selectors": Array [
          ".type-lede",
          ".wysiwyg.wysiwyg--with-lede p:first-child",
        ],
      },
      "paragraph": Object {
        "breakpoints": Object {},
        "selectors": Array [
          ".type-paragraph",
          ".wysiwyg p",
          ".wysiwyg ul",
          ".wysiwyg ol",
        ],
      },
    }
  `)
  expect(
    transform({
      wysiwyg: { scope: 'wizzy-wig', elements: { paragraph: ['h1'] } },
      prefixes: { typography: 'typebeast' },
      typography: {
        paragraph: {},
      },
    })
  ).toMatchInlineSnapshot(`
    Object {
      "paragraph": Object {
        "breakpoints": Object {},
        "selectors": Array [
          ".typebeast-paragraph",
          ".wizzy-wig h1",
        ],
      },
    }
  `)
})

describe('generate type styles', () => {
  const reqs = {
    wysiwyg: { scope: 'wysiwyg' },
    prefixes: { typography: 'type' },
  }
  test('set specific size unit (em)', () => {
    expect(
      transform({
        ...reqs,
        typography: {
          p: {
            default: {
              size: '24em',
            },
          },
        },
      })
    ).toMatchInlineSnapshot(`
      Object {
        "p": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-p-default($family: null, $letter: null, $line: null, $size: 24em, $style: null, $transform: null, $weight: null){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
        }
      ",
                "name": "type-p-default",
              },
              "settings": Object {
                "size": "24em",
              },
            },
          },
          "selectors": Array [
            ".type-p",
          ],
        },
      }
    `)
  })
  test('support numeric regardless of convert-rem-size setting', () => {
    const example = {
      typography: {
        p: {
          default: {
            size: 24,
          },
        },
      },
    }
    expect(
      transform({
        ...reqs,
        ...example,
      })
    ).toMatchInlineSnapshot(`
      Object {
        "p": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-p-default($family: null, $letter: null, $line: null, $size: 24, $style: null, $transform: null, $weight: null){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
        }
      ",
                "name": "type-p-default",
              },
              "settings": Object {
                "size": 24,
              },
            },
          },
          "selectors": Array [
            ".type-p",
          ],
        },
      }
    `)
    expect(
      transform({
        ...reqs,
        ...example,
        settings: { 'calculate-rem-size': true },
      })
    ).toMatchInlineSnapshot(`
      Object {
        "p": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-p-default($family: null, $letter: null, $line: null, $size: 24, $style: null, $transform: null, $weight: null){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
        }
      ",
                "name": "type-p-default",
              },
              "settings": Object {
                "size": 24,
              },
            },
          },
          "selectors": Array [
            ".type-p",
          ],
        },
      }
    `)
  })
  test('check supported properties', () => {
    expect(
      transform({
        ...reqs,
        typography: {
          p: {
            default: {
              family: 'Comic Sans',
              letter: '0.05em',
              line: 24,
              size: 24,
              style: 'normal',
              transform: 'uppercase',
              weight: 'bold',
            },
          },
        },
      })
    ).toMatchInlineSnapshot(`
      Object {
        "p": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-p-default($family: Comic Sans, $letter: 0.05em, $line: 24, $size: 24, $style: normal, $transform: uppercase, $weight: bold){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
        }
      ",
                "name": "type-p-default",
              },
              "settings": Object {
                "family": "Comic Sans",
                "letter": "0.05em",
                "line": 24,
                "size": 24,
                "style": "normal",
                "transform": "uppercase",
                "weight": "bold",
              },
            },
          },
          "selectors": Array [
            ".type-p",
          ],
        },
      }
    `)
    expect(
      transform({
        ...reqs,
        typography: {
          p: {
            default: {
              family: 'Comic Sans',
              letter: '0.05em',
              line: 24,
              size: 24,
              style: 'normal',
              transform: 'uppercase',
              weight: 'bold',
            },
            large: {
              line: 48,
              size: 48,
            },
          },
        },
      })
    ).toMatchInlineSnapshot(`
      Object {
        "p": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-p-default($family: Comic Sans, $letter: 0.05em, $line: 24, $size: 24, $style: normal, $transform: uppercase, $weight: bold){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
        }
      ",
                "name": "type-p-default",
              },
              "settings": Object {
                "family": "Comic Sans",
                "letter": "0.05em",
                "line": 24,
                "size": 24,
                "style": "normal",
                "transform": "uppercase",
                "weight": "bold",
              },
            },
            "large": Object {
              "mixin": Object {
                "definition": "
        @mixin type-p-large($family: null, $letter: null, $line: 48, $size: 48, $style: null, $transform: null, $weight: null){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
        }
      ",
                "name": "type-p-large",
              },
              "settings": Object {
                "line": 48,
                "size": 48,
              },
            },
          },
          "selectors": Array [
            ".type-p",
          ],
        },
      }
    `)
  })
})
