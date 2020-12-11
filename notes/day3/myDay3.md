#### 目录

1. 在组件中使用 style 行内样式并封装
2. 使用 css 样式表美化组件
3. 演示 react 中使用普通 css 样式表的
4. 为普通样式表通过 modules 参数启用
5. 使用``` localIdentName``` 来自定义模块化
6. 通过 local 和 global 设置类名是否被模块
7. 在项目中为 scss 或 less 文件启用模块化
8. 在 react 中为按钮绑定点击事件
9. 使用 this.setState 修改 state 上的数据
10. this.setState 的两个注意点
11. react 中绑定文本框与 state 中的值
12. 拓展 - vue 中实例的生命周期
13. 快速梳理 react 的组件生命周期函数图



### 内容

1. 在组件中使用 style 行内样式并封装

2. 使用 css 样式表美化组件

3. 演示 react 中使用普通 css 样式表的

4. 为普通样式表通过 modules 参数启用

   - ``` cnpm install style-loader css-loader ```

   - ```javascript
     // webpack.config.js
     
     module: { // 所有第三方模块的配置规则
         rules: [  // 第三方匹配规则
           { test:/\.css$/, use:['style-loader', 'css-loader?modules']}, 
           // 打包处理 css 样式表的第三方 loader，追加参数 ?modules 表示 css 样式表启用模块化
         ]
       },
     ```

   - ```jsx
     // CmtItem2.jsx
     
     import React from 'react'
     import cmtItemCss from '@/css/cmtItem.css'
     
     export default function CmtItem (props) {
       return <div className={cmtItemCss.cmtBox}>
         <h2 className={cmtItemCss.user}>评论人：{props.user}</h2>
         <p className={cmtItemCss.content}>评论内容：{props.content}</p>
       </div>
     }
     ```

   - ```css
     /* cmtItem.css */
     
     .user {
       font-size: 14px;
     }
     
     .content {
       font-size: 12px;
     }
     
     .cmtBox {
       border: 1px dashed #ccc;
       margin: 10px;
       padding: 10px;
       box-shadow: 0 0 10px #ccc;
     }
     ```

   - ![image-20201207203859983](/Users/apple/Library/Application Support/typora-user-images/image-20201207203859983.png)

5. 使用 ```localIdentName``` 来自定义模块化

   - [path] 表示样式表 ```相对项目根目录``` 所在路径

   - [name] 表示样式表文件名称

   - [local] 表示样式的类名定义名称

   - [hash: length] 表示 32 位的 hash 值

   - 老版本例子：```{test:/\.css$/, use:['style-loader','css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]']}```

   - 报错原因：版本升级了

     ```javascript
     { test:/\.css$/, 
       use:[{loader:'style-loader'}, 
            {loader:'css-loader?modules',
             options:{modules:{localIdentName:'[path][name]__[local]--[hash:base64:5]'}}
            }] 
     }
     // 注意：options 和 css-loader 平级
     ```

     ```console.log(cmtListCss)```得到```title: "src-css-cmtList__title--fB5dQ"```

6. 通过 ```:local()``` 和 ```:global``` 设置类名是否被模块

   - ```:local()``` 包裹的类名，是被模块化的类名，只能通过```className={cssObj.类名}```来使用

     同时，```:local``` 默认可以不写，这样默认在样式表中定义的类名，都是被模块化的类名；

   - ```:global()``` 包裹的类名，是全局生效的，不会被 ```css-modules``` 控制，定义的类名是什么，就是使用定义的类名 ```className="类名"```

   - 注意：只有 ```.title``` 这样的类样式选择器，才会被模块化控制，类似于 ```body``` 这样的标签选择器，不会被模块化控制。

   - 例子：

     ```css
     /* 注意：被 :global() 包裹起来的类名，不会被模块化，而是会全局生效 */
     :global(.test){
       font-style: italic;
     }
     ```

     ```html
     <h1 className={[cmtListCss.title, 'test'].join(' ')}>这是评论列表组件</h1>
     
     /* 得到 */
     
     <h1 class="src-css-cmtList__title--fB5dQ test">这是评论列表组件</h1>
     ```

     

