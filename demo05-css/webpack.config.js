module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
		  test: /\.css$/,
		  exclude: /node_modules/,
		  use: ['style-loader', 'css-loader']
    }]
  }
};
