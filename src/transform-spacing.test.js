const { transform } = require('./transform-spacing')

describe('transform()', () => {
  test('is optional', () => {
    const empty = { breakpoints: {}, spacing: {} }
    expect(transform({})).toEqual(empty)
    expect(transform({ 'format-version': 1 })).toEqual(empty)
    expect(transform({ spacing: null })).toEqual(empty)
    expect(transform({ spacing: {} })).toEqual(empty)
    expect(transform({ breakpoints: null })).toEqual(empty)
    expect(transform({ breakpoints: {} })).toEqual(empty)
  })
  test('empty group', () => {
    expect(
      transform({
        spacing: {
          'vertical-reset': {},
        },
      })
    ).toMatchInlineSnapshot(`
      Object {
        "breakpoints": Object {},
        "spacing": Object {
          "vertical-reset": Object {},
        },
      }
    `)
  })
  test('pass-through breakpoints', () => {
    expect(
      transform({
        breakpoints: {
          medium: 420,
          large: '690em',
        },
        spacing: {
          'vertical-reset': {},
        },
      })
    ).toMatchInlineSnapshot(`
      Object {
        "breakpoints": Object {
          "large": "690em",
          "medium": 420,
        },
        "spacing": Object {
          "vertical-reset": Object {},
        },
      }
    `)
  })
  test('individual spacings', () => {
    expect(
      transform({
        spacing: {
          'vertical-reset': {
            breakpoints: {
              default: {
                'block-start': 1,
                'block-end': 2,
                'inline-start': 3,
                'inline-end': 4,
              },
            },
          },
        },
      })
    ).toMatchInlineSnapshot(`
      Object {
        "breakpoints": Object {},
        "spacing": Object {
          "vertical-reset": Object {
            "default": Object {
              "properties": Object {
                "margin-block-end": 2,
                "margin-block-start": 1,
                "margin-inline-end": 4,
                "margin-inline-start": 3,
              },
              "selectors": Array [],
            },
          },
        },
      }
    `)
  })
  test('shorthand spacings', () => {
    expect(
      transform({
        spacing: {
          'vertical-reset': {
            breakpoints: {
              default: {
                block: 1,
                inline: 2,
              },
            },
          },
        },
      })
    ).toMatchInlineSnapshot(`
      Object {
        "breakpoints": Object {},
        "spacing": Object {
          "vertical-reset": Object {
            "default": Object {
              "properties": Object {
                "margin-block-end": 1,
                "margin-block-start": 1,
                "margin-inline-end": 2,
                "margin-inline-start": 2,
              },
              "selectors": Array [],
            },
          },
        },
      }
    `)
  })
  test('individual takes precedence over shorthand spacing', () => {
    expect(
      transform({
        spacing: {
          'vertical-reset': {
            breakpoints: {
              default: {
                block: 1,
                'block-end': 2,
                inline: 1,
                'inline-start': 2,
              },
            },
          },
        },
      })
    ).toMatchInlineSnapshot(`
      Object {
        "breakpoints": Object {},
        "spacing": Object {
          "vertical-reset": Object {
            "default": Object {
              "properties": Object {
                "margin-block-end": 2,
                "margin-block-start": 1,
                "margin-inline-end": 1,
                "margin-inline-start": 2,
              },
              "selectors": Array [],
            },
          },
        },
      }
    `)
  })
  test('can omit default breakpoint', () => {
    expect(
      transform({
        spacing: {
          'vertical-reset': {
            breakpoints: {
              large: {
                block: 0,
              },
            },
          },
        },
      })
    ).toMatchInlineSnapshot(`
      Object {
        "breakpoints": Object {},
        "spacing": Object {
          "vertical-reset": Object {
            "large": Object {
              "properties": Object {
                "margin-block-end": 0,
                "margin-block-start": 0,
              },
              "selectors": Array [],
            },
          },
        },
      }
    `)
  })
  test('can add multiple breakpoints', () => {
    expect(
      transform({
        spacing: {
          'vertical-reset': {
            breakpoints: {
              default: {
                block: 0,
              },
              medium: {
                inline: 1,
              },
              large: {
                block: 2,
                inline: 2,
              },
            },
          },
        },
      })
    ).toMatchInlineSnapshot(`
      Object {
        "breakpoints": Object {},
        "spacing": Object {
          "vertical-reset": Object {
            "default": Object {
              "properties": Object {
                "margin-block-end": 0,
                "margin-block-start": 0,
              },
              "selectors": Array [],
            },
            "large": Object {
              "properties": Object {
                "margin-block-end": 2,
                "margin-block-start": 2,
                "margin-inline-end": 2,
                "margin-inline-start": 2,
              },
              "selectors": Array [],
            },
            "medium": Object {
              "properties": Object {
                "margin-inline-end": 1,
                "margin-inline-start": 1,
              },
              "selectors": Array [],
            },
          },
        },
      }
    `)
  })
  test('can use single selector', () => {
    expect(
      transform({
        spacing: {
          'vertical-reset': {
            include: '#bruh',
            breakpoints: {
              default: {
                block: 0,
              },
            },
          },
        },
      })
    ).toMatchInlineSnapshot(`
      Object {
        "breakpoints": Object {},
        "spacing": Object {
          "vertical-reset": Object {
            "default": Object {
              "properties": Object {
                "margin-block-end": 0,
                "margin-block-start": 0,
              },
              "selectors": Array [
                "#bruh",
              ],
            },
          },
        },
      }
    `)
  })
})
test('can use multiple selectors', () => {
  expect(
    transform({
      spacing: {
        'vertical-reset': {
          include: [
            '#bruh',
            'strong',
            '&.something .compound[selector="yeah"]',
          ],
          breakpoints: {
            default: {
              block: 0,
            },
          },
        },
      },
    })
  ).toMatchInlineSnapshot(`
    Object {
      "breakpoints": Object {},
      "spacing": Object {
        "vertical-reset": Object {
          "default": Object {
            "properties": Object {
              "margin-block-end": 0,
              "margin-block-start": 0,
            },
            "selectors": Array [
              "#bruh",
              "strong",
              "&.something .compound[selector=\\"yeah\\"]",
            ],
          },
        },
      },
    }
  `)
})