7. 在项目中为 scss 或 less 文件启用模块化

   - ``` cnpm install bootstrap@3.3.7 -S```

   - ```cnpm install url-loader -D ```

   - ```cnpm install file-loader -D ```

   - ```javascript
     // webpack.config.js
     { test:/\.ttf|woff|woff2|eot|svg$/, use:'url-loader'}, // 打包处理字体文件的 loader
     ```

   - 在项目中启用模块化并同时使用 bootstrap

     - 把自己的样式表，定义为 ```.scss``` 结尾

     - 把第三方的样式表，还是以```.css``` 结尾

     - 我们只需要为自己的 ```.scss``` 文件，启用模块化即可

     - 运行 ```cnpm install sass-loader node-sass -D``` 安装能够解析 ```scss``` 文件的 loader

     - 运行 ``` cnpm install sass@^1.3.0 -D```

     - 运行 ```cnpm install fibers@>= 3.1.0 -D```

     - 配置 ``` webpack.config.js```

       ```javascript
       module: { 
           rules: [ 
             { test:/\.css$/, use:[{loader:'style-loader'}, {loader:'css-loader'}] }, 
             { test:/\.ttf|woff|woff2|eot|svg$/, use:'url-loader'}, 
             
             // 将 css 模块化放到 sass 中
             { test:/\.scss$/, 
               use:[{loader:'style-loader'},
                    {
                      loader:'css-loader?modules',
                      options:{modules:{localIdentName:'[path][name]__[local]--[hash:base64:5]'}}
                    },
                    {loader:'sass-loader'}
                   ]
             },
           ]
         },
       ```

     - ```CmtList2.jsx```

       ```jsx
       // 如果在引用某个包的时候，这个包被安装到了 node_modules 目录中
       import 'bootstrap/dist/css/bootstrap.css'
       
       render () {
           return <div>
             <button className='btn btn-primary'>按钮</button>
           </div>
         }
       ```

     - ![image-20201209143622947](/Users/apple/Library/Application Support/typora-user-images/image-20201209143622947.png)

8. 在 react 中为按钮绑定点击事件

   - 事件的名称都是 react 提供的，因此名称的首字母必须大写 ```onClick```, ```onMouseOver```

   - 为事件提供的处理函数，必须是如下格式

     ```
     onClick = { function }
     ```

   - 用得最多的事件绑定形式为：

     ```jsx
     <button onClick={ () => this.show('传参') }></button>
     
     // 事件的处理函数，需要定义为一个箭头函数，然后赋值给函数名称
     show = (arg1) => {
       console.log('show 方法' + arg1)
     }
     ```

   - 在 react 中，如果想要修改 state 中的数据，推荐使用 ```this.setState( {} )```

   - 

9. 使用 this.setState 修改 state 上的数据

10. this.setState 的两个注意点

11. react 中绑定文本框与 state 中的值（单向数据流）

    - 在 vue 中，默认提供了 ```v-model```指令，可以方便实现数据的双向绑定

    - 但是 react 中，默认是单向数据流，

      - 就是只能把 state 上的数据绑定到 页面，
      - 无法把 页面 中数据变化自动同步到 state，如果需要把页面数据变化保存到 state 中，则需要程序员手动监听```onChange```事件，拿到最新的数据，手动调用 ```this.setState( {} )```进行更改

    - 案例：

      ```jsx
      <input type="text" value={this.state.msg} onChange={() => this.txtChange() }></input>
      
      txtChange = () => {
        this.setState({
          msg: this.refs.mytxt.value
        })
      }
      ```

    - 使用 ref 获取 DOM 元素引用

      和 vue 差不多，vue 为页面上的元素提供了 ```ref``` 的属性，如果想要获取元素引用，则需要使用 ```this.$refs.引用名称```

      在 react 中，也有 ```ref``` ，如果要获取元素的引用 ```this.refs.引用名称```

