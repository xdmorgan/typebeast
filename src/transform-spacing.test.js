const { transform } = require('./transform-spacing')

describe('transform()', () => {
  test('is optional', () => {
    expect(transform({})).toEqual({})
    expect(transform({ 'format-version': 1 })).toEqual({})
    expect(transform({ spacing: {} })).toEqual({})
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
        "vertical-reset": Object {},
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
        "vertical-reset": Object {
          "default": Object {
            "properties": Object {
              "margin-block-end": 2,
              "margin-block-start": 1,
              "margin-inline-end": 4,
              "margin-inline-start": 3,
            },
            "selectors": undefined,
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
        "vertical-reset": Object {
          "default": Object {
            "properties": Object {
              "margin-block-end": 1,
              "margin-block-start": 1,
              "margin-inline-end": 2,
              "margin-inline-start": 2,
            },
            "selectors": undefined,
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
        "vertical-reset": Object {
          "default": Object {
            "properties": Object {
              "margin-block-end": 2,
              "margin-block-start": 1,
              "margin-inline-end": 1,
              "margin-inline-start": 2,
            },
            "selectors": undefined,
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
        "vertical-reset": Object {
          "large": Object {
            "properties": Object {
              "margin-block-end": 0,
              "margin-block-start": 0,
            },
            "selectors": undefined,
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
        "vertical-reset": Object {
          "default": Object {
            "properties": Object {
              "margin-block-end": 0,
              "margin-block-start": 0,
            },
            "selectors": undefined,
          },
          "large": Object {
            "properties": Object {
              "margin-block-end": 2,
              "margin-block-start": 2,
              "margin-inline-end": 2,
              "margin-inline-start": 2,
            },
            "selectors": undefined,
          },
          "medium": Object {
            "properties": Object {
              "margin-inline-end": 1,
              "margin-inline-start": 1,
            },
            "selectors": undefined,
          },
        },
      }
    `)
  })
})
