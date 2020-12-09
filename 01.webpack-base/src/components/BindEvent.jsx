import React from 'react'


export default class BindEvent extends React.Component {
  constructor () {
    super()
    // 私有数据
    this.state = {}
  }

  render () {
    return <div>
      BindEvent 组件事件
      <hr/>
      {/* 在 react 中，有一套自己的事件绑定机制：事件名是小驼峰命名 */}
      <button onClick={ () => { this.myClickHandler() }}>按钮</button>
    </div>
  }

  // 实例方法
  myClickHandler = () => {
    console.log('ok')
  }
}