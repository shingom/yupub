const path = require('path')

module.exports = {
  mode: 'production',
  target: 'web',
  devtool: 'inline-source-map',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
    filename: 'yupub.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /(node_modules | .git | dist)/,
      }
    ]
  },
   optimization: {
        minimize: false,
    }
}

