const { transform } = require('./transform-typography')
const mock = require('../mocks/demo-site.json')

// test('transform(): minimal config', () => {
//   expect(transform({})).toEqual({})
//   expect(transform({ 'format-version': 1 })).toEqual({})
//   expect(transform({ typography: null })).toEqual({})
//   expect(transform({ typography: {} })).toEqual({})
// })

describe('Transform parsed config file to desired structure', () => {
  test('Transform config', () => {
    const transformed = transform(mock)
    expect(transformed).toMatchInlineSnapshot(`
      Object {
        "caption": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-caption-default($family: null, $letter: null, $line: 15, $size: 10, $style: null, $transform: null, $weight: null){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
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
        @mixin type-caption-large($family: null, $letter: null, $line: null, $size: 12, $style: null, $transform: null, $weight: null){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
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
            ".wysiwyg figcaption",
          ],
        },
        "heading-1": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-heading-1-default($family: Poppins, $letter: -0.0125em, $line: 35.2, $size: 32, $style: null, $transform: null, $weight: normal){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
        }
      ",
                "name": "type-heading-1-default",
              },
              "settings": Object {
                "family": "Poppins",
                "letter": "-0.0125em",
                "line": 35.2,
                "size": 32,
                "weight": "normal",
              },
            },
            "large": Object {
              "mixin": Object {
                "definition": "
        @mixin type-heading-1-large($family: null, $letter: null, $line: null, $size: 48, $style: null, $transform: null, $weight: null){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
        }
      ",
                "name": "type-heading-1-large",
              },
              "settings": Object {
                "size": 48,
              },
            },
          },
          "selectors": Array [
            ".type-heading-1",
            ".wysiwyg h1",
          ],
        },
        "heading-2": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-heading-2-default($family: Poppins, $letter: null, $line: 30.8, $size: 28, $style: null, $transform: null, $weight: normal){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
        }
      ",
                "name": "type-heading-2-default",
              },
              "settings": Object {
                "family": "Poppins",
                "line": 30.8,
                "size": 28,
                "weight": "normal",
              },
            },
            "large": Object {
              "mixin": Object {
                "definition": "
        @mixin type-heading-2-large($family: null, $letter: null, $line: null, $size: 32, $style: null, $transform: null, $weight: null){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
        }
      ",
                "name": "type-heading-2-large",
              },
              "settings": Object {
                "size": 32,
              },
            },
          },
          "selectors": Array [
            ".type-heading-2",
            ".wysiwyg h2",
          ],
        },
        "heading-3": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-heading-3-default($family: Poppins, $letter: null, $line: 22, $size: 20, $style: null, $transform: null, $weight: normal){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
        }
      ",
                "name": "type-heading-3-default",
              },
              "settings": Object {
                "family": "Poppins",
                "line": 22,
                "size": 20,
                "weight": "normal",
              },
            },
            "large": Object {
              "mixin": Object {
                "definition": "
        @mixin type-heading-3-large($family: null, $letter: null, $line: null, $size: 24, $style: null, $transform: null, $weight: null){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
        }
      ",
                "name": "type-heading-3-large",
              },
              "settings": Object {
                "size": 24,
              },
            },
          },
          "selectors": Array [
            ".type-heading-3",
            ".wysiwyg h3",
          ],
        },
        "heading-4": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-heading-4-default($family: Poppins, $letter: null, $line: 19.2, $size: 16, $style: null, $transform: null, $weight: bold){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
        }
      ",
                "name": "type-heading-4-default",
              },
              "settings": Object {
                "family": "Poppins",
                "line": 19.2,
                "size": 16,
                "weight": "bold",
              },
            },
            "large": Object {
              "mixin": Object {
                "definition": "
        @mixin type-heading-4-large($family: null, $letter: null, $line: null, $size: 20, $style: null, $transform: null, $weight: null){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
        }
      ",
                "name": "type-heading-4-large",
              },
              "settings": Object {
                "size": 20,
              },
            },
          },
          "selectors": Array [
            ".type-heading-4",
            ".wysiwyg h4",
          ],
        },
        "heading-5": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-heading-5-default($family: Poppins, $letter: null, $line: 15.6, $size: 13, $style: null, $transform: null, $weight: bold){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
        }
      ",
                "name": "type-heading-5-default",
              },
              "settings": Object {
                "family": "Poppins",
                "line": 15.6,
                "size": 13,
                "weight": "bold",
              },
            },
            "large": Object {
              "mixin": Object {
                "definition": "
        @mixin type-heading-5-large($family: null, $letter: null, $line: null, $size: 16, $style: null, $transform: null, $weight: null){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
        }
      ",
                "name": "type-heading-5-large",
              },
              "settings": Object {
                "size": 16,
              },
            },
          },
          "selectors": Array [
            ".type-heading-5",
            ".wysiwyg h5",
          ],
        },
        "heading-6": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-heading-6-default($family: null, $letter: null, $line: 12, $size: 10, $style: null, $transform: uppercase, $weight: bold){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
        }
      ",
                "name": "type-heading-6-default",
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
        @mixin type-heading-6-large($family: null, $letter: null, $line: null, $size: 12, $style: null, $transform: null, $weight: null){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
        }
      ",
                "name": "type-heading-6-large",
              },
              "settings": Object {
                "size": 12,
              },
            },
          },
          "selectors": Array [
            ".type-heading-6",
            ".wysiwyg h6",
          ],
        },
        "lede": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-lede-default($family: null, $letter: null, $line: 27, $size: 18, $style: null, $transform: null, $weight: null){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
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
        @mixin type-lede-large($family: null, $letter: null, $line: null, $size: 24, $style: null, $transform: null, $weight: null){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
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
            ".wysiwyg.with-lede > p:first-child",
            ".wysiwyg blockquote > p",
          ],
        },
        "para": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-para-default($family: null, $letter: null, $line: 27.2, $size: 16, $style: null, $transform: null, $weight: null){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
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
        @mixin type-para-large($family: null, $letter: null, $line: null, $size: 18, $style: null, $transform: null, $weight: null){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
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
            ".wysiwyg p",
            ".wysiwyg ul",
            ".wysiwyg ol",
            ".wysiwyg dl",
          ],
        },
        "small": Object {
          "breakpoints": Object {
            "default": Object {
              "mixin": Object {
                "definition": "
        @mixin type-small-default($family: null, $letter: null, $line: 23.8, $size: 14, $style: null, $transform: null, $weight: null){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
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
        @mixin type-small-large($family: null, $letter: null, $line: null, $size: 16, $style: null, $transform: null, $weight: null){
          @include typebeast($family, $letter, $line, $size, $style, $transform, $weight);
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
            ".wysiwyg small",
          ],
        },
      }
    `)
  })
})
