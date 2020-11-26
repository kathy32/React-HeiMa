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
      {this.state.commentList.map(item => 
        <CmtItem {...item} key={item.id}></CmtItem>)}
    </div>
  }
}
