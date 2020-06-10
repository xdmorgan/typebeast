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
        },
        "settings": Object {
          "calculate-rem-size": true,
          "include-utility-classes": true,
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
          "h1": Object {
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
          "h1-xl": Object {
            "default": Object {
              "family": "Poppins",
              "letter": "-0.0125em",
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
              "family": "Poppins",
              "letter": "-0.0125em",
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
              "family": "Poppins",
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
              "family": "Poppins",
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
              "family": "Poppins",
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
              "family": "Poppins",
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
                "& > p > img:first-child:last-child",
                "& > p > .gatsby-resp-image-wrapper",
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
