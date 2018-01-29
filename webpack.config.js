let htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:__dirname +'/src/app/app.js',
	output:{
		path: __dirname + "/dist",//打包后的文件存放的地方
    		filename: "js/[name].bundle.js"//打包后输出文件的文件名
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:'index.html',
			template:'index.html',
			inject:'body'
		})
	],
	module:{
		rules:[
			{
				test:/\.js$/,
				use:[
					{
						loader:'babel-loader',
						query:{
							presets:['latest']
						}
					}
				],
				include:__dirname+'/src',
			}
		]
	}
}
