const { get } = require('./get-spacing')
const mox = {
  default: require('../mocks/minimum.json'),
  kitchenSink: require('../mocks/kitchen-sink.json'),
}

test('write spacing rules for minimum config', async () => {
  expect(get(mox.default)).toMatchInlineSnapshot(`""`)
})

test('write spacing rules for minimum config', async () => {
  expect(get(mox.kitchenSink)).toMatchInlineSnapshot(`
    "// group: vertical-rhythm
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

    // group: horizontal-reset
    figure,
    blockquote,
    dd {
      margin-inline-start: 0;
      margin-inline-end: 0;
    }

    // group: horizontal-rule
    hr {
      margin-block-start: 3rem;
      margin-block-end: 3rem;
    }

    @media screen and (min-width: 768px) {
      // group: horizontal-rule
      hr {
        margin-block-start: 4rem;
        margin-block-end: 4rem;
      }
    }
    "
  `)
})
