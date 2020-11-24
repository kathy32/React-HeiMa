const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')//导入在内存中自动生成 index 页面的插件


// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './src/index.html'), // 源文件
  filename: 'index.html' // 生成的内存中首页的名称
})


// 向外暴露一个打包的配置对象
module.exports = {
  mode: 'development',  // development production（打包后代码main.js压缩）
  plugins: [
    htmlPlugin
  ]
  
}