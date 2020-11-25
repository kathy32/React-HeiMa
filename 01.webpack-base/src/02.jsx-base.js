// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'


// 2. 创建虚拟 DOM 元素
// 什么是虚拟 DOM？ 用 js 对象的形式来表示 DOM 和 DOM 之间的嵌套关系
// const mydiv = React.createElement('div', {id:'mydiv', title:'divbox'}, 'div元素')


// HTML 是最优秀的标记语言
// 注意1：在 js 文件中，默认不能写这种类似 HTML 的标记；否则打包失败
// 可以使用 babel 来转换这些 js 中的标签
// 注意2: 这种 js 中，混合写入类似于 HTML 的语法叫做 JSX 语法，符合 XML 规范的 JS
// 注意3: JSX 语法本质是在运行的时候，被转换成 React.creatElement 形式来执行的
const mydiv1 = <div id='mydiv1' title='divbox1'>
  div HTML 元素标记
  <h1>标题h1</h1>
  </div>


// 3. 调用 render 函数渲染
ReactDOM.render(mydiv1, document.getElementById('app'))