const { write } = require('./write-mixins')

const MOCK_DATA = getMockData()

describe('Convert transformed style data to written scss', () => {
  test('0 to 100 real quick', () => {
    const written = write({ data: MOCK_DATA })
    expect(written).toMatchInlineSnapshot(`
      "// h1-xxl
      // ---------------------------------------------------------

      @mixin type-h1-xxl-default(
        $size: 42,
        $line: 46.2,
        $weight: bold,
        $letter: -0.03125em
      ) {
        @include typebeast($size, $line, $weight, $letter);
      }

      @mixin type-h1-xxl-large($size: 80) {
        @include typebeast($size);
      }

      // h1-xl
      // ---------------------------------------------------------

      @mixin type-h1-xl-default(
        $size: 36,
        $line: 39.6,
        $weight: bold,
        $letter: -0.03125em
      ) {
        @include typebeast($size, $line, $weight, $letter);
      }

      @mixin type-h1-xl-large($size: 64) {
        @include typebeast($size);
      }

      // h1
      // ---------------------------------------------------------

      @mixin type-h1-default(
        $size: 32,
        $line: 35.2,
        $weight: bold,
        $letter: -0.03125em
      ) {
        @include typebeast($size, $line, $weight, $letter);
      }

      @mixin type-h1-large($size: 48) {
        @include typebeast($size);
      }

      // h2
      // ---------------------------------------------------------

      @mixin type-h2-default($size: 28, $line: 30.8, $weight: bold) {
        @include typebeast($size, $line, $weight);
      }

      @mixin type-h2-large($size: 32) {
        @include typebeast($size);
      }

      // h3
      // ---------------------------------------------------------

      @mixin type-h3-default($size: 20, $line: 22, $weight: bold) {
        @include typebeast($size, $line, $weight);
      }

      @mixin type-h3-large($size: 24) {
        @include typebeast($size);
      }

      // h4
      // ---------------------------------------------------------

      @mixin type-h4-default($size: 16, $line: 19.2, $weight: bold) {
        @include typebeast($size, $line, $weight);
      }

      @mixin type-h4-large($size: 20) {
        @include typebeast($size);
      }

      // h5
      // ---------------------------------------------------------

      @mixin type-h5-default($size: 13, $line: 15.6, $weight: bold) {
        @include typebeast($size, $line, $weight);
      }

      @mixin type-h5-large($size: 16) {
        @include typebeast($size);
      }

      // h6
      // ---------------------------------------------------------

      @mixin type-h6-default(
        $size: 10,
        $line: 12,
        $weight: bold,
        $transform: uppercase
      ) {
        @include typebeast($size, $line, $weight, $transform);
      }

      @mixin type-h6-large($size: 12) {
        @include typebeast($size);
      }

      // lede
      // ---------------------------------------------------------

      @mixin type-lede-default($size: 18, $line: 27) {
        @include typebeast($size, $line);
      }

      @mixin type-lede-large($size: 24) {
        @include typebeast($size);
      }

      // para
      // ---------------------------------------------------------

      @mixin type-para-default($size: 16, $line: 27.2) {
        @include typebeast($size, $line);
      }

      @mixin type-para-large($size: 18) {
        @include typebeast($size);
      }

      // small
      // ---------------------------------------------------------

      @mixin type-small-default($size: 14, $line: 23.8) {
        @include typebeast($size, $line);
      }

      @mixin type-small-large($size: 16) {
        @include typebeast($size);
      }

      // caption
      // ---------------------------------------------------------

      @mixin type-caption-default($size: 10, $line: 15) {
        @include typebeast($size, $line);
      }

      @mixin type-caption-large($size: 12) {
        @include typebeast($size);
      }
      "
    `)
  })
})

