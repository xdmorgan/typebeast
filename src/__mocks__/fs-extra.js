const fs = jest.genMockFromModule('fs-extra')

fs.writeFile = () => new Promise(resolve => resolve())

module.exports = fs
