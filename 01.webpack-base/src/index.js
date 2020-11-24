// console.log('ok～')


// 1. 这两个导入时候，接收的成员名称，必须这么写
import React from 'react' // 创建组件、虚拟DOM元素、生命周期
import ReactDOM from 'react-dom'  // 把创建好的组件和虚拟DOM放到页面上展示


// 2. 使用 React 创建虚拟 DOM 元素（js对象）
// 参数1: 创建的元素类型，字符串，表示元素的名称
// 参数2: 是一个对象或 null，表示当前这个 DOM 元素的属性
// 参数3: 子节点（包括其他虚拟 DOM 或文本子节点）
// 参数n： 其他子节点
// <h1 id='myh1' title='this is h1'>yicochen~</h1>
const myh1 = React.createElement('h1', {id:'myh1', title:'this is h1'}, 'yicochen~')
const mydiv = React.createElement('div', null, '嵌套父组件', myh1)

// 3. 使用 ReactDOM 把虚拟 DOM 渲染 到页面上
// 参数1: 要渲染的那个虚拟 DOM 元素
// 参数2： 指定页面上一个容器(是一个 DOM 元素而不是选择器)
ReactDOM.render(mydiv, document.getElementById('app'))