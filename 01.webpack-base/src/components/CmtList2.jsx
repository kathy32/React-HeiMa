import React from 'react'

// 导入列表组件需要的样式表
// 直接导入 css 样式表，默认是在全局上，整个项目都生效的
// vue 中样式冲突解决：<style scoped></style>
import cmtListCss from '@/css/cmtList.css'
console.log(cmtListCss) // {title: "fB5dQcJ7uahG67KLqVHou"} 是一个对象变量

import CmtItem from '@/components/CmtItem2'


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
      <h1 className={cmtListCss.title}>这是评论列表组件</h1>

      {this.state.commentList.map(item => 
        <CmtItem {...item} key={item.id}></CmtItem>)}
    </div>
  }
}
