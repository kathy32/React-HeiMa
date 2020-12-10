import React from 'react'


export default class BindInputValue extends React.Component {
  constructor () {
    super()
    this.state = {
      msg: '哈哈哈',
      name: 'yico'
    }
  }

  render () {
    return <div>
      <button onClick={ () => this.show() }>按钮</button>
      <h1>{this.state.msg}</h1>

      {/* 1. 如果只是把文本框的 value 属性绑定到 state 状态但是不提供 onChange 处理函数，得到的文本框会是一个只读的文本框
      2. 当为文本框绑定 value 值以后，要么同时提供一个 readOnly，要么提供 onChange 处理函数*/}
      <input type="text" value={this.state.msg} onChange={(e) => this.txtChange(e)} ref='txt'/>
    </div>
  }

  show = () => {
    this.setState({
      msg: 'hahaha'
    })
  }

  txtChange = (e) => {
    // 在 onChange 事件中，获取文本框的值，有两种方案：

    // 方案1: 通过事件参数 e 来获取
    console.log(e.target.value)

    // 方案2: 通过 this.refs.引用名称
    console.log(this.refs.txt.value) 

    const newVal = e.target.value
    this.setState({
      msg: newVal
    })
  }
}