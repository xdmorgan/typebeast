const { validate } = require('./validate-config')

describe('validate()', () => {
  test('Fails without a format-version', () => {
    const expectedVersion = 1
    const [valid, { message, version }] = validate({}, expectedVersion)
    expect(valid).toBe(false)
    expect(version).toBe(null)
    expect(message).toMatchInlineSnapshot(
      `"Your config file is missing a \\"format-version\\". Try adding \\"format-version: 1\\" to the top if your config file and running this script again."`
    )
  })
  test('Fails with a legacy format-version', () => {
    const expectedVersion = 2
    const [valid, { message, version }] = validate(
      { 'format-version': 1 },
      expectedVersion
    )
    expect(valid).toBe(false)
    expect(version).toBe(1)
    expect(message).toMatchInlineSnapshot(
      `"Unexpected config version (yours: 1, expected: 2) please see docs for instructions on how to upgrade."`
    )
  })
  test('Succeeds with minimally viable config', () => {
    const expectedVersion = 1
    const [valid, { message, version }] = validate(
      { 'format-version': expectedVersion },
      expectedVersion
    )
    expect(valid).toBe(true)
    expect(version).toBe(expectedVersion)
    expect(message).toBe(null)
  })
})
