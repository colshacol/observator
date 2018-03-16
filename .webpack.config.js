const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	watch: true,
  output: {
    path: path.resolve(__dirname, 'lib'),
		filename: 'fox.js',
		library: 'fox',
    libraryTarget: 'umd'
	},
  module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: 'babel-loader'
      },
    ]
  }
};