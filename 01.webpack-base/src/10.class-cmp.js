// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'

// 需要配置才能省去 .jsx 后缀名
// import '@/09.class-extends-methods'


// class 关键字创建组件
class Movie extends React.Component {
  constructor () {
    super()
    // this.state：子类组件私有属性数据，相当于 vue 中的 data () { return {} }
    // 可读可写
    this.state = {
      msg: '我是Movie组件的私有属性数据msg'
    } 
  }


  // this.props.name = 'neymar'  报错：只读

  // render 作用：渲染当前组件对应的虚拟 DOM 元素
  // render 属于 Movie 的实例方法
  render () {
    this.state.msg = 'msg被修改'

    // 如果想使用外界传来的 props 参数，不需接收，直接 this.props.** 访问
    return <div>
      {/* 注意：在 class 组件内部，this 表示当前组件的实例对象 */}
      这是一个 class 组件 - Movie - {this.props.name} - {this.props.age}
      <h3>{this.state.msg}</h3>
    </div>
  }
}

const mySpider = {
  name: 'lokit',
  age: 20,
  gender: 'man'
}


// 3. 调用 render 函数渲染
ReactDOM.render(<div>
  {/* 这里的 Movie 标签，其实就是 Movie 类的一个实例对象 */}
  <Movie {...mySpider}></Movie>
  <hr/>
  <Movie></Movie>
</div>, document.getElementById('app'))