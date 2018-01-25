let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:__dirname +'/src/app.js',
	output:{
		path: __dirname + "/dist",//打包后的文件存放的地方
    	filename: "js/[name].bundle.js"//打包后输出文件的文件名
	},
	plguins:[
		new htmlWebpackPlugin({
			filename:'index.html',
			template:'index.html',
			inject:'body'
		})
	]，
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel',
				query:{
					presets:['latset']
				}
			}
		]
	}
}