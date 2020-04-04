const {
  generate,
  sortProperties,
  toDeclaration,
  propertyDeclarations,
  findBreakpoints,
  toMediaQuery,
  findBreakpointValueInConfigByName,
} = require('./generate')

const SAMPLE_CONFIG = {
  breakpoints: {
    large: '768px',
  },
  typography: {
    'heading-1': {
      default: {
        'line-height': 1.4,
        'font-size': '2rem',
        'font-weight': 'bold',
      },
      large: {
        'font-size': '2.5rem',
        'line-height': 1.2,
      },
    },
    'heading-2': {
      default: {
        'font-size': '18px',
        'line-height': 1,
        'font-weight': 500,
      },
    },
  },
}

describe('Convert parsed JSON to CSS', () => {
  test('Single rule, no breakpoints', () => {
    expect(
      generate({
        breakpoints: {
          large: '768px',
        },
        typography: {
          'heading-1': {
            default: {
              'font-size': '2rem',
              'font-weight': 'bold',
              'line-height': 1.4,
            },
          },
        },
      })
    ).toMatchInlineSnapshot(`
      ".heading-1 {
        font-size: 2rem;
        font-weight: bold;
        line-height: 1.4;
      }
      "
    `)
  })
  test('Single rule, no breakpoints', () => {
    expect(
      generate({
        breakpoints: {
          large: '768px',
        },
        typography: {
          'heading-1': {
            default: {
              'font-size': '2rem',
              'font-weight': 'bold',
              'line-height': 1.4,
            },
          },
          'heading-2': {
            default: {
              'font-size': '18px',
            },
          },
        },
      })
    ).toMatchInlineSnapshot(`
      ".heading-1 {
        font-size: 2rem;
        font-weight: bold;
        line-height: 1.4;
      }
      .heading-2 {
        font-size: 18px;
      }
      "
    `)
  })
  test('Multiple rules, single breakpoint', () => {
    expect(generate(SAMPLE_CONFIG)).toMatchInlineSnapshot(`
".heading-1 {
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.4;
}
.heading-2 {
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
}
@media screen and (min-width: 768px) {
  .heading-1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }
}
"
`)
  })
})

describe('Sort object properties', () => {
  test('Alphabetically sort key value pairs', () => {
    expect(sortProperties({ b: 2, a: 1 })).toEqual([
      ['a', 1],
      ['b', 2],
    ])
    expect(sortProperties({ c: 3, b: 2, a: 1 })).toEqual([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ])
    expect(
      sortProperties({
        'line-height': 1,
        'font-weight': 500,
        'font-size': '18px',
      })
    ).toEqual([
      ['font-size', '18px'],
      ['font-weight', 500],
      ['line-height', 1],
    ])
  })
})

describe('propertyDeclarations(properties)', () => {
  test('Convert array of [property, value] pairs into declarations', () => {
    expect(
      propertyDeclarations([
        ['a', 1],
        ['b', 2],
      ])
    ).toEqual(['a: 1;', 'b: 2;'])
    expect(
      propertyDeclarations([
        ['font-size', '18px'],
        ['font-weight', 500],
        ['line-height', 1],
      ])
    ).toEqual(['font-size: 18px;', 'font-weight: 500;', 'line-height: 1;'])
  })
})

describe('Generate CSS declaration from [key, obj] pair', () => {
  test('Write rule', () => {
    expect(
      toDeclaration([
        'heading-1',
        {
          'line-height': 1,
          'font-weight': 500,
          'font-size': '18px',
        },
      ])
    ).toMatchInlineSnapshot(`
".heading-1 {
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
}"
`)
  })
})

describe('findBreakpoints()', () => {
  test('Parse config and identify breakpoints', () => {
    expect(
      findBreakpoints({
        'heading-1': {
          default: {
            'line-height': 1.4,
            'font-size': '2rem',
            'font-weight': 'bold',
          },
          large: {
            'font-size': '2.5rem',
            'line-height': 1.2,
          },
        },
        'heading-2': {
          default: {
            'font-size': '18px',
            'line-height': 1,
            'font-weight': 500,
          },
        },
      })
    ).toEqual(['default', 'large'])
  })
})

describe('toMediaQuery(value)', () => {
  test('Convert breakpoint value to screen media query', () => {
    expect(toMediaQuery('768px')).toEqual(
      '@media screen and (min-width: 768px)'
    )
    expect(toMediaQuery('100rem')).toEqual(
      '@media screen and (min-width: 100rem)'
    )
  })
})

describe('findBreakpointValueInConfigByName(config, name)', () => {
  test('Convert breakpoint value to screen media query', () => {
    expect(findBreakpointValueInConfigByName(SAMPLE_CONFIG, 'large')).toEqual(
      '768px'
    )
  })
})
