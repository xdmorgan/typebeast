const prettier = require('prettier')
const format = (str, opts = { parser: 'scss' }) => prettier.format(str, opts)
module.exports = { format }
