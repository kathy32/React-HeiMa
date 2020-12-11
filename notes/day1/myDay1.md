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

​    \- 全局运行```npm i cnpm -g```

5. 注意：webpack4.x 提供了约定大于配置的概念；目的是为了尽量减少配置文件的体积；
   -  默认约定了；
   -  打包的入口是```src``` -> ```index.js```
   -  打包的输出文件是：```dist``` -> ```main.js```

6. 运行 ```webpack``` 得到结果

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
   "webpack-dev-server": "^3.1.1“
  ```

​         

9. 为了解决```npm run dev``` 打开页面是目录形式的问题：

- 运行```cnpm install html-webpack-plugin -D```

- 配置 ```webpack.config.js``` 文件：

  ```js
  const path = require('path')
  const HtmlWebpackPlugin = require('html-webpack-plugin')//导入在内存中自动生成 index 页面的插件
  ```


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
    

      ```

- 运行 ```npm run dev``` 发现问题解决

![image-20201124155137830](/Users/apple/Library/Application Support/typora-user-images/image-20201124155137830.png)



### 7. 在项目中使用 react

1. 运行 ```cnpm i react react-dom -S``` 安装包

   - react：专门用于创建组件和虚拟 DOM 的，同时组件的生命周期都在这个包中
   - react-dom：专门进行 DOM 操作的，最主要的应用场景是 ```ReactDOM.render()```

2. 在 ```index.html``` 页面中，创建容器：

   ```html
   <!-- 容器，将来，使用 React 创建的虚拟 DOM 元素，都会被渲染到这个指定的容器中 -->
   <div id="app">
     
   </div>
   ```

3. 导入包：

   ```javascript
   // 1. 这两个导入时候，接收的成员名称，必须这么写
   import React from 'react'
   import ReactDOM from 'react-dom'
   ```

4. 创建虚拟 DOM 元素：

   ```javascript
   // 2. 这是创建虚拟 DOM 元素的 API
   // <h1 title='lokit' id='wang'>yang</h1>
   // 第一个参数：字符串类型的参数，表示要创建的标签名称
   // 第二个参数：对象类型的参数，表示创建的元素的属性节点
   // 第三个参数：子节点
   const myh1 = React.creatElement('h1', {title:'lokit', id:'wang'}, 'yang')
   ```

5. 渲染：

   ```javascript
   // 3. 使用 ReactDOM 把虚拟 DOM 渲染 到页面上
   // 参数1: 要渲染的那个虚拟 DOM 元素
   // 参数2： 指定页面上一个容器(是一个 DOM 元素而不是选择器)
   ReactDOM.render(myh1, document.getElementById('app'))
   ```

   

### 8. JSX 语法

> 什么是 JSX 语法：就是符合 xml 规范的 js 语法；（语法格式相对来说，要比 HTML 严谨很多）

1. 如何启用 JSX 语法？

   - 安装 ```babel``` 插件

     - 运行 ```cnpm install babel-core babel-loader@7 babel-plugin-transform-runtime -D```

       - > 此处 babel-loader 版本应该为 7

     - 运行 ```cnpm install babel-preset-env babel-preset-stage-0 -D```

   - 运行能够识别转换 jsx 语法的包 ```babel-preset-react```

     - 运行```cnpm install babel-preset-react -D```

   - 添加 ```.babelrc``` 配置文件

     ```json
     {
       "presets": ["env", "stage-0", "react"],
       "plugins": ["transform-runtime"]
     }
     ```

   - 添加 babel-loader 配置项：

     ```js
     module: { // 要打包的第三方模块
     	rules: [
     		{test:/\.js|jsx$/, use:'babel-loader', exclude:/node_modules/}
     	]
     }
     ```

2. jsx 语法的本质：在运行的时候，被转换成 React.creatElement 形式来执行

3. 在 jsx 中混合写入 js 表达式：在 jsx 语法中，要把 js 代码写到 ```{}``` 中

   - 渲染数字

   - 渲染字符串

   - 渲染布尔值

   - 为属性绑定值

   - 渲染 jsx 元素

   - 渲染 jsx 元素数组

     - map 方法需要 return，修改数组每个元素并返回

     - ```js
       const arr = ['yico', 'lokit']
       const res = arr.map(item => {
         return item + '~'
       })
       console.log(res)
       
       // 返回 ['yico~', 'lokit~']
       ```

   - 将普通字符串数组转为 jsx 数组并渲染到页面上【两种方案】

