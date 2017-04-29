module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
  	alias: {
  		'jquery-lyt': './jquery-1.0.js'
  	}
  }
};
