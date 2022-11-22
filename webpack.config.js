const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				]
			},
			{
				test: /\.(png)$/i,
				use: 'file-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			title: 'Javascript Countdown Timer',
			favicon: './src/favicon.png',
		})
	]
}

module.exports = config
