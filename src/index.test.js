const fs = require('fs-extra')
const path = require('path')
const main = require('.')

const dir = {
  build: path.join(__dirname, '../build'),
}

beforeEach(async () => {
  await fs.remove(dir.build)
})

test('run e2e with minimum config', async () => {
  await main({
    config: 'mocks/minimum.yml',
    output: 'build/minimum',
  })
  const output = await fs.readFile(
    path.join(dir.build, 'minimum/typebeast.css')
  )
  expect(output.toString()).toMatchSnapshot()
})

test('run e2e with kitchen-sink config', async () => {
  await main({
    config: 'mocks/kitchen-sink.yml',
    output: 'build/kitchen-sink',
  })
  const output = await fs.readFile(
    path.join(dir.build, 'kitchen-sink/typebeast.css')
  )
  expect(output.toString()).toMatchSnapshot()
})
