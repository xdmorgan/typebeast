const { parse } = require('./parse-config')

describe('Load and parse yml config as json', () => {
  test('Read sample config', async () => {
    const file = __dirname + '/typebeast.yml'
    expect(await parse(file)).toMatchInlineSnapshot(`
      Object {
        "breakpoints": Object {
          "large": "768px",
        },
        "custom-fonts": Object {
          "helvetica": Object {
            "style": "str",
            "url": "path",
            "weight": "str",
          },
        },
        "outputs": Object {
          "css-variables": true,
          "sass-mixins": true,
          "sass-tokens": true,
        },
        "prefix": Object {
          "custom-properties": "typebeast",
          "sass-mixins": "typebeast",
          "sass-tokens": "typebeast",
          "typography": "text",
        },
        "typography": Object {
          "heading-1": Object {
            "default": Object {
              "font-size": "2rem",
              "font-weight": "bold",
              "line-height": 1.4,
            },
            "large": Object {
              "font-size": "2.5rem",
              "line-height": 1.2,
            },
          },
          "heading-2": Object {
            "default": Object {
              "font-size": "18px",
              "font-weight": 500,
              "line-height": 1,
            },
          },
        },
        "wysiwyg": Object {
          "elements": Object {
            "h1": "heading-1",
            "h2": "heading-2",
            "p": "paragraph",
            "small": "small-paragraph",
          },
          "scope": "wysiwyg",
        },
      }
    `)
  })
})
