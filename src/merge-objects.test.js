const path = require('path')
const { parse } = require('./parse-config')
const { merge } = require('./merge-objects')

describe('merge-objects', () => {
  test('Deep merge custom config onto defaults', async () => {
    const defaultsPath = path.join(__dirname, './defaults.yml')
    const configPath = path.join(__dirname, '../typebeast.yml')
    const defaults = await parse(defaultsPath)
    const config = await parse(configPath)
    expect(merge(defaults, config)).toMatchInlineSnapshot(`
      Object {
        "breakpoints": Object {
          "large": "768px",
        },
        "format-version": 1,
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
              "family": "var(--font-heading)",
              "line": 35.2,
              "size": 32,
              "weight": "normal",
            },
            "large": Object {
              "size": 48,
            },
          },
          "h1-xl": Object {
            "default": Object {
              "family": "var(--font-heading)",
              "line": 39.6,
              "size": 36,
              "weight": "normal",
            },
            "large": Object {
              "size": 64,
            },
          },
          "h1-xxl": Object {
            "default": Object {
              "family": "var(--font-heading)",
              "line": 46.2,
              "size": 42,
              "weight": "normal",
            },
            "large": Object {
              "size": 80,
            },
          },
          "h2": Object {
            "default": Object {
              "family": "var(--font-heading)",
              "line": 30.8,
              "size": 28,
              "weight": "normal",
            },
            "large": Object {
              "size": 32,
            },
          },
          "h3": Object {
            "default": Object {
              "family": "var(--font-heading)",
              "line": 22,
              "size": 20,
              "weight": "normal",
            },
            "large": Object {
              "size": 24,
            },
          },
          "h4": Object {
            "default": Object {
              "family": "var(--font-heading)",
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
              "family": "var(--font-heading)",
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
              "family": "var(--font-heading)",
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
          "ui": Object {
            "default": Object {
              "line": 18.2,
              "size": 13,
            },
            "large": Object {
              "size": 14,
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
            "defaults": Object {
              "default": Object {
                "after": "16px",
                "before": "16px",
              },
              "large": Object {
                "after": "24px",
                "before": "24px",
              },
            },
            "h1": Object {
              "default": Object {
                "before": "3rem",
              },
              "large": Object {
                "after": "2rem",
                "before": "5rem",
              },
            },
            "h2": Object {
              "large": Object {
                "after": "2rem",
                "before": "4rem",
              },
            },
          },
          "scope": "wysiwyg",
        },
      }
    `)
  })
})
