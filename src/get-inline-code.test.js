const { get, transform, write } = require('./get-inline-code')
const mock = require('../public/typebeast/config.json')

describe('get()', () => {
  test('is optional', async () => {
    expect(get({})).toMatchInlineSnapshot(`""`)
    expect(get({ 'inline-elements': {} })).toMatchInlineSnapshot(`""`)
  })
  test('converts config to Sass', async () => {
    const got = get(mock)
    expect(got).toMatchInlineSnapshot(`
      "// Code
      // ---------------------------------------------------------
      code,
      .type-code {
        @include typebeast-code-style(
          $color: #1c7c4e,
          $background: #f0f9f5,
          $radius: 0.25rem,
          $size: 0.9em,
          $inset: 0.2em 0.3em 0.3em
        );
      }
      "
    `)
  })
})

describe('transform()', () => {
  test('empty object', async () => {
    const conf = { 'inline-elements': { code: {} } }
    expect(transform(conf)).toMatchInlineSnapshot(`
      Object {
        "mixin": "@include typebeast-code-style($color: null, $background: null, $radius: null, $size: 0.9em, $inset: 0.2em 0.3em 0.3em)",
        "selectors": "code",
      }
    `)
  })

  test('subset of options', async () => {
    const conf = {
      'inline-elements': {
        code: {
          settings: {
            color: '#002B73',
            background: '#1755BB',
          },
        },
      },
    }
    expect(transform(conf)).toMatchInlineSnapshot(`
      Object {
        "mixin": "@include typebeast-code-style($color: #002B73, $background: #1755BB, $radius: null, $size: 0.9em, $inset: 0.2em 0.3em 0.3em)",
        "selectors": "code",
      }
    `)
  })

  test('single include', async () => {
    const conf = {
      'inline-elements': {
        code: {
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
        "mixin": "@include typebeast-code-style($color: #002B73, $background: #1755BB, $radius: null, $size: 0.9em, $inset: 0.2em 0.3em 0.3em)",
        "selectors": "code, .type-link",
      }
    `)
  })

  test('multiple includes', async () => {
    const conf = {
      'inline-elements': {
        code: {
          include: ['.code', '.type-code'],
          settings: {
            color: '#002B73',
            hover: '#1755BB',
          },
        },
      },
    }
    expect(transform(conf)).toMatchInlineSnapshot(`
      Object {
        "mixin": "@include typebeast-code-style($color: #002B73, $background: null, $radius: null, $size: 0.9em, $inset: 0.2em 0.3em 0.3em)",
        "selectors": "code, .code, .type-code",
      }
    `)
  })

  test('mock config', async () => {
    const transformed = transform(mock)
    expect(transformed).toMatchInlineSnapshot(`
      Object {
        "mixin": "@include typebeast-code-style($color: #1C7C4E, $background: #F0F9F5, $radius: 0.25rem, $size: 0.9em, $inset: 0.2em 0.3em 0.3em)",
        "selectors": "code, .type-code",
      }
    `)
  })
})

describe('write()', () => {
  test('convert transformed data to Sass', async () => {
    const str = write({
      selectors: 'code, .type-code',
      mixin:
        '@include typebeast-code-style($color: #1C7C4E, $background: #F0F9F5, $radius: 0.25rem, $size: null, $inset: null)',
    })
    expect(str).toMatchInlineSnapshot(`
      "// Code
      // ---------------------------------------------------------
      code,
      .type-code {
        @include typebeast-code-style(
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