4. 在 jsx 中写注释：推荐使用 ```{/*这是注释*/}``` 

5. 为 jsx 中的元素添加 class 类名：需要使用 ```className``` 来代替 ```class``` ; ```htmlFor``` 替换 label 的 ```for``` 属性

6. 在 jsx 创建 DOM 的时候，所有的节点必须有唯一的根元素进行包裹

7. 在 jsx 语法中，标签必须成对出现，如果是单标签，则必须自闭和！

   > 当编译引擎，在编译 jsx 代码的时候，如果遇到 ```<``` 那么就把它当作 HTML 代码去编译，如果遇到了 ```{}``` 就把花括号内部的代码当作普通 js 代码去编译

### 9. React 中创建组件







# 移动App第1天



## 1. 什么是混合移动App开发【重点】

1. 苹果上的软件是如何开发出来的：使用的是 OC、或者使用Swift这门语言

2. 安卓平台上的软件又是如何开发出来的：使用安卓相关的语言开发的，Java，安卓的控件进行开发

3. 苹果和安卓平台上共有的软件是如何开发出来的：腾讯招两套开发人员【开发组】，手机京东

4. 前端移动 App（Application）开发技术，去开发手机端的应用程序；

5. 前端的混合移动App开发技术，并没有使用 苹果 或 安卓 官方推荐的 开发平台和开发方式，而是抛弃了 官方提供的方式，使用 前端的独有的技术进行移动App开发体验；

   

> 什么是移动App开发：通俗的理解，就是把开发Web网站的技术（HTML+CSS+JS），通过某种方式，移植到移动App开发上进行使用，这种利用Web开发技术进行移动端开发体验的方式，叫做混合移动App开发！



### 1.1 关于移动App开发，需要知道的几个概念：

+ 原生开发：它的英文单词是（**NativeApp**）,指的就是使用 IOS、Android 官方提供的工具、开发平台、配套语言进行 手机App开发的方式；

+ 混合开发：（**HybirdApp**）就是使用前端已有的技术，HTML + CSS + JS ，然后再搭配一些相关的打包编译技术，就能够开发出一个手机App，安装到手机中进行使用；

+ 什么是App：App是（Application的缩写），意思是：可安装的应用程序；

+ App的分类：
  - 按照平台来划分：
    - PC端：浏览器、代码编辑器、PC端的游戏、听歌的、看视频的、聊天的
    - 移动端：手机QQ、手机微信、手机爱奇艺、亡者农药
  - 按照功能来划分：
    - 游戏：愤怒的小鸡仔、植物大战僵尸、亡者农药.....LOL
    - 应用：非游戏类的软件，支付宝、陌陌、美团外卖、

+ App和Web的区别：

  -  APP概念：App是（Application的缩写），意思是：可安装的应用程序；
    - 优点：流畅、稳定、基本上一些App都可以脱网运行，用户体验好；
    - 缺点：不能跨平台

  - Web概念：特指那些基于浏览器的web网站（本质：就是网页）
    - 优点：可以跨平台（浏览器天生就是跨平台的）
    - 缺点：没有App流畅、不稳定，受限于网速和网络





## 2. 为什么要学混合App开发

### 2.1 从程序员的角度分析：

1. 挣钱多（别人不会的你会，别人会的，你精通）

2. 对于找工作来说：（**React Native**）市场需求量大，好找工作，提高我们的行业竞争力

3. 能接触到前端流行的技术和框架（各大公司基本都再用React），注意：再React中我们全部都使用ES6语法（class）
   - 前端是一个永恒的行业???（只要世界上还有浏览器的存在，必然需要前端，只不过，随着时间的推移，技术更新换代，可能我们对新技术的要求会越来高）
   - 屌丝的崛起之路：`只能做页面` -> `Ajax前后台数据交互` -> `Jquery、Bootstrap` -> webApp -> `三大框架` -> `可以做手机混合App/桌面应用` -> `可以做手机原生App` -> `将来或许可以发射火箭发射卫星发射导弹` -> `终极目标：统一全宇宙`

