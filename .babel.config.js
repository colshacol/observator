const path = require('path')

module.exports = () => ({
  "presets": [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        "loose": true,
        "targets": {
          "browsers": ["last 1 versions"]
        }
      }
    ],
		"@babel/preset-flow",
		"@babel/preset-stage-0"
  ],
  "plugins": [
		["babel-plugin-sitrep", {
			label: 'log'
		}],
		"babel-plugin-trace",
    "@babel/plugin-proposal-pipeline-operator",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-function-bind",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-syntax-async-generators",
    "@babel/plugin-proposal-numeric-separator",
		"@babel/plugin-syntax-optional-catch-binding",
		"babel-plugin-dev-expression",
    ["@babel/plugin-proposal-class-properties", {
      "loose": true
    }],
		"@babel/plugin-proposal-decorators",
		[
			'babel-plugin-module-resolver',
			{
				"root": ["./src"],
				alias: {
          'observator': './src/index.js',
					_stores: './src/stores',
					_utilities: './src/utilities'
				}
			}
		]
  ]
})
