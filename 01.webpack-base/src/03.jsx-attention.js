// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'


let num = 2
let str = 'yico'
let bool = true

let myTitle = 'neymar'
const myh1 = <h1>h1标签变量</h1>

const arrH = [
  <h2>数组中的h2</h2>,
  <h3>数组中的h3</h3>
]
const arrName = ['yico', 'neymar', 'lokit']
const resName = []
// 注意： react 中，需要把 key 添加给被 forEach 或 map 或 for 循环直接控最外层循环的元素
arrName.forEach(item => {
  const temp = <h4 key={item}>forEach中的 {item}</h4>
  resName.push(temp)
})



// 3. 调用 render 函数渲染
// 什么情况使用{}呢？当我们需要在 JSX 控制的区域内，写 js 表达式，则需要把 js 代码写入 {}
// 只有一行开始为 [(+-1)] 时需要在上一行家 ;
ReactDOM.render(<div>
  {num}
  <hr/>
  {str}
  <hr/>
  {bool ? 'true love' : 'fake love'}
  <hr/>

  <p title={myTitle}>p标签</p>
  <hr/>
  {myh1}
  <hr/>

  {arrH}
  <hr/>
  {resName}
  <hr/>
  {arrName.map(item => <div key={item}><h3>map中的 {item}</h3></div>)}
  <hr/>

  <p className='myp'>className</p>
  <label htmlFor='oo'>htmlFor</label>

</div>, document.getElementById('app'))