
const path = require('path')
const Mini = require('babel-minify-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: path.join(path.resolve(__dirname, 'src'), 'beloading.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bin'),
  },
  plugins: [
    new Mini()
  ]
}