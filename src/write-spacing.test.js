const { transform } = require('./transform-spacing')
const { write } = require('./write-spacing')
const mock = require('../public/typebeast/config.json')

describe('write()', () => {
  test('it works', async () => {
    const transformed = transform(mock)
    const spacing = write({ transformed, config: mock })
    expect(spacing).toMatchInlineSnapshot(`
      "// vertical-rhythm
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      ul,
      ol,
      dl,
      blockquote,
      figure,
      pre {
        margin-block-start: 0;
        margin-block-end: 0;
      }

      // horizontal-reset
      figure,
      blockquote,
      dd {
        margin-inline-start: 0;
        margin-inline-end: 0;
      }

      // horizontal-rule
      hr {
        margin-block-start: 3rem;
        margin-block-end: 3rem;
      }

      @media screen and (min-width: 768px) {
        // horizontal-rule
        hr {
          margin-block-start: 4rem;
          margin-block-end: 4rem;
        }
      }
      "
    `)
  })
})
