const { get } = require('./get-sass-settings-map')
const mock = require('../mocks/demo-site.json')

describe('get()', () => {
  test('it works', async () => {
    expect(get(mock)).toMatchInlineSnapshot(`
      "$TYPEBEAST_SETTINGS: (
        \\"calculate-rem-size\\": true,
        \\"include-utility-classes\\": true,
        \\"monospace-font-family\\": null,
        \\"rem-base\\": 16,
        \\"wysiwyg-block-images\\": true
      );
      "
    `)
  })
})