4. （搞前端App开发）能购置一批牛逼的设备【苹果笔记本、IOS测试机、安卓手机（三星的、华为、小米）】



### 2.2 从企业的角度分析:(选择合适自身的移动App开发方式)【重点】

- 节省开发成本

+ 从工资上：尽最大的可能，压榨员工的剩余劳动力

+ 从时间上：因为 原生的安卓和IOS开发，它们的开发效率并不是很高，因为原生的代码复杂度比较高，因此原生的开发周期比较慢；如果采用移动App开发，那么，我们的开发周期会很短；因为 HTML + CSS + JS 足够简单；（对于前端开发APP来说，有两种方式，其中，比较早的一种，也是比较简单的一种，就是 先开发出一个网站， 然后再把网站运行一行打包的命令，就能得到一个 APP了）

1. 市面上常见的App开发方式

+ WebApp：基于浏览器实现的，有特定功能的网站，称作WebApp
  - 例如：百度脑图、https://m.jd.com/、https://m.taobao.com/#index
  - 优点：跨平台
  - 缺点：依赖网络，有白屏效果，相对来说，用户体验差；不能调用硬件底层得设备，比如摄像头；

+ NativeApp：用android和Object-C等原生语言开发的应用
  - 优点：体验好；用户使用起来很流畅；非常适合做游戏【性能高】；可以直接调用硬件底层的API；
  - 缺点：不能跨平台

+ HybirdApp：利用前端所学的知识去开发移动端App，兼具2者的优势
  - 优点：能够跨平台；体验会好一些；也能够调用硬件底层的API
  -  缺点：相对于原生体验稍微弱一丢丢；不适合做游戏；适合做非游戏类型的手机App；

- 应用场景：
  - 注意： 使用 Java 或者 IOS 写出来的代码和程序，在最终运行的时候，普通的文本代码，都会被编译为 原生的机器码去运行，并不像 JS 这样，解析执行，Java代码是 编译执行的；

2. 三种开发方式的原理和对比

   ![image-20201211144352399](/Users/apple/Library/Application Support/typora-user-images/image-20201211144352399.png)

   



![image-20201211144305792](/Users/apple/Library/Application Support/typora-user-images/image-20201211144305792.png)

