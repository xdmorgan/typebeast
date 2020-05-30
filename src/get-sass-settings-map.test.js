const { get } = require('./get-sass-settings-map')

describe('get()', () => {
  test('it works', async () => {
    const mock = {
      settings: {
        'rem-base': 16,
        'calculate-rem-size': false,
        'include-utility-classes': false,
      },
    }
    expect(get(mock)).toMatchInlineSnapshot(`
      "$TYPEBEAST_SETTINGS: (
        \\"calculate-rem-size\\": false,
        \\"include-utility-classes\\": false,
        \\"rem-base\\": 16
      );
      "
    `)
  })
})
