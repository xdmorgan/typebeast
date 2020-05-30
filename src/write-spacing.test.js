const { write } = require('./write-spacing')
const mock = require('./mock-config.json')

describe('write()', () => {
  test('it works', async () => {
    const spacing = write(mock)
    console.log(spacing)
    expect(true).toBe(true)
  })
})
