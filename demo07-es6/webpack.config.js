module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
	rules: [{
		test: /\.js$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				cacheDirectory: true,
			},
		},
	}],
}
};
