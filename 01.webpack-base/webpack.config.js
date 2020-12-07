const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')//导入在内存中自动生成 index 页面的插件


// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, './src/index.html'), // 源文件
  filename: 'index.html' // 生成的内存中首页的名称
})


// 向外暴露一个打包的配置对象
// webpack 默认只能打包处理 .js 后缀名类型的文件；其他需要配置第三方 loader
module.exports = {
  mode: 'development',  // development production（打包后代码main.js压缩）
  plugins: [
    htmlPlugin
  ],
  module: { // 所有第三方模块的配置规则
    rules: [  // 第三方匹配规则
      { test:/\.js|jsx$/, use:'babel-loader', exclude:/node_modules/},  // 千万别忘记 exclude 排除项
      { test:/\.css$/, use:['style-loader', 'css-loader']}, // 打包处理 css 样式表的第三方 loader
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],  // 表示这几个文件后缀名可以省略
    alias: {  // 表示别名
      '@': path.join(__dirname, './src')  // @ 表示根目录中 src 这一层路径
    }
  }
  
}