const { get } = require('./get-sass-settings-map')
const mock = require('./mock-config.json')

describe('get()', () => {
  test('it works', async () => {
    expect(get(mock)).toMatchInlineSnapshot(`
      "$TYPEBEAST_SETTINGS: (
        \\"calculate-rem-size\\": true,
        \\"include-utility-classes\\": true,
        \\"monospace-font-family\\": null,
        \\"rem-base\\": 16
      );
      "
    `)
  })
})
