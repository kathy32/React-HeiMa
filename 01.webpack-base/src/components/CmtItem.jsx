import React from 'react'


// 使用 function 构造函数，定义普通的无状态组件
// 注意：组件名必须为首字母大写！因为小写会被解析为 html 自带标签，从而报错
// 全选 props 快捷键: command + d
export default function CmtItem (props) {
  return <div>
    <h2>评论人：{props.user}</h2>
    <p>评论内容：{props.content}</p>
  </div>
}