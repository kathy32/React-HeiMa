### 6. 创建基本的 webpack4.x 项目
1. 运行```npm init -y``` 快速初始化项目
2. 在项目根目录创建```src```源代码目录和```dist```产品目录
3. 在```src```目录下创建```index.html```
4. 使用 cnpm 安装 webpack，运行```cnpm i webpack-cli -D```
    - 全局运行```npm i cnpm -g```
5. 注意：webpack4.x 提供了约定大于配置的概念；目的是为了尽量减少配置文件的体积；
    - 默认约定了；
    - 打包的入口是```src``` -> ```index.js```
    - 打包的输出文件是：```dist``` -> ```main.js```