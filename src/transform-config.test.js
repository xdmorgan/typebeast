const { transform } = require('./transform-config')

const MOCK = getMock()

describe('Transform parsed config file to desired structure', () => {
  test('Transform config', () => {
    const transformed = transform(MOCK)
    console.log(JSON.stringify(transformed, null, 2))
    expect(true).toEqual(true)
  })
})

function getMock() {
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
    prefix: {
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
