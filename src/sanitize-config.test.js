const { sanitize } = require('./sanitize-config')
const mock = require('../mocks/demo-site.json')

describe('sanitizes a config file', () => {
  test('works with an empty config', () => {
    const sanitized = sanitize({ 'format-version': 1 })
    expect(sanitized).toMatchInlineSnapshot(`
      Object {
        "format-version": 1,
      }
    `)
  })
  test('sanitizes mock', () => {
    const sanitized = sanitize(mock)
    // expect(true).toBe(true)
    expect(sanitized).toMatchInlineSnapshot(`
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
        "prefixes": Object {
          "custom-properties": "type",
          "sass-mixins": "type",
          "sass-tokens": "type",
          "typography": "type",
        },
        "settings": Object {
          "calculate-rem-size": true,
          "include-utility-classes": true,
          "monospace-font-family": null,
          "rem-base": 16,
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
              "family": null,
              "letter": null,
              "line": 15,
              "size": 10,
              "style": null,
              "transform": null,
              "weight": null,
            },
            "large": Object {
              "family": null,
              "letter": null,
              "line": null,
              "size": 12,
              "style": null,
              "transform": null,
              "weight": null,
            },
          },
          "heading-1": Object {
            "default": Object {
              "family": "Poppins",
              "letter": "-0.0125em",
              "line": 35.2,
              "size": 32,
              "style": null,
              "transform": null,
              "weight": "normal",
            },
            "large": Object {
              "family": null,
              "letter": null,
              "line": null,
              "size": 48,
              "style": null,
              "transform": null,
              "weight": null,
            },
          },
          "heading-2": Object {
            "default": Object {
              "family": "Poppins",
              "letter": null,
              "line": 30.8,
              "size": 28,
              "style": null,
              "transform": null,
              "weight": "normal",
            },
            "large": Object {
              "family": null,
              "letter": null,
              "line": null,
              "size": 32,
              "style": null,
              "transform": null,
              "weight": null,
            },
          },
          "heading-3": Object {
            "default": Object {
              "family": "Poppins",
              "letter": null,
              "line": 22,
              "size": 20,
              "style": null,
              "transform": null,
              "weight": "normal",
            },
            "large": Object {
              "family": null,
              "letter": null,
              "line": null,
              "size": 24,
              "style": null,
              "transform": null,
              "weight": null,
            },
          },
          "heading-4": Object {
            "default": Object {
              "family": "Poppins",
              "letter": null,
              "line": 19.2,
              "size": 16,
              "style": null,
              "transform": null,
              "weight": "bold",
            },
            "large": Object {
              "family": null,
              "letter": null,
              "line": null,
              "size": 20,
              "style": null,
              "transform": null,
              "weight": null,
            },
          },
          "heading-5": Object {
            "default": Object {
              "family": "Poppins",
              "letter": null,
              "line": 15.6,
              "size": 13,
              "style": null,
              "transform": null,
              "weight": "bold",
            },
            "large": Object {
              "family": null,
              "letter": null,
              "line": null,
              "size": 16,
              "style": null,
              "transform": null,
              "weight": null,
            },
          },
          "heading-6": Object {
            "default": Object {
              "family": null,
              "letter": null,
              "line": 12,
              "size": 10,
              "style": null,
              "transform": "uppercase",
              "weight": "bold",
            },
            "large": Object {
              "family": null,
              "letter": null,
              "line": null,
              "size": 12,
              "style": null,
              "transform": null,
              "weight": null,
            },
          },
          "lede": Object {
            "default": Object {
              "family": null,
              "letter": null,
              "line": 27,
              "size": 18,
              "style": null,
              "transform": null,
              "weight": null,
            },
            "large": Object {
              "family": null,
              "letter": null,
              "line": null,
              "size": 24,
              "style": null,
              "transform": null,
              "weight": null,
            },
          },
          "para": Object {
            "default": Object {
              "family": null,
              "letter": null,
              "line": 27.2,
              "size": 16,
              "style": null,
              "transform": null,
              "weight": null,
            },
            "large": Object {
              "family": null,
              "letter": null,
              "line": null,
              "size": 18,
              "style": null,
              "transform": null,
              "weight": null,
            },
          },
          "small": Object {
            "default": Object {
              "family": null,
              "letter": null,
              "line": 23.8,
              "size": 14,
              "style": null,
              "transform": null,
              "weight": null,
            },
            "large": Object {
              "family": null,
              "letter": null,
              "line": null,
              "size": 16,
              "style": null,
              "transform": null,
              "weight": null,
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
