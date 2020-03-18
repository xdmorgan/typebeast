const {
  generate,
  sortProperties,
  toDeclaration,
  findBreakpoints,
} = require('./generate')

const FULL_IN = {
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

const FULL_OUT = `
.heading-1 {
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.4;
}
.heading-2 {
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
}

@media screen and (min-width: 768px){
  .heading-1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }
}
`

describe('Convert parsed JSON to CSS', () => {
  test('Single rule, no breakpoints', () => {
    expect(
      generate({
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
    ).toEqual(`
.heading-1 {
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.4;
}
`)
  })
  test('Single rule, no breakpoints', () => {
    expect(
      generate({
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
    ).toEqual(`
.heading-1 {
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.4;
}

.heading-2 {
  font-size: 18px;
}
`)
  })
  // test('Multiple rules, single breakpoint', () => {
  //   expect(generate(FULL_IN)).toEqual(FULL_OUT)
  // })
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
    ).toEqual(`
.heading-1 {
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
}
`)
  })
})

describe('Parse config and identify breakpoints', () => {
  test('Find em', () => {
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
