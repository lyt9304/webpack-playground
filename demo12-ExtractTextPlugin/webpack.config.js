var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
  	listing: './modules/listing/index.js',
  	vad: './modules/vad/index.js',
  },
  output: {
    filename: '/dist/[name]/index.js'
  },
  module: {
  	rules: [{
  		test: /\.css$/,
  		use: ExtractTextPlugin.extract({
  			fallback: "style-loader",
  			use: 'css-loader'
  		})
  	}]
  },
  plugins: [
     new ExtractTextPlugin('/dist/[name]/index.css')
  ]
};
