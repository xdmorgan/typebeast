const { get, transform, write } = require('./get-inline-kbd')
const mock = require('../public/typebeast/config.json')

describe('get()', () => {
  test('is optional', async () => {
    expect(get({})).toMatchInlineSnapshot(`""`)
    expect(get({ 'inline-elements': {} })).toMatchInlineSnapshot(`""`)
  })
  test('converts config to Sass', async () => {
    const got = get(mock)
    expect(got).toMatchInlineSnapshot(`
      "// KBD
      // ---------------------------------------------------------
      kbd,
      .type-kbd {
        @include typebeast-kbd-style(
          $color: #454647,
          $background: #f8f8f8,
          $border: #bcbdbe,
          $radius: 0.25rem,
          $size: null,
          $inset: null
        );
      }
      "
    `)
  })
})

describe('transform()', () => {
  test('empty object', async () => {
    const conf = { 'inline-elements': { kbd: {} } }
    expect(transform(conf)).toMatchInlineSnapshot(`
      Object {
        "mixin": "@include typebeast-kbd-style($color: null, $background: null, $border: null, $radius: null, $size: null, $inset: null)",
        "selectors": "kbd",
      }
    `)
  })

  test('subset of options', async () => {
    const conf = {
      'inline-elements': {
        kbd: {
          settings: {
            color: '#002B73',
            background: '#1755BB',
          },
        },
      },
    }
    expect(transform(conf)).toMatchInlineSnapshot(`
      Object {
        "mixin": "@include typebeast-kbd-style($color: #002B73, $background: #1755BB, $border: null, $radius: null, $size: null, $inset: null)",
        "selectors": "kbd",
      }
    `)
  })

  test('single include', async () => {
    const conf = {
      'inline-elements': {
        kbd: {
          include: '.type-link',
          settings: {
            color: '#002B73',
            background: '#1755BB',
          },
        },
      },
    }
    expect(transform(conf)).toMatchInlineSnapshot(`
      Object {
        "mixin": "@include typebeast-kbd-style($color: #002B73, $background: #1755BB, $border: null, $radius: null, $size: null, $inset: null)",
        "selectors": "kbd, .type-link",
      }
    `)
  })

  test('multiple includes', async () => {
    const conf = {
      'inline-elements': {
        kbd: {
          include: ['.kbd', '.type-kbd'],
          settings: {
            color: '#002B73',
            hover: '#1755BB',
          },
        },
      },
    }
    expect(transform(conf)).toMatchInlineSnapshot(`
      Object {
        "mixin": "@include typebeast-kbd-style($color: #002B73, $background: null, $border: null, $radius: null, $size: null, $inset: null)",
        "selectors": "kbd, .kbd, .type-kbd",
      }
    `)
  })

  test('mock config', async () => {
    const transformed = transform(mock)
    expect(transformed).toMatchInlineSnapshot(`
      Object {
        "mixin": "@include typebeast-kbd-style($color: #454647, $background: #f8f8f8, $border: #BCBDBE, $radius: 0.25rem, $size: null, $inset: null)",
        "selectors": "kbd, .type-kbd",
      }
    `)
  })
})

describe('write()', () => {
  test('convert transformed data to Sass', async () => {
    const str = write({
      selectors: 'kbd, .type-kbd',
      mixin:
        '@include typebeast-kbd-style($color: #1C7C4E, $background: #F0F9F5, $radius: 0.25rem, $size: null, $inset: null)',
    })
    expect(str).toMatchInlineSnapshot(`
      "// KBD
      // ---------------------------------------------------------
      kbd,
      .type-kbd {
        @include typebeast-kbd-style(
          $color: #1c7c4e,
          $background: #f0f9f5,
          $radius: 0.25rem,
          $size: null,
          $inset: null
        );
      }
      "
    `)
  })
})