12. 拓展 - vue 中实例的生命周期

    - ```new Vue()``` ：这是 new 了一个 Vue 实例对象，此时就会进入组件的创建过程
    - ```Init Events & Lifecycle```：初始化组件的事件和生命周期函数，当执行完这一步之后，组件的生命周期函数就全部初始化好了，等待着依次去调用
    - ```beforeCreate```：这是第一个生命周期函数，此时组件的 data 和 methods 以及页面 DOM 结构都还没有初始化，所以此阶段什么都做不了
    - ```Init injections & reactivity```：这个阶段中，正在初始化 data 和 methods 中的数据及方法
    - ```created```：这是组件创建阶段的第二个生命周期函数，此时，组件的 data 和 methods 已经可用了，但是页面还没有渲染出来
      - 在这个生命周期函数中，我们经常发起 Ajax 请求
    - ```Has 'el' option?``` 
      - ```No``` ->  ```when vm.$mount(el) is called``` 
      - ```Yes``` -> ```Has 'template' option?``` 
        - ```Yes``` -> ```Compile template into render function *```
        - ```No``` -> ``` Compile el's outerHTML as template *```
      - 这部分正在编译模版结构，把 data 上的数据拿到，并解析执行模版结构中的指令，当所有指令被解析完毕，那么模版页面就会被渲染到**内存中**。
      - 当模版编译完成，我们的模版页面还没有挂载到页面上，只是存在于内存中，用户看不到页面。
    - ```beforeMount```：当模版在内存中编译完成，会立即执行实例创建阶段的第三个生命周期函数。此时，内存中的模版结构还没有真正渲染到页面上，此时页面看不到真实的数据。此时，用户看到的只是一个模版页面而已。
    - ```Create vm $el and replace 'el' with it```：这一步，正在把内存中渲染好的模版结构，替换到页面上
    - ```mounted```：这个是组件创建的最后一个生命周期函数。此时，页面已经真正地渲染好了，用户已经可以看到真实的页面数据了，当这个生命周期函数执行完，组件就离开了创建阶段，进入运行中的阶段。
      - 如果用到了第三方的 UI 组件，而且这个组件还需要被初始化，那么，必须在 mounted 中来初始化组件。
    - ```when data changes``` 组件运行中的生命周期函数，组件运行中的生命周期函数，会根据 data 数据的变化，有选择性地触发 0 次或 N 次。
    - ```beforeUpdate```：当执行 beforeUpdate 运行中生命周期函数的时候，数据肯定是最新的，但是页面上的数据还是旧的。
    - ```Virtual DOM re-render and patch```：正在根据最新的 data 数据，重新渲染内存中的模版结构，并把渲染好的模版结构，替换到页面上。
    - ```updated```： 页面已经完成了更新，此时，data 数据是最新的，同时，页面上呈现的数据也是最新的。
    - ```beforeDestory```：注意：当执行 beforeDestory 的时候，组件即将被销毁，但是还没有真正被销毁。此时，组件还是正常可用的，data，methods 等数据或方法，依然可以正常被访问。
    - ```Teardown watchers, child components and event listeners``` 销毁过程
    - ```destoryed```：组件已经完成了销毁，此时，组件的 data 和 methods 都不可以用了。

13. 快速梳理 react 的组件生命周期函数图

    - 生命周期的概念：每个组件的实例，从创建、到运行、直到销毁，在这个过程中，会触发一系列事件，这些事件就叫做组件的生命周期函数

    - react 组件生命周期分为三部分：

      - 组件创建阶段：特点：一辈子只执行一次

        > componentWillMount
        >
        > render
        >
        > componentDidMount

      - 组件运行阶段：按需，根据 props 属性或 state 状态的改变，有选择地执行 0 到多次

        > componentWillReceiveProps
        >
        > shouldComponentUpdate
        >
        > componentWillUpdate
        >
        > render
        >
        > componentDidUpdate

    - 组件销毁阶段：一辈子只执行一次

      >componentWillUnmount