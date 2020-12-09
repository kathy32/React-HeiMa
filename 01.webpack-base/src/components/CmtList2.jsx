import React from 'react'

// 导入列表组件需要的样式表
// 直接导入 css 样式表，默认是在全局上，整个项目都生效的
// vue 中样式冲突解决：<style scoped></style>
import cmtListCss from '@/css/cmtList.scss'
console.log(cmtListCss) // {title: "fB5dQcJ7uahG67KLqVHou"} 是一个对象变量

// 如果在引用某个包的时候，这个包被安装到了 node_modules 目录中
// 则可以省略 node_modules 这一层目录，直接以包名开始引入自己的模块或样式表
// 自己规定：第三方样式表以 .css 结尾，这样不要为普通的 .css 启用模块
//          自己的样式表以 .scss 或 .less 结尾，只为 .scss 或 .less 文件启用模块化
import 'bootstrap/dist/css/bootstrap.css'

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
      <button className='btn btn-primary'>按钮</button>

      <h1 className={[cmtListCss.title, 'test'].join(' ')}>这是评论列表组件</h1>

      {this.state.commentList.map(item => 
        <CmtItem {...item} key={item.id}></CmtItem>)}
    </div>
  }
}
