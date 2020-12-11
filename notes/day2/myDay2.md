### 目录

1. 演示 vue 和 react 中 key 的作用
2. 关于 jsx 语法的注意事项
3. 创建组件的第一种方式并为组件传递 props 数据
4. 使用 ES6 的展开运算符简化传递 props 数据的过程
5. 将组件抽离为单独的 .jsx 文件
6. 配置 webpack 从而在导入组件的时候，省略 .jsx 后缀
7. 配置 webpack 设置根目录
8. class - 创建类并通过 constructor 挂载实例属性
9. class - 使用 static 创建静态属性
10. clss - 实例方法和静态方法
11. class - 总结 class 的基本用法和两个注意点
12. class - 使用 extends 实现子类继承父类
13. class - 子类访问父类上的实例方法
14. class - constructor 构造器中 super 函数的使用说明
15. class - 为子类挂载独有的实例属性和实例方法
16. 使用 class 关键字创建组件
17. 为 class 创建的组件传递 props 参数并直接使用 this.props 来访问
18. 介绍 class 创建的组件中 this.state
19. 介绍有状态和无状态组件的区别
20. 评论列表案例 - 创建 CmtList 组件并渲染基本页面结构
21. 评论列表案例 - 将评论 item 项抽离为 cmtItem 组件
22. 评论列表案例 - 将评论列表组件和评论项抽离为单独组件
23. 评论列表案例 - 演示@替代相对路径的好处



### 9. React 中创建组件

#### 第1种 - 创建组件的方式

> 使用构造函数来创建组件，如果要接收外界传递的数据，需要在构造函数的参数列表中使用 ```props``` 来接收；必须要向外 return 一个合法的 jsx 创建的虚拟 DOM 

- 创建组件：

  ```jsx
  function Hello () {
    return <div>Hello 组件</div>
  }
  ```

- 为组件传递数据：

  ```jsx
  // 使用组件为组件传递 props 数据
  <Hello name={mySpider.name} gender={mySpider.gender}></Hello>
  
  // 在构造函数中，使用 props 形参接收外界传递过来的数据
  function Hello (props) {
    return <div>{props.name} -- {props.gender}</div>
  }
  ```

  

1. 父组件向子组件传递数据

2. 使用 {...obj} 属性扩散传递数据

3. 将组件封装到单独的文件中

4. 注意：组件的名称首字母必须是大写

5. 如何省略 ```.jsx``` 后缀名：

   ```js
   // webpack.config.js
   resolve: {
     extensions: ['.js', '.jsx', '.json']
   }
   ```

   

#### 第2种 - 创建组件的方式

> 使用 class 关键字来创建组件的静态属性和静态方法在 ```construtor ```中：

![image-20201126132000102](/Users/apple/Library/Application Support/typora-user-images/image-20201126132000102.png)

#### 了解 ES6 中 class 关键字的使用

1. 最基本的组件结构：

   ```javascript
   // 如果要使用 class 定义组件，必须让自己的组件继承自 React.Component
   class 组件名称 extends React.Component {
     // 在组件内部必须有 render 函数用于渲染对应虚拟 DOM
     render () {
       // render 函数中必须返回合法的 jsx 虚拟 DOM 结构
       return <div>这是class创建的组件</div>
     }
   }
   ```

2. 两种**创建组件**的方式对比：

   > 注意：使用 class 关键字创建的组件，有自己的私有数据```this.state```和生命周期函数
   >
   > 注意：使用 function 构造函数创建的组件，只有 props，没有自己的私有数据和生命周期

   - 用**构造函数**创建出来的组件：“无状态组件”【不常用】

   - 用**class 关键字**创建出来的组件：“有状态组件”【常用】

   - 什么情况下使用有状态组件？什么情况下使用无状态组件？

     - 如果一个组件需要有自己的私有数据，则推荐使用 class 创建的有状态组件
     - 如果一个组件不需要有私有数据，则推荐使用无状态组件
     - React 官方文档：无状态组件，由于没有自己的 state 和生命周期函数，所以运行效率会比有状态组件稍高

     > 有状态组件和无状态组件之间的本质区别：有无 state 属性和生命周期函数

   - 组件中的 ```props``` 和 ```state/data``` 之间的区别：

     - props 中的数据都是外界传递过来的；
     - state/data 中的数据，都是组件私有的；（通过 ajax 获取回来的数据，一般都是私有数据）
     - props 中的数据都是只读的，不能重新赋值；
     - state/data 中的数据都是可读可写的；

3. 渲染评论列表

   - 通过 for 循环生成多个组件

     - 数据

       ```js
       commentList: [
         {id:1, user:'lokit', content:'嘻嘻'},
         {id:2, user:'neymar', content:'嘿嘿'},
         {id:3, user:'liangzai', content:'哈哈'},
         {id:4, user:'yico', content:'呵呵'},
         {id:5, user:'kathy', content:'哦哦'}
       ]
       ```

       

