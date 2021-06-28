const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//const Analayzer = require('webpack-bundle-analyzer')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    //new Analayzer(),
  ],
}
