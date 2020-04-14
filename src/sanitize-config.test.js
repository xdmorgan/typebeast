const { sanitize } = require('./sanitize-config')

const MOCK_CONFIG = getMockConfig()

describe('Sanitize parsed config file to set default values', () => {
  test('sanitize()', () => {
    const sanitized = sanitize(MOCK_CONFIG)
    // expect(true).toBe(true)
    expect(sanitized).toMatchInlineSnapshot(`
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
          "h1": Object {
            "default": Object {
              "family": null,
              "letter": "-0.03125em",
              "line": 35.2,
              "size": 32,
              "style": null,
              "transform": null,
              "weight": "bold",
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
          "h1-xl": Object {
            "default": Object {
              "family": null,
              "letter": "-0.03125em",
              "line": 39.6,
              "size": 36,
              "style": null,
              "transform": null,
              "weight": "bold",
            },
            "large": Object {
              "family": null,
              "letter": null,
              "line": null,
              "size": 64,
              "style": null,
              "transform": null,
              "weight": null,
            },
          },
          "h1-xxl": Object {
            "default": Object {
              "family": null,
              "letter": "-0.03125em",
              "line": 46.2,
              "size": 42,
              "style": null,
              "transform": null,
              "weight": "bold",
            },
            "large": Object {
              "family": null,
              "letter": null,
              "line": null,
              "size": 80,
              "style": null,
              "transform": null,
              "weight": null,
            },
          },
          "h2": Object {
            "default": Object {
              "family": null,
              "letter": null,
              "line": 30.8,
              "size": 28,
              "style": null,
              "transform": null,
              "weight": "bold",
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
          "h3": Object {
            "default": Object {
              "family": null,
              "letter": null,
              "line": 22,
              "size": 20,
              "style": null,
              "transform": null,
              "weight": "bold",
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
          "h4": Object {
            "default": Object {
              "family": null,
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
          "h5": Object {
            "default": Object {
              "family": null,
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
          "h6": Object {
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

function getMockConfig() {
  return {
    breakpoints: { large: '768px' },
    typography: {
      'h1-xxl': {
        default: {
          size: 42,
          line: 46.2,
          weight: 'bold',
          letter: '-0.03125em',
        },
        large: { size: 80 },
      },
      'h1-xl': {
        default: {
          size: 36,
          line: 39.6,
          weight: 'bold',
          letter: '-0.03125em',
        },
        large: { size: 64 },
      },
      h1: {
        default: {
          size: 32,
          line: 35.2,
          weight: 'bold',
          letter: '-0.03125em',
        },
        large: { size: 48 },
      },
      h2: {
        default: { size: 28, line: 30.8, weight: 'bold' },
        large: { size: 32 },
      },
      h3: {
        default: { size: 20, line: 22, weight: 'bold' },
        large: { size: 24 },
      },
      h4: {
        default: { size: 16, line: 19.2, weight: 'bold' },
        large: { size: 20 },
      },
      h5: {
        default: { size: 13, line: 15.6, weight: 'bold' },
        large: { size: 16 },
      },
      h6: {
        default: {
          size: 10,
          line: 12,
          weight: 'bold',
          transform: 'uppercase',
        },
        large: { size: 12 },
      },
      lede: { default: { size: 18, line: 27 }, large: { size: 24 } },
      para: {
        default: { size: 16, line: 27.2 },
        large: { size: 18 },
      },
      small: {
        default: { size: 14, line: 23.8 },
        large: { size: 16 },
      },
      caption: {
        default: { size: 10, line: 15 },
        large: { size: 12 },
      },
    },
    wysiwyg: {
      scope: 'wysiwyg',
      elements: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        para: ['p', 'ul', 'ol', 'dl', 'blockquote'],
        small: 'small',
        caption: 'figcaption',
      },
      rhythm: {
        default: { before: '16px', after: '16px' },
        large: { before: '24px', after: '24px' },
      },
    },
    outputs: {
      'sass-mixins': true,
      'sass-tokens': true,
      'css-variables': true,
    },
    prefixes: {
      typography: 'type',
      'custom-properties': 'type',
    },
    'custom-fonts': {
      helvetica: { url: 'path', weight: 'str', style: 'str' },
    },
  }
}
