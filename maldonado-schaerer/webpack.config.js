const path = require('path');

module.exports = {
	entry: './frontend/main.js',
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
	      	loaders: [
	      	//	'style-loader',
	      		'css-loader'
	      	]
	    },
	    {
	        test: /\.(png|jpg|gif)$/,
	        use: [
	          {
	            loader: 'file-loader',
	            options: {}  
	          }
	        ]
      	},
      	{
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
      ]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	}
};