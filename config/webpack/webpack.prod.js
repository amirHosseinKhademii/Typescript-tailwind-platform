const webpack = require('webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: false,
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
          name: 'vendor',
          chunks: 'all',
        },
        default: {
          minChunks: 2,
          priority: -40,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Codevolution'),
    }),
  ],
}
