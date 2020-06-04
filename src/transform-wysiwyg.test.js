const { transform } = require('./transform-wysiwyg')
const mock = require('./mock-config.json')

describe('transform()', () => {
  test('it works', async () => {
    const wysiwyg = transform(mock)
    expect(wysiwyg).toMatchInlineSnapshot(`
      Object {
        "breakpoints": Object {
          "default": [Function],
          "large": [Function],
        },
        "groups": Object {
          "larger-headings": Object {
            "breakpoints": Object {
              "default": Object {
                "margin-block-start": "3rem",
              },
              "large": Object {
                "margin-block-start": "5rem",
              },
            },
            "selectors": "h1, h2",
          },
          "other-content": Object {
            "breakpoints": Object {
              "default": Object {
                "margin-block-end": "3rem",
                "margin-block-start": "3rem",
              },
              "large": Object {
                "margin-block-end": "4rem",
                "margin-block-start": "4rem",
              },
            },
            "selectors": "pre, iframe, figure, & > img, blockquote, & > p > img:first-child:last-child, & > p > .gatsby-resp-image-wrapper",
          },
          "smaller-headings": Object {
            "breakpoints": Object {
              "default": Object {
                "margin-block-start": "2rem",
              },
              "large": Object {
                "margin-block-start": "3rem",
              },
            },
            "selectors": "h3, h4, h5, h6",
          },
          "vertical-rhythm": Object {
            "breakpoints": Object {
              "default": Object {
                "margin-block-end": "1rem",
                "margin-block-start": "1rem",
              },
              "large": Object {
                "margin-block-end": "1.5rem",
                "margin-block-start": "1.5rem",
              },
            },
            "selectors": "h1, h2, h3, h4, h5, h6, p, ul, ol, dl, blockquote, figure, pre",
          },
        },
        "scope": ".wysiwyg",
      }
    `)
  })
})
