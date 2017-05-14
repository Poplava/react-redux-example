module.exports = {
  entry: {
    landing: './src/apps/landing/index.js',
    dashboard: './src/apps/dashboard/index.js'
  },

  output: {
    path: __dirname + '/build',
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
