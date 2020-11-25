// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'


// 第一种创建组件的方式
function Hello (props) {
  // 如果在一个组件中 return 一个 null，则表示此组件为空，什么都不会渲染
  // return null

  // 在组件中，必须返回一个合法的 jsx 虚拟 DOM 元素

  // props.name = 'yico'
  // 结论：不论是 vue 还是 react，组件中的 props 永远都是只读，不能被重新赋值

  console.log(props)
  return <div>这是Hello组件 -- {props.name} -- {props.age}</div>
}


const mySpider = {
  name: 'lokit',
  age: 20,
  gender: 'man'
}

// 3. 调用 render 函数渲染
ReactDOM.render(<div>
  123
  {/* 直接把组件的名称，以标签的形式，丢到页面上即可 */}
  {/* <Hello name={mySpider.name} age={mySpider.age}></Hello> */}
  <Hello {...mySpider}></Hello>
</div>, document.getElementById('app'))