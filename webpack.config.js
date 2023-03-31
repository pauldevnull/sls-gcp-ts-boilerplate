const path = require('path');

module.exports = {
  entry: './src/index.ts',
  target: 'node',
  mode: 'none',

  module: {
    rules: [
      {
        test:   /\.ts(x?)$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts',
      '.js',
      '.tsx',
      '.jsx',
      '',
    ],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: 'index.js',
  },
};
