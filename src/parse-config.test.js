const path = require('path')
const { parse } = require('./parse-config')

describe('Load and parse yml config as json', () => {
  test('Read sample config', async () => {
    const file = path.join(__dirname, '../mocks/demo-site.yml')
    expect(await parse(file)).toMatchInlineSnapshot(`
      Object {
        "breakpoints": Object {
          "large": "768px",
        },
        "format-version": 1,
        "inline-elements": Object {
          "a": Object {
            "include": ".type-link",
            "settings": Object {
              "active": "#035AEB",
              "color": "#002B73",
              "hover": "#1755BB",
              "visited": "#035AEB",
            },
          },
          "code": Object {
            "include": ".type-code",
            "settings": Object {
              "background": "#F0F9F5",
              "color": "#1C7C4E",
              "radius": "0.25rem",
            },
          },
          "kbd": Object {
            "include": ".type-kbd",
            "settings": Object {
              "background": "#f8f8f8",
              "border": "#BCBDBE",
              "color": "#454647",
              "radius": "0.25rem",
            },
          },
        },
        "settings": Object {
          "calculate-rem-size": true,
          "include-utility-classes": true,
          "wysiwyg-block-images": true,
        },
        "spacing": Object {
          "horizontal-reset": Object {
            "breakpoints": Object {
              "default": Object {
                "inline": 0,
              },
            },
            "include": Array [
              "figure",
              "blockquote",
              "dd",
            ],
          },
          "horizontal-rule": Object {
            "breakpoints": Object {
              "default": Object {
                "block": "3rem",
              },
              "large": Object {
                "block": "4rem",
              },
            },
            "include": Array [
              "hr",
            ],
          },
          "vertical-rhythm": Object {
            "breakpoints": Object {
              "default": Object {
                "block": 0,
              },
            },
            "include": Array [
              "h1",
              "h2",
              "h3",
              "h4",
              "h5",
              "h6",
              "p",
              "ul",
              "ol",
              "dl",
              "blockquote",
              "figure",
              "pre",
            ],
          },
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
          "heading-1": Object {
            "default": Object {
              "family": "Poppins",
              "letter": "-0.0125em",
              "line": 35.2,
              "size": 32,
              "weight": "normal",
            },
            "large": Object {
              "size": 48,
            },
          },
          "heading-2": Object {
            "default": Object {
              "family": "Poppins",
              "line": 30.8,
              "size": 28,
              "weight": "normal",
            },
            "large": Object {
              "size": 32,
            },
          },
          "heading-3": Object {
            "default": Object {
              "family": "Poppins",
              "line": 22,
              "size": 20,
              "weight": "normal",
            },
            "large": Object {
              "size": 24,
            },
          },
          "heading-4": Object {
            "default": Object {
              "family": "Poppins",
              "line": 19.2,
              "size": 16,
              "weight": "bold",
            },
            "large": Object {
              "size": 20,
            },
          },
          "heading-5": Object {
            "default": Object {
              "family": "Poppins",
              "line": 15.6,
              "size": 13,
              "weight": "bold",
            },
            "large": Object {
              "size": 16,
            },
          },
          "heading-6": Object {
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
            "heading-1": "h1",
            "heading-2": "h2",
            "heading-3": "h3",
            "heading-4": "h4",
            "heading-5": "h5",
            "heading-6": "h6",
            "lede": Array [
              "&.with-lede > p:first-child",
              "blockquote > p",
            ],
            "para": Array [
              "p",
              "ul",
              "ol",
              "dl",
            ],
            "small": "small",
          },
          "scope": "wysiwyg",
          "spacing": Object {
            "larger-headings": Object {
              "breakpoints": Object {
                "default": Object {
                  "block-start": "3rem",
                },
                "large": Object {
                  "block-start": "5rem",
                },
              },
              "include": Array [
                "h1",
                "h2",
              ],
            },
            "other-content": Object {
              "breakpoints": Object {
                "default": Object {
                  "block": "3rem",
                },
                "large": Object {
                  "block": "4rem",
                },
              },
              "include": Array [
                "pre",
                "iframe",
                "figure",
                "& > img",
                "blockquote",
              ],
            },
            "smaller-headings": Object {
              "breakpoints": Object {
                "default": Object {
                  "block-start": "2rem",
                },
                "large": Object {
                  "block-start": "3rem",
                },
              },
              "include": Array [
                "h3",
                "h4",
                "h5",
                "h6",
              ],
            },
            "vertical-rhythm": Object {
              "breakpoints": Object {
                "default": Object {
                  "block": "1rem",
                },
                "large": Object {
                  "block": "1.5rem",
                },
              },
              "include": Array [
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "p",
                "ul",
                "ol",
                "dl",
                "blockquote",
                "figure",
                "pre",
              ],
            },
          },
        },
      }
    `)
  })
})
