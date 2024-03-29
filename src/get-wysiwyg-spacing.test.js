const { get } = require('./get-wysiwyg-spacing')
const mox = {
  default: require('../mocks/minimum.json'),
  kitchenSink: require('../mocks/kitchen-sink.json'),
}

test('write wysiwyg spacing rules for minimum config', async () => {
  expect(get(mox.default)).toMatchInlineSnapshot(`""`)
})

test('write wysiwyg spacing rules for minimum config', async () => {
  expect(get(mox.kitchenSink)).toMatchInlineSnapshot(`
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
      blockquote,
      & > p > img:first-child:last-child,
      & > p > .gatsby-resp-image-wrapper {
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
        blockquote,
        & > p > img:first-child:last-child,
        & > p > .gatsby-resp-image-wrapper {
          margin-block-start: 4rem;
          margin-block-end: 4rem;
        }
      }
    }
    "
  `)
})
