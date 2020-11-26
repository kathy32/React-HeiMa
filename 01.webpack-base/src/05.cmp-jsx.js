// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'

// 需要配置才能省去 .jsx 后缀名
import Hello from '@/components/Hello'


const mySpider = {
  name: 'lokit',
  age: 20,
  gender: 'man'
}

// 3. 调用 render 函数渲染
ReactDOM.render(<div>
  123
  <Hello {...mySpider}></Hello>
</div>, document.getElementById('app'))