const { get, transform, write } = require('./get-block-images')
const mock = require('../public/typebeast/config.json')

describe('get()', () => {
  test('is optional', async () => {
    expect(get({ wysiwyg: { scope: 'wysiwyg' } })).toMatchInlineSnapshot(`""`)
    expect(get({ wysiwyg: { scope: 'wysiwyg' }, settings: {} }))
      .toMatchInlineSnapshot(`
      "// WYSIWYG Block Images
      // ---------------------------------------------------------
      .wysiwyg > img {
        display: block;
        max-width: 100%;
        height: auto;
      }
      "
    `)
  })
  test('converts config to Sass', async () => {
    const got = get(mock)
    expect(got).toMatchInlineSnapshot(`""`)
  })
})