function getMockData() {
  return {
    'h1-xxl': {
      selectors: ['.type-h1-xxl'],
      breakpoints: {
        default: {
          settings: {
            size: 42,
            line: 46.2,
            weight: 'bold',
            letter: '-0.03125em',
          },
          mixin: {
            name: 'type-h1-xxl-default',
            definition:
              '\n  @mixin type-h1-xxl-default($size: 42,$line: 46.2,$weight: bold,$letter: -0.03125em){\n    @include typebeast($size,$line,$weight,$letter);\n  }\n',
          },
        },
        large: {
          settings: { size: 80 },
          mixin: {
            name: 'type-h1-xxl-large',
            definition:
              '\n  @mixin type-h1-xxl-large($size: 80){\n    @include typebeast($size);\n  }\n',
          },
        },
      },
    },
    'h1-xl': {
      selectors: ['.type-h1-xl'],
      breakpoints: {
        default: {
          settings: {
            size: 36,
            line: 39.6,
            weight: 'bold',
            letter: '-0.03125em',
          },
          mixin: {
            name: 'type-h1-xl-default',
            definition:
              '\n  @mixin type-h1-xl-default($size: 36,$line: 39.6,$weight: bold,$letter: -0.03125em){\n    @include typebeast($size,$line,$weight,$letter);\n  }\n',
          },
        },
        large: {
          settings: { size: 64 },
          mixin: {
            name: 'type-h1-xl-large',
            definition:
              '\n  @mixin type-h1-xl-large($size: 64){\n    @include typebeast($size);\n  }\n',
          },
        },
      },
    },
    h1: {
      selectors: ['.type-h1', '.wysiwyg .h1'],
      breakpoints: {
        default: {
          settings: {
            size: 32,
            line: 35.2,
            weight: 'bold',
            letter: '-0.03125em',
          },
          mixin: {
            name: 'type-h1-default',
            definition:
              '\n  @mixin type-h1-default($size: 32,$line: 35.2,$weight: bold,$letter: -0.03125em){\n    @include typebeast($size,$line,$weight,$letter);\n  }\n',
          },
        },
        large: {
          settings: { size: 48 },
          mixin: {
            name: 'type-h1-large',
            definition:
              '\n  @mixin type-h1-large($size: 48){\n    @include typebeast($size);\n  }\n',
          },
        },
      },
    },
    h2: {
      selectors: ['.type-h2', '.wysiwyg .h2'],
      breakpoints: {
        default: {
          settings: { size: 28, line: 30.8, weight: 'bold' },
          mixin: {
            name: 'type-h2-default',
            definition:
              '\n  @mixin type-h2-default($size: 28,$line: 30.8,$weight: bold){\n    @include typebeast($size,$line,$weight);\n  }\n',
          },
        },
        large: {
          settings: { size: 32 },
          mixin: {
            name: 'type-h2-large',
            definition:
              '\n  @mixin type-h2-large($size: 32){\n    @include typebeast($size);\n  }\n',
          },
        },
      },
    },
    h3: {
      selectors: ['.type-h3', '.wysiwyg .h3'],
      breakpoints: {
        default: {
          settings: { size: 20, line: 22, weight: 'bold' },
          mixin: {
            name: 'type-h3-default',
            definition:
              '\n  @mixin type-h3-default($size: 20,$line: 22,$weight: bold){\n    @include typebeast($size,$line,$weight);\n  }\n',
          },
        },
        large: {
          settings: { size: 24 },
          mixin: {
            name: 'type-h3-large',
            definition:
              '\n  @mixin type-h3-large($size: 24){\n    @include typebeast($size);\n  }\n',
          },
        },
      },
    },
    h4: {
      selectors: ['.type-h4', '.wysiwyg .h4'],
      breakpoints: {
        default: {
          settings: { size: 16, line: 19.2, weight: 'bold' },
          mixin: {
            name: 'type-h4-default',
            definition:
              '\n  @mixin type-h4-default($size: 16,$line: 19.2,$weight: bold){\n    @include typebeast($size,$line,$weight);\n  }\n',
          },
        },
        large: {
          settings: { size: 20 },
          mixin: {
            name: 'type-h4-large',
            definition:
              '\n  @mixin type-h4-large($size: 20){\n    @include typebeast($size);\n  }\n',
          },
        },
      },
    },
    h5: {
      selectors: ['.type-h5', '.wysiwyg .h5'],
      breakpoints: {
        default: {
          settings: { size: 13, line: 15.6, weight: 'bold' },
          mixin: {
            name: 'type-h5-default',
            definition:
              '\n  @mixin type-h5-default($size: 13,$line: 15.6,$weight: bold){\n    @include typebeast($size,$line,$weight);\n  }\n',
          },
        },
        large: {
          settings: { size: 16 },
          mixin: {
            name: 'type-h5-large',
            definition:
              '\n  @mixin type-h5-large($size: 16){\n    @include typebeast($size);\n  }\n',
          },
        },
      },
    },
    h6: {
      selectors: ['.type-h6', '.wysiwyg .h6'],
      breakpoints: {
        default: {
          settings: {
            size: 10,
            line: 12,
            weight: 'bold',
            transform: 'uppercase',
          },
          mixin: {
            name: 'type-h6-default',
            definition:
              '\n  @mixin type-h6-default($size: 10,$line: 12,$weight: bold,$transform: uppercase){\n    @include typebeast($size,$line,$weight,$transform);\n  }\n',
          },
        },
        large: {
          settings: { size: 12 },
          mixin: {
            name: 'type-h6-large',
            definition:
              '\n  @mixin type-h6-large($size: 12){\n    @include typebeast($size);\n  }\n',
          },
        },
      },
    },
    lede: {
      selectors: ['.type-lede'],
      breakpoints: {
        default: {
          settings: { size: 18, line: 27 },
          mixin: {
            name: 'type-lede-default',
            definition:
              '\n  @mixin type-lede-default($size: 18,$line: 27){\n    @include typebeast($size,$line);\n  }\n',
          },
        },
        large: {
          settings: { size: 24 },
          mixin: {
            name: 'type-lede-large',
            definition:
              '\n  @mixin type-lede-large($size: 24){\n    @include typebeast($size);\n  }\n',
          },
        },
      },
    },
    para: {
      selectors: [
        '.type-para',
        '.wysiwyg .p',
        '.wysiwyg .ul',
        '.wysiwyg .ol',
        '.wysiwyg .dl',
        '.wysiwyg .blockquote',
      ],
      breakpoints: {
        default: {
          settings: { size: 16, line: 27.2 },
          mixin: {
            name: 'type-para-default',
            definition:
              '\n  @mixin type-para-default($size: 16,$line: 27.2){\n    @include typebeast($size,$line);\n  }\n',
          },
        },
        large: {
          settings: { size: 18 },
          mixin: {
            name: 'type-para-large',
            definition:
              '\n  @mixin type-para-large($size: 18){\n    @include typebeast($size);\n  }\n',
          },
        },
      },
    },
    small: {
      selectors: ['.type-small', '.wysiwyg .small'],
      breakpoints: {
        default: {
          settings: { size: 14, line: 23.8 },
          mixin: {
            name: 'type-small-default',
            definition:
              '\n  @mixin type-small-default($size: 14,$line: 23.8){\n    @include typebeast($size,$line);\n  }\n',
          },
        },
        large: {
          settings: { size: 16 },
          mixin: {
            name: 'type-small-large',
            definition:
              '\n  @mixin type-small-large($size: 16){\n    @include typebeast($size);\n  }\n',
          },
        },
      },
    },
    caption: {
      selectors: ['.type-caption', '.wysiwyg .figcaption'],
      breakpoints: {
        default: {
          settings: { size: 10, line: 15 },
          mixin: {
            name: 'type-caption-default',
            definition:
              '\n  @mixin type-caption-default($size: 10,$line: 15){\n    @include typebeast($size,$line);\n  }\n',
          },
        },
        large: {
          settings: { size: 12 },
          mixin: {
            name: 'type-caption-large',
            definition:
              '\n  @mixin type-caption-large($size: 12){\n    @include typebeast($size);\n  }\n',
          },
        },
      },
    },
  }
}
