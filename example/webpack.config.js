const path = require('path');
const webpack = require('webpack')

const NODE_ENV = JSON.stringify(process.env);
const $DEV$ = process.env.NODE_ENV === 'development'

console.log({ $DEV$ })

module.exports = {
	mode: 'development',
	entry: './example/index.js',
	devtool: 'inline-source-map',
	watch: true,
	target: "web",
  output: {
    path: path.resolve(__dirname, 'dist'),
		filename: 'observator.js'
	},
  module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: [
					'babel-loader',
					{
						loader: 'string-replace-loader',
						options: {
							multiple: [
								{ search: "//~", replace: 'console.log('},
								 { search: '//bows(', replace: 'const log = require("bows")(' },
								 { search: '~//', replace: ');' }
							]
						}
					}
				]
			}
    ]
	},
	
	plugins: [
		new webpack.DefinePlugin({ 
			'process.env': { 
				NODE_ENV, 
				__DEV__: true
			}, 
		}), 
	]
};