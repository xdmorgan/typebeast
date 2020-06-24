const {
  objectToCssProperties,
  getHeadingComment,
  convertObjectToSassParams,
  objectKeysToSassParams,
  ensureListOfSelectors,
} = require('./utils')

describe('objectToCssProperties()', () => {
  test('convert an empty Object to empty string', () => {
    expect(objectToCssProperties({})).toEqual('')
  })
  test('convert single key value pair to css property declaration', () => {
    expect(objectToCssProperties({ color: 'red' })).toEqual('color: red;')
  })
  test('convert key value pairs to css property declarations', () => {
    expect(objectToCssProperties({ background: 'green', color: 'red' }))
      .toMatchInlineSnapshot(`
      "background: green;
      color: red;"
    `)
  })
  test('preserve external key order, regardless of alphabetization', () => {
    expect(objectToCssProperties({ opacity: 1, color: 'red' }))
      .toMatchInlineSnapshot(`
      "opacity: 1;
      color: red;"
    `)
    expect(objectToCssProperties({ color: 'red', opacity: 0 }))
      .toMatchInlineSnapshot(`
      "color: red;
      opacity: 0;"
    `)
  })
})

describe('getHeadingComment()', () => {
  test('wite a comment innit', () => {
    expect(getHeadingComment('yo')).toMatchInlineSnapshot(`
      "// yo 
      // ---------------------------------------------------------"
    `)
  })
})

describe('convertObjectToSassParams()', () => {
  test('define a set property', () => {
    expect(
      convertObjectToSassParams({ color: 'red' }, { color: '$color' })
    ).toMatchInlineSnapshot(`"$color: red"`)
  })
  test('define a null property', () => {
    expect(
      convertObjectToSassParams({ color: null }, { color: '$color' })
    ).toMatchInlineSnapshot(`"$color: null"`)
  })
  test('define an absent property', () => {
    expect(
      convertObjectToSassParams({}, { color: '$color' })
    ).toMatchInlineSnapshot(`"$color: null"`)
    expect(
      convertObjectToSassParams({}, { color: '$color', another: '$one' })
    ).toMatchInlineSnapshot(`"$color: null, $one: null"`)
  })
  test('define an absent property with given default', () => {
    expect(
      convertObjectToSassParams({}, { color: '$color' }, { color: 'green' })
    ).toMatchInlineSnapshot(`"$color: green"`)
    expect(
      convertObjectToSassParams(
        { color: 'red' },
        { color: '$color', another: '$one' },
        { another: 1 }
      )
    ).toMatchInlineSnapshot(`"$color: red, $one: 1"`)
  })
})

describe('objectKeysToSassParams()', () => {
  test('empty object, no defs', () => {
    expect(objectKeysToSassParams({})).toMatchInlineSnapshot(`""`)
  })
  test('non-empty object, has defs', () => {
    expect(objectKeysToSassParams({ color: '#123' })).toMatchInlineSnapshot(
      `"$color"`
    )
    expect(
      objectKeysToSassParams({ background: '#123', opacity: 0 })
    ).toMatchInlineSnapshot(`"$background, $opacity"`)
  })
})

describe('ensureListOfSelectors()', () => {
  test('handle empty cases', () => {
    expect(ensureListOfSelectors()).toMatchInlineSnapshot(`Array []`)
    expect(ensureListOfSelectors('')).toMatchInlineSnapshot(`Array []`)
    expect(ensureListOfSelectors(null)).toMatchInlineSnapshot(`Array []`)
  })
  test('a string is returned wrapped in an array', () => {
    expect(ensureListOfSelectors('young daniel')).toMatchInlineSnapshot(`
      Array [
        "young daniel",
      ]
    `)
  })
  test('an array of strings is preserved', () => {
    expect(ensureListOfSelectors(['young', 'daniel'])).toMatchInlineSnapshot(`
      Array [
        "young",
        "daniel",
      ]
    `)
  })
})
