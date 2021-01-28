/*
 * @Description: vue.config.js
 * @Author: henry@xiukun
 * @Date: 2020-12-29 14:03:40
 * @LastEditTime: 2020-12-29 14:36:15
 * @LastEditors: henry@xiukun
 */
module.exports = {
	// 配置路径别名
	configureWebpack: {
		devServer: {
			// 调试时允许内网穿透，让外网的人访问到本地调试的H5页面
			disableHostCheck: true
		}
	},
	//productionSourceMap: false,
}
