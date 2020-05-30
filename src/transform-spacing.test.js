const { transform } = require('./transform-spacing')
const mock = require('./mock-config.json')

describe('transform()', () => {
  test('it works', async () => {
    const spacing = transform(mock)
    expect(spacing).toMatchInlineSnapshot(`
      Object {
        "horizontal-reset": Object {
          "default": Object {
            "properties": Object {
              "margin-inline-end": 0,
              "margin-inline-start": 0,
            },
            "selectors": Array [
              "figure",
              "blockquote",
              "dd",
            ],
          },
        },
        "horizontal-rule": Object {
          "default": Object {
            "properties": Object {
              "margin-block-end": "3rem",
              "margin-block-start": "3rem",
            },
            "selectors": Array [
              "hr",
            ],
          },
          "large": Object {
            "properties": Object {
              "margin-block-end": "4rem",
              "margin-block-start": "4rem",
            },
            "selectors": Array [
              "hr",
            ],
          },
        },
        "vertical-rhythm": Object {
          "default": Object {
            "properties": Object {
              "margin-block-end": 0,
              "margin-block-start": 0,
            },
            "selectors": Array [
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
      }
    `)
  })
})
