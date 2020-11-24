### 目录
1. 介绍 react
2. 三大框架的现状
3. 从组件化方面对比 react 和 vue
4. 从其他角度对比 react 和 vue
5. 为什么要学习 react
6. 介绍 DOM 和虚拟 DOM 的概念
7. 虚拟 DOM 的本质和目的
8. 介绍 Diff 算法的概念
9. webpack5.x 基本的使用步骤
10. 关于 node 和 chrome 之间的关系
11. webpack-dev-server 的基本使用
12. 配置 html-webpack-plugin 插件
13. 使用 react 渲染最基本的虚拟 DOM 到页面上
14. 使用 React.createElement 实现虚拟 DOM 嵌套
15. 在 react 项目中启用 JSX 语法
16. 在 JSX 中书写 JS 代码
17. 将普通字符串数组，转为 JSX 数组并渲染到页面上




### 6. 创建基本的 webpack4.x 项目
1. 运行```npm init -y``` 快速初始化项目
2. 在项目根目录创建```src```源代码目录和```dist```产品目录
3. 在```src```目录下创建```index.html```
4. 使用 cnpm 安装 webpack -D(本地不是全局g)，运行```cnpm i webpack-cli -D```
    - 全局运行```npm i cnpm -g```
5. 注意：webpack4.x 提供了约定大于配置的概念；目的是为了尽量减少配置文件的体积；
    - 默认约定了；
    - 打包的入口是```src``` -> ```index.js```
    - 打包的输出文件是：```dist``` -> ```main.js```
6. 运行 ```webpack``` 得到：
  ![20201123160548](https://bevishe.oss-cn-hangzhou.aliyuncs.com/img/20201123160548.png)
    - 运行效果如下：
  ![20201123161631](https://bevishe.oss-cn-hangzhou.aliyuncs.com/img/20201123161631.png) 
7. 因为 webpack 是基于 node 构建的，所以 webpack 支持所有 node API 和语法。
    - 但是不支持 ES6 中 ```export default {}``` 向外到处模块的 API ，与之相对应的是 ```import * from '标识符'```
    - 如果 chrome 浏览器支持哪些，则 node 就支持哪些。因为其具有 V8 引擎。
8. 热更新机制：运行```cnpm install webpack-dev-server -D```
    - package.json 中，添加 ```"dev": "webpack-dev-server"```
    - 更改 ```index.html```中的相对路径为绝对路径
      - 热更新打包好的 ```main.js``` 是托管到内存中，所以项目根目录看不到
      - 但是我们可以认为，在项目根目录中，有一个看不到的 ```main.js```
      - ```<script src="/main.js"></script>```
    - 运行 ```npm run dev``` 实现热更新
    > 注意：报错```A complete log of this run can be found in:```
      - 原因：版本不兼容
      - 正确的版本：
        ```shell
          "webpack": "^4.1.1",
          "webpack-cli": "^2.0.12",
          "webpack-dev-server": "^3.1.1"
        ```
9. 为了解决```npm run dev``` 打开页面是目录形式的问题：
    - 运行```cnpm install html-webpack-plugin -D```
    - 配置 ```webpack.config.js``` 文件：
      ```js
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
      ```
    - 运行 ```npm run dev``` 发现问题解决