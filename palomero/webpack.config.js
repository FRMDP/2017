const path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'public', 'js'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
		{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {
				}
			}
		},
		{
			test: /\.css$/,
			use: [ 'style-loader', 'css-loader' ]
		}
      ]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	}
};