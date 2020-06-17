const { merge } = require('./merge-objects')

describe('merge', () => {
  test('empty inputs', async () => {
    expect(merge()).toEqual({})
  })
  test('mix non-conflicting keys', async () => {
    expect(merge({ a: 'a' }, { b: 'b' })).toEqual({ a: 'a', b: 'b' })
  })
  test('for conflicting keys, prefer second argument', async () => {
    expect(merge({ key: 'default' }, { key: 'custom' })).toEqual({
      key: 'custom',
    })
  })
})
