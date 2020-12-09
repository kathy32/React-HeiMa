import React from 'react'


export default class BindEvent extends React.Component {
  constructor () {
    super()
    // 私有数据
    this.state = {
      msg: '哈哈哈'
    }
  }

  render () {
    return <div>
      BindEvent 组件事件
      <hr/>
      {/* 在 react 中，有一套自己的事件绑定机制：事件名是小驼峰命名 */}
      <button onClick={ () => this.myClickHandler('lokit') }>按钮</button>
      <h1>{this.state.msg}</h1>
    </div>
  }

  // 实例方法
  myClickHandler = (arg1) => {
    console.log('ok - ' + arg1)

    // 修改状态值推荐使用 this.setState() 而不是 this.state.msg 赋值（单向数据绑定）
    this.setState({
      msg: 'hahaha~' + arg1
    })
  }
}