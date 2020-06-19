const fs = require('fs-extra')
const { write } = require('./write-files')

jest.mock('fs-extra')

beforeEach(() => {
  jest.resetModules()
  jest.resetAllMocks()
})

test('undefined input has default empty object, no writes', async () => {
  const spy = jest.spyOn(fs, 'writeFile')
  const done = await write()
  expect(done).toBe(true)
  expect(spy).not.toHaveBeenCalled()
})

test('works with an empty file map, no writes', async () => {
  const spy = jest.spyOn(fs, 'writeFile')
  const done = await write({})
  expect(done).toBe(true)
  expect(spy).not.toHaveBeenCalled()
})

test('single file, write once', async () => {
  const spy = jest.spyOn(fs, 'writeFile')
  const done = await write({ './path': '.p { color: red; }' })
  expect(done).toBe(true)
  expect(spy).toHaveBeenCalledTimes(1)
})

test('several files, write thrice', async () => {
  const spy = jest.spyOn(fs, 'writeFile')
  const done = await write({
    './path-one': 'content-one',
    './path-two': 'content-two',
    './path-three': 'content-three',
  })
  expect(done).toBe(true)
  expect(spy).toHaveBeenCalledTimes(3)
})

test('write the correct keys, call write with path and content', async () => {
  const spy = jest.spyOn(fs, 'writeFile')
  const done = await write({
    'path.js': '* { color: red; }',
  })
  expect(done).toBe(true)
  expect(spy).toHaveBeenCalledWith('path.js', '* { color: red; }')
})
