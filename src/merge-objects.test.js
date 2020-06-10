const path = require('path')
const { parse } = require('./parse-config')
const { merge } = require('./merge-objects')
const mock = require('../public/typebeast/config.json')

describe('merge-objects', () => {
  test('Deep merge custom config onto defaults', async () => {
    const defaultsPath = path.join(__dirname, './defaults.yml')
    const configPath = path.join(__dirname, '../typebeast.yml')
    const defaults = await parse(defaultsPath)
    const config = await parse(configPath)
    expect(merge(defaults, config)).toEqual(mock)
  })
})
