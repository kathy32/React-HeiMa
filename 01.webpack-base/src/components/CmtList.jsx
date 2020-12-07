import React from 'react'

import CmtItem from '@/components/CmtItem'


// 使用 class 关键字，定义父组件
export default class CmtList extends React.Component {
  constructor () {
    super()
    this.state = {
      commentList: [
        {id:1, user:'lokit', content:'嘻嘻'},
        {id:2, user:'neymar', content:'嘿嘿'},
        {id:3, user:'liangzai', content:'哈哈'},
        {id:4, user:'yico', content:'呵呵'},
        {id:5, user:'kathy', content:'哦哦'}
      ]
    }
  }

  render () {
    return <div>
      {/* 注意：在 jsx 中，如果想写行内样式，不能为 style 设置字符串的值 */}
      {/* 应该是： style = {{ color: 'red' }} */}
      {/* 在行内样式中，如果是数值类型样式，则可以不使用引号，如果是字符串，必须使用引号包裹 */}
      <h1 style={{color:'red', fontSize:'35px'}}>这是评论列表组件</h1>

      {this.state.commentList.map(item => 
        <CmtItem {...item} key={item.id}></CmtItem>)}
    </div>
  }
}
