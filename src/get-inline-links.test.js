const { get, transform, write } = require('./get-inline-links')
const mock = require('../public/typebeast/config.json')

describe('get()', () => {
  test('is optional', async () => {
    expect(get({})).toMatchInlineSnapshot(`""`)
    expect(get({ 'inline-elements': {} })).toMatchInlineSnapshot(`""`)
  })
  test('converts config to Sass', async () => {
    const got = get(mock)
    expect(got).toMatchInlineSnapshot(`
      "// Link
      // ---------------------------------------------------------
      a,
      .type-link {
        @include typebeast-link-style(
          $color: #002b73,
          $hover: #1755bb,
          $active: #035aeb,
          $visited: #035aeb,
          $style: wavy
        );
      }
      "
    `)
  })
})

describe('transform()', () => {
  test('empty object', async () => {
    const conf = { 'inline-elements': { a: {} } }
    expect(transform(conf)).toMatchInlineSnapshot(`
      Object {
        "mixin": "@include typebeast-link-style($color: null, $hover: null, $active: null, $visited: null, $style: null)",
        "selectors": "a",
      }
    `)
  })

  test('subset of options', async () => {
    const conf = {
      'inline-elements': {
        a: {
          settings: {
            color: '#002B73',
            hover: '#1755BB',
            style: 'dotted',
          },
        },
      },
    }
    expect(transform(conf)).toMatchInlineSnapshot(`
      Object {
        "mixin": "@include typebeast-link-style($color: #002B73, $hover: #1755BB, $active: null, $visited: null, $style: dotted)",
        "selectors": "a",
      }
    `)
  })

  test('single include', async () => {
    const conf = {
      'inline-elements': {
        a: {
          include: '.type-link',
          settings: {
            color: '#002B73',
            hover: '#1755BB',
          },
        },
      },
    }
    expect(transform(conf)).toMatchInlineSnapshot(`
      Object {
        "mixin": "@include typebeast-link-style($color: #002B73, $hover: #1755BB, $active: null, $visited: null, $style: null)",
        "selectors": "a, .type-link",
      }
    `)
  })

  test('multiple includes', async () => {
    const conf = {
      'inline-elements': {
        a: {
          include: ['.a', '.type-link'],
          settings: {
            color: '#002B73',
            hover: '#1755BB',
          },
        },
      },
    }
    expect(transform(conf)).toMatchInlineSnapshot(`
      Object {
        "mixin": "@include typebeast-link-style($color: #002B73, $hover: #1755BB, $active: null, $visited: null, $style: null)",
        "selectors": "a, .a, .type-link",
      }
    `)
  })

  test('mock config', async () => {
    const transformed = transform(mock)
    expect(transformed).toMatchInlineSnapshot(`
      Object {
        "mixin": "@include typebeast-link-style($color: #002B73, $hover: #1755BB, $active: #035AEB, $visited: #035AEB, $style: wavy)",
        "selectors": "a, .type-link",
      }
    `)
  })
})

describe('write()', () => {
  test('convert transformed data to Sass', async () => {
    const str = write({
      selectors: 'a, .type-link',
      mixin:
        '@include typebeast-code-style($color: #002B73, $hover: #1755BB, $active: #035AEB, $visited: #035AEB, $style: wavy)',
    })
    expect(str).toMatchInlineSnapshot(`
      "// Link
      // ---------------------------------------------------------
      a,
      .type-link {
        @include typebeast-code-style(
          $color: #002b73,
          $hover: #1755bb,
          $active: #035aeb,
          $visited: #035aeb,
          $style: wavy
        );
      }
      "
    `)
  })
})
