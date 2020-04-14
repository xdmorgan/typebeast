const path = require('path')
const { parse } = require('./parse-config')

describe('Load and parse yml config as json', () => {
  test('Read sample config', async () => {
    const file = path.join(__dirname, '../typebeast.yml')
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
        "prefixes": Object {
          "custom-properties": "type",
          "sass-mixins": "type",
          "sass-tokens": "type",
          "typography": "type",
        },
        "typography": Object {
          "caption": Object {
            "default": Object {
              "line": 15,
              "size": 10,
            },
            "large": Object {
              "size": 12,
            },
          },
          "h1": Object {
            "default": Object {
              "letter": "-0.03125em",
              "line": 35.2,
              "size": 32,
              "weight": "bold",
            },
            "large": Object {
              "size": 48,
            },
          },
          "h1-xl": Object {
            "default": Object {
              "letter": "-0.03125em",
              "line": 39.6,
              "size": 36,
              "weight": "bold",
            },
            "large": Object {
              "size": 64,
            },
          },
          "h1-xxl": Object {
            "default": Object {
              "letter": "-0.03125em",
              "line": 46.2,
              "size": 42,
              "weight": "bold",
            },
            "large": Object {
              "size": 80,
            },
          },
          "h2": Object {
            "default": Object {
              "line": 30.8,
              "size": 28,
              "weight": "bold",
            },
            "large": Object {
              "size": 32,
            },
          },
          "h3": Object {
            "default": Object {
              "line": 22,
              "size": 20,
              "weight": "bold",
            },
            "large": Object {
              "size": 24,
            },
          },
          "h4": Object {
            "default": Object {
              "line": 19.2,
              "size": 16,
              "weight": "bold",
            },
            "large": Object {
              "size": 20,
            },
          },
          "h5": Object {
            "default": Object {
              "line": 15.6,
              "size": 13,
              "weight": "bold",
            },
            "large": Object {
              "size": 16,
            },
          },
          "h6": Object {
            "default": Object {
              "line": 12,
              "size": 10,
              "transform": "uppercase",
              "weight": "bold",
            },
            "large": Object {
              "size": 12,
            },
          },
          "lede": Object {
            "default": Object {
              "line": 27,
              "size": 18,
            },
            "large": Object {
              "size": 24,
            },
          },
          "para": Object {
            "default": Object {
              "line": 27.2,
              "size": 16,
            },
            "large": Object {
              "size": 18,
            },
          },
          "small": Object {
            "default": Object {
              "line": 23.8,
              "size": 14,
            },
            "large": Object {
              "size": 16,
            },
          },
        },
        "wysiwyg": Object {
          "elements": Object {
            "caption": "figcaption",
            "h1": "h1",
            "h2": "h2",
            "h3": "h3",
            "h4": "h4",
            "h5": "h5",
            "h6": "h6",
            "para": Array [
              "p",
              "ul",
              "ol",
              "dl",
              "blockquote",
            ],
            "small": "small",
          },
          "rhythm": Object {
            "default": Object {
              "after": "16px",
              "before": "16px",
            },
            "large": Object {
              "after": "24px",
              "before": "24px",
            },
          },
          "scope": "wysiwyg",
        },
      }
    `)
  })
})