3. [谁在使用React Native？？？](https://facebook.github.io/react-native/showcase.html)



## 3. 企业如何选择合适自己的App开发方式

1. 如果这个企业中，曾经使用原生技术开发过一些APP，那么在维护的时候，必然需要使用原生技术来维护

2. 如果企业中，需要做一些游戏级别的应用，那么推荐使用原生，因为原生运行效率高，对耗电量处理的很好；

3. 如果企业做一些应用级别的非游戏软件，比如 淘宝、京东、美团，就可以使用 混合APP了；

4. 在企业中，最主要的是好的点子，如果有了一个好的项目立案，那么最好要立即把这个项目做出来；这时候，使用混合App非常合适，因为开发周期很短，能快速上线，抢先占领市场；【裤衩开发】





## 4. 企业中项目开发流程

+ 需求调研：产品定位、受众群体、市场需求、开发价值；【产出物：需求文档】

+ 产品设计：功能模块、流程逻辑；【产出物：设计文档，交互稿】，确定项目的基本功能；

+ 项目开发：项目架构、美工、前端、后台、测试【产品的把控】***\*要理解前后端分离的概念\****

+ 运营维护：上线试运行、调Bug、微调功能模块、产品迭代

> 根据需求搞设计，根据设计做开发



## 5. 企业技术选型 - 几大主流技术之间的关系

1. Angular.js 和 Ionic

+ [Angular1官网](https://angularjs.org/)

+ [Angular2官网](https://angular.io/)

+ [Ionic 中文网](http://www.ionic.wang/)

+ [Ionic 英文官网](http://ionicframework.com/getting-started/)

2. Vue.js 和 Weex

+ [Vue.js官网](https://cn.vuejs.org/)

+ [Weex文档](http://weex.apache.org/cn/references/index.html)

+ [Weex - github地址 - 新](https://github.com/apache/incubator-weex)

+ [Weex - github地址 - 旧](https://github.com/alibaba/weex)

3. React.js 和 React-Native

+ [React.js英文官网](https://facebook.github.io/react/)

+ [ReactNative中文网](http://reactnative.cn/)

+ [ReactNative英文网](http://facebook.github.io/react-native/)



> Angular, Vue, React 这三个都是 前端框架，我们在进行混合App开发的时候，只是用到了这三个框架的【基础语法】而已；

> Ionic， Weex， ReactNatvie 这三个都是 打包工具（提供了相关的命令行，只要运行指定的命令，就能够把项目打包成一个手机App出来），能够把我们开发出来的应用，最终打包成一个可安装的手机端程序安装包；同时，这三个东西，也提供了好用的一些小组件，方便我们去构建移动App的用户界面；



## 6. 前端混合App开发框架

1. Html5+、ReactNative、Weex、Ionic

2. [认识HTML5+](http://www.html5plus.org/#home)

+ h5+是一个产业联盟，它有一些互联网成员，专门在中国推广H5

3. [HBuilder官网](http://www.dcloud.io/)



## 7. 开发框架之间的区别

1. Html5+ 和 Ionic

2. ReactNative 和 Weex



## 8. 使用HBuilder生成安卓应用（在线）

[API地址](http://www.html5plus.org/doc/zh_cn/webview.html)

Hbuilder这个工具，是一个在线打包工具，使用很方便，不需要在本地配置开发环境；直接将做好的网站，通过一些简单的操作，就能在线打包为一个App出来；

+ 在项目上右键 -> 发行 -> 发行为原生安装包

好处：本地不用配置开发环境；操作方便，对于程序员来说不关心打包的过程，打包过程对于我们来说是透明的；

缺点：程序员很少能干预打包的过程；源代码被提交到了云端的服务器，存在项目核心代码被泄露的风险；



## 9. 环境变量的使用

作用：将需要全局使用的工具或者应用程序，配置到Path环境变量中，可以很方便的通过命令行的形式，在任何想要运行这些应用程序的地方，运行它们；





## 10. 移动App开发环境配置【重点】

### 10.1 安装最新版本的java jdk

1. 修改环境变量，新增`JAVA_HOME`的系统环境变量，值为`C:\Program Files (x86)\Java\jdk1.8.0_112`，也就是安装JDK的根目录

2. 修改系统环境变量`Path`，在`Path`之后新增`%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;`

3. 新建***\*系统环境变量\****`CLASSPATH`，值为`.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;`

4. 保存所有的系统环境变量，同时退出系统环境变量配置窗口，然后运行cmd命令行工具，输入`javac`，如果能出现javac的命令选项，就表示配置成功！



### 10.1 安装Node.js环境

注意：需要安装最新的长期稳定版本，不要实验版本；安装完毕之后的node.js会自动配置到全局系统环境变量中

安装完毕后，可以输入`node -v`查看node版本号；



### 10.2 安装C++环境

大多数情况下操作系统自带C\++环境，不需要手动安装C\++环境；

如果运行报错，则需要手动安装visual studio中的C\++环境；



### 10.3 安装Git环境

Git安装完毕后，会自动配置到系统环境变量中；

可以通过运行`git --version`来检查是否正确安装和配置了Git的环境变量；



### 10.4 安装Python环境

1. 注意：安装Python时候，只能**安装2.×的版本**，注意勾选安装界面上的`Add Python to path`，这样才能自动将Python安装到系统环境变量中；

2. 安装完毕之后，可以在命令行中运行`python`，检查是否成功安装了python。



### 10.5 配置安卓环境

1. 安装`installer_r24.3.4-windows.exe`，最好手动选择安装到C盘下的android目录

2. 打开安装的目录，将`android-25`、`android-23`(react-native必须依赖这个)解压后，放到`platforms`文件夹下

3. 解压`platform-tools`，放到`platform-tools`文件夹下

4. 【这一步直接忽略即可！】***\*tools文件夹不解压覆盖也行；\****~~解压`tools`，放到安装根目录中~~

5. 解压`build-tools_r23.0.1-windows.zip(react-native必须依赖这个)`、`build-tools_r23.0.2-windows.zip(weex必须依赖这个)`和`build-tools_r23.0.3-windows.zip`，并将解压出来的文件夹，分别改名为版本号`23.0.1`、`23.0.2`和`23.0.3`；在安装目录中新建文件夹`build-tools`，并将改名为版本号之后的文件夹，放到新创建出来的`build-tools`文件夹下

6. 在安装目录中，新建`extras`文件夹，在`extras`文件夹下新建`android`文件夹；解压`m2responsitory`文件夹和`support`文件夹，放到新建的`extras -> android`文件夹下

7. 配置安装环境变量：在系统环境变量中新建`ANDROID_HOME`，值为android SDK Manager的安装路径`C:\Users\liulongbin\AppData\Local\Android\android-sdk`，紧接着，在Path中新增`;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools;`



## 11. [ReactNative快速打包](http://reactnative.cn/docs/0.42/getting-started.html)

1. 安装完node后建议***\*设置npm镜像\****以加速后面的过程（或使用科学上网工具）。注意：***\*不要使用cnpm！\****cnpm安装的模块路径比较奇怪，packager不能正常识别！

> npm config set registry https://registry.npm.taobao.org --global<br/>

> npm config set disturl https://npm.taobao.org/dist --global



2. Yarn、React Native的命令行工具（react-native-cli）

+ Yarn是Facebook提供的替代npm的工具，可以加速node模块的下载。React Native的命令行工具用于执行创建、初始化、更新项目、运行打包服务（packager）等任务。

> npm install -g yarn react-native-cli

+ 安装完yarn后同理也要设置镜像源：

> yarn config set registry https://registry.npm.taobao.org --global<br/>

> yarn config set disturl https://npm.taobao.org/dist --global

3. 运行`react-native init AwesomeProject`创建React-Native项目

4. 运行`cd AwesomeProject`切换到项目根目录中，运行`adb devices`来确保有设备连接到了电脑上

5. 运行`react-native run-android`打包编译安卓项目，并部署到模拟器或开发机中

6. 运行上一条命令之前，要确保有设备连接到了电脑上，可以运行`adb devices`查看当前接入的设备列表，打包好的文件，放到了`android\app\build\outputs\apk`目录下

7. [入坑指南](http://www.open-open.com/lib/view/open1477469117948.html)

> ***\*问题1：开启悬浮框权限；\****<br/>

> ***\*问题2：Could not get BatchedBridge, make sure your bundle is packaged correctly\****<br/>

> 解决方案：在终端中，进入到项目的根目录，执行下面这段命令行：<br/>

> `react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/`<br/>

> 运行之前，需要确保`android/app/src/main/`目录下有`assets`文件夹，如果没有，手动创建之~，再运行上面的命令；<br/>

> ***\*问题3：could not connect to development server\****<br/>

> 解决方案：晃动手机，唤起设置属性窗口，点击“Dev settings”，再点击Debuug server host 出现设置ip地址窗口，填写Ip地址和端口号8081，例如`192.168.1.111:8081`





**## [Weex快速打包](http://weex.apache.org/cn/guide/tools/toolkit.html)**

\1. 安装依赖:Weex 官方提供了 weex-toolkit 的脚手架工具来辅助开发和调试。首先，你需要最新稳定版的 Node.js 和 Weex CLi。

\2. 运行`npm install -g weex-toolkit`安装Weex 官方提供的 `weex-toolkit` 脚手架工具到全局环境中

\3. 运行`weex create project-name`初始化Weex项目

\4. 进入到项目的根目录中，打开cmd窗口，运行`weex platform add android`安装android模板，首次安装模板时，等待时间较长，建议fq安装模板

\5. 打开`android studio`中的`安卓模拟器`，或者将`启用USB调试的真机`连接到电脑上，运行`weex run android`，打包部署weex项目

\6. 部署完成，查看项目效果





## 13.  总结重点

1. 什么是前端移动App开发

2. 市面上常见的App开发方式及优缺点

3. 使用Hbuilder在线生成安卓应用

4. 学会配置ReactNative开发环境

5. 掌握ReactNative打包流程