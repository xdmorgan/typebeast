const path = require('path')
const { parse } = require('./parse-config')
const { merge } = require('./merge-objects')

const configMinimum = require('../mocks/minimum.json')

describe('merge-objects', () => {
  test('deep merge minimall viable config onto defaults', async () => {
    const defaultsPath = path.join(__dirname, './defaults.yml')
    const configPath = path.join(__dirname, '../mocks/minimum.yml')
    const defaults = await parse(defaultsPath)
    const config = await parse(configPath)
    expect(merge(defaults, config)).toEqual(configMinimum)
  })
})
