const { get } = require('./get-sass-settings-map')

describe('get()', () => {
  test('Supports empty input object', async () => {
    expect(get({})).toMatchInlineSnapshot(`
      "$TYPEBEAST_SETTINGS: ();
      "
    `)
  })
  test('Supports an optional custom name', async () => {
    expect(get({}, 'CUSTOM_NAME')).toMatchInlineSnapshot(`
      "$CUSTOM_NAME: ();
      "
    `)
  })
  test('Handles varying input types', async () => {
    expect(get({ settings: { option: 'value' } })).toMatchInlineSnapshot(`
      "$TYPEBEAST_SETTINGS: (
        \\"option\\": value
      );
      "
    `)
    expect(get({ settings: { first: 1, second: 2 } })).toMatchInlineSnapshot(`
      "$TYPEBEAST_SETTINGS: (
        \\"first\\": 1,
        \\"second\\": 2
      );
      "
    `)
    expect(get({ settings: { first: 1, second: null, third: false } }))
      .toMatchInlineSnapshot(`
      "$TYPEBEAST_SETTINGS: (
        \\"first\\": 1,
        \\"second\\": null,
        \\"third\\": false
      );
      "
    `)
  })
})
