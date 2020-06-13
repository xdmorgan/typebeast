const { transform } = require('./transform-wysiwyg-spacing')
const { write } = require('./write-wysiwyg-spacing')
const mock = require('../mocks/demo-site.json')

describe('write()', () => {
  test('it works', async () => {
    const transformed = transform(mock)
    const spacing = write(transformed)
    expect(spacing).toMatchInlineSnapshot(`
      ".wysiwyg {
        // ----------------------------------------
        // breakpoint: default
        // ----------------------------------------

        // group: vertical-rhythm

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
          margin-block-start: 1rem;
          margin-block-end: 1rem;
        }

        // group: larger-headings

        h1,
        h2 {
          margin-block-start: 3rem;
        }

        // group: smaller-headings

        h3,
        h4,
        h5,
        h6 {
          margin-block-start: 2rem;
        }

        // group: other-content

        pre,
        iframe,
        figure,
        & > img,
        blockquote {
          margin-block-start: 3rem;
          margin-block-end: 3rem;
        }

        @include typebeast-break-min(768px) {
          // ----------------------------------------
          // breakpoint: large
          // ----------------------------------------

          // group: vertical-rhythm

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
            margin-block-start: 1.5rem;
            margin-block-end: 1.5rem;
          }

          // group: larger-headings

          h1,
          h2 {
            margin-block-start: 5rem;
          }

          // group: smaller-headings

          h3,
          h4,
          h5,
          h6 {
            margin-block-start: 3rem;
          }

          // group: other-content

          pre,
          iframe,
          figure,
          & > img,
          blockquote {
            margin-block-start: 4rem;
            margin-block-end: 4rem;
          }
        }
      }
      "
    `)
  })
})
