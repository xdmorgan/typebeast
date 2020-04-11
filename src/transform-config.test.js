const { transform } = require('./transform-config')

const MOCK_CONFIG = getMockConfig()

describe('Transform parsed config file to desired structure', () => {
  test('Transform config', () => {
    const transformed = transform(MOCK_CONFIG)
    expect(transformed).toMatchInlineSnapshot(`
      Object {
        "caption": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-caption-default($size: 10,$line: 15){
          @include typebeast($size,$line);
        }
      ",
                "name": "type-caption-default",
              },
              "settings": Object {
                "line": 15,
                "size": 10,
              },
            },
            "large": Object {
              "mixin": Object {
                "definition": "
        @mixin type-caption-large($size: 12){
          @include typebeast($size);
        }
      ",
                "name": "type-caption-large",
              },
              "settings": Object {
                "size": 12,
              },
            },
          },
          "selectors": Array [
            ".type-caption",
            ".wysiwyg .figcaption",
          ],
        },
        "h1": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-h1-default($size: 32,$line: 35.2,$weight: bold,$letter: -0.03125em){
          @include typebeast($size,$line,$weight,$letter);
        }
      ",
                "name": "type-h1-default",
              },
              "settings": Object {
                "letter": "-0.03125em",
                "line": 35.2,
                "size": 32,
                "weight": "bold",
              },
            },
            "large": Object {
              "mixin": Object {
                "definition": "
        @mixin type-h1-large($size: 48){
          @include typebeast($size);
        }
      ",
                "name": "type-h1-large",
              },
              "settings": Object {
                "size": 48,
              },
            },
          },
          "selectors": Array [
            ".type-h1",
            ".wysiwyg .h1",
          ],
        },
        "h1-xl": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-h1-xl-default($size: 36,$line: 39.6,$weight: bold,$letter: -0.03125em){
          @include typebeast($size,$line,$weight,$letter);
        }
      ",
                "name": "type-h1-xl-default",
              },
              "settings": Object {
                "letter": "-0.03125em",
                "line": 39.6,
                "size": 36,
                "weight": "bold",
              },
            },
            "large": Object {
              "mixin": Object {
                "definition": "
        @mixin type-h1-xl-large($size: 64){
          @include typebeast($size);
        }
      ",
                "name": "type-h1-xl-large",
              },
              "settings": Object {
                "size": 64,
              },
            },
          },
          "selectors": Array [
            ".type-h1-xl",
          ],
        },
        "h1-xxl": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-h1-xxl-default($size: 42,$line: 46.2,$weight: bold,$letter: -0.03125em){
          @include typebeast($size,$line,$weight,$letter);
        }
      ",
                "name": "type-h1-xxl-default",
              },
              "settings": Object {
                "letter": "-0.03125em",
                "line": 46.2,
                "size": 42,
                "weight": "bold",
              },
            },
            "large": Object {
              "mixin": Object {
                "definition": "
        @mixin type-h1-xxl-large($size: 80){
          @include typebeast($size);
        }
      ",
                "name": "type-h1-xxl-large",
              },
              "settings": Object {
                "size": 80,
              },
            },
          },
          "selectors": Array [
            ".type-h1-xxl",
          ],
        },
        "h2": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-h2-default($size: 28,$line: 30.8,$weight: bold){
          @include typebeast($size,$line,$weight);
        }
      ",
                "name": "type-h2-default",
              },
              "settings": Object {
                "line": 30.8,
                "size": 28,
                "weight": "bold",
              },
            },
            "large": Object {
              "mixin": Object {
                "definition": "
        @mixin type-h2-large($size: 32){
          @include typebeast($size);
        }
      ",
                "name": "type-h2-large",
              },
              "settings": Object {
                "size": 32,
              },
            },
          },
          "selectors": Array [
            ".type-h2",
            ".wysiwyg .h2",
          ],
        },
        "h3": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-h3-default($size: 20,$line: 22,$weight: bold){
          @include typebeast($size,$line,$weight);
        }
      ",
                "name": "type-h3-default",
              },
              "settings": Object {
                "line": 22,
                "size": 20,
                "weight": "bold",
              },
            },
            "large": Object {
              "mixin": Object {
                "definition": "
        @mixin type-h3-large($size: 24){
          @include typebeast($size);
        }
      ",
                "name": "type-h3-large",
              },
              "settings": Object {
                "size": 24,
              },
            },
          },
          "selectors": Array [
            ".type-h3",
            ".wysiwyg .h3",
          ],
        },
        "h4": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-h4-default($size: 16,$line: 19.2,$weight: bold){
          @include typebeast($size,$line,$weight);
        }
      ",
                "name": "type-h4-default",
              },
              "settings": Object {
                "line": 19.2,
                "size": 16,
                "weight": "bold",
              },
            },
            "large": Object {
              "mixin": Object {
                "definition": "
        @mixin type-h4-large($size: 20){
          @include typebeast($size);
        }
      ",
                "name": "type-h4-large",
              },
              "settings": Object {
                "size": 20,
              },
            },
          },
          "selectors": Array [
            ".type-h4",
            ".wysiwyg .h4",
          ],
        },
        "h5": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-h5-default($size: 13,$line: 15.6,$weight: bold){
          @include typebeast($size,$line,$weight);
        }
      ",
                "name": "type-h5-default",
              },
              "settings": Object {
                "line": 15.6,
                "size": 13,
                "weight": "bold",
              },
            },
            "large": Object {
              "mixin": Object {
                "definition": "
        @mixin type-h5-large($size: 16){
          @include typebeast($size);
        }
      ",
                "name": "type-h5-large",
              },
              "settings": Object {
                "size": 16,
              },
            },
          },
          "selectors": Array [
            ".type-h5",
            ".wysiwyg .h5",
          ],
        },
        "h6": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-h6-default($size: 10,$line: 12,$weight: bold,$transform: uppercase){
          @include typebeast($size,$line,$weight,$transform);
        }
      ",
                "name": "type-h6-default",
              },
              "settings": Object {
                "line": 12,
                "size": 10,
                "transform": "uppercase",
                "weight": "bold",
              },
            },
            "large": Object {
              "mixin": Object {
                "definition": "
        @mixin type-h6-large($size: 12){
          @include typebeast($size);
        }
      ",
                "name": "type-h6-large",
              },
              "settings": Object {
                "size": 12,
              },
            },
          },
          "selectors": Array [
            ".type-h6",
            ".wysiwyg .h6",
          ],
        },
        "lede": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-lede-default($size: 18,$line: 27){
          @include typebeast($size,$line);
        }
      ",
                "name": "type-lede-default",
              },
              "settings": Object {
                "line": 27,
                "size": 18,
              },
            },
            "large": Object {
              "mixin": Object {
                "definition": "
        @mixin type-lede-large($size: 24){
          @include typebeast($size);
        }
      ",
                "name": "type-lede-large",
              },
              "settings": Object {
                "size": 24,
              },
            },
          },
          "selectors": Array [
            ".type-lede",
          ],
        },
        "para": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-para-default($size: 16,$line: 27.2){
          @include typebeast($size,$line);
        }
      ",
                "name": "type-para-default",
              },
              "settings": Object {
                "line": 27.2,
                "size": 16,
              },
            },
            "large": Object {
              "mixin": Object {
                "definition": "
        @mixin type-para-large($size: 18){
          @include typebeast($size);
        }
      ",
                "name": "type-para-large",
              },
              "settings": Object {
                "size": 18,
              },
            },
          },
          "selectors": Array [
            ".type-para",
            ".wysiwyg .p",
            ".wysiwyg .ul",
            ".wysiwyg .ol",
            ".wysiwyg .dl",
            ".wysiwyg .blockquote",
          ],
        },
        "small": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-small-default($size: 14,$line: 23.8){
          @include typebeast($size,$line);
        }
      ",
                "name": "type-small-default",
              },
              "settings": Object {
                "line": 23.8,
                "size": 14,
              },
            },
            "large": Object {
              "mixin": Object {
                "definition": "
        @mixin type-small-large($size: 16){
          @include typebeast($size);
        }
      ",
                "name": "type-small-large",
              },
              "settings": Object {
                "size": 16,
              },
            },
          },
          "selectors": Array [
            ".type-small",
            ".wysiwyg .small",
          ],
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
      'sass-mixins': 'type',
      'sass-tokens': 'type',
    },
    'custom-fonts': {
      helvetica: { url: 'path', weight: 'str', style: 'str' },
    },
  }
}
